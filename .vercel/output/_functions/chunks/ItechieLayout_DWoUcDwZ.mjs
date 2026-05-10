import { c as createComponent, b as renderTemplate, e as addAttribute, m as maybeRenderHead, A as AstroError, al as UnknownContentCollectionError, am as RenderUndefinedEntryError, aj as unescapeHTML, an as renderUniqueStylesheet, ao as renderScriptElement, ap as createHeadAndContent, d as renderComponent, f as createAstro, aq as defineStyleVars, ak as renderSlot, r as renderHead } from './astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import 'clsx';
import { r as readData } from './readData_Bvut9xxP.mjs';
/* empty css                          */
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { b as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_V_7lih57.mjs';
import { b as VALID_INPUT_FORMATS } from './consts_BLFvATRa.mjs';
import * as devalue from 'devalue';

function slugify(text) {
  if (!text) return "";
  return text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-e-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const siteConfig = readData("siteConfig.json");
  const menuItems = readData("menu.json", { items: [] }).items || [];
  const categoriesData = readData("categories.json", []);
  const finalCategoriesData = Array.isArray(categoriesData) ? categoriesData : [];
  const allCategories = finalCategoriesData;
  const servicosData = readData("servicos.json", { serviceArea: { items: [] } });
  const allServices = servicosData?.serviceArea?.items || [];
  const menuHoverEnabled = siteConfig?.menuHoverEnabled !== false;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", ' data-astro-cid-6cfwwoai> <div class="navbar-top style-2" data-astro-cid-6cfwwoai> <div class="container" data-astro-cid-6cfwwoai> <div class="row align-items-center" data-astro-cid-6cfwwoai> <div class="col-lg-3 d-lg-inline-block d-none ps-0" data-astro-cid-6cfwwoai> <div class="logo" data-astro-cid-6cfwwoai> <a href="/" data-astro-cid-6cfwwoai> ', ' </a> </div> </div> <div class="col-lg-9 d-lg-flex d-none justify-content-end align-items-center pe-0" data-astro-cid-6cfwwoai> <div class="media d-flex align-items-center me-4" data-astro-cid-6cfwwoai> <div class="media-left me-3" data-astro-cid-6cfwwoai> <i class="far fa-clock" data-astro-cid-6cfwwoai></i> </div> <div class="media-body" data-astro-cid-6cfwwoai> <h6 class="mb-0" data-astro-cid-6cfwwoai>Hor\xE1rio de Atendimento</h6> <p class="mb-0" data-astro-cid-6cfwwoai>', '</p> </div> </div> <div class="media d-flex align-items-center me-4" data-astro-cid-6cfwwoai> <div class="media-left me-3" data-astro-cid-6cfwwoai> <i class="far fa-envelope" data-astro-cid-6cfwwoai></i> </div> <div class="media-body" data-astro-cid-6cfwwoai> <h6 class="mb-0" data-astro-cid-6cfwwoai>E-mail de Contato</h6> <p class="mb-0" data-astro-cid-6cfwwoai>', '</p> </div> </div> <div class="social-media-light ms-2" data-astro-cid-6cfwwoai> ', " ", " ", " ", " ", ' </div> </div> </div> </div> </div> <nav class="navbar navbar-area navbar-area-2 navbar-expand-lg bg-main-base" id="itechie-navbar" data-astro-cid-6cfwwoai> <div class="container nav-container" data-astro-cid-6cfwwoai> <!-- Mobile menu removed to fix stray T --> <!-- Modern Mobile Menu Toggle --> <div class="mobile-toggle-wrapper d-lg-none" data-astro-cid-6cfwwoai> <button class="hamburger-menu" id="mobile-menu-btn" aria-label="Menu" data-astro-cid-6cfwwoai> <span data-astro-cid-6cfwwoai></span> <span data-astro-cid-6cfwwoai></span> <span data-astro-cid-6cfwwoai></span> </button> </div> <div class="logo text-center flex-grow-1 d-lg-none" data-astro-cid-6cfwwoai> <a href="/" data-astro-cid-6cfwwoai> ', ' </a> </div> <!-- Mobile Menu Overlay --> <div class="mobile-menu-overlay" id="mobile-menu-overlay" data-astro-cid-6cfwwoai> <div class="mobile-menu-content" data-astro-cid-6cfwwoai> <ul class="mobile-nav-list" data-astro-cid-6cfwwoai> ', ' </ul> <div class="mobile-menu-footer mt-5 text-center" data-astro-cid-6cfwwoai> <a class="it-btn btn-base w-100"', " data-astro-cid-6cfwwoai>", '</a> </div> </div> </div> <div class="collapse navbar-collapse" id="itechie_main_menu" data-astro-cid-6cfwwoai> <ul class="navbar-nav" data-astro-cid-6cfwwoai> ', ' </ul> </div> <div class="nav-right-part nav-right-part-desktop" data-astro-cid-6cfwwoai> <a class="it-btn btn-black btn-block-height"', " data-astro-cid-6cfwwoai>", `</a> </div> </div> </nav> </header> <script>
  const navbar = document.getElementById('itechie-navbar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-menu-overlay');
  const dropdownToggles = document.querySelectorAll('.toggle-dropdown');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('sticky-active');
    } else {
      navbar.classList.remove('sticky-active');
    }
  });

  if (menuBtn && overlay) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }

  // Accordion Logic for Mobile
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const parent = toggle.closest('li');
      const dropdown = parent.querySelector('.mobile-dropdown');
      dropdown.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  });

  // Desktop dropdown \u2014 2-stage click: 1\xBA click abre submenu, 2\xBA navega.
  // Antes era preventDefault incondicional, ent\xE3o o link top-level NUNCA navegava
  // (sintoma reportado: "nao estao clicando, so aparece a categoria").
  document.querySelectorAll('.menu-item-has-children > a').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const li = trigger.closest('.menu-item-has-children');
      if (!li) return;
      const isOpen = li.classList.contains('is-open');
      if (!isOpen) {
        // Submenu fechado: abre + previne navega\xE7\xE3o pra usu\xE1rio ver as op\xE7\xF5es.
        e.preventDefault();
        document.querySelectorAll('.menu-item-has-children.is-open').forEach(d => d.classList.remove('is-open'));
        li.classList.add('is-open');
      }
      // Submenu j\xE1 aberto: deixa o link navegar normalmente (default behavior).
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-item-has-children')) {
      document.querySelectorAll('.menu-item-has-children.is-open').forEach(d => d.classList.remove('is-open'));
    }
  });
