import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

let siteUrl = 'https://example.com';
try {
    const cfg = JSON.parse(readFileSync('src/data/siteConfig.json', 'utf-8'));
    if (cfg.url) siteUrl = cfg.url.replace(/\/$/, '');
} catch {}

export default defineConfig({
    site: siteUrl,
    output: 'static',
    adapter: vercel(),
    image: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'itmaster.8links.com.br' },
            { protocol: 'http', hostname: 'localhost' }
        ],
    },
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        sitemap(),
    ],
    vite: {
        optimizeDeps: {
            include: ['marked'],
        },
    },
});
