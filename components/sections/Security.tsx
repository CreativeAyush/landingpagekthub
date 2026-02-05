"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileKey } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
    { icon: Shield, title: "SOC2 Type II Ready", desc: "Our practices align with AICPA Trust Services Criteria." },
    { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit." },
    { icon: Eye, title: "Audit Logging", desc: "Comprehensive immutable logs of every access and action." },
    { icon: FileKey, title: "SSO & SAML", desc: "Enterprise-grade authentication with Okta, Azure AD, and more." },
];

export function Security() {
    return (
        <section id="security" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#020410]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Enterprise-grade <span className="text-blue-500">Security</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Your knowledge is your most valuable asset. We protect it with banking-level security standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, i) => (
                        <Card key={i} className="text-center group" hoverEffect={true}>
                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-slate-500">
                        <Lock size={12} />
                        <span>UI Demo — Connectors shown for illustration purposes</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
