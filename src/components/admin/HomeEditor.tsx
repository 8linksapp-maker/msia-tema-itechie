import React, { useState, useEffect } from 'react';
import { Home, Save, Loader2, AlertCircle, Plus, Trash2, Info } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';
import ImageUpload from './ImageUpload';
import IconPicker from './IconPicker';

type HeroConfig = { title: string; subtitle: string; description: string; backgroundImage: string; btnLeft: { text: string; link: string }; btnRight: { text: string; link: string } };
type IntroConfig = { icon: string; title: string; desc: string };
type AboutConfig = { title: string; subtitle: string; description: string; features: string[]; experienceYears: number; experienceText: string; image1: string; image2: string };
type SkillConfig = { name: string; percentage: number };
type SkillAreaConfig = { title: string; subtitle: string; description: string; image1: string; image2: string; image3: string; skills: SkillConfig[] };
type ServiceConfig = { icon: string; title: string; desc: string; link: string };
type ServiceAreaConfig = { title: string; subtitle: string; items: ServiceConfig[] };
type TestimonialConfig = { image: string; name: string; role: string; rating: number; quote: string };
type TestimonialAreaConfig = { title: string; subtitle: string; items: TestimonialConfig[] };
type BlogAreaConfig = { limit: number; btnText: string; btnLink: string; subtitle: string; description: string };

type HomeConfig = {
    hero: HeroConfig;
    introArea: IntroConfig[];
    about: AboutConfig;
    skillArea: SkillAreaConfig;
    serviceArea: ServiceAreaConfig;
    testimonial: TestimonialAreaConfig;
    sectionTitles: { latestPosts: string; popularTab: string; recentTab: string };
    latestPosts: BlogAreaConfig;
};

const DEFAULT: HomeConfig = {
    hero: { title: "", subtitle: "", description: "", backgroundImage: "", btnLeft: { text: "", link: "" }, btnRight: { text: "", link: "" } },
    introArea: [],
    about: { title: "", subtitle: "", description: "", features: [], experienceYears: 10, experienceText: "", image1: "", image2: "" },
    skillArea: { title: "", subtitle: "", description: "", image1: "", image2: "", image3: "", skills: [] },
    serviceArea: { title: "", subtitle: "", items: [] },
    testimonial: { title: "", subtitle: "", items: [] },
    sectionTitles: { latestPosts: "", popularTab: "", recentTab: "" },
    latestPosts: { limit: 3, btnText: "", btnLink: "", subtitle: "", description: "" }
};

type Tab = 'hero' | 'intro' | 'about' | 'skills' | 'services' | 'testimonials' | 'blog' | 'sections';

