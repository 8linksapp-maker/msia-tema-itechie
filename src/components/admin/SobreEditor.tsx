import React, { useState, useEffect } from 'react';
import { Save, Loader2, LayoutTemplate, Plus, X } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';

const FILE_PATH = 'src/data/sobre.json';

const DEFAULT: any = {
    breadcrumb: { title: '', subtitle: '' },
    about: { title: '', subtitle: '', description: '', image: '', skills: [] },
    chooseArea: { title: '', subtitle: '', image: '', items: [] },
    counter: { title: '', subtitle: '', image: '', stats: [] },
    faq: { title: '', subtitle: '', image: '', items: [] },
    team: { title: '', subtitle: '', members: [] },
    skillArea2: { title: '', subtitle: '', description: '', image: '', skills: [] },
    testimonial: { title: '', subtitle: '', items: [] },
    cta: { title: '', bgImage: '', btnText: '', btnLink: '/contato' },
    seo: { title: '', description: '', image: '' },
};

export default function SobreEditor() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<any>(null);
    const [fileSha, setFileSha] = useState('');
    const [pendingUploads, setPendingUploads] = useState<Record<string, File>>({});

    useEffect(() => {
        githubApi('read', FILE_PATH)
            .then((d: any) => {
                const parsed = JSON.parse(d?.content || '{}');
                const merged: any = { ...DEFAULT };
                Object.keys(DEFAULT).forEach(k => { merged[k] = { ...DEFAULT[k], ...(parsed[k] || {}) }; });
                setData(merged);
                setFileSha(d.sha);
            })
            .catch(err => { setError(err.message); setData(DEFAULT); })
            .finally(() => setLoading(false));
    }, []);

    const fileToBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve((r.result as string).split(',')[1]);
        r.onerror = reject;
        r.readAsDataURL(file);
    });

    const handleSave = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setSaving(true); setError('');
        triggerToast('Salvando Sobre...', 'progress', 20);
        try {
            const final = JSON.parse(JSON.stringify(data));
            for (const [key, file] of Object.entries(pendingUploads)) {
                const b64 = await fileToBase64(file);
                const ghPath = `public/uploads/${Date.now()}-${key.replace(/\./g, '-')}.${file.name.split('.').pop() || 'jpg'}`;
                await githubApi('write', ghPath, { content: b64, isBase64: true, message: `Upload imagem ${key}` });
                const url = ghPath.replace('public', '');
                const [section, field] = key.split('.');
                if (final[section]) final[section][field] = url;
            }
            const res = await githubApi('write', FILE_PATH, { content: JSON.stringify(final, null, 2), sha: fileSha, message: 'CMS: Pagina Sobre atualizada' });
            setFileSha(res.sha); setData(final); setPendingUploads({});
            triggerToast('Pagina Sobre atualizada!', 'success', 100);
        } catch (err: any) { setError(err.message); triggerToast(`Erro: ${err.message}`, 'error'); }
        finally { setSaving(false); }
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-32 text-slate-400 bg-white rounded-2xl border border-slate-200">
            <LayoutTemplate className="w-10 h-10 animate-pulse mb-6 text-slate-300" />
            <p className="font-semibold text-sm animate-pulse text-slate-500">Buscando sobre.json...</p>
        </div>
    );

    const cardClass = "p-8 mb-6 bg-white border border-slate-200 rounded-2xl shadow-sm";
    const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-sm";
    const labelClass = "block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1";
    const subInputClass = "w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-500";
    // Variante SEM w-full: usada nos rows horizontais (flex). Com w-full o input
    // numerico virava width:100% (w-full vence w-24/w-32 na ordem do CSS gerado)
    // e colapsava o input irmao flex-1, escondendo o texto sendo editado.
    const rowInputClass = "bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-500";

    const setF = (sec: string, key: string, value: any) => setData((d: any) => ({ ...d, [sec]: { ...d[sec], [key]: value } }));
    const setArr = (sec: string, key: string, idx: number, field: string, value: any) => setData((d: any) => {
        const arr = [...(d[sec][key] || [])];
        arr[idx] = { ...(arr[idx] || {}), [field]: value };
        return { ...d, [sec]: { ...d[sec], [key]: arr } };
    });
    const addItem = (sec: string, key: string, item: any) => setData((d: any) => ({ ...d, [sec]: { ...d[sec], [key]: [...(d[sec][key] || []), item] } }));
    const rmItem = (sec: string, key: string, idx: number) => setData((d: any) => ({ ...d, [sec]: { ...d[sec], [key]: d[sec][key].filter((_: any, i: number) => i !== idx) } }));

    const onFile = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0]; if (!f) return;
        setPendingUploads(p => ({ ...p, [key]: f }));
        const [sec, field] = key.split('.');
        setF(sec, field, URL.createObjectURL(f));
        e.target.value = '';
    };

    return (
        <div className="max-w-4xl space-y-0 pb-32">
            <div className="flex items-center justify-between bg-white p-4 px-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sticky top-4 z-10">
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Editar Pagina: Sobre Nos</h2>
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
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">2. Quem Somos (About)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.about?.subtitle || ''} onChange={e => setF('about', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.about?.title || ''} onChange={e => setF('about', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div><label className={labelClass}>Descricao</label><textarea rows={4} value={data?.about?.description || ''} onChange={e => setF('about', 'description', e.target.value)} className={`${inputClass} resize-y`} /></div>
                        <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                            <label className={labelClass}>Imagem</label>
                            <input type="file" accept="image/*" onChange={onFile('about.image')} className="text-sm" />
                            {data?.about?.image && <div className="mt-3 w-full h-[200px] border border-slate-300 rounded overflow-hidden"><img src={data.about.image} className="w-full h-full object-cover" /></div>}
                        </div>
                        <div>
                            <label className={labelClass}>Habilidades (com %)</label>
                            <div className="space-y-2">
                                {(data?.about?.skills || []).map((s: any, i: number) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <input type="text" placeholder="Nome" value={s.name || ''} onChange={e => setArr('about', 'skills', i, 'name', e.target.value)} className={`${rowInputClass} flex-1`} />
                                        <input type="number" min={0} max={100} placeholder="%" value={s.percentage || 0} onChange={e => setArr('about', 'skills', i, 'percentage', Number(e.target.value))} className={`${rowInputClass} w-24`} />
                                        <button type="button" onClick={() => rmItem('about', 'skills', i)} className="px-2 py-1 text-red-500"><X className="w-4 h-4" /></button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('about', 'skills', { name: '', percentage: 0 })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">3. Diferenciais (Choose Area)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.chooseArea?.subtitle || ''} onChange={e => setF('chooseArea', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.chooseArea?.title || ''} onChange={e => setF('chooseArea', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div>
                            <label className={labelClass}>Items</label>
                            <div className="space-y-2">
                                {(data?.chooseArea?.items || []).map((it: any, i: number) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                        <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Item {i + 1}</strong><button type="button" onClick={() => rmItem('chooseArea', 'items', i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                        <input type="text" placeholder="Titulo" value={it.title || ''} onChange={e => setArr('chooseArea', 'items', i, 'title', e.target.value)} className={subInputClass} />
                                        <textarea rows={2} placeholder="Texto" value={it.text || ''} onChange={e => setArr('chooseArea', 'items', i, 'text', e.target.value)} className={`${subInputClass} resize-y`} />
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('chooseArea', 'items', { title: '', text: '', icon: 'icomoon-application' })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">4. Numeros (Counter)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.counter?.subtitle || ''} onChange={e => setF('counter', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.counter?.title || ''} onChange={e => setF('counter', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div>
                            <label className={labelClass}>Estatisticas</label>
                            <div className="space-y-2">
                                {(data?.counter?.stats || []).map((s: any, i: number) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <input type="number" placeholder="Numero" value={s.number || 0} onChange={e => setArr('counter', 'stats', i, 'number', Number(e.target.value))} className={`${rowInputClass} w-32`} />
                                        <input type="text" placeholder="Texto" value={s.text || ''} onChange={e => setArr('counter', 'stats', i, 'text', e.target.value)} className={`${rowInputClass} flex-1`} />
                                        <button type="button" onClick={() => rmItem('counter', 'stats', i)} className="text-red-500"><X className="w-4 h-4" /></button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('counter', 'stats', { number: 0, text: '' })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">5. Perguntas Frequentes (FAQ)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.faq?.subtitle || ''} onChange={e => setF('faq', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.faq?.title || ''} onChange={e => setF('faq', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div>
                            <label className={labelClass}>Perguntas</label>
                            <div className="space-y-2">
                                {(data?.faq?.items || []).map((it: any, i: number) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                        <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Pergunta {i + 1}</strong><button type="button" onClick={() => rmItem('faq', 'items', i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                        <input type="text" placeholder="Pergunta" value={it.q || ''} onChange={e => setArr('faq', 'items', i, 'q', e.target.value)} className={subInputClass} />
                                        <textarea rows={2} placeholder="Resposta" value={it.a || ''} onChange={e => setArr('faq', 'items', i, 'a', e.target.value)} className={`${subInputClass} resize-y`} />
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('faq', 'items', { q: '', a: '' })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">6. Equipe (Team)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.team?.subtitle || ''} onChange={e => setF('team', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.team?.title || ''} onChange={e => setF('team', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div>
                            <label className={labelClass}>Membros</label>
                            <div className="space-y-2">
                                {(data?.team?.members || []).map((m: any, i: number) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                        <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Membro {i + 1}</strong><button type="button" onClick={() => rmItem('team', 'members', i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                        <input type="text" placeholder="Nome" value={m.name || ''} onChange={e => setArr('team', 'members', i, 'name', e.target.value)} className={subInputClass} />
                                        <input type="text" placeholder="Cargo" value={m.role || ''} onChange={e => setArr('team', 'members', i, 'role', e.target.value)} className={subInputClass} />
                                        <input type="text" placeholder="URL da imagem" value={m.image || ''} onChange={e => setArr('team', 'members', i, 'image', e.target.value)} className={subInputClass} />
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('team', 'members', { name: '', role: '', image: '' })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">7. Habilidades / Servicos (Skill Area 2)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.skillArea2?.subtitle || ''} onChange={e => setF('skillArea2', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.skillArea2?.title || ''} onChange={e => setF('skillArea2', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div><label className={labelClass}>Descricao</label><textarea rows={3} value={data?.skillArea2?.description || ''} onChange={e => setF('skillArea2', 'description', e.target.value)} className={`${inputClass} resize-y`} /></div>
                        <div><label className={labelClass}>URL da imagem</label><input type="text" value={data?.skillArea2?.image || ''} onChange={e => setF('skillArea2', 'image', e.target.value)} className={inputClass} /></div>
                        <div>
                            <label className={labelClass}>Skills / Barras de progresso</label>
                            <div className="space-y-2">
                                {(data?.skillArea2?.skills || []).map((s: any, i: number) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                        <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Skill {i + 1}</strong><button type="button" onClick={() => rmItem('skillArea2', 'skills', i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                        <input type="text" placeholder="Nome (ex: Atendimento)" value={s.name || ''} onChange={e => setArr('skillArea2', 'skills', i, 'name', e.target.value)} className={subInputClass} />
                                        <input type="number" min="0" max="100" placeholder="Porcentagem (0-100)" value={s.percent ?? ''} onChange={e => setArr('skillArea2', 'skills', i, 'percent', Number(e.target.value))} className={subInputClass} />
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('skillArea2', 'skills', { name: '', percent: 80 })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">8. Depoimentos (Testimonial)</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Subtitulo</label><input type="text" value={data?.testimonial?.subtitle || ''} onChange={e => setF('testimonial', 'subtitle', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Titulo</label><input type="text" value={data?.testimonial?.title || ''} onChange={e => setF('testimonial', 'title', e.target.value)} className={inputClass} /></div>
                        </div>
                        <div>
                            <label className={labelClass}>Depoimentos</label>
                            <div className="space-y-2">
                                {(data?.testimonial?.items || []).map((it: any, i: number) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 space-y-2">
                                        <div className="flex justify-between items-center"><strong className="text-xs text-slate-500">Depoimento {i + 1}</strong><button type="button" onClick={() => rmItem('testimonial', 'items', i)} className="text-red-500"><X className="w-4 h-4" /></button></div>
                                        <input type="text" placeholder="Nome" value={it.name || ''} onChange={e => setArr('testimonial', 'items', i, 'name', e.target.value)} className={subInputClass} />
                                        <input type="text" placeholder="Cargo / empresa" value={it.role || ''} onChange={e => setArr('testimonial', 'items', i, 'role', e.target.value)} className={subInputClass} />
                                        <input type="text" placeholder="URL da imagem (opcional)" value={it.image || ''} onChange={e => setArr('testimonial', 'items', i, 'image', e.target.value)} className={subInputClass} />
                                        <textarea rows={3} placeholder="Texto do depoimento" value={it.text || ''} onChange={e => setArr('testimonial', 'items', i, 'text', e.target.value)} className={`${subInputClass} resize-y`} />
                                    </div>
                                ))}
                                <button type="button" onClick={() => addItem('testimonial', 'items', { name: '', role: '', image: '', text: '' })} className="text-sm font-bold text-violet-600 flex items-center gap-1"><Plus className="w-4 h-4" /> Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">9. Chamada (CTA)</h3>
                    <div className="space-y-4">
                        <div><label className={labelClass}>Titulo</label><input type="text" value={data?.cta?.title || ''} onChange={e => setF('cta', 'title', e.target.value)} className={inputClass} /></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={labelClass}>Texto do botao</label><input type="text" value={data?.cta?.btnText || ''} onChange={e => setF('cta', 'btnText', e.target.value)} className={inputClass} /></div>
                            <div><label className={labelClass}>Link do botao</label><input type="text" value={data?.cta?.btnLink || ''} onChange={e => setF('cta', 'btnLink', e.target.value)} className={`${inputClass} font-mono`} /></div>
                        </div>
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
