"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    const links = {
        Product: ["Features", "Integrations", "Enterprise", "Security", "Changelog"],
        Company: ["About Us", "Careers", "Blog", "Contact"],
        Resources: ["Documentation", "Community", "Help Center", "Status"],
        Legal: ["Privacy", "Terms", "Cookie Policy"],
    };

    return (
        <footer className="bg-[#020410] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">
                                K
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                KTH<span className="text-cyan-500">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                            Launch your next onboarding in days, not weeks. The enterprise standard for knowledge transfer and documentation.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-white mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Knowledge Transfer Hub. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
