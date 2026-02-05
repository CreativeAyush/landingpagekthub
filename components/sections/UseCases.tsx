"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, ShieldAlert, MonitorPlay } from "lucide-react";
import { Card } from "@/components/ui/Card";

const tabs = [
    { id: "viewer", label: "Viewer Onboarding", icon: User },
    { id: "admin", label: "Admin Management", icon: Users },
    { id: "superadmin", label: "SuperAdmin Control", icon: ShieldAlert },
    { id: "tutorials", label: "KT & Tutorials", icon: MonitorPlay },
];

const content = {
    viewer: {
        title: "Personalized Viewer Experience",
        desc: "New team members (Viewers) get a tailored onboarding flow. They define their persona (Developer, QA) and skill stack (React, AWS) to receive domain-specific AI responses.",
        checklist: ["Mandatory profile setup on first login", "Intent classification preferences", "Read-only access to assigned projects"],
    },
    admin: {
        title: "Project-Level Administration",
        desc: "Admins manage the heartbeat of specific projects. They configure integrations (Jira, Git), manage local team members, and curate KT sessions for their squad.",
        checklist: ["Manage team members & mentors", "Configure project integrations", "Review & toggle video comments"],
    },
    superadmin: {
        title: "Organization-Wide Governance",
        desc: "SuperAdmins have full visibility. They create projects, assign global roles, promote users, and oversee the entire knowledge ecosystem.",
        checklist: ["Create & delete projects", "Global user role management", "Cross-project analytics"],
    },
    tutorials: {
        title: "Interactive KT Sessions",
        desc: "Move beyond static docs. Upload video tutorials with timestamped comments. Mentors and mentees engage in Q&A directly within the learning flow.",
        checklist: ["Video support with comments", "External links (YouTube/Udemy)", "Mentee-to-mentor Q&A"],
    },
};

export function UseCases() {
    const [activeTab, setActiveTab] = useState<keyof typeof content>("viewer");

    return (
        <section id="use-cases" className="py-24 bg-[#020410]">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                    Tailored flows for <span className="text-gradient">every role</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as keyof typeof content)}
                                className={`relative p-4 rounded-xl text-left transition-all duration-300 group ${activeTab === tab.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4 z-10 relative">
                                    <tab.icon size={20} className={activeTab === tab.id ? "text-cyan-500" : "text-slate-500"} />
                                    <span className="font-semibold">{tab.label}</span>
                                </div>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 rounded-xl"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="min-h-[400px] flex flex-col justify-center border-cyan-500/20">
                                    <h3 className="text-3xl font-bold text-white mb-6">{content[activeTab].title}</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed mb-8">{content[activeTab].desc}</p>

                                    <div className="grid gap-4">
                                        {content[activeTab].checklist.map((item, i) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                                                    {i + 1}
                                                </div>
                                                <span className="text-white">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
