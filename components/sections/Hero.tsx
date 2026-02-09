"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Scale In effect (Zoom)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

    // Sequential Fade Out / Parallax movement to simulate being "passed by"
    // Text fades/moves first
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Visual fades/moves second
    const visualOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
    const visualY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Cards move fastest/fade last
    const cardsOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
    const cardsY = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020410] to-[#020410]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Main Container Scaling Up */}
            <motion.div
                style={{ scale }}
                className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center origin-center"
            >
                {/* Text Content */}
                <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        New: Unified search across Jira + GitHub + Teams + S3
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        Turn scattered knowledge into <span className="text-gradient">repeatable onboarding.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg"
                    >
                        The comprehensive hub for enterprise knowledge transfer.
                        Connect sources, curate paths, and certify readiness in days.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <Link href="http://98.81.206.47:3000">
                            <Button size="lg" icon={<ArrowRight size={18} />}>
                                Get Started
                            </Button>
                        </Link>
                        <Link href="https://ai-powered-enterprise-kn-6i3111c.gamma.site/">
                            <Button variant="outline" size="lg" icon={<PlayCircle size={18} />}>
                                Live Demo
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-6 text-sm text-slate-500"
                    >
                        {["Role-based access", "Audit-friendly"].map((text) => (
                            <div key={text} className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-cyan-500" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Animated Visual */}
                <div className="relative h-[600px] hidden lg:block">
                    <motion.div
                        style={{ opacity: visualOpacity, y: visualY }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <svg viewBox="0 0 600 600" className="w-full h-full text-cyan-500/20">
                            <defs>
                                <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
                                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                                </linearGradient>
                            </defs>

                            {/* Central Hub */}
                            <circle cx="300" cy="300" r="80" fill="url(#grid-grad)" stroke="currentColor" strokeWidth="1" />
                            <circle cx="300" cy="300" r="40" className="text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" />

                            {/* Nodes */}
                            {[0, 1, 2, 3].map((i) => {
                                const angle = (i * 90) * (Math.PI / 180);
                                const x = 300 + Math.cos(angle) * 200;
                                const y = 300 + Math.sin(angle) * 200;
                                return (
                                    <g key={i}>
                                        <line x1="300" y1="300" x2={x} y2={y} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                        <circle cx={x} cy={y} r="30" className="text-slate-700" fill="#0B1121" stroke="currentColor" strokeWidth="2" />
                                        {/* Animated Particle */}
                                        <circle r="4" fill="#06b6d4">
                                            <animateMotion
                                                dur="3s"
                                                repeatCount="indefinite"
                                                path={`M${x},${y} L300,300`}
                                                begin={`${i * 0.75}s`}
                                            />
                                        </circle>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Floating Cards (Mock UI) */}
                        <motion.div
                            style={{ opacity: cardsOpacity, y: cardsY }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1121] border border-cyan-500/30 p-4 rounded-xl shadow-2xl shadow-cyan-500/20 w-48 text-center"
                        >
                            <div className="font-semibold text-white mb-1">Knowledge Transfer Hub</div>
                            <div className="text-xs text-slate-400">Syncing 4 sources...</div>
                        </motion.div>

                        {/* Source Icons with independent staggered motion */}
                        {[
                            { top: "100px", left: "300px", label: "Jira" },
                            { top: "300px", right: "100px", label: "GitHub" },
                            { bottom: "100px", left: "300px", label: "S3" },
                            { top: "300px", left: "100px", label: "Teams" }
                        ].map((pos, i) => (
                            <motion.div
                                key={pos.label}
                                style={{ opacity: cardsOpacity, y: cardsY }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#020410] p-2 rounded-lg border border-white/10"
                                // @ts-ignore
                                style={{ ...pos, opacity: cardsOpacity }}
                            >
                                {pos.label}
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
