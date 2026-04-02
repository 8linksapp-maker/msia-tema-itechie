import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
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
    ],
    vite: {
        optimizeDeps: {
            include: ['marked'],
        },
    },
});
// Trigger reload
