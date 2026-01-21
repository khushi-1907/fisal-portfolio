"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Certifications", href: "#certifications" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-xl"
                    >
                        <span className="text-white font-display font-bold text-xl">F</span>
                    </motion.div>
                    <span className="font-display font-bold text-xl tracking-tight text-slate-soft">
                        Fisal Alhakbani
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link href="#contact" className="px-6 py-3 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-soft">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-primary border-b border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-lg font-bold text-slate-800 dark:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center py-4 bg-accent text-primary rounded-xl font-bold uppercase tracking-widest"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
