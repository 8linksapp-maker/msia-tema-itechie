import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxB56ZJZ.mjs';
import 'piccolore';
import { t as triggerToast, $ as $$AdminLayout } from '../../chunks/AdminLayout_BK5hI2a8.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { X, Loader2, Upload, Image, ChevronDown, Search, AlertCircle, Home, Save, Trash2, Plus } from 'lucide-react';
import { g as githubApi } from '../../chunks/adminApi_DobXZoc4.mjs';
export { renderers } from '../../renderers.mjs';

function ImageUpload({ value, onChange, label }) {
  const [uploading, setUploading] = useState(false);
  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = () => reject(new Error("Erro ao ler arquivo"));
        reader.readAsDataURL(file);
      });
      const fileName = `${Date.now()}-${file.name.replace(/[^a-z0-9.]/gi, "_").toLowerCase()}`;
      const path = `public/itechie-assets/img/uploads/${fileName}`;
      await githubApi("write", path, {
        content: base64,
        isBase64: true,
        message: `Upload image ${fileName} via CMS`
      });
      onChange(`/itechie-assets/img/uploads/${fileName}`);
      triggerToast("Upload concluído!", "success");
    } catch (err) {
      triggerToast("Erro no upload: " + err.message, "error");
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    label && /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2", children: label }),
    /* @__PURE__ */ jsx("div", { className: "relative group border-2 border-dashed border-slate-200 rounded-xl p-4 hover:border-violet-400 transition-all bg-slate-50/50", children: value ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { src: value, alt: "Preview", className: "w-full h-32 object-cover rounded-lg shadow-sm" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onChange(""),
          className: "absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors",
          children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
        }
      )
    ] }) : /* @__PURE__ */ jsxs("label", { className: "flex flex-col items-center justify-center py-6 cursor-pointer", children: [
      uploading ? /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-violet-500" }) : /* @__PURE__ */ jsx(Upload, { className: "w-8 h-8 text-slate-400 group-hover:text-violet-500 mb-2" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-500 font-medium", children: uploading ? "Enviando..." : "Clique para subir imagem" }),
      /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", accept: "image/*", onChange: handleFile, disabled: uploading })
    ] }) }),
    value && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-2 text-[10px] text-slate-400 truncate", children: [
      /* @__PURE__ */ jsx(Image, { className: "w-3 h-3" }),
      /* @__PURE__ */ jsx("span", { children: value })
    ] })
  ] });
}

