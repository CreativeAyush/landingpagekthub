"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Share2, FileText, MonitorPlay } from "lucide-react";

const steps = [
    {
        icon: Share2,
        title: "Connect & Sync",
        description: "Link your stack: Jira (Stories), Git (Commits), SharePoint/S3 (Docs), and MS Teams (Transcripts). We index it all in real-time.",
        color: "text-blue-400",
    },
    {
        icon: FileText,
        title: "Generate Requirements",
        description: "Our AI agents crawl specific stories and commits to auto-generate requirements documents and system specifications.",
        color: "text-purple-400",
    },
    {
        icon: MonitorPlay,
        title: "Curate & Onboard",
        description: "Admins create KT sessions with videos and comments. Viewers (new joiners) access a personalized dashboard based on their role.",
        color: "text-cyan-400",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4"
                    >
                        Unified Knowledge Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        From scattered data sources to structured onboarding pathways.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="relative isolate group"
                            hoverEffect={true}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10" />

                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${step.color}`}>
                                <step.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Arrow Connection (Desktop only, not on last item) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
