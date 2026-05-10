import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BK5hI2a8.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Contato = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "CMS - Contato" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 max-w-7xl mx-auto pb-32"> <div class="mb-8 pl-4 border-l-4 border-purple-500"> <h1 class="text-3xl font-bold text-slate-800">Página: Contato</h1> <p class="text-slate-500 mt-2">Personalize os dados de atendimento e textos institucionais.</p> </div> <main> ${renderComponent($$result2, "ContatoEditor", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Projects/itechie-temp/src/components/admin/ContatoEditor", "client:component-export": "default" })} </main> </div> ` })}`;
}, "C:/Projects/itechie-temp/src/pages/admin/contato.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/admin/contato.astro";
const $$url = "/admin/contato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contato,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