const ICON_GALLERY = [
  // Icomoon (Template Default)
  "icomoon-analysis",
  "icomoon-application",
  "icomoon-approval",
  "icomoon-back",
  "icomoon-calendar",
  "icomoon-calendar-2",
  "icomoon-chat",
  "icomoon-chat-2",
  "icomoon-check-mark",
  "icomoon-client",
  "icomoon-clock",
  "icomoon-close",
  "icomoon-cloud-data",
  "icomoon-computer",
  "icomoon-deep-learning",
  "icomoon-diamond",
  "icomoon-diamond-2",
  "icomoon-email",
  "icomoon-facebook",
  "icomoon-folder",
  "icomoon-folder-2",
  "icomoon-gear",
  "icomoon-help",
  "icomoon-laptop",
  "icomoon-layer",
  "icomoon-link",
  "icomoon-linkedin",
  "icomoon-lock",
  "icomoon-magnifiying-glass",
  "icomoon-mail",
  "icomoon-megaphone",
  "icomoon-minus-sign",
  "icomoon-money",
  "icomoon-next",
  "icomoon-phone-call",
  "icomoon-pin",
  "icomoon-pinterest",
  "icomoon-play-button",
  "icomoon-plus",
  "icomoon-profile",
  "icomoon-project",
  "icomoon-quote",
  "icomoon-quote-2",
  "icomoon-right-quote",
  "icomoon-save-money",
  "icomoon-search",
  "icomoon-share",
  "icomoon-solution",
  "icomoon-team",
  "icomoon-telephone",
  "icomoon-time",
  "icomoon-twitter",
  "icomoon-user",
  "icomoon-user-2",
  "icomoon-user-3",
  // FontAwesome Solid
  "fas fa-home",
  "fas fa-user",
  "fas fa-envelope",
  "fas fa-phone",
  "fas fa-search",
  "fas fa-cog",
  "fas fa-check",
  "fas fa-times",
  "fas fa-plus",
  "fas fa-minus",
  "fas fa-star",
  "fas fa-heart",
  "fas fa-clock",
  "fas fa-calendar",
  "fas fa-file",
  "fas fa-folder",
  "fas fa-image",
  "fas fa-camera",
  "fas fa-video",
  "fas fa-music",
  "fas fa-headphones",
  "fas fa-globe",
  "fas fa-map-marker-alt",
  "fas fa-shopping-cart",
  "fas fa-credit-card",
  "fas fa-briefcase",
  "fas fa-university",
  "fas fa-chart-line",
  "fas fa-laptop",
  "fas fa-mobile-alt",
  "fas fa-tablet-alt",
  "fas fa-print",
  "fas fa-barcode",
  "fas fa-tag",
  "fas fa-bookmark",
  "fas fa-flag",
  "fas fa-thumbs-up",
  "fas fa-thumbs-down",
  "fas fa-share-alt",
  "fas fa-rocket",
  "fas fa-lightbulb",
  "fas fa-lock",
  "fas fa-unlock",
  "fas fa-key",
  "fas fa-trash-alt",
  "fas fa-edit",
  "fas fa-save",
  "fas fa-bolt",
  "fas fa-bug",
  "fas fa-code",
  "fas fa-coffee",
  "fas fa-comments",
  "fas fa-desktop",
  "fas fa-download",
  "fas fa-upload",
  "fas fa-eye",
  "fas fa-gift",
  "fas fa-leaf",
  "fas fa-magic",
  "fas fa-plane",
  "fas fa-road",
  "fas fa-signal",
  "fas fa-trophy",
  "fas fa-wrench",
  "fas fa-ambulance",
  "fas fa-anchor",
  // FontAwesome Brands
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-instagram",
  "fab fa-linkedin",
  "fab fa-youtube",
  "fab fa-github",
  "fab fa-whatsapp",
  "fab fa-google",
  "fab fa-apple",
  "fab fa-android",
  "fab fa-wordpress",
  "fab fa-behance",
  "fab fa-dribbble",
  "fab fa-pinterest",
  "fab fa-slack",
  "fab fa-skype",
  "fab fa-vimeo",
  "fab fa-tumblr",
  "fab fa-foursquare",
  "fab fa-amazon"
];
function IconPicker({ value, onChange, label }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = ICON_GALLERY.filter((i) => i.toLowerCase().includes(search.toLowerCase()));
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 relative", children: [
    label && /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2", children: label }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "w-full flex items-center gap-3 px-3 py-2.5 border border-slate-200 rounded-xl bg-white hover:border-violet-300 transition-all text-left",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200", children: value ? /* @__PURE__ */ jsx("i", { className: `${value} text-slate-700 text-lg` }) : /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-[10px]", children: "?" }) }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm font-medium text-slate-700 truncate", children: value || "Selecionar ícone..." }),
          /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}` })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            autoFocus: true,
            placeholder: "Buscar ícone...",
            className: "bg-transparent border-none text-sm focus:outline-none w-full",
            value: search,
            onChange: (e) => setSearch(e.target.value)
          }
        ),
        search && /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-slate-400 cursor-pointer", onClick: () => setSearch("") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-h-60 overflow-y-auto p-2 grid grid-cols-4 gap-1", children: filtered.map((icon) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            onChange(icon);
            setOpen(false);
          },
          className: `p-3 rounded-xl flex items-center justify-center transition-all hover:bg-violet-50 hover:text-violet-600 ${value === icon ? "bg-violet-100 text-violet-700 ring-1 ring-violet-200" : "text-slate-500"}`,
          title: icon,
          children: /* @__PURE__ */ jsx("i", { className: `${icon} text-xl` })
        },
        icon
      )) }),
      filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-6 text-center text-slate-400 text-sm italic", children: "Nenhum ícone encontrado" })
    ] })
  ] });
}

const DEFAULT = {
  hero: { title: "", subtitle: "", description: "", backgroundImage: "", btnLeft: { text: "", link: "" }, btnRight: { text: "", link: "" } },
  introArea: [],
  about: { title: "", subtitle: "", description: "", features: [], experienceYears: 10, experienceText: "", image1: "", image2: "" },
  skillArea: { title: "", subtitle: "", description: "", image1: "", image2: "", image3: "", skills: [] },
  serviceArea: { title: "", subtitle: "", items: [] },
  testimonial: { title: "", subtitle: "", items: [] },
  sectionTitles: { latestPosts: "", popularTab: "", recentTab: "" },
  latestPosts: { limit: 3, btnText: "", btnLink: "", subtitle: "", description: "" }
};
function HomeEditor() {
  const [config, setConfig] = useState(DEFAULT);
  const [fileSha, setFileSha] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState("hero");
  useEffect(() => {
    githubApi("read", "src/data/home.json").then((data) => {
      const parsed = JSON.parse(data.content);
      setConfig({ ...DEFAULT, ...parsed });
      setFileSha(data.sha);
    }).catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, []);
  async function save() {
    setSaving(true);
    try {
      await githubApi("write", "src/data/home.json", { content: JSON.stringify(config, null, 2), sha: fileSha });
      const fresh = await githubApi("read", "src/data/home.json");
      setFileSha(fresh.sha);
      triggerToast("Homepage atualizada!", "success");
    } catch (err) {
      triggerToast(err.message, "error");
    } finally {
      setSaving(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "flex justify-center p-10", children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-violet-500" }) });
  if (error) return /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 text-red-700 rounded-xl", children: [
    /* @__PURE__ */ jsx(AlertCircle, { className: "inline mr-2" }),
    error
  ] });
  const inputClass = "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm mb-3 focus:outline-none focus:border-violet-500";
  const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1";
  const updateNested = (section, field, value) => {
    setConfig((c) => ({ ...c, [section]: { ...c[section], [field]: value } }));
  };
  const renderField = (key, value, onUpdate) => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.includes("image") || lowerKey.includes("img") || lowerKey.includes("bg")) {
      return /* @__PURE__ */ jsx(ImageUpload, { label: key, value, onChange: onUpdate }, key);
    }
    if (lowerKey.includes("icon")) {
      return /* @__PURE__ */ jsx(IconPicker, { label: key, value, onChange: onUpdate }, key);
    }
    if (lowerKey === "description" || lowerKey === "text" || lowerKey === "desc" || lowerKey === "quote") {
      return /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsx("label", { className: labelClass, children: key }),
        /* @__PURE__ */ jsx("textarea", { value, onChange: (e) => onUpdate(e.target.value), className: `${inputClass} resize-y h-20` })
      ] }, key);
    }
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: labelClass, children: key }),
      /* @__PURE__ */ jsx("input", { type: typeof value === "number" ? "number" : "text", value, onChange: (e) => onUpdate(typeof value === "number" ? parseInt(e.target.value) || 0 : e.target.value), className: inputClass })
    ] }, key);
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl space-y-6 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Home, { className: "text-violet-600" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg text-slate-800", children: "Editor da Homepage" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Mapeamento dinâmico das seções do template iTechie" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: save, disabled: saving, className: "bg-violet-600 hover:bg-violet-700 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all", children: [
        saving ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "w-4 h-4" }),
        saving ? "Salvando..." : "Salvar Alterações"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 bg-white border border-slate-200 p-2 rounded-xl shadow-sm", children: ["hero", "intro", "about", "skills", "services", "testimonials", "blog", "sections"].map((t) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(t), className: `px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${tab === t ? "bg-violet-100 text-violet-700" : "text-slate-600 hover:bg-slate-50"}`, children: t }, t)) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[400px]", children: [
      tab === "hero" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Hero Banner" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          Object.keys(config.hero).filter((k) => typeof config.hero[k] !== "object").map((key) => {
            const label = key === "backgroundImage" ? "Imagem de Fundo (Main BG)" : key;
            return renderField(label, config.hero[key], (val) => updateNested("hero", key, val));
          }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-200", children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, children: "Botão Esquerdo" }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Texto", value: config.hero.btnLeft.text, onChange: (e) => updateNested("hero", "btnLeft", { ...config.hero.btnLeft, text: e.target.value }), className: inputClass }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Link", value: config.hero.btnLeft.link, onChange: (e) => updateNested("hero", "btnLeft", { ...config.hero.btnLeft, link: e.target.value }), className: inputClass })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-200", children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, children: "Botão Direito" }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Texto", value: config.hero.btnRight.text, onChange: (e) => updateNested("hero", "btnRight", { ...config.hero.btnRight, text: e.target.value }), className: inputClass }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Link", value: config.hero.btnRight.link, onChange: (e) => updateNested("hero", "btnRight", { ...config.hero.btnRight, link: e.target.value }), className: inputClass })
          ] })
        ] })
      ] }),
      tab === "intro" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Destaques Rápidos" }),
        config.introArea.map((item, i) => /* @__PURE__ */ jsx("div", { className: "mb-4 p-4 border border-slate-200 rounded-xl bg-slate-50 relative", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: Object.keys(item).map((k) => /* @__PURE__ */ jsx("div", { className: k === "text" ? "col-span-2" : "", children: renderField(k, item[k], (val) => {
          const n = [...config.introArea];
          n[i] = { ...n[i], [k]: val };
          setConfig({ ...config, introArea: n });
        }) }, k)) }) }, i))
      ] }),
      tab === "about" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Seção Sobre" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          Object.keys(config.about).filter((k) => !Array.isArray(config.about[k])).map(
            (key) => renderField(key, config.about[key], (val) => updateNested("about", key, val))
          ),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2 bg-slate-50 p-4 border border-slate-200 rounded-xl", children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, children: "Checklist de Vantagens" }),
            config.about.features.map((feat, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("input", { type: "text", value: feat, onChange: (e) => {
                const f = [...config.about.features];
                f[i] = e.target.value;
                updateNested("about", "features", f);
              }, className: "flex-1 px-3 py-2 border border-slate-200 rounded-md text-sm" }),
              /* @__PURE__ */ jsx("button", { onClick: () => {
                const f = config.about.features.filter((_, idx) => idx !== i);
                updateNested("about", "features", f);
              }, className: "p-2 text-red-500 hover:bg-red-50 rounded-md", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
            ] }, i)),
            /* @__PURE__ */ jsxs("button", { onClick: () => updateNested("about", "features", [...config.about.features, "Nova Vantagem"]), className: "text-violet-600 text-sm font-bold flex items-center gap-1 mt-2", children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
              " Adicionar Item"
            ] })
          ] })
        ] })
      ] }),
      tab === "skills" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Habilidades" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: Object.keys(config.skillArea).filter((k) => !Array.isArray(config.skillArea[k])).map(
          (key) => renderField(key, config.skillArea[key], (val) => updateNested("skillArea", key, val))
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 border border-slate-200 rounded-xl mt-4", children: [
          /* @__PURE__ */ jsx("label", { className: labelClass, children: "Barras de Progresso" }),
          config.skillArea.skills.map((skill, i) => /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 border border-slate-200 bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-2 gap-y-0 flex-1", children: Object.keys(skill).map((k) => /* @__PURE__ */ jsx("div", { children: renderField(k, skill[k], (val) => {
              const n = [...config.skillArea.skills];
              n[i] = { ...n[i], [k]: val };
              updateNested("skillArea", "skills", n);
            }) }, k)) }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              const s = config.skillArea.skills.filter((_, idx) => idx !== i);
              updateNested("skillArea", "skills", s);
            }, className: "p-2 text-red-500 hover:bg-red-50 rounded-md self-start mt-6", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
          ] }) }, i)),
          /* @__PURE__ */ jsxs("button", { onClick: () => updateNested("skillArea", "skills", [...config.skillArea.skills, { title: "Nova Habilidade", percentage: 50 }]), className: "text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 text-left", children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
            " Adicionar Habilidade"
          ] })
        ] })
      ] }),
      tab === "services" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Serviços" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: Object.keys(config.serviceArea).filter((k) => !Array.isArray(config.serviceArea[k])).map(
          (key) => renderField(key, config.serviceArea[key], (val) => updateNested("serviceArea", key, val))
        ) }),
        config.serviceArea.items.map((svc, i) => /* @__PURE__ */ jsxs("div", { className: "p-4 border border-slate-200 rounded-xl bg-slate-50 mb-3 relative", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => {
            const s = config.serviceArea.items.filter((_, idx) => idx !== i);
            updateNested("serviceArea", "items", s);
          }, className: "absolute top-2 right-2 text-red-400 hover:text-red-600", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mt-2", children: Object.keys(svc).map((k) => /* @__PURE__ */ jsx("div", { className: k === "desc" ? "col-span-2" : "", children: renderField(k, svc[k], (val) => {
            const s = [...config.serviceArea.items];
            s[i] = { ...s[i], [k]: val };
            updateNested("serviceArea", "items", s);
          }) }, k)) })
        ] }, i)),
        /* @__PURE__ */ jsxs("button", { onClick: () => updateNested("serviceArea", "items", [...config.serviceArea.items, { icon: "icomoon-monitor", title: "Novo Serviço", desc: "Descrição", link: "/servicos" }]), className: "text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 bg-violet-50 px-4 py-2 rounded-lg w-fit", children: [
          /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
          " Adicionar Serviço"
        ] })
      ] }),
      tab === "testimonials" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Depoimentos" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: Object.keys(config.testimonial).filter((k) => !Array.isArray(config.testimonial[k])).map(
          (key) => renderField(key, config.testimonial[key], (val) => updateNested("testimonial", key, val))
        ) }),
        config.testimonial.items.map((test, i) => /* @__PURE__ */ jsxs("div", { className: "p-4 border border-slate-200 rounded-xl bg-slate-50 mb-3 relative", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => {
            const s = config.testimonial.items.filter((_, idx) => idx !== i);
            updateNested("testimonial", "items", s);
          }, className: "absolute top-2 right-2 text-red-400 hover:text-red-600", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mt-2", children: Object.keys(test).map((k) => /* @__PURE__ */ jsx("div", { className: k === "quote" ? "col-span-2" : "", children: renderField(k, test[k], (val) => {
            const s = [...config.testimonial.items];
            s[i] = { ...s[i], [k]: val };
            updateNested("testimonial", "items", s);
          }) }, k)) })
        ] }, i)),
        /* @__PURE__ */ jsxs("button", { onClick: () => updateNested("testimonial", "items", [...config.testimonial.items, { name: "Cliente", role: "Cargo", image: "", rating: 5, quote: "Legal!" }]), className: "text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 bg-violet-50 px-4 py-2 rounded-lg w-fit", children: [
          /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
          " Adicionar Depoimento"
        ] })
      ] }),
      tab === "blog" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Configuração do Blog" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          renderField("Título da Seção", config.sectionTitles.latestPosts, (val) => setConfig({ ...config, sectionTitles: { ...config.sectionTitles, latestPosts: val } })),
          renderField("Subtítulo", config.latestPosts.subtitle, (val) => updateNested("latestPosts", "subtitle", val)),
          renderField("Descrição", config.latestPosts.description, (val) => updateNested("latestPosts", "description", val)),
          renderField("Limite de Posts", config.latestPosts.limit, (val) => updateNested("latestPosts", "limit", val)),
          renderField("Texto Botão", config.latestPosts.btnText, (val) => updateNested("latestPosts", "btnText", val)),
          renderField("Link Botão", config.latestPosts.btnLink, (val) => updateNested("latestPosts", "btnLink", val))
        ] })
      ] }),
      tab === "sections" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Secoes da Home" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 mb-4", children: "Escolha quais secoes ficam visiveis na homepage." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
          { key: "showIntro", label: "Destaques Rapidos (Intro)" },
          { key: "showAbout", label: "Secao Sobre" },
          { key: "showSkills", label: "Habilidades" },
          { key: "showServices", label: "Servicos" },
          { key: "showTestimonials", label: "Depoimentos" },
          { key: "showBlog", label: "Posts do Blog" }
        ].map((s) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              checked: config.sections?.[s.key] !== false,
              onChange: (e) => setConfig((c) => ({ ...c, sections: { ...c.sections, [s.key]: e.target.checked } })),
              className: "w-4 h-4 rounded text-violet-600 focus:ring-violet-500"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700", children: s.label })
        ] }, s.key)) })
      ] })
    ] })
  ] });
}

const prerender = false;
const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Home", "activeSection": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-2xl font-bold text-slate-900">Página Inicial</h1> <p class="text-slate-500 mt-1">Gerencie o conteúdo da homepage.</p> </div> ${renderComponent($$result2, "HomeEditor", HomeEditor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Projects/itechie-temp/src/components/admin/HomeEditor", "client:component-export": "default" })} ` })}`;
}, "C:/Projects/itechie-temp/src/pages/admin/home.astro", void 0);

const $$file = "C:/Projects/itechie-temp/src/pages/admin/home.astro";
const $$url = "/admin/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
