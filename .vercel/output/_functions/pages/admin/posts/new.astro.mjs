import { c as createComponent, d as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BK5hI2a8.mjs';
import { P as PostEditor } from '../../../chunks/PostEditor_Cq3x5u_n.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Novo Artigo", "activeSection": "posts" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostEditor", PostEditor, { "filePath": null, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Projects/itechie-temp/src/components/admin/PostEditor", "client:component-export": "default" })} ` })}`;
}, "C:/Projects/itechie-temp/src/pages/admin/posts/new.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/admin/posts/new.astro";
const $$url = "/admin/posts/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$New,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
