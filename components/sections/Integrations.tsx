"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

const integrations = [
    {
        name: "Jira",
        status: "Connected",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-blue-500">
                <path d="M12 2L12 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M2.5 11.5L11.5 20.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M11.5 3.5L20.5 12.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
        ),
        desc: "Stories, requirements, and user stories",
    },
    {
        name: "GitHub / GitLab",
        status: "Indexing",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 8C8 8 10 6 12 6C14 6 16 8 16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        desc: "Commit history and version control",
    },
    {
        name: "Microsoft Teams",
        status: "Ready",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-400">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 16H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        desc: "Standup meeting transcripts",
    },
    {
        name: "S3",
        status: "Connected",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-orange-500">
                <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 4V20" stroke="currentColor" strokeWidth="2" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        desc: "Documents and media assets",
    },
];

export function Integrations() {
    return (
        <section id="integrations" className="py-24 bg-[#020410]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Integrate with <span className="text-cyan-500">your stack</span>
                        </h2>
                        <p className="text-slate-400 max-w-lg text-lg">
                            Connect your existing tools in seconds. We index everything, so you don&apos;t have to migrate a thing.
                        </p>
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 rounded-full border border-dashed border-cyan-500/20 flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 rounded-full border border-dashed border-white/5 rotate-45" />
                        <span className="text-cyan-500 font-mono text-xs">SYNCING</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {integrations.map((item, index) => (
                        <Card
                            key={item.name}
                            className="flex flex-col items-center justify-center min-h-[200px] text-center"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 shadow-inner border border-white/5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                            <div className={`text-xs px-2 py-1 rounded-full border ${item.status === 'Connected' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                                item.status === 'Indexing' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10 animate-pulse' :
                                    'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
                                }`}>
                                {item.status}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