<\/script> `])), maybeRenderHead(), addAttribute(menuHoverEnabled ? "on" : "off", "data-menu-hover"), siteConfig.logo ? renderTemplate`<img${addAttribute(siteConfig.logo, "src")}${addAttribute(siteConfig.name, "alt")}${addAttribute(`max-height: ${siteConfig.logoHeight || 50}px; height: auto; width: auto;`, "style")} data-astro-cid-6cfwwoai>` : renderTemplate`<span class="text-logo" data-astro-cid-6cfwwoai>${siteConfig.name}</span>`, siteConfig.header?.businessHours || "Seg - Sex || 08:00 - 18:00", siteConfig.contact?.email || "info@itechie.com", siteConfig.social?.facebook && renderTemplate`<a${addAttribute(siteConfig.social.facebook, "href")} data-astro-cid-6cfwwoai><i class="fab fa-facebook-f" data-astro-cid-6cfwwoai></i></a>`, siteConfig.social?.twitter && renderTemplate`<a${addAttribute(siteConfig.social.twitter, "href")} data-astro-cid-6cfwwoai><i class="fab fa-twitter" data-astro-cid-6cfwwoai></i></a>`, siteConfig.social?.instagram && renderTemplate`<a${addAttribute(siteConfig.social.instagram, "href")} data-astro-cid-6cfwwoai><i class="fab fa-instagram" data-astro-cid-6cfwwoai></i></a>`, siteConfig.social?.linkedin && renderTemplate`<a${addAttribute(siteConfig.social.linkedin, "href")} data-astro-cid-6cfwwoai><i class="fab fa-linkedin-in" data-astro-cid-6cfwwoai></i></a>`, siteConfig.social?.youtube && renderTemplate`<a${addAttribute(siteConfig.social.youtube, "href")} data-astro-cid-6cfwwoai><i class="fab fa-youtube" data-astro-cid-6cfwwoai></i></a>`, siteConfig.logo ? renderTemplate`<img${addAttribute(siteConfig.logo, "src")}${addAttribute(siteConfig.name, "alt")}${addAttribute(`max-height: ${siteConfig.logoHeight || 40}px;`, "style")} data-astro-cid-6cfwwoai>` : renderTemplate`<span class="text-logo" style="font-size: 20px;" data-astro-cid-6cfwwoai>${siteConfig.name}</span>`, menuItems && menuItems.map((item) => {
    const hasSubmenu = item.items && item.items.length > 0 || item.showCategories && allCategories.length > 0 || item.showServices && allServices.length > 0;
    return renderTemplate`<li${addAttribute(hasSubmenu ? "has-dropdown" : "", "class")} data-astro-cid-6cfwwoai> <div class="menu-item-row" data-astro-cid-6cfwwoai> <a${addAttribute(item.href, "href")} data-astro-cid-6cfwwoai>${item.label}</a> ${hasSubmenu && renderTemplate`<i class="fas fa-chevron-down toggle-dropdown" data-astro-cid-6cfwwoai></i>`} </div> ${hasSubmenu && renderTemplate`<ul class="mobile-dropdown" data-astro-cid-6cfwwoai> ${item.items?.map((subItem) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(subItem.href, "href")} data-astro-cid-6cfwwoai>${subItem.label}</a></li>`)} ${item.showCategories && allCategories.map((cat) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(`/categoria/${slugify(cat)}`, "href")} data-astro-cid-6cfwwoai>${cat}</a></li>`)} ${item.showServices && allServices.map((service) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(`/servico/${service.slug}`, "href")} data-astro-cid-6cfwwoai>${service.title}</a></li>`)} </ul>`} </li>`;
  }), addAttribute(siteConfig.header?.ctaLink || "/contato", "href"), siteConfig.header?.ctaText || "Come\xE7ar Agora", menuItems && menuItems.map((item) => {
    const hasSubmenu = item.items && item.items.length > 0 || item.showCategories && allCategories.length > 0 || item.showServices && allServices.length > 0;
    return renderTemplate`<li${addAttribute(hasSubmenu ? "menu-item-has-children" : "", "class")} data-astro-cid-6cfwwoai> <a${addAttribute(item.href, "href")} data-astro-cid-6cfwwoai>${item.label}</a> ${hasSubmenu && renderTemplate`<ul class="sub-menu" data-astro-cid-6cfwwoai> ${item.items?.map((subItem) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(subItem.href, "href")} data-astro-cid-6cfwwoai>${subItem.label}</a></li>`)} ${item.showCategories && allCategories.map((cat) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(`/categoria/${slugify(cat)}`, "href")} data-astro-cid-6cfwwoai>${cat}</a></li>`)} ${item.showServices && allServices.map((service) => renderTemplate`<li data-astro-cid-6cfwwoai><a${addAttribute(`/servico/${service.slug}`, "href")} data-astro-cid-6cfwwoai>${service.title}</a></li>`)} </ul>`} </li>`;
  }), addAttribute(siteConfig.header?.ctaLink || "/contato", "href"), siteConfig.header?.ctaText || "Come\xE7ar Agora");
}, "C:/Projects/itechie-temp/src/components/itechie/Header.astro", void 0);

