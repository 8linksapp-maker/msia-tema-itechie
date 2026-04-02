import React, { useState, useEffect } from 'react';
import { Users, Mail, Clock, MessageSquare, Trash2, Loader2, CheckCircle2 } from 'lucide-react';
import { githubApi } from '../../lib/adminApi';
import { triggerToast } from './CmsToaster';

export default function LeadsViewer() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [fileSha, setFileSha] = useState('');

    useEffect(() => {
        loadLeads();
    }, []);

    async function loadLeads() {
        setLoading(true);
        try {
            const data = await githubApi('read', 'src/data/leads.json');
            setLeads(JSON.parse(data.content || '[]'));
            setFileSha(data.sha);
        } catch (err: any) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function deleteLead(id: number) {
        if (!confirm('Deseja excluir este lead permanentemente?')) return;

        const filtered = leads.filter(l => l.id !== id);
        try {
            await githubApi('write', 'src/data/leads.json', {
                content: JSON.stringify(filtered, null, 2),
                sha: fileSha
            });
            triggerToast('Lead excluído', 'success');
            loadLeads();
        } catch (err: any) {
            triggerToast(err.message, 'error');
        }
    }

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-blue-500" /></div>;

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl text-slate-800">Gestão de Leads</h2>
                        <p className="text-sm text-slate-500">Mensagens recebidas pelo formulário de contato</p>
                    </div>
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <span className="text-sm font-bold text-slate-600">{leads.length} Leads no total</span>
                </div>
            </div>

            <div className="grid gap-4">
                {leads.length === 0 ? (
                    <div className="bg-white p-20 text-center rounded-2xl border border-dashed border-slate-300">
                        <Mail className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">Nenhum lead recebido ainda.</p>
                    </div>
                ) : (
                    leads.map(lead => (
                        <div key={lead.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                                            <span className="text-xs font-bold">{lead.name.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{lead.name}</h4>
                                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(lead.date).toLocaleString('pt-BR')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <p className="text-sm text-slate-700 leading-relaxed italic">
                                            <MessageSquare className="w-3 h-3 inline mr-2 text-slate-400" />
                                            "{lead.message}"
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-4 flex flex-col gap-2">
                                    <button
                                        onClick={() => deleteLead(lead.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Excluir Lead"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
