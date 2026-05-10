import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BK5hI2a8.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Servicos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "CMS - Nossos Servi\xE7os" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 max-w-7xl mx-auto pb-32"> <div class="mb-8 pl-4 border-l-4 border-orange-500"> <h1 class="text-3xl font-bold text-slate-800">Página: Serviços e Preços</h1> <p class="text-slate-500 mt-2">Gerencie as ofertas, métodos de trabalho e planos de assinatura.</p> </div> <main> ${renderComponent($$result2, "ServicosEditor", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Projects/itechie-temp/src/components/admin/ServicosEditor", "client:component-export": "default" })} </main> </div> ` })}`;
}, "C:/Projects/itechie-temp/src/pages/admin/servicos.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/admin/servicos.astro";
const $$url = "/admin/servicos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicos,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
