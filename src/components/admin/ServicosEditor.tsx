import React, { useState, useEffect } from 'react';
import { Info, Save, Loader2, AlertCircle, Plus, Trash2, ArrowLeft, Layout, FileText, Settings } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';
import ImageUpload from './ImageUpload';
import IconPicker from './IconPicker';

type GenericConfig = any;

const DEFAULT: GenericConfig = {};

export default function ServicosEditor() {
    const [config, setConfig] = useState<GenericConfig>(DEFAULT);
    const [fileSha, setFileSha] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [tab, setTab] = useState('serviceArea');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    useEffect(() => {
        githubApi('read', 'src/data/servicos.json')
            .then(data => {
                setConfig(JSON.parse(data.content));
                setFileSha(data.sha);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    async function save() {
        setSaving(true);
        try {
            await githubApi('write', 'src/data/servicos.json', { content: JSON.stringify(config, null, 2), sha: fileSha });
            const fresh = await githubApi('read', 'src/data/servicos.json');
            setFileSha(fresh.sha);
            triggerToast('Página Serviços atualizada!', 'success');
        } catch (err: any) {
            triggerToast(err.message, 'error');
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <div className="flex justify-center p-10"><Loader2 className="w-8 h-8 animate-spin text-violet-500" /></div>;
    if (error) return <div className="p-4 bg-red-50 text-red-700 rounded-xl"><AlertCircle className="inline mr-2" />{error}</div>;

    const inputClass = "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm mb-3 focus:outline-none focus:border-violet-500 transition-all";
    const labelClass = "block text-sm font-bold text-slate-500 uppercase tracking-wider mb-1";
    const tabs = [
        { id: 'breadcrumb', label: 'Cabeçalhos' },
        { id: 'serviceArea', label: 'Serviços' },
        { id: 'workArea', label: 'Como Trabalhamos' },
        { id: 'pricing', label: 'Preços' },
        { id: 'cta', label: 'Chamada (CTA)' }
    ];

    const updateNested = (section: string, field: string, value: any) => {
        setConfig((c: any) => ({ ...c, [section]: { ...c[section], [field]: value } }));
    };

    const renderField = (key: string, value: any, onUpdate: (val: any) => void) => {
        const lowerKey = key.toLowerCase();
        if (lowerKey.includes('image') || lowerKey.includes('img') || lowerKey.includes('bg')) {
            return <ImageUpload key={key} label={key} value={value} onChange={onUpdate} />;
        }
        if (lowerKey.includes('icon')) {
            return <IconPicker key={key} label={key} value={value} onChange={onUpdate} />;
        }
        if (lowerKey === 'description' || lowerKey === 'text' || lowerKey === 'desc' || lowerKey === 'fulldesc' || lowerKey === 'moreinfo') {
            return (
                <div key={key} className="col-span-2">
                    <label className={labelClass}>{key === 'fullDesc' ? 'Descrição da Página Individual' : key === 'moreInfo' ? 'Texto Extra do Final' : key}</label>
                    <textarea value={value} onChange={e => onUpdate(e.target.value)} className={`${inputClass} resize-y h-24`} placeholder="..." />
                </div>
            );
        }
        return (
            <div key={key}>
                <label className={labelClass}>{key}</label>
                <input type={typeof value === 'number' ? 'number' : 'text'} value={value} onChange={e => onUpdate(typeof value === 'number' ? parseInt(e.target.value) || 0 : e.target.value)} className={inputClass} placeholder="..." />
            </div>
        );
    };

    const renderArrayField = (arrKey: string, items: any[], onUpdate: (val: any[]) => void) => {
        return (
            <div className="bg-slate-50/50 p-4 rounded-xl border border-dashed border-slate-200 mt-2">
                <label className={labelClass}>{arrKey}</label>
                <div className="space-y-3">
                    {items.map((item, i) => (
                        <div key={i} className="flex gap-2 items-start">
                            <div className="flex-1 bg-white p-3 rounded-lg border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                                {typeof item === 'string' ? (
                                    <input value={item} onChange={e => {
                                        const n = [...items];
                                        n[i] = e.target.value;
                                        onUpdate(n);
                                    }} className={inputClass} />
                                ) : (
                                    Object.keys(item).map(k => (
                                        <div key={k}>
                                            {renderField(k, item[k], (val) => {
                                                const n = [...items];
                                                n[i] = { ...n[i], [k]: val };
                                                onUpdate(n);
                                            })}
                                        </div>
                                    ))
                                )}
                            </div>
                            <button onClick={() => onUpdate(items.filter((_, idx) => idx !== i))} className="p-2 text-danger hover:bg-red-50 rounded-lg transition-all">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={() => {
                    const scaffold = typeof items[0] === 'string' ? '' :
                        Object.keys(items[0] || { title: "", icon: "", desc: "" }).reduce((acc: any, k) => { acc[k] = ''; return acc; }, {});
                    onUpdate([...items, scaffold]);
                }} className="mt-3 text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
                    <Plus className="w-4 h-4" /> Adicionar a {arrKey}
                </button>
            </div>
        );
    };

    return (
        <div className="max-w-5xl space-y-6 pb-20">
            {/* Standard Header Bar */}
            <div className="flex items-center justify-between bg-white p-4 px-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                    {editingIndex !== null ? (
                        <button onClick={() => setEditingIndex(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-500">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    ) : (
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                            <Settings className="w-6 h-6" />
                        </div>
                    )}
                    <div>
                        <h2 className="font-bold text-lg text-slate-800">
                            {editingIndex !== null ? `Editando: ${config.serviceArea.items[editingIndex].title}` : 'CMS de Serviços'}
                        </h2>
                        <p className="text-xs text-slate-500">
                            {editingIndex !== null ? 'Configure o conteúdo detalhado da página individual' : 'Gerencie planos, itens e metodologia'}
                        </p>
                    </div>
                </div>
                <button onClick={save} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-lg active:scale-95 disabled:opacity-50">
                    {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                    {saving ? 'Gravando...' : 'Salvar Alterações'}
                </button>
            </div>

            {editingIndex === null ? (
                <>
                    <div className="flex flex-wrap gap-2 bg-white border border-slate-200 p-2 rounded-xl shadow-sm">
                        {tabs.map(t => (
                            <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t.id ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm min-h-[400px]">
                        {tab === 'serviceArea' ? (
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="font-bold text-xl text-slate-800">Listagem de Serviços</h3>
                                            <p className="text-sm text-slate-500">Gerencie os itens da vitrine e suas páginas detalhadas</p>
                                        </div>
                                        <button onClick={() => {
                                            const scaffold = {
                                                icon: "fas fa-check", title: "Novo Serviço", slug: "novo-servico",
                                                desc: "Texto curto pro card", fullDesc: "Conteúdo longo da página...",
                                                benefits: [], categories: [], moreInfo: "",
                                                sidebarCta: { title: "Precisa de Ajuda?", subtitle: "Fale com nossos especialistas.", btnText: "Contato", btnLink: "/contato" }
                                            };
                                            const nArr = [...config.serviceArea.items, scaffold];
                                            updateNested('serviceArea', 'items', nArr);
                                            setEditingIndex(nArr.length - 1);
                                        }} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
                                            <Plus className="w-4 h-4" /> Novo Serviço
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {config.serviceArea.items.map((item: any, i: number) => (
                                            <div key={i} className="group p-5 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all bg-white relative">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 text-3xl group-hover:bg-orange-50 group-hover:text-orange-600 transition-all">
                                                        <i className={item.icon}></i>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-slate-800 text-lg truncate">{item.title}</h4>
                                                        <p className="text-sm text-slate-500 line-clamp-2 mt-1">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-5 flex items-center gap-2">
                                                    <button onClick={() => setEditingIndex(i)} className="flex-1 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-600 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2">
                                                        <FileText className="w-4 h-4" /> Personalizar Conteúdo
                                                    </button>
                                                    <button onClick={() => {
                                                        const nArr = config.serviceArea.items.filter((_: any, idx: number) => idx !== i);
                                                        updateNested('serviceArea', 'items', nArr);
                                                    }} className="p-2.5 text-danger hover:bg-red-50 rounded-xl transition-all">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {config[tab] && Object.keys(config[tab]).filter(k => !Array.isArray(config[tab][k])).map(key =>
                                        renderField(key, config[tab][key], (val) => updateNested(tab, key, val))
                                    )}
                                </div>

                                {config[tab] && Object.keys(config[tab]).filter(k => Array.isArray(config[tab][k])).map(arrKey => (
                                    <div key={arrKey} className="mt-8 pt-8 border-t border-slate-100">
                                        {renderArrayField(arrKey, config[tab][arrKey], (val) => updateNested(tab, arrKey, val))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                        <section>
                            <div className="flex items-center gap-2 mb-6 text-violet-600 border-b border-slate-100 pb-3">
                                <Layout className="w-6 h-6" />
                                <h3 className="font-bold text-lg">Aparência no Card (Catálogo)</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.keys(config.serviceArea.items[editingIndex]).filter(k => !Array.isArray(config.serviceArea.items[editingIndex][k]) && !['fullDesc', 'moreInfo', 'slug', 'sidebarCta'].includes(k)).map(k =>
                                    renderField(k, config.serviceArea.items[editingIndex][k], (val) => {
                                        const nArr = [...config.serviceArea.items];
                                        nArr[editingIndex] = { ...nArr[editingIndex], [k]: val };
                                        updateNested('serviceArea', 'items', nArr);
                                    })
                                )}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-2 mb-6 text-blue-600 border-b border-slate-100 pb-3">
                                <FileText className="w-6 h-6" />
                                <h3 className="font-bold text-lg">Conteúdo da Página do Serviço</h3>
                            </div>
                            <div className="space-y-6">
                                {renderField('slug', config.serviceArea.items[editingIndex].slug, (val) => {
                                    const cleanSlug = val.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                                    const nArr = [...config.serviceArea.items];
                                    nArr[editingIndex] = { ...nArr[editingIndex], slug: cleanSlug };
                                    updateNested('serviceArea', 'items', nArr);
                                })}
                                {renderField('fullDesc', config.serviceArea.items[editingIndex].fullDesc, (val) => {
                                    const nArr = [...config.serviceArea.items];
                                    nArr[editingIndex] = { ...nArr[editingIndex], fullDesc: val };
                                    updateNested('serviceArea', 'items', nArr);
                                })}
                                {renderField('moreInfo', config.serviceArea.items[editingIndex].moreInfo, (val) => {
                                    const nArr = [...config.serviceArea.items];
                                    nArr[editingIndex] = { ...nArr[editingIndex], moreInfo: val };
                                    updateNested('serviceArea', 'items', nArr);
                                })}

                                <div className="grid grid-cols-1 gap-6">
                                    {renderArrayField('benefits', config.serviceArea.items[editingIndex].benefits || [], (val) => {
                                        const nArr = [...config.serviceArea.items];
                                        nArr[editingIndex] = { ...nArr[editingIndex], benefits: val };
                                        updateNested('serviceArea', 'items', nArr);
                                    })}
                                    {renderArrayField('categories', config.serviceArea.items[editingIndex].categories || [], (val) => {
                                        const nArr = [...config.serviceArea.items];
                                        nArr[editingIndex] = { ...nArr[editingIndex], categories: val };
                                        updateNested('serviceArea', 'items', nArr);
                                    })}
                                </div>
                            </div>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                            <div className="flex items-center gap-2 mb-6 text-orange-600 border-b border-slate-100 pb-3">
                                <Layout className="w-6 h-6" />
                                <h3 className="font-bold text-lg">CTA da Barra Lateral (Sidebar)</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { k: 'title', l: 'Título Chamativo' },
                                    { k: 'subtitle', l: 'Breve Texto de Apoio' },
                                    { k: 'btnText', l: 'Texto do Botão' },
                                    { k: 'btnLink', l: 'Link de Destino' }
                                ].map(f => (
                                    <div key={f.k} className={f.k === 'subtitle' ? 'col-span-2' : ''}>
                                        <label className={labelClass}>{f.l}</label>
                                        {f.k === 'subtitle' ? (
                                            <textarea
                                                value={config.serviceArea.items[editingIndex].sidebarCta?.[f.k] || ''}
                                                onChange={e => {
                                                    const nArr = [...config.serviceArea.items];
                                                    nArr[editingIndex] = {
                                                        ...nArr[editingIndex],
                                                        sidebarCta: { ...(nArr[editingIndex].sidebarCta || {}), [f.k]: e.target.value }
                                                    };
                                                    updateNested('serviceArea', 'items', nArr);
                                                }}
                                                className={`${inputClass} h-24 resize-none`}
                                            />
                                        ) : (
                                            <input
                                                value={config.serviceArea.items[editingIndex].sidebarCta?.[f.k] || ''}
                                                onChange={e => {
                                                    const nArr = [...config.serviceArea.items];
                                                    nArr[editingIndex] = {
                                                        ...nArr[editingIndex],
                                                        sidebarCta: { ...(nArr[editingIndex].sidebarCta || {}), [f.k]: e.target.value }
                                                    };
                                                    updateNested('serviceArea', 'items', nArr);
                                                }}
                                                className={inputClass}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
