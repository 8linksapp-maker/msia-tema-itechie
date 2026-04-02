import type { APIRoute } from 'astro';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, email, message, subject = 'Contato Direto' } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Campos obrigatórios faltando' }), { status: 400 });
        }

        const filePath = resolve(process.cwd(), 'src/data/leads.json');

        let leads = [];
        if (existsSync(filePath)) {
            const content = readFileSync(filePath, 'utf-8');
            leads = JSON.parse(content || '[]');
        }

        const newLead = {
            id: Date.now(),
            date: new Date().toISOString(),
            name,
            email,
            message,
            subject,
            status: 'novo'
        };

        leads.unshift(newLead);
        writeFileSync(filePath, JSON.stringify(leads, null, 2));

        return new Response(JSON.stringify({ message: 'Lead salvo com sucesso!' }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ message: err.message }), { status: 500 });
    }
}
