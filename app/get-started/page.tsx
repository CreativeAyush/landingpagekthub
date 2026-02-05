"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function GetStartedPage() {
    return (
        <main className="min-h-screen bg-[#020410] flex flex-col md:flex-row relative">
            {/* Left Panel */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 w-fit transition-colors">
                    <ArrowLeft size={16} />
                    Back
                </Link>

                <div className="flex-1 flex flex-col justify-center max-w-lg">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Start unified knowledge transfer today.
                    </h1>
                    <p className="text-xl text-slate-400 mb-8">
                        Join 500+ engineering teams ramp up faster with KTH.
                    </p>

                    <div className="space-y-4 mb-12">
                        {[
                            "Unlimited integrations (Jira, GitHub, S3)",
                            "Auto-generated learning paths",
                            "SOC2 Compliance Ready"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-slate-300">
                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Check size={14} />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-slate-300 italic mb-4">
                            &quot;We reduced our onboarding time from 3 months to 2 weeks. KTH is a game changer for distributed teams.&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                            <div>
                                <div className="text-white font-semibold">Alex Chen</div>
                                <div className="text-xs text-slate-500">VP Engineering, TechFlow</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="w-full md:w-1/2 bg-[#0B1121] border-l border-white/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    <h2 className="text-2xl font-bold text-white mb-6">Create your account</h2>
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors">
                                <option>Engineering Manager</option>
                                <option>Developer</option>
                                <option>HR / People Ops</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <Button size="lg" className="w-full justify-center mt-4">Get Started Free</Button>

                        <p className="text-xs text-slate-500 text-center mt-4">
                            By clicking &quot;Get Started Free&quot;, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