const siteConfig = readData("siteConfig.json");
const rawPrefix = siteConfig?.postUrlPrefix;
const prefix = rawPrefix === "blog" ? "blog" : "";
const BLOG_BASE = prefix ? `/${prefix}` : "";

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_ZegfGyc7.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_BLWDLBCD.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const siteConfig = readData("siteConfig.json");
  const theme = siteConfig.theme;
  const primaryColor = theme?.primary || "#2e38dc";
  const bgDark = theme?.bgDark || "#0b0d26";
  const latestPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).slice(0, 2);
  function formatDate(date) {
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });
  }
  return renderTemplate`${maybeRenderHead()}<footer class="footer-area bg-cover footer-area-3"${addAttribute(`background: linear-gradient(135deg, ${primaryColor} 0%, ${bgDark} 100%) !important; position: relative;`, "style")} data-astro-cid-yjepmlhi> <div class="container" data-astro-cid-yjepmlhi> <div class="row" data-astro-cid-yjepmlhi> <div class="col-lg-4 col-md-6" data-astro-cid-yjepmlhi> <div class="widget widget_about" data-astro-cid-yjepmlhi> <h4 class="widget-title" data-astro-cid-yjepmlhi> <a href="/" data-astro-cid-yjepmlhi> ${siteConfig.logo ? renderTemplate`<img${addAttribute(siteConfig.logo, "src")}${addAttribute(siteConfig.name, "alt")} style="max-height: 50px;" data-astro-cid-yjepmlhi>` : renderTemplate`<span class="text-logo" data-astro-cid-yjepmlhi>${siteConfig.name}</span>`} </a> </h4> <div class="details" data-astro-cid-yjepmlhi> <p data-astro-cid-yjepmlhi>${siteConfig.footer?.description || siteConfig.description}</p> <ul class="social-media mt-4" data-astro-cid-yjepmlhi> ${siteConfig.social?.facebook && renderTemplate`<li data-astro-cid-yjepmlhi><a${addAttribute(siteConfig.social.facebook, "href")} data-astro-cid-yjepmlhi><i class="fab fa-facebook-f" data-astro-cid-yjepmlhi></i></a></li>`} ${siteConfig.social?.twitter && renderTemplate`<li data-astro-cid-yjepmlhi><a${addAttribute(siteConfig.social.twitter, "href")} data-astro-cid-yjepmlhi><i class="fab fa-twitter" data-astro-cid-yjepmlhi></i></a></li>`} ${siteConfig.social?.instagram && renderTemplate`<li data-astro-cid-yjepmlhi><a${addAttribute(siteConfig.social.instagram, "href")} data-astro-cid-yjepmlhi><i class="fab fa-instagram" data-astro-cid-yjepmlhi></i></a></li>`} ${siteConfig.social?.linkedin && renderTemplate`<li data-astro-cid-yjepmlhi><a${addAttribute(siteConfig.social.linkedin, "href")} data-astro-cid-yjepmlhi><i class="fab fa-linkedin-in" data-astro-cid-yjepmlhi></i></a></li>`} </ul> </div> </div> </div> <div class="col-lg-4 col-md-6" data-astro-cid-yjepmlhi> <div class="widget widget_nav_menu" data-astro-cid-yjepmlhi> <h4 class="widget-title" data-astro-cid-yjepmlhi>Links Rápidos</h4> <ul data-astro-cid-yjepmlhi> <li data-astro-cid-yjepmlhi><a href="/" data-astro-cid-yjepmlhi>Página Inicial</a></li> <li data-astro-cid-yjepmlhi><a href="/sobre" data-astro-cid-yjepmlhi>Sobre Nós</a></li> <li data-astro-cid-yjepmlhi><a href="/servicos" data-astro-cid-yjepmlhi>Nossos Serviços</a></li> <li data-astro-cid-yjepmlhi><a href="/blog" data-astro-cid-yjepmlhi>Blog & Notícias</a></li> <li data-astro-cid-yjepmlhi><a href="/contato" data-astro-cid-yjepmlhi>Fale Conosco</a></li> <li data-astro-cid-yjepmlhi><a href="/privacidade" data-astro-cid-yjepmlhi>Política de Privacidade</a></li> <li data-astro-cid-yjepmlhi><a href="/termos" data-astro-cid-yjepmlhi>Termos de Uso</a></li> </ul> </div> </div> <div class="col-lg-4 col-md-12" data-astro-cid-yjepmlhi> <div class="widget widget-recent-post" data-astro-cid-yjepmlhi> <h4 class="widget-title" data-astro-cid-yjepmlhi>Notícias Recentes</h4> <ul data-astro-cid-yjepmlhi> ${latestPosts.map((post, index) => renderTemplate`<li${addAttribute(index > 0 ? "mt-3" : "", "class")} data-astro-cid-yjepmlhi> <div class="media" data-astro-cid-yjepmlhi> <div class="media-left" data-astro-cid-yjepmlhi> <img${addAttribute(post.data.heroImage || "/itechie-assets/img/blog/1.webp", "src")}${addAttribute(post.data.title, "alt")} width="60" height="60" loading="lazy" decoding="async" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;" data-astro-cid-yjepmlhi> </div> <div class="media-body align-self-center" data-astro-cid-yjepmlhi> <h6 class="title" data-astro-cid-yjepmlhi><a${addAttribute(`${BLOG_BASE}/${post.slug}`, "href")} data-astro-cid-yjepmlhi>${post.data.title}</a></h6> <div class="post-info" data-astro-cid-yjepmlhi><i class="far fa-calendar-alt" data-astro-cid-yjepmlhi></i> <span data-astro-cid-yjepmlhi>${formatDate(post.data.pubDate)}</span></div> </div> </div> </li>`)} </ul> </div> </div> </div> </div> <div class="footer-bottom text-center" data-astro-cid-yjepmlhi> <div class="container" data-astro-cid-yjepmlhi> <div class="row" data-astro-cid-yjepmlhi> <div class="col-md-12 align-self-center" data-astro-cid-yjepmlhi> <p data-astro-cid-yjepmlhi>© ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteConfig.footer?.copyright || siteConfig.name}.</p> </div> </div> </div> </div> </footer> `;
}, "C:/Projects/itechie-temp/src/components/itechie/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$ItechieLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItechieLayout;
  const siteConfig = readData("siteConfig.json");
  const { title = siteConfig.name, description = siteConfig.description } = Astro2.props;
  const formattedTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "46, 56, 220";
  }
  function hexToHue(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0;
    if (max === min) {
      h = 0;
    } else {
      let d = max - min;
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return Math.round(h * 360);
  }
  const theme = siteConfig.theme;
  const primaryRgb = hexToRgb(theme?.primary || "#2e38dc");
  const secondaryRgb = hexToRgb(theme?.secondary || "#111111");
  const bgDarkRgb = hexToRgb(theme?.bgDark || "#0b0d26");
  const mainHue = hexToHue(theme?.primary || "#2e38dc");
  const shapeFilter = `brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(${mainHue - 50}deg)`;
  const $$definedVars = defineStyleVars([{
    primaryColor: theme?.primary || "#2e38dc",
    secondaryColor: theme?.secondary || "#0b0d26",
    accentColor: theme?.accent || "#007bff",
    bgDark: theme?.bgDark || "#0b0d26",
    bgLight: theme?.bgLight || "#f4f4ff",
    textOnPrimary: theme?.textOnPrimary || "#ffffff",
    primaryRgb: primaryRgb || "46, 56, 220",
    secondaryRgb: secondaryRgb || "17, 17, 17",
    bgDarkRgb: bgDarkRgb || "11, 13, 38",
    mainHue,
    shapeFilter
  }]);
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"', '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="icon" type="image/webp"', `><!-- Preload LCP (Banner Image) - Usando o caminho fixo que o Astro otimiza --><link rel="preload" as="image" href="/itechie-assets/img/banner/bg-real.webp" fetchpriority="high"><!-- Google Fonts otimizadas --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'"><!-- CSS Cr\xEDtico Inline (Para acelerar FCP/LCP no Mobile) --><style>`, `
    :root {
      --main-color: rgb(var(--primaryRgb));
      --heading-color: #151423;
      --body-font: "Rubik", sans-serif;
      --heading-font: "Rajdhani", sans-serif;
    }
    body { margin: 0; font-family: var(--body-font); background: #0b0d26; color: #fff; }
    .banner-area-2 { min-height: 800px; display: flex; align-items: center; position: relative; overflow: hidden; background: #0b0d26; }
    .hero-bg-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
    .bg-overlay-gradient { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; background: linear-gradient(to right, #000 0%, rgba(var(--bg-dark-rgb), 1) 30%, rgba(var(--bg-dark-rgb), 0.4) 100%); }
    .banner-inner { position: relative; z-index: 2; padding-top: 100px; }
    .banner-inner .title { font-size: 42px; color: #fff; font-family: var(--heading-font); font-weight: 700; line-height: 1.2; }
    @media (min-width: 992px) { .banner-inner .title { font-size: 60px; } }
  </style><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap"><!-- CSS Preload (Carregamento Paralelo) --><link rel="preload" href="/itechie-assets/css/bootstrap.min.css" as="style"><link rel="preload" href="/itechie-assets/css/style.css" as="style"><link rel="preload" href="/itechie-assets/css/responsive.css" as="style"><link rel="stylesheet" href="/itechie-assets/css/bootstrap.min.css"><link rel="stylesheet" href="/itechie-assets/css/style.css"><link rel="stylesheet" href="/itechie-assets/css/responsive.css"><!-- CSS Plugins (Deferred for PageSpeed) --><link rel="preload" href="/itechie-assets/css/animate.min.css" as="style"><link rel="stylesheet" href="/itechie-assets/css/animate.min.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/fontawesome.min.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/custom-icon.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/nice-select.min.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/magnific.min.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/slick.min.css" media="print" onload="this.media='all'"><link rel="stylesheet" href="/itechie-assets/css/owl.min.css" media="print" onload="this.media='all'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="/itechie-assets/css/animate.min.css"><link rel="stylesheet" href="/itechie-assets/css/fontawesome.min.css"><link rel="stylesheet" href="/itechie-assets/css/custom-icon.css"><link rel="stylesheet" href="/itechie-assets/css/nice-select.min.css"><link rel="stylesheet" href="/itechie-assets/css/magnific.min.css"><link rel="stylesheet" href="/itechie-assets/css/slick.min.css"><link rel="stylesheet" href="/itechie-assets/css/owl.min.css"></noscript>', '</head> <body class="sc5"', "> ", " <main", "> ", " </main> ", ` <!-- ALL JavaScript files (Lazy Loaded for Max PageSpeed) --> <script>
    (function() {
      let scriptsLoaded = false;
      const loadScripts = () => {
        if(scriptsLoaded) return;
        scriptsLoaded = true;
        const scripts = [
          "https://code.jquery.com/jquery-3.7.1.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
          "https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/jquery.magnific-popup.min.js",
          "https://cdn.jsdelivr.net/npm/jquery-nice-select@1.1.0/js/jquery.nice-select.min.js",
          "/js/jquery.sticky-sidebar.min.js",
          "/js/custom.js"
        ];
        
        const loadScript = (src) => {
          return new Promise(resolve => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            document.body.appendChild(s);
          });
        };

        const loadAll = async () => {
          await loadScript(scripts[0]); // Load jQuery first
          for(let i=1; i<scripts.length; i++) await loadScript(scripts[i]);
        };
        
        loadAll();
      };

      window.addEventListener('scroll', loadScripts, { passive: true, once: true });
      window.addEventListener('mousemove', loadScripts, { passive: true, once: true });
      window.addEventListener('touchstart', loadScripts, { passive: true, once: true });
      setTimeout(loadScripts, 3500); // Failsafe loader
    })();
  <\/script> </body> </html>`])), addAttribute($$definedVars, "style"), formattedTitle, addAttribute(description, "content"), addAttribute(siteConfig.favicon || siteConfig.logo || "/favicon.webp", "href"), defineStyleVars({ primaryRgb, bgDarkRgb, mainHue, shapeFilter }), maybeRenderHead(), renderHead(), addAttribute($$definedVars, "style"), renderComponent($$result, "Header", $$Header, {}), addAttribute($$definedVars, "style"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Projects/itechie-temp/src/layouts/ItechieLayout.astro", void 0);

export { $$ItechieLayout as $, BLOG_BASE as B, getCollection as g, slugify as s };
