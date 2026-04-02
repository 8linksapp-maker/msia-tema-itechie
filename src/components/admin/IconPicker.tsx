import React, { useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';

const ICON_GALLERY = [
    // Icomoon (Template Default)
    "icomoon-analysis", "icomoon-application", "icomoon-approval", "icomoon-back", "icomoon-calendar",
    "icomoon-calendar-2", "icomoon-chat", "icomoon-chat-2", "icomoon-check-mark", "icomoon-client",
    "icomoon-clock", "icomoon-close", "icomoon-cloud-data", "icomoon-computer", "icomoon-deep-learning",
    "icomoon-diamond", "icomoon-diamond-2", "icomoon-email", "icomoon-facebook", "icomoon-folder",
    "icomoon-folder-2", "icomoon-gear", "icomoon-help", "icomoon-laptop", "icomoon-layer", "icomoon-link",
    "icomoon-linkedin", "icomoon-lock", "icomoon-magnifiying-glass", "icomoon-mail", "icomoon-megaphone",
    "icomoon-minus-sign", "icomoon-money", "icomoon-next", "icomoon-phone-call", "icomoon-pin",
    "icomoon-pinterest", "icomoon-play-button", "icomoon-plus", "icomoon-profile", "icomoon-project",
    "icomoon-quote", "icomoon-quote-2", "icomoon-right-quote", "icomoon-save-money", "icomoon-search",
    "icomoon-share", "icomoon-solution", "icomoon-team", "icomoon-telephone", "icomoon-time",
    "icomoon-twitter", "icomoon-user", "icomoon-user-2", "icomoon-user-3",

    // FontAwesome Solid
    "fas fa-home", "fas fa-user", "fas fa-envelope", "fas fa-phone", "fas fa-search", "fas fa-cog",
    "fas fa-check", "fas fa-times", "fas fa-plus", "fas fa-minus", "fas fa-star", "fas fa-heart",
    "fas fa-clock", "fas fa-calendar", "fas fa-file", "fas fa-folder", "fas fa-image", "fas fa-camera",
    "fas fa-video", "fas fa-music", "fas fa-headphones", "fas fa-globe", "fas fa-map-marker-alt",
    "fas fa-shopping-cart", "fas fa-credit-card", "fas fa-briefcase", "fas fa-university", "fas fa-chart-line",
    "fas fa-laptop", "fas fa-mobile-alt", "fas fa-tablet-alt", "fas fa-print", "fas fa-barcode",
    "fas fa-tag", "fas fa-bookmark", "fas fa-flag", "fas fa-thumbs-up", "fas fa-thumbs-down",
    "fas fa-share-alt", "fas fa-rocket", "fas fa-lightbulb", "fas fa-lock", "fas fa-unlock",
    "fas fa-key", "fas fa-trash-alt", "fas fa-edit", "fas fa-save", "fas fa-bolt", "fas fa-bug",
    "fas fa-code", "fas fa-coffee", "fas fa-comments", "fas fa-desktop", "fas fa-download",
    "fas fa-upload", "fas fa-eye", "fas fa-gift", "fas fa-leaf", "fas fa-magic", "fas fa-plane",
    "fas fa-road", "fas fa-signal", "fas fa-trophy", "fas fa-wrench", "fas fa-ambulance", "fas fa-anchor",

    // FontAwesome Brands
    "fab fa-facebook", "fab fa-twitter", "fab fa-instagram", "fab fa-linkedin", "fab fa-youtube",
    "fab fa-github", "fab fa-whatsapp", "fab fa-google", "fab fa-apple", "fab fa-android",
    "fab fa-wordpress", "fab fa-behance", "fab fa-dribbble", "fab fa-pinterest", "fab fa-slack",
    "fab fa-skype", "fab fa-vimeo", "fab fa-tumblr", "fab fa-foursquare", "fab fa-amazon"
];

interface IconPickerProps {
    value: string;
    onChange: (val: string) => void;
    label?: string;
}

export default function IconPicker({ value, onChange, label }: IconPickerProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filtered = ICON_GALLERY.filter((i: string) => i.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="mb-4 relative">
            {label && <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{label}</label>}

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-3 px-3 py-2.5 border border-slate-200 rounded-xl bg-white hover:border-violet-300 transition-all text-left"
            >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                    {value ? <i className={`${value} text-slate-700 text-lg`}></i> : <span className="text-slate-400 text-[10px]">?</span>}
                </div>
                <span className="flex-1 text-sm font-medium text-slate-700 truncate">
                    {value || 'Selecionar ícone...'}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="p-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                        <Search className="w-4 h-4 text-slate-400" />
                        <input
                            autoFocus
                            placeholder="Buscar ícone..."
                            className="bg-transparent border-none text-sm focus:outline-none w-full"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        {search && <X className="w-4 h-4 text-slate-400 cursor-pointer" onClick={() => setSearch('')} />}
                    </div>

                    <div className="max-h-60 overflow-y-auto p-2 grid grid-cols-4 gap-1">
                        {filtered.map((icon: string) => (
                            <button
                                key={icon}
                                onClick={() => {
                                    onChange(icon);
                                    setOpen(false);
                                }}
                                className={`p-3 rounded-xl flex items-center justify-center transition-all hover:bg-violet-50 hover:text-violet-600 ${value === icon ? 'bg-violet-100 text-violet-700 ring-1 ring-violet-200' : 'text-slate-500'}`}
                                title={icon}
                            >
                                <i className={`${icon} text-xl`}></i>
                            </button>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="p-6 text-center text-slate-400 text-sm italic">Nenhum ícone encontrado</div>
                    )}
                </div>
            )}
        </div>
    );
}
