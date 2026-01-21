"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
        { icon: <Github size={20} />, href: "#", label: "Github" },
        { icon: <Mail size={20} />, href: "#", label: "Email" },
    ];

    return (
        <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 gold-gradient opacity-[0.05] rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                <span className="text-white font-display font-bold text-xl">F</span>
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight text-slate-soft">
                                Fisal Alhakbani
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
                            Industrial Engineer & Local Content Monitoring Specialist dedicated to fostering sustainable domestic growth through technical and strategic excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-soft mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {["About", "Experience", "Skills", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-accent transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-soft mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-slate-500 font-medium">Riyadh, Saudi Arabia</li>
                            <li>
                                <a href="mailto:contact@fisal-alhakbani.com" className="text-slate-500 hover:text-accent transition-colors font-medium">
                                    contact@fisal-alhakbani.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-200">
                    <p className="text-slate-400 text-sm font-medium italic">
                        © {currentYear} Fisal Alhakbani. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5 }}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-accent hover:border-accent transition-all shadow-sm"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-all shadow-2xl group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
