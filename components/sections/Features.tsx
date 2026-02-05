"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Search, BrainCircuit, Users, GitBranch, FileText, Bot, BarChart3, Lock } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-20 text-center uppercase tracking-widest text-cyan-500 font-semibold text-sm">
                    Platform Capabilities
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Content Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: Users, title: "Granular Roles", desc: "SuperAdmin for global control, Admin for projects, and Viewer for read-only access." },
                            { icon: Bot, title: "AI Assistant (RAG)", desc: "Queries Jira, Git, and Teams transcripts with clickable source attribution." },
                            { icon: FileText, title: "Auto-Requirements", desc: "Generate requirements docs from Jira stories and Git commits automatically." },
                            { icon: BrainCircuit, title: "KT Sessions", desc: "Upload video tutorials with timestamped comments and mentor Q&A." },
                            { icon: GitBranch, title: "Git & Jira Sync", desc: "Real-time sync of commit history and user stories to keep docs fresh." },
                            { icon: BarChart3, title: "Project Dashboard", desc: "Track doc counts, AI conversations, and team readiness metrics." },
                        ].map((feature, i) => (
                            <Card key={i} className="p-6">
                                <feature.icon className="w-8 h-8 text-cyan-500 mb-4" />
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Right: Mock UI for AI Assistant */}
                    <div className="sticky top-24">
                        <div className="relative rounded-2xl border border-white/10 bg-[#0B1121] overflow-hidden shadow-2xl">
                            {/* Mock Header */}
                            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-xs text-slate-400 ml-2">KTH AI Assistant</span>
                            </div>

                            {/* Mock Chat Content */}
                            <div className="p-6 space-y-6">
                                {/* User Query */}
                                <div className="flex justify-end">
                                    <div className="bg-cyan-600/20 text-cyan-200 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                                        How do I configure the S3 bucket for this project?
                                    </div>
                                </div>

                                {/* AI-Response */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                        <Bot size={16} />
                                    </div>
                                    <div className="space-y-2 max-w-[90%]">
                                        <div className="text-slate-300 text-sm leading-relaxed">
                                            Based on the <span className="text-cyan-400 underline cursor-pointer">README.md</span> and recent <span className="text-cyan-400 underline cursor-pointer">Jira ticket PROJ-123</span>, you need to set the CORS policy first.
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-slate-400 border border-white/5 flex items-center gap-1">
                                                <GitBranch size={10} /> GitHub
                                            </span>
                                            <span className="text-[10px] px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-500/20 flex items-center gap-1">
                                                <FileText size={10} /> Jira
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Another User Query */}
                                <div className="flex justify-end">
                                    <div className="bg-cyan-600/20 text-cyan-200 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                                        Who worked on the authentication module?
                                    </div>
                                </div>

                                {/* AI-Response */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                        <Bot size={16} />
                                    </div>
                                    <div className="space-y-2 max-w-[90%]">
                                        <div className="text-slate-300 text-sm leading-relaxed">
                                            <span className="text-white font-medium">Sarah Jenkins</span> committed the initial auth logic 3 days ago. Discussed in <span className="text-indigo-400 underline cursor-pointer">Standup #42</span>.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-white/10 bg-white/5">
                                <div className="h-10 bg-black/50 rounded-lg border border-white/10 flex items-center px-4 text-xs text-slate-500">
                                    Ask about requirements, code, or meetings...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
