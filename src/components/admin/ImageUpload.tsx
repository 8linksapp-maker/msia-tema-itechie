import React, { useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { githubApi } from '../../lib/adminApi';
import { triggerToast } from './CmsToaster';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
}

export default function ImageUpload({ value, onChange, label }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64 = (reader.result as string).split(',')[1];
                const fileName = `${Date.now()}-${file.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase()}`;
                const path = `public/itechie-assets/img/uploads/${fileName}`;

                await githubApi('write', path, {
                    content: base64,
                    isBase64: true,
                    message: `Upload image ${fileName} via CMS`
                });

                onChange(`/itechie-assets/img/uploads/${fileName}`);
                triggerToast('Upload concluído!', 'success');
            };
            reader.readAsDataURL(file);
        } catch (err: any) {
            triggerToast('Erro no upload: ' + err.message, 'error');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="mb-4">
            {label && <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{label}</label>}

            <div className="relative group border-2 border-dashed border-slate-200 rounded-xl p-4 hover:border-violet-400 transition-all bg-slate-50/50">
                {value ? (
                    <div className="relative">
                        <img src={value} alt="Preview" className="w-full h-32 object-cover rounded-lg shadow-sm" />
                        <button
                            onClick={() => onChange('')}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <label className="flex flex-col items-center justify-center py-6 cursor-pointer">
                        {uploading ? (
                            <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
                        ) : (
                            <Upload className="w-8 h-8 text-slate-400 group-hover:text-violet-500 mb-2" />
                        )}
                        <span className="text-sm text-slate-500 font-medium">
                            {uploading ? 'Enviando...' : 'Clique para subir imagem'}
                        </span>
                        <input type="file" className="hidden" accept="image/*" onChange={handleFile} disabled={uploading} />
                    </label>
                )}
            </div>

            {value && (
                <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400 truncate">
                    <ImageIcon className="w-3 h-3" />
                    <span>{value}</span>
                </div>
            )}
        </div>
    );
}
