import { f as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import 'clsx';
import { r as readData } from './readData_Bvut9xxP.mjs';
/* empty css                            */

const $$Astro = createAstro("https://example.com");
const $$CtaArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaArea;
  const sobreData = readData("sobre.json");
  const { data = sobreData?.cta } = Astro2.props;
  const cta = data || { title: "", subtitle: "Estamos aqui para responder suas perguntas 24/7", btnText: "", btnLink: "" };
  return renderTemplate`${maybeRenderHead()}<div class="call-to-action-area pd-top-120 pd-bottom-120 text-center"${addAttribute(`background-color: var(--main-color); position: relative;`, "style")} data-astro-cid-u3fh6dih> <div class="cms-overlay-base" style="background-color: var(--main-color); opacity: 1;" data-astro-cid-u3fh6dih></div> <div class="container" style="position: relative; z-index: 2;" data-astro-cid-u3fh6dih> <div class="row justify-content-center" data-astro-cid-u3fh6dih> <div class="col-lg-6 col-md-8" data-astro-cid-u3fh6dih> <div class="single-call-to-action-inner style-white" data-astro-cid-u3fh6dih> <h5 data-astro-cid-u3fh6dih>${cta.subtitle || "Estamos aqui para responder suas perguntas 24/7"}</h5> <h2 data-astro-cid-u3fh6dih>${cta.title}</h2> <a class="it-btn btn-black mt-3"${addAttribute(cta.btnLink || "/contato", "href")} data-astro-cid-u3fh6dih>${cta.btnText || "Fale Conosco"}</a> </div> </div> </div> </div> </div> `;
}, "C:/Projects/itechie-temp/src/components/itechie/common/CtaArea.astro", void 0);

export { $$CtaArea as $ };
