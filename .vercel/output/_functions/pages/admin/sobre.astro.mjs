import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BK5hI2a8.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "CMS - Sobre N\xF3s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 max-w-7xl mx-auto pb-32"> <div class="mb-8 pl-4 border-l-4 border-blue-500"> <h1 class="text-3xl font-bold text-slate-800">Página: Sobre Nós</h1> <p class="text-slate-500 mt-2">Gerencie as informações corporativas, equipe e métricas gerais do portal.</p> </div> <main> ${renderComponent($$result2, "SobreEditor", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Projects/itechie-temp/src/components/admin/SobreEditor", "client:component-export": "default" })} </main> </div> ` })}`;
}, "C:/Projects/itechie-temp/src/pages/admin/sobre.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/admin/sobre.astro";
const $$url = "/admin/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
