/**
 * Resolve o link de um item de servico da home de forma defensiva.
 * Aceita qualquer texto (com acento, maiuscula, espaco, prefixo /servico/) e
 * normaliza para um slug valido existente em servicos.json. Quando nao houver
 * match, faz fallback para /servicos (lista geral) — assim nunca da 404.
 *
 * Tambem respeita links externos (http/https) e rotas internas que nao sejam
 * /servico/ (ex: /contato).
 */
import { slugify } from './slugify';

export function resolveServiceLink(item: { link?: string; slug?: string; title?: string }, validSlugs: Set<string>): string {
    const raw = (item.link || '').trim();

    // 1. Link externo - mantem como esta
    if (/^https?:\/\//i.test(raw)) return raw;

    // 2. Se o link aponta pra outra rota interna (nao /servico/), mantem
    if (raw && raw.startsWith('/') && !raw.toLowerCase().startsWith('/servico/')) return raw;

    // 3. Tenta extrair e normalizar o slug do campo link
    const linkSlug = slugify(raw.replace(/^\/?servico\/?/i, ''));
    if (linkSlug && validSlugs.has(linkSlug)) return `/servico/${linkSlug}`;

    // 4. Fallback pelo campo slug explicito (legado)
    if (item.slug && validSlugs.has(item.slug)) return `/servico/${item.slug}`;

    // 5. Tenta slugify do titulo
    const titleSlug = slugify(item.title || '');
    if (titleSlug && validSlugs.has(titleSlug)) return `/servico/${titleSlug}`;

    // 6. Sem match - vai pra lista geral, evita 404
    return '/servicos';
}
