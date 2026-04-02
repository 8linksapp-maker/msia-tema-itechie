import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, Loader2 } from 'lucide-react';
import { triggerToast } from './CmsToaster';
import { githubApi } from '../../lib/adminApi';
import ImageUpload from './ImageUpload';

export default function ConfigEditor() {
    const [config, setConfig] = useState<any>(null);
    const [fileSha, setFileSha] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        githubApi('read', 'src/data/siteConfig.json')
            .then(data => { setConfig(JSON.parse(data.content)); setFileSha(data.sha); })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true); setError('');
        try {
            const res = await githubApi('write', 'src/data/siteConfig.json', { content: JSON.stringify(config, null, 2), sha: fileSha, message: 'CMS: Update siteConfig.json' });
            setFileSha(res.sha);
            triggerToast('Configurações salvas com sucesso!', 'success');
        } catch (err: any) {
            setError(err.message); triggerToast(`Erro: ${err.message}`, 'error');
        } finally { setSaving(false); }
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-20 text-slate-400 bg-white rounded-3xl border border-slate-200">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-violet-500" />
            <p className="font-medium animate-pulse">Conectando ao Repositório...</p>
        </div>
    );

    const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-sm text-slate-800 font-medium";
    const labelClass = "block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1";

    const presetThemes = [
        { name: 'Deep Tech (Original)', primary: '#2e38dc', secondary: '#0b0d26', accent: '#007bff', bgDark: '#0b0d26', bgLight: '#f4f4ff', textOnPrimary: '#ffffff' },
        { name: 'Modern SaaS', primary: '#3b82f6', secondary: '#0f172a', accent: '#10b981', bgDark: '#0f172a', bgLight: '#f8fafc', textOnPrimary: '#ffffff' },
        { name: 'Cyberpunk', primary: '#7c3aed', secondary: '#1e1b4b', accent: '#f43f5e', bgDark: '#1e1b4b', bgLight: '#faf5ff', textOnPrimary: '#ffffff' },
        { name: 'Eco Growth', primary: '#10b981', secondary: '#064e3b', accent: '#84cc16', bgDark: '#064e3b', bgLight: '#f0fdf4', textOnPrimary: '#ffffff' },
        { name: 'Premium Gold', primary: '#d4af37', secondary: '#1a1a1a', accent: '#ffffff', bgDark: '#000000', bgLight: '#fcfcfc', textOnPrimary: '#000000' },
        { name: 'Midnight Blue', primary: '#1e40af', secondary: '#1e1b4b', accent: '#38bdf8', bgDark: '#0f172a', bgLight: '#eff6ff', textOnPrimary: '#ffffff' },
    ];

    return (
        <form onSubmit={handleSave} className="space-y-8 pb-32 max-w-3xl">
            <div className="flex items-center justify-between bg-white p-4 px-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Configurações Gerais</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Edita o arquivo <code className="bg-slate-100 px-1 rounded">src/data/siteConfig.json</code></p>
                </div>
                <button type="submit" disabled={saving} className="bg-violet-600 hover:bg-violet-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm shadow-violet-600/20 transition-all">
                    {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                    {saving ? 'Salvando...' : 'Salvar Alterações'}
                </button>
            </div>

            {error && <div className="p-5 bg-red-100/50 text-red-700 rounded-2xl font-bold border border-red-200 flex gap-3"><AlertCircle className="w-5 h-5 shrink-0" /> {error}</div>}

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Identidade & Cores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2 flex flex-col sm:flex-row gap-8 items-start border-b border-slate-50 pb-8">
                        <div className="w-full sm:w-1/3">
                            <ImageUpload label="Logo Principal" value={config?.logo} onChange={(url) => setConfig({ ...config, logo: url })} />
                        </div>
                        <div className="w-full sm:w-2/3 space-y-6">
                            <div>
                                <label className={labelClass}>Nome do Site / Empresa</label>
                                <input type="text" value={config?.name || ''} onChange={e => setConfig({ ...config, name: e.target.value })} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Temas e Paletas Prontas</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {presetThemes.map(preset => (
                                        <button
                                            key={preset.name}
                                            type="button"
                                            onClick={() => setConfig({ ...config, theme: { ...config.theme, ...preset } })}
                                            className="flex flex-col gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-violet-400 hover:bg-violet-50 transition-all text-left"
                                        >
                                            <div className="flex gap-1.5">
                                                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ background: preset.primary }} title="Primária" />
                                                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ background: preset.secondary }} title="Secundária" />
                                                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ background: preset.accent }} title="Acento" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-tight text-slate-500">{preset.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass}>Personalização Livre da Paleta</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            {[
                                { key: 'primary', label: 'Cor Primária', desc: 'Botões e Links' },
                                { key: 'secondary', label: 'Cor Secundária', desc: 'Elementos de Apoio' },
                                { key: 'accent', label: 'Cor de Destaque', desc: 'Pontos de Atenção' },
                                { key: 'bgDark', label: 'Fundo Escuro', desc: 'Header/Footer' },
                                { key: 'bgLight', label: 'Fundo Claro', desc: 'Seções Secundárias' },
                                { key: 'textOnPrimary', label: 'Texto sobre Primária', desc: 'Contraste do Botão' },
                            ].map(f => (
                                <div key={f.key} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-3">{f.label}</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="color"
                                            value={config?.theme?.[f.key] || '#000000'}
                                            onChange={e => setConfig({ ...config, theme: { ...config.theme, [f.key]: e.target.value } })}
                                            className="h-12 w-12 p-1 border-0 rounded-full cursor-pointer bg-white shadow-sm"
                                        />
                                        <input
                                            type="text"
                                            value={config?.theme?.[f.key] || ''}
                                            onChange={e => setConfig({ ...config, theme: { ...config.theme, [f.key]: e.target.value } })}
                                            className="w-full bg-transparent border-none focus:outline-none font-mono text-sm text-slate-700 font-bold"
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-2 italic">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass}>Combinação de Fontes</label>
                        <select value={config?.theme?.font || 'outfit'} onChange={e => setConfig({ ...config, theme: { ...config.theme, font: e.target.value } })} className={inputClass}>
                            <option value="inter">Inter & Roboto Mono (Moderno / Tech)</option>
                            <option value="outfit">Outfit & Inter (Clean / SaaS)</option>
                            <option value="roboto">Roboto & Open Sans (Corporativo / Neutro)</option>
                            <option value="poppins">Poppins & Lora (Criativo / Boutique)</option>
                            <option value="montserrat">Montserrat & Merriweather (Profissional / Textual)</option>
                            <option value="playfair">Playfair Display & Source Sans (Elegante / Editorial)</option>
                            <option value="lora">Lora & Merriweather (Revista / Narrativa)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Cabeçalho (Header)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className={labelClass}>Horário de Atendimento (Top Bar)</label>
                        <input type="text" placeholder="Seg - Sex || 08:00 - 18:00" value={config?.header?.businessHours || ''} onChange={e => setConfig({ ...config, header: { ...config.header, businessHours: e.target.value } })} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Botão de Ação (Texto)</label>
                        <input type="text" placeholder="Começar Agora" value={config?.header?.ctaText || ''} onChange={e => setConfig({ ...config, header: { ...config.header, ctaText: e.target.value } })} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Botão de Ação (Link)</label>
                        <input type="text" placeholder="/contato" value={config?.header?.ctaLink || ''} onChange={e => setConfig({ ...config, header: { ...config.header, ctaLink: e.target.value } })} className={inputClass} />
                    </div>
                </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Informações de Contato</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {[
                        { key: 'email', label: 'E-mail', placeholder: 'contato@seusite.com' },
                        { key: 'phone', label: 'Telefone / WhatsApp', placeholder: '(11) 99999-9999' },
                        { key: 'address', label: 'Endereço', placeholder: 'Rua X, 123 — Cidade/UF' },
                    ].map(f => (
                        <div key={f.key}>
                            <label className={labelClass}>{f.label}</label>
                            <input
                                type="text"
                                placeholder={f.placeholder}
                                value={config?.contact?.[f.key] || ''}
                                onChange={e => setConfig({ ...config, contact: { ...config.contact, [f.key]: e.target.value } })}
                                className={inputClass}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Redes Sociais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['instagram', 'twitter', 'linkedin', 'github', 'youtube', 'facebook'].map(social => (
                        <div key={social}>
                            <label className={labelClass}>{social}</label>
                            <input type="url" placeholder={`https://${social}.com/seuperfil`} value={config?.social?.[social] || ''} onChange={e => setConfig({ ...config, social: { ...config.social, [social]: e.target.value } })} className={`${inputClass} font-mono`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Rodapé (Footer)</h3>
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className={labelClass}>Frase Institucional (Footer)</label>
                        <textarea
                            rows={3}
                            placeholder="Frase que aparece abaixo do logo no rodapé..."
                            value={config?.footer?.description || ''}
                            onChange={e => setConfig({ ...config, footer: { ...config.footer, description: e.target.value } })}
                            className={`${inputClass} resize-y`}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Texto de Copyright</label>
                        <input
                            type="text"
                            placeholder="Todos os direitos reservados à Sua Empresa"
                            value={config?.footer?.copyright || ''}
                            onChange={e => setConfig({ ...config, footer: { ...config.footer, copyright: e.target.value } })}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <ImageUpload
                            label="Imagem de Fundo do Rodapé"
                            value={config?.footer?.backgroundImage}
                            onChange={(url) => setConfig({ ...config, footer: { ...config.footer, backgroundImage: url } })}
                        />
                    </div>
                </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">SEO Global</h3>
                <div className="space-y-4">
                    <div><label className={labelClass}>Título Padrão (SEO)</label><input type="text" value={config?.seo?.title || ''} onChange={e => setConfig({ ...config, seo: { ...config.seo, title: e.target.value } })} className={inputClass} /></div>
                    <div><label className={labelClass}>Descrição Padrão</label><textarea rows={3} value={config?.seo?.description || ''} onChange={e => setConfig({ ...config, seo: { ...config.seo, description: e.target.value } })} className={`${inputClass} resize-y`} /></div>
                </div>
            </div>
        </form>
    );
}
