/**
 * Gera um slug limpo e amigável para SEO a partir de um texto.
 * Remove acentos, caracteres especiais e normaliza hífens.
 */
export function slugify(text: string): string {
    if (!text) return "";

    return text
        .toString()
        .normalize('NFD')                   // Decompõe caracteres acentuados (ex: é -> e + ´)
        .replace(/[\u0300-\u036f]/g, '')     // Remove os acentos (diacríticos)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')               // Substitui espaços por hífens
        .replace(/&/g, '-e-')               // Substitui '&' por '-e-' (comum em PT-BR)
        .replace(/[^\w-]+/g, '')            // Remove tudo que não for letra, número ou hífen
        .replace(/--+/g, '-')               // Remove hífens múltiplos
        .replace(/^-+/, '')                 // Remove hífens no início
        .replace(/-+$/, '');                // Remove hífens no final
}
