"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#020410] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#020410] to-[#020410]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#0B1121] border border-white/10 rounded-2xl p-8 relative z-10 shadow-2xl"
            >
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 text-sm transition-colors">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-slate-400">Sign in to your KTH workspace</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full justify-center py-3">Sign In</Button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-[#0B1121] px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                            GitHub
                        </button>
                        <button type="button" className="flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                            Google
                        </button>
                    </div>
                </form>
            </motion.div>
        </main>
    );
}
