import { r as readFileFromRepo, w as writeFileToRepo } from '../../chunks/_server_fsrvt-m8.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const rateLimitMap = /* @__PURE__ */ new Map();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 60 * 1e3;
function checkRateLimit(ip) {
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
const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
const POST = async ({ request }) => {
  const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) return json({ error: "Muitas tentativas. Tente novamente mais tarde." }, 429);
    const body = await request.json().catch(() => null);
    if (!body) return json({ error: "Body inválido." }, 400);
    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const message = (body.message || "").trim();
    const subject = (body.subject || "Contato Direto").trim();
    if (!name || !email || !message) return json({ error: "Nome, e-mail e mensagem são obrigatórios." }, 400);
    if (!isValidEmail(email)) return json({ error: "E-mail inválido." }, 400);
    if (message.length > 5e3) return json({ error: "Mensagem muito longa (máx 5000 caracteres)." }, 400);
    const raw = await readFileFromRepo("src/data/leads.json");
    let leads = [];
    try {
      leads = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(leads)) leads = [];
    } catch {
      leads = [];
    }
    const newLead = {
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString(),
      name,
      email,
      message,
      subject,
      status: "novo"
    };
    leads.unshift(newLead);
    await writeFileToRepo(
      "src/data/leads.json",
      JSON.stringify(leads, null, 2),
      { message: `Contato: novo lead de ${email}` }
    );
    return json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    console.error("[/api/contact] error:", err?.message);
    return json({ error: "Erro interno ao processar contato. Tente novamente." }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
