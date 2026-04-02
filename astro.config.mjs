import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    output: 'static',
    adapter: vercel(),
    image: {
        remotePatterns: [
            { protocol: 'https', hostname: '**' },
            { protocol: 'http', hostname: 'localhost' },
            { protocol: 'http', hostname: '127.0.0.1' }
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
