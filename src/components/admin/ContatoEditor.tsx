import React, { useState, useEffect } from 'react';
import { Save, Loader2, LayoutTemplate, Plus, X } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';

const FILE_PATH = 'src/data/contato.json';

const DEFAULT: any = {
    breadcrumb: { title: 'Contato', subtitle: 'Contato' },
    intro: { title: '', subtitle: '', description: '' },
    contactBlocks: { items: [] },
    seo: { title: '', description: '' },
};

export default function ContatoEditor() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<any>(null);
    const [fileSha, setFileSha] = useState('');

    useEffect(() => {
        githubApi('read', FILE_PATH)
            .then((d: any) => {
                const parsed = JSON.parse(d?.content || '{}');
                const merged: any = {};
                Object.keys(DEFAULT).forEach(k => { merged[k] = { ...DEFAULT[k], ...(parsed[k] || {}) }; });
                setData(merged);
                setFileSha(d.sha);
            })
            .catch(err => { setError(err.message); setData(DEFAULT); })
            .finally(() => setLoading(false));
    }, []);

    const handleSave = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setSaving(true); setError('');
        triggerToast('Salvando Contato...', 'progress', 20);
        try {
            const res = await githubApi('write', FILE_PATH, { content: JSON.stringify(data, null, 2), sha: fileSha, message: 'CMS: Pagina Contato atualizada' });
            setFileSha(res.sha);
            triggerToast('Pagina Contato atualizada!', 'success', 100);
        } catch (err: any) { setError(err.message); triggerToast(`Erro: ${err.message}`, 'error'); }
        finally { setSaving(false); }
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-32 text-slate-400 bg-white rounded-2xl border border-slate-200">
            <LayoutTemplate className="w-10 h-10 animate-pulse mb-6 text-slate-300" />
            <p className="font-semibold text-sm animate-pulse text-slate-500">Buscando contato.json...</p>
        </div>
    );

    const cardClass = "p-8 mb-6 bg-white border border-slate-200 rounded-2xl shadow-sm";
    const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-sm";
    const labelClass = "block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1";
    const subInputClass = "w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-500";

    const setF = (sec: string, key: string, value: any) => setData((d: any) => ({ ...d, [sec]: { ...d[sec], [key]: value } }));
    const setItem = (idx: number, field: string, value: any) => setData((d: any) => {
        const arr = [...(d.contactBlocks.items || [])];
        arr[idx] = { ...(arr[idx] || {}), [field]: value };
        return { ...d, contactBlocks: { items: arr } };
    });
    const addItem = () => setData((d: any) => ({ ...d, contactBlocks: { items: [...(d.contactBlocks?.items || []), { icon: 'icomoon-chat', title: '', text: '' }] } }));
    const rmItem = (idx: number) => setData((d: any) => ({ ...d, contactBlocks: { items: d.contactBlocks.items.filter((_: any, i: number) => i !== idx) } }));

    return (
        <div className="max-w-4xl space-y-0 pb-32">
            <div className="flex items-center justify-between bg-white p-4 px-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sticky top-4 z-10">
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Editar Pagina: Contato</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Edita o arquivo <code className="bg-slate-100 px-1 rounded">{FILE_PATH}</code></p>
                </div>
                <button onClick={handleSave} disabled={saving} className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {saving ? 'Salvando...' : 'Salvar'}
                </button>
            </div>

            {error && <div className="p-3 bg-red-50 text-red-700 border-l-4 border-red-500 text-sm font-medium mb-4">{error}</div>}

            <form onSubmit={handleSave} className="space-y-6">
                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">1. Banner (Breadcrumb)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className={labelClass}>Titulo</label><input type="text" value={data?.breadcrumb?.title || ''} onChange={e => setF('breadcrumb', 'title', e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.breadcrumb?.subtitle || ''} onChange={e => setF('breadcrumb', 'subtitle', e.target.value)} className={inputClass} /></div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">2. Introducao</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.intro?.subtitle || ''} onChange={e => setF('intro', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.intro?.title || ''} onChange={e => setF('intro', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div><label className={labelClass}>Descricao</label><textarea rows={3} value={data?.intro?.description || ''} onChange={e => setF('intro', 'description', e.target.value)} className={`${inputClass} resize-y`} /></div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">3. Cards de Contato</h3>
                    <p className="text-xs text-slate-500 mb-4">Adicione cards com formas de contato (telefone, email, endereco, WhatsApp). Use HTML <code>&lt;br/&gt;</code> no texto para quebrar linhas.</p>
                    <div className="space-y-3">
                        {(data?.contactBlocks?.items || []).map((it: any, i: number) => (
                            <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Card {i + 1}</strong><button type="button" onClick={() => rmItem(i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <input type="text" placeholder="Titulo (ex: Telefone)" value={it.title || ''} onChange={e => setItem(i, 'title', e.target.value)} className={subInputClass} />
                                    <input type="text" placeholder="Icone (ex: icomoon-chat, fab fa-whatsapp)" value={it.icon || ''} onChange={e => setItem(i, 'icon', e.target.value)} className={`${subInputClass} font-mono`} />
                                </div>
                                <textarea rows={2} placeholder="Texto (HTML permitido)" value={it.text || ''} onChange={e => setItem(i, 'text', e.target.value)} className={`${subInputClass} resize-y`} />
                            </div>
                        ))}
                        <button type="button" onClick={addItem} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar card</button>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">SEO</h3>
                    <div className="space-y-4">
                        <div><label className={labelClass}>Titulo SEO</label><input type="text" value={data?.seo?.title || ''} onChange={e => setF('seo', 'title', e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>Meta descricao</label><textarea rows={3} value={data?.seo?.description || ''} onChange={e => setF('seo', 'description', e.target.value)} className={`${inputClass} resize-y`} /></div>
                    </div>
                </div>
            </form>
        </div>
    );
}
