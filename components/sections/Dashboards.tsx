"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { LayoutDashboard, Users, Eye } from "lucide-react";

const dashboards = [
    {
        title: "SPM",
        description: "Strategic Portfolio Management for high-level oversight and decision making.",
        icon: LayoutDashboard,
        color: "text-blue-400",
        href: "https://google.com"
    },
    {
        title: "PM",
        description: "Project Management view for tracking progress, timelines, and deliverables.",
        icon: Users,
        color: "text-purple-400",
        href: "https://google.com"
    },
    {
        title: "VIEWER",
        description: "Access for Developers, QAs, and other team members to view relevant updates and reports.",
        icon: Eye,
        color: "text-cyan-400",
        href: "https://google.com"
    }
];

export function Dashboards() {
    return (
        <section id="dashboards" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#020410]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Role-Based <span className="text-blue-500">Dashboards</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Select your role to access the appropriate dashboard view.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {dashboards.map((dashboard, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link href={dashboard.href} className="block h-full">
                                <Card className="h-full text-center group cursor-pointer border border-white/5 hover:border-blue-500/30 bg-white/5 hover:bg-white/10" hoverEffect={true}>
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-[#0B1121] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 ${dashboard.color}`}>
                                        <dashboard.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {dashboard.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {dashboard.description}
                                    </p>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