export default function HomeEditor() {
    const [config, setConfig] = useState<HomeConfig>(DEFAULT);
    const [fileSha, setFileSha] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [tab, setTab] = useState<Tab>('hero');

    useEffect(() => {
        githubApi('read', 'src/data/home.json')
            .then(data => {
                const parsed = JSON.parse(data.content);
                setConfig({ ...DEFAULT, ...parsed });
                setFileSha(data.sha);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    async function save() {
        setSaving(true);
        try {
            await githubApi('write', 'src/data/home.json', { content: JSON.stringify(config, null, 2), sha: fileSha });
            const fresh = await githubApi('read', 'src/data/home.json');
            setFileSha(fresh.sha);
            triggerToast('Homepage atualizada!', 'success');
        } catch (err: any) {
            triggerToast(err.message, 'error');
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <div className="flex justify-center p-10"><Loader2 className="w-8 h-8 animate-spin text-violet-500" /></div>;
    if (error) return <div className="p-4 bg-red-50 text-red-700 rounded-xl"><AlertCircle className="inline mr-2" />{error}</div>;

    const inputClass = "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm mb-3 focus:outline-none focus:border-violet-500";
    const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1";

    const updateNested = (section: keyof HomeConfig, field: string, value: any) => {
        setConfig(c => ({ ...c, [section]: { ...(c[section] as any), [field]: value } }));
    };

    const renderField = (key: string, value: any, onUpdate: (val: any) => void) => {
        const lowerKey = key.toLowerCase();
        if (lowerKey.includes('image') || lowerKey.includes('img') || lowerKey.includes('bg')) {
            return <ImageUpload key={key} label={key} value={value} onChange={onUpdate} />;
        }
        if (lowerKey.includes('icon')) {
            return <IconPicker key={key} label={key} value={value} onChange={onUpdate} />;
        }
        if (lowerKey === 'description' || lowerKey === 'text' || lowerKey === 'desc' || lowerKey === 'quote') {
            return (
                <div key={key} className="col-span-2">
                    <label className={labelClass}>{key}</label>
                    <textarea value={value} onChange={e => onUpdate(e.target.value)} className={`${inputClass} resize-y h-20`} />
                </div>
            );
        }
        return (
            <div key={key}>
                <label className={labelClass}>{key}</label>
                <input type={typeof value === 'number' ? 'number' : 'text'} value={value} onChange={e => onUpdate(typeof value === 'number' ? parseInt(e.target.value) || 0 : e.target.value)} className={inputClass} />
            </div>
        );
    };

    return (
        <div className="max-w-4xl space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center"><Home className="text-violet-600" /></div>
                    <div><h2 className="font-bold text-lg text-slate-800">Editor da Homepage</h2><p className="text-xs text-slate-500">Mapeamento dinâmico das seções do template iTechie</p></div>
                </div>
                <button onClick={save} disabled={saving} className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{saving ? 'Salvando...' : 'Salvar Alterações'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 bg-white border border-slate-200 p-2 rounded-xl shadow-sm">
                {(['hero', 'intro', 'about', 'skills', 'services', 'testimonials', 'blog', 'sections'] as Tab[]).map(t => (
                    <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${tab === t ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                        {t}
                    </button>
                ))}
            </div>

            {/* Tab Panels */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[400px]">

                {tab === 'hero' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Hero Banner</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(config.hero).filter(k => typeof config.hero[k as keyof HeroConfig] !== 'object').map(key => {
                                const label = key === 'backgroundImage' ? 'Imagem de Fundo (Main BG)' : key;
                                return renderField(label, config.hero[key as keyof HeroConfig], (val) => updateNested('hero', key, val));
                            })}
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <label className={labelClass}>Botão Esquerdo</label>
                                <input type="text" placeholder="Texto" value={config.hero.btnLeft.text} onChange={e => updateNested('hero', 'btnLeft', { ...config.hero.btnLeft, text: e.target.value })} className={inputClass} />
                                <input type="text" placeholder="Link" value={config.hero.btnLeft.link} onChange={e => updateNested('hero', 'btnLeft', { ...config.hero.btnLeft, link: e.target.value })} className={inputClass} />
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <label className={labelClass}>Botão Direito</label>
                                <input type="text" placeholder="Texto" value={config.hero.btnRight.text} onChange={e => updateNested('hero', 'btnRight', { ...config.hero.btnRight, text: e.target.value })} className={inputClass} />
                                <input type="text" placeholder="Link" value={config.hero.btnRight.link} onChange={e => updateNested('hero', 'btnRight', { ...config.hero.btnRight, link: e.target.value })} className={inputClass} />
                            </div>
                        </div>
                    </div>
                )}

                {tab === 'intro' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Destaques Rápidos</h3>
                        {config.introArea.map((item, i) => (
                            <div key={i} className="mb-4 p-4 border border-slate-200 rounded-xl bg-slate-50 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.keys(item).map(k => (
                                        <div key={k} className={k === 'text' ? 'col-span-2' : ''}>
                                            {renderField(k, item[k as keyof IntroConfig], (val) => {
                                                const n = [...config.introArea];
                                                n[i] = { ...n[i], [k]: val };
                                                setConfig({ ...config, introArea: n });
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {tab === 'about' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Seção Sobre</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(config.about).filter(k => !Array.isArray(config.about[k as keyof AboutConfig])).map(key =>
                                renderField(key, config.about[key as keyof AboutConfig], (val) => updateNested('about', key, val))
                            )}
                            <div className="col-span-2 bg-slate-50 p-4 border border-slate-200 rounded-xl">
                                <label className={labelClass}>Checklist de Vantagens</label>
                                {config.about.features.map((feat, i) => (
                                    <div key={i} className="flex gap-2 mb-2">
                                        <input type="text" value={feat} onChange={e => { const f = [...config.about.features]; f[i] = e.target.value; updateNested('about', 'features', f); }} className="flex-1 px-3 py-2 border border-slate-200 rounded-md text-sm" />
                                        <button onClick={() => { const f = config.about.features.filter((_, idx) => idx !== i); updateNested('about', 'features', f); }} className="p-2 text-red-500 hover:bg-red-50 rounded-md"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                ))}
                                <button onClick={() => updateNested('about', 'features', [...config.about.features, 'Nova Vantagem'])} className="text-violet-600 text-sm font-bold flex items-center gap-1 mt-2"><Plus className="w-4 h-4" /> Adicionar Item</button>
                            </div>
                        </div>
                    </div>
                )}

                {tab === 'skills' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Habilidades</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(config.skillArea).filter(k => !Array.isArray(config.skillArea[k as keyof SkillAreaConfig])).map(key =>
                                renderField(key, (config.skillArea as any)[key], (val) => updateNested('skillArea', key, val))
                            )}
                        </div>
                        <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl mt-4">
                            <label className={labelClass}>Barras de Progresso</label>
                            {config.skillArea.skills.map((skill, i) => (
                                <div key={i} className="mb-4 p-3 border border-slate-200 bg-white rounded-lg shadow-sm">
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-0 flex-1">
                                            {Object.keys(skill).map(k => (
                                                <div key={k}>
                                                    {renderField(k, (skill as any)[k], (val) => {
                                                        const n = [...config.skillArea.skills];
                                                        n[i] = { ...n[i], [k]: val };
                                                        updateNested('skillArea', 'skills', n);
                                                    })}
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={() => { const s = config.skillArea.skills.filter((_, idx) => idx !== i); updateNested('skillArea', 'skills', s); }} className="p-2 text-red-500 hover:bg-red-50 rounded-md self-start mt-6"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            ))}
                            <button onClick={() => updateNested('skillArea', 'skills', [...config.skillArea.skills, { title: 'Nova Habilidade', percentage: 50 }])} className="text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 text-left"><Plus className="w-4 h-4" /> Adicionar Habilidade</button>
                        </div>
                    </div>
                )}

                {tab === 'services' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Serviços</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {Object.keys(config.serviceArea).filter(k => !Array.isArray(config.serviceArea[k as keyof ServiceAreaConfig])).map(key =>
                                renderField(key, (config.serviceArea as any)[key], (val) => updateNested('serviceArea', key, val))
                            )}
                        </div>
                        {config.serviceArea.items.map((svc, i) => (
                            <div key={i} className="p-4 border border-slate-200 rounded-xl bg-slate-50 mb-3 relative">
                                <button onClick={() => { const s = config.serviceArea.items.filter((_, idx) => idx !== i); updateNested('serviceArea', 'items', s); }} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    {Object.keys(svc).map(k => (
                                        <div key={k} className={k === 'desc' ? 'col-span-2' : ''}>
                                            {renderField(k, (svc as any)[k], (val) => {
                                                const s = [...config.serviceArea.items];
                                                s[i] = { ...s[i], [k]: val };
                                                updateNested('serviceArea', 'items', s);
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button onClick={() => updateNested('serviceArea', 'items', [...config.serviceArea.items, { icon: 'icomoon-monitor', title: 'Novo Serviço', desc: 'Descrição', link: '/servicos' }])} className="text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 bg-violet-50 px-4 py-2 rounded-lg w-fit"><Plus className="w-4 h-4" /> Adicionar Serviço</button>
                    </div>
                )}

                {tab === 'testimonials' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Depoimentos</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {Object.keys(config.testimonial).filter(k => !Array.isArray(config.testimonial[k as keyof TestimonialAreaConfig])).map(key =>
                                renderField(key, (config.testimonial as any)[key], (val) => updateNested('testimonial', key, val))
                            )}
                        </div>
                        {config.testimonial.items.map((test, i) => (
                            <div key={i} className="p-4 border border-slate-200 rounded-xl bg-slate-50 mb-3 relative">
                                <button onClick={() => { const s = config.testimonial.items.filter((_, idx) => idx !== i); updateNested('testimonial', 'items', s); }} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    {Object.keys(test).map(k => (
                                        <div key={k} className={k === 'quote' ? 'col-span-2' : ''}>
                                            {renderField(k, (test as any)[k], (val) => {
                                                const s = [...config.testimonial.items];
                                                s[i] = { ...s[i], [k]: val };
                                                updateNested('testimonial', 'items', s);
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button onClick={() => updateNested('testimonial', 'items', [...config.testimonial.items, { name: 'Cliente', role: 'Cargo', image: '', rating: 5, quote: 'Legal!' }])} className="text-violet-600 text-sm font-bold flex items-center gap-1 mt-2 bg-violet-50 px-4 py-2 rounded-lg w-fit"><Plus className="w-4 h-4" /> Adicionar Depoimento</button>
                    </div>
                )}

                {tab === 'blog' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Configuração do Blog</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {renderField('Título da Seção', config.sectionTitles.latestPosts, (val) => setConfig({ ...config, sectionTitles: { ...config.sectionTitles, latestPosts: val } }))}
                            {renderField('Subtítulo', config.latestPosts.subtitle, (val) => updateNested('latestPosts', 'subtitle', val))}
                            {renderField('Descrição', config.latestPosts.description, (val) => updateNested('latestPosts', 'description', val))}
                            {renderField('Limite de Posts', config.latestPosts.limit, (val) => updateNested('latestPosts', 'limit', val))}
                            {renderField('Texto Botão', config.latestPosts.btnText, (val) => updateNested('latestPosts', 'btnText', val))}
                            {renderField('Link Botão', config.latestPosts.btnLink, (val) => updateNested('latestPosts', 'btnLink', val))}
                        </div>
                    </div>
                )}

                {tab === 'sections' && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4">Secoes da Home</h3>
                        <p className="text-sm text-slate-500 mb-4">Escolha quais secoes ficam visiveis na homepage.</p>
                        <div className="space-y-3">
                            {[
                                { key: 'showIntro', label: 'Destaques Rapidos (Intro)' },
                                { key: 'showAbout', label: 'Secao Sobre' },
                                { key: 'showSkills', label: 'Habilidades' },
                                { key: 'showServices', label: 'Servicos' },
                                { key: 'showTestimonials', label: 'Depoimentos' },
                                { key: 'showBlog', label: 'Posts do Blog' },
                            ].map(s => (
                                <label key={s.key} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={(config as any).sections?.[s.key] !== false}
                                        onChange={e => setConfig(c => ({ ...c, sections: { ...(c as any).sections, [s.key]: e.target.checked } }))}
                                        className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500"
                                    />
                                    <span className="text-sm font-medium text-slate-700">{s.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
