import { readData } from './readData';

/**
 * Busca os dados completos de um autor pelo seu ID.
 * Se não encontrar, retorna um objeto padrão com o ID como nome.
 */
export function getAuthor(authorId: string) {
    const authors = readData('authors.json', []);
    if (!Array.isArray(authors)) return { name: authorId || 'Admin', avatar: '/itechie-assets/img/team/1.webp' };

    const author = authors.find((a: any) => a.id === authorId);
    return author || { name: authorId || 'Admin', avatar: '/itechie-assets/img/team/1.webp' };
}
