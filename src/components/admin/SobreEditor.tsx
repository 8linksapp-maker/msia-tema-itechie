import React, { useState, useEffect } from 'react';
import { Info, Save, Loader2, AlertCircle, Plus, Trash2 } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';
import ImageUpload from './ImageUpload';
import IconPicker from './IconPicker';

type SobreConfig = any;

const DEFAULT: SobreConfig = {};

export default function SobreEditor() {
    const [config, setConfig] = useState<SobreConfig>(DEFAULT);
    const [fileSha, setFileSha] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [tab, setTab] = useState('about');

    useEffect(() => {
        githubApi('read', 'src/data/sobre.json')
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
            await githubApi('write', 'src/data/sobre.json', { content: JSON.stringify(config, null, 2), sha: fileSha });
            const fresh = await githubApi('read', 'src/data/sobre.json');
            setFileSha(fresh.sha);
            triggerToast('Página Sobre atualizada!', 'success');
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
    const tabs = ['breadcrumb', 'about', 'chooseArea', 'counter', 'faq', 'team', 'skillArea2', 'cta'];

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
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><Info className="text-blue-600" /></div>
                    <div><h2 className="font-bold text-lg text-slate-800">Editor da Página Sobre</h2><p className="text-xs text-slate-500">Administre o histórico e as seções corporativas</p></div>
                </div>
                <button onClick={save} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{saving ? 'Salvando...' : 'Salvar Alterações'}
                </button>
            </div>

            <div className="flex flex-wrap gap-2 bg-white border border-slate-200 p-2 rounded-xl shadow-sm">
                {tabs.map(t => (
                    <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${tab === t ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                        {t.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                ))}
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[400px]">
                {config[tab] && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg mb-4 capitalize">{tab.replace(/([A-Z])/g, ' $1').trim()}</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(config[tab]).filter(k => !Array.isArray(config[tab][k])).map(key =>
                                renderField(key, config[tab][key], (val) => updateNested(tab, key, val))
                            )}
                        </div>

                        {['items', 'skills', 'stats', 'members'].map(arrKey => {
                            if (Array.isArray(config[tab][arrKey])) {
                                return (
                                    <div key={arrKey} className="bg-slate-50 p-4 border border-slate-200 rounded-xl mt-4">
                                        <label className={labelClass}>Lista: {arrKey}</label>
                                        {config[tab][arrKey].map((item: any, i: number) => (
                                            <div key={i} className="mb-4 p-3 border border-slate-200 bg-white rounded-lg shadow-sm">
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <div className="grid grid-cols-2 gap-x-2 gap-y-0 flex-1">
                                                        {Object.keys(item).map(k => (
                                                            <div key={k}>
                                                                {renderField(k, item[k], (val) => {
                                                                    const nArr = [...config[tab][arrKey]];
                                                                    nArr[i][k] = val;
                                                                    updateNested(tab, arrKey, nArr);
                                                                })}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <button onClick={() => {
                                                        const nArr = config[tab][arrKey].filter((_: any, idx: number) => idx !== i);
                                                        updateNested(tab, arrKey, nArr);
                                                    }} className="p-2 text-red-500 hover:bg-red-50 rounded-md self-start mt-6"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                        ))}
                                        <button onClick={() => {
                                            const scaffold = Object.keys(config[tab][arrKey][0] || { title: "", text: "" }).reduce((acc: any, k) => { acc[k] = ''; return acc; }, {});
                                            updateNested(tab, arrKey, [...config[tab][arrKey], scaffold]);
                                        }} className="text-blue-600 text-sm font-bold flex items-center gap-1 mt-2"><Plus className="w-4 h-4" /> Adicionar Item</button>
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
