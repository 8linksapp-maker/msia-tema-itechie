import { f as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, d as renderComponent } from '../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { $ as $$ItechieLayout } from '../chunks/ItechieLayout_DWoUcDwZ.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_CECUGShP.mjs';
import 'clsx';
import { r as readData } from '../chunks/readData_Bvut9xxP.mjs';
/* empty css                                    */
import { $ as $$CtaArea } from '../chunks/CtaArea_BbZRASkQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$ServiceArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceArea;
  const servicosData = readData("servicos.json");
  const { data = servicosData.serviceArea } = Astro2.props;
  const serviceArea = data || { items: [] };
  return renderTemplate`${maybeRenderHead()}<div class="service-area pd-top-120 pd-bottom-90" data-astro-cid-rvsn5gzx> <div class="container" data-astro-cid-rvsn5gzx> <div class="row justify-content-center" data-astro-cid-rvsn5gzx> <div class="col-lg-7" data-astro-cid-rvsn5gzx> <div class="section-title text-center" data-astro-cid-rvsn5gzx> <h5 class="sub-title double-line" data-astro-cid-rvsn5gzx>${servicosData.serviceArea?.subtitle || "Nossas Especialidades"}</h5> <h2 class="title" data-astro-cid-rvsn5gzx>${servicosData.serviceArea?.title || "Solu\xE7\xF5es Estrat\xE9gicas"}</h2> </div> </div> </div> <div class="row" data-astro-cid-rvsn5gzx> ${serviceArea.items?.map((item) => renderTemplate`<div class="col-lg-4 col-md-6" data-astro-cid-rvsn5gzx> <div class="single-service-inner style-hover-base text-center" data-astro-cid-rvsn5gzx> <div class="icon-box" data-astro-cid-rvsn5gzx> <i${addAttribute(item.icon, "class")} data-astro-cid-rvsn5gzx></i> </div> <div class="details" data-astro-cid-rvsn5gzx> <h3 data-astro-cid-rvsn5gzx><a${addAttribute(`/servico/${item.slug}`, "href")} data-astro-cid-rvsn5gzx>${item.title}</a></h3> <p data-astro-cid-rvsn5gzx>${item.desc}</p> </div> </div> </div>`)} </div> </div> </div> `;
}, "C:/Projects/itechie-temp/src/components/itechie/service-page/ServiceArea.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$WorkArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkArea;
  const { data } = Astro2.props;
  const workArea = data || { title: "", subtitle: "", description: "", steps: [] };
  return renderTemplate`${maybeRenderHead()}<div class="how-it-work-area bg-blue pd-top-120 pd-bottom-120" data-astro-cid-jewmdvrv> <div class="container" data-astro-cid-jewmdvrv> <div class="row justify-content-center" data-astro-cid-jewmdvrv> <div class="col-lg-6" data-astro-cid-jewmdvrv> <div class="section-title style-white text-center" data-astro-cid-jewmdvrv> <h5 class="sub-title double-line" data-astro-cid-jewmdvrv>${workArea.subtitle}</h5> <h2 class="title" data-astro-cid-jewmdvrv>${workArea.title}</h2> <p class="content" data-astro-cid-jewmdvrv>${workArea.description}</p> </div> </div> </div> <div class="row flex-nowrap" style="margin-right: -15px; margin-left: -15px; overflow: visible !important; justify-content: center;" data-astro-cid-jewmdvrv> ${workArea.steps?.map((item) => renderTemplate`<div class="flex-fill" style="flex: 1 1 0px; min-width: 0; padding: 0 10px;" data-astro-cid-jewmdvrv> <div class="single-work-inner style-two text-center h-100" data-astro-cid-jewmdvrv> <div class="count-wrap" data-astro-cid-jewmdvrv> <div class="count-inner" data-astro-cid-jewmdvrv> <h2 style="color: #fff !important; opacity: 1 !important; visibility: visible !important;" data-astro-cid-jewmdvrv>${item.count}</h2> </div> </div> <div class="details-wrap" data-astro-cid-jewmdvrv> <div class="details-inner" data-astro-cid-jewmdvrv> <h4 data-astro-cid-jewmdvrv>${item.title}</h4> <p data-astro-cid-jewmdvrv>${item.desc}</p> </div> </div> </div> </div>`)} </div> </div> </div> `;
}, "C:/Projects/itechie-temp/src/components/itechie/home-one/WorkArea.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$PricingPlan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingPlan;
  const servicosData = readData("servicos.json");
  const { data = servicosData.pricing } = Astro2.props;
  const pricing = data || { title: "", subtitle: "", description: "", btnText: "", btnLink: "", plans: [] };
  return renderTemplate`${maybeRenderHead()}<div class="pricing-area pd-top-120 pd-bottom-90" data-astro-cid-3jqj7dti> <div class="container" data-astro-cid-3jqj7dti> <div class="section-title" data-astro-cid-3jqj7dti> <div class="row align-items-center" data-astro-cid-3jqj7dti> <div class="col-xl-6" data-astro-cid-3jqj7dti> <h5 class="sub-title right-line" data-astro-cid-3jqj7dti>${pricing.subtitle}</h5> <h2 class="title" data-astro-cid-3jqj7dti>${pricing.title}</h2> <p class="content mt-2" data-astro-cid-3jqj7dti>${pricing.description}</p> </div> ${pricing.btnText && renderTemplate`<div class="col-xl-6 text-xl-end mt-4 mt-xl-0" data-astro-cid-3jqj7dti> <a class="it-btn btn-border-base"${addAttribute(pricing.btnLink || "/servicos", "href")} data-astro-cid-3jqj7dti>${pricing.btnText}</a> </div>`} </div> </div> <div class="row justify-content-center" data-astro-cid-3jqj7dti> ${pricing.plans?.map((item) => renderTemplate`<div class="col-lg-4 col-md-6" data-astro-cid-3jqj7dti> <div${addAttribute(`single-pricing-inner style-1 ${item.active ? "active" : ""}`, "class")} data-astro-cid-3jqj7dti> <div class="header text-center" data-astro-cid-3jqj7dti> <h3 data-astro-cid-3jqj7dti>${item.plan}</h3> <div class="price-container" data-astro-cid-3jqj7dti> <div class="price-wrapper" data-astro-cid-3jqj7dti> <span class="currency" data-astro-cid-3jqj7dti>R$</span> <h2 class="price-val" data-astro-cid-3jqj7dti>${item.price}</h2> </div> <sub class="billing" data-astro-cid-3jqj7dti>${item.billingPeriod || "por m\xEAs cobran\xE7a anual"}</sub> </div> </div> <div class="details" data-astro-cid-3jqj7dti> <ul class="single-list-inner list-unstyled" data-astro-cid-3jqj7dti> ${item.features?.map((list) => renderTemplate`<li${addAttribute(list.class_name, "class")} data-astro-cid-3jqj7dti><i class="fas fa-check-circle me-2" data-astro-cid-3jqj7dti></i>${list.list}</li>`)} </ul> <a class="it-btn btn-black w-100" href="#" data-astro-cid-3jqj7dti>Começar Agora</a> </div> </div> </div>`)} </div> </div> </div> `;
}, "C:/Projects/itechie-temp/src/components/itechie/home-one/PricingPlan.astro", void 0);

const prerender = false;
const $$Servicos = createComponent(($$result, $$props, $$slots) => {
  const servicosData = readData("servicos.json");
  return renderTemplate`${renderComponent($$result, "ItechieLayout", $$ItechieLayout, { "title": servicosData.breadcrumb?.title || "Servi\xE7os" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "title": servicosData.breadcrumb?.title || "Nossos Servi\xE7os", "subTitle": servicosData.breadcrumb?.subtitle || "Servi\xE7os" })} ${renderComponent($$result2, "ServiceArea", $$ServiceArea, { "data": servicosData.serviceArea })} ${renderComponent($$result2, "WorkArea", $$WorkArea, { "data": servicosData.workArea })} ${renderComponent($$result2, "PricingPlan", $$PricingPlan, { "data": servicosData.pricing })} ${renderComponent($$result2, "CtaArea", $$CtaArea, { "data": servicosData.cta })} ` })}`;
}, "C:/Projects/itechie-temp/src/pages/servicos.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/servicos.astro";
const $$url = "/servicos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicos,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
