/**
 * api/contact.ts — Endpoint público do formulário de contato
 *
 * POST /api/contact
 * Body: { name, email, message, subject? }
 *
 * - Persiste em src/data/leads.json via GitHub API (filesystem da Vercel é read-only)
 * - Rate limit 10/IP/hora (in-memory; reset em cold start)
 * - Validação de campos obrigatórios + email
 */

import type { APIRoute } from 'astro';
import { readFileFromRepo, writeFileToRepo } from '../../plugins/_server';

export const prerender = false;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
    return true;
}

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

export const POST: APIRoute = async ({ request }) => {
    const json = (data: any, status = 200) =>
        new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

    try {
        const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            request.headers.get('x-real-ip') ||
            'unknown';
        if (!checkRateLimit(ip)) return json({ error: 'Muitas tentativas. Tente novamente mais tarde.' }, 429);

        const body = await request.json().catch(() => null);
        if (!body) return json({ error: 'Body inválido.' }, 400);

        const name = (body.name || '').trim();
        const email = (body.email || '').trim().toLowerCase();
        const message = (body.message || '').trim();
        const subject = (body.subject || 'Contato Direto').trim();

        if (!name || !email || !message) return json({ error: 'Nome, e-mail e mensagem são obrigatórios.' }, 400);
        if (!isValidEmail(email)) return json({ error: 'E-mail inválido.' }, 400);
        if (message.length > 5000) return json({ error: 'Mensagem muito longa (máx 5000 caracteres).' }, 400);

        // Lê leads existentes do repo
        const raw = await readFileFromRepo('src/data/leads.json');
        let leads: any[] = [];
        try {
            leads = raw ? JSON.parse(raw) : [];
            if (!Array.isArray(leads)) leads = [];
        } catch {
            leads = [];
        }

        const newLead = {
            id: Date.now(),
            date: new Date().toISOString(),
            name,
            email,
            message,
            subject,
            status: 'novo',
        };
        leads.unshift(newLead);

        await writeFileToRepo(
            'src/data/leads.json',
            JSON.stringify(leads, null, 2),
            { message: `Contato: novo lead de ${email}` }
        );

        return json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (err: any) {
        console.error('[/api/contact] error:', err?.message);
        return json({ error: 'Erro interno ao processar contato. Tente novamente.' }, 500);
    }
};
