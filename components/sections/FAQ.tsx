"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        q: "How does KTH connect to my internal tools?",
        a: "We use read-only API tokens to index your Jira, GitHub, and SharePoint instances. For S3, we use restricted IAM roles. No code enters our servers; we only store metadata and embeddings.",
    },
    {
        q: "Is my data secure?",
        a: "Absolutely. We are SOC2 Type II ready, encrypt data at rest (AES-256) and in transit (TLS 1.3), and support on-premise deployments for enterprise clients.",
    },
    {
        q: "Can I customize the learning paths?",
        a: "Yes. While we auto-generate paths based on roles, admins can drag-and-drop modules, add quizzes, and set prerequisites manually.",
    },
    {
        q: "Do you support self-hosted instances?",
        a: "Yes, our Enterprise plan includes a Docker container that you can deploy in your own VPC (AWS, Azure, GCP).",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#020410]">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-colors hover:bg-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="font-semibold text-white text-lg">{faq.q}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    className="text-slate-400"
                                >
                                    <Plus />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
