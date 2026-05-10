import { f as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="breadcrumb-area bg-relative bg-dark-base" data-astro-cid-t3uco3e4> <div class="banner-bg-img" style="background-image: url(/itechie-assets/img/banner/bg-real.png); opacity: 0.1;" data-astro-cid-t3uco3e4></div> <div class="banner-bg-img" style="background-image: url(/itechie-assets/img/bg/1.webp); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.2; z-index: 1;" data-astro-cid-t3uco3e4></div> <div class="container" data-astro-cid-t3uco3e4> <div class="row justify-content-center" data-astro-cid-t3uco3e4> <div class="col-xl-7 col-lg-8" data-astro-cid-t3uco3e4> <div class="breadcrumb-inner text-center" data-astro-cid-t3uco3e4> <h2 class="page-title" data-astro-cid-t3uco3e4>${title}</h2> <ul class="page-list" data-astro-cid-t3uco3e4> <li data-astro-cid-t3uco3e4><a href="/" data-astro-cid-t3uco3e4>Início</a></li> <li data-astro-cid-t3uco3e4>${subTitle}</li> </ul> </div> </div> </div> </div> </div> `;
}, "C:/Projects/itechie-temp/src/components/itechie/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
