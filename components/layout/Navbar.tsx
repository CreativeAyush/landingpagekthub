"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";


export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        setMobileMenuOpen(false);
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const navLinks = [
        { name: "Features", id: "features" },
        { name: "Integrations", id: "integrations" },
        { name: "Use Cases", id: "use-cases" },
        { name: "Dashboards", id: "dashboards" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#020410]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
                            K
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            KTH<span className="text-cyan-500">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="http://98.81.206.47:3000">
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </Link>
                        <Link href="http://98.81.206.47:3000">
                            <Button variant="primary" size="sm" icon={<ChevronRight strokeWidth={2} size={16} />}>
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden z-50 p-2 text-white"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-30 bg-[#020410] pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.id)}
                                    className="text-2xl font-semibold text-slate-300 hover:text-white text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Link href="http://98.81.206.47:3000">
                                <Button variant="ghost" className="justify-start text-lg">
                                    Log In
                                </Button>
                            </Link>
                            <Link href="http://98.81.206.47:3000" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full justify-center text-lg">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}


