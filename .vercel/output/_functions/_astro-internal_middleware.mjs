import { d as defineMiddleware, s as sequence } from './chunks/index_BTYbCzlE.mjs';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_SfQPix7q.mjs';
import 'piccolore';
import './chunks/astro/server_CxB56ZJZ.mjs';
import 'clsx';

let redirectsCache = null;
let redirectsCacheAt = 0;
const CACHE_TTL = 6e4;
function getRedirects() {
  const now = Date.now();
  if (redirectsCache && now - redirectsCacheAt < CACHE_TTL) return redirectsCache;
  try {
    const raw = readFileSync(resolve(process.cwd(), "src/data/redirects.json"), "utf-8");
    redirectsCache = JSON.parse(raw);
    redirectsCacheAt = now;
    return redirectsCache;
  } catch {
    redirectsCache = [];
    redirectsCacheAt = now;
    return [];
  }
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/")) {
    const redirects = getRedirects();
    for (const r of redirects) {
      const normFrom = r.from?.replace(/\/+$/, "") || "";
      const normPath = pathname.replace(/\/+$/, "") || "/";
      if (r.enabled && normFrom && r.to && (normFrom === normPath || r.from === pathname)) {
        return context.redirect(r.to, r.type || 301);
      }
    }
  }
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
    return next();
  }
  {
    if (pathname === "/admin" || pathname.startsWith("/admin/")) {
      return new Response(`
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Admin — Configure as Variáveis</title>
<style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f8fafc;}
.card{background:white;border:1px solid #e2e8f0;border-radius:16px;padding:48px;max-width:480px;text-align:center;}
h1{color:#1e293b;font-size:1.5rem;margin-bottom:8px;}p{color:#64748b;line-height:1.6;}
code{background:#f1f5f9;padding:2px 8px;border-radius:6px;font-size:.875rem;color:#7c3aed;}
</style></head>
<body><div class="card">
<h1>⚙️ Configure as Variáveis de Ambiente</h1>
<p>Para acessar o painel admin, configure as seguintes variáveis no seu projeto Vercel:</p>
<br>
<p><code>ADMIN_SECRET</code> — senha do admin<br><code>GITHUB_TOKEN</code> — PAT do GitHub<br><code>GITHUB_OWNER</code> — usuário GitHub<br><code>GITHUB_REPO</code> — nome do repositório</p>
</div></body></html>`, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    return new Response(JSON.stringify({ error: "ADMIN_SECRET não configurado." }), { status: 503 });
  }
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
