"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Globe, Users, MessageSquare, BookOpen } from "lucide-react";

const certifications = [
    {
        title: "Foundation of Project Management",
        issuer: "Google",
        type: "Professional Certificate",
        icon: <Trophy size={20} />
    },
    {
        title: "Introduction to Securities & Investment",
        issuer: "CISI",
        type: "Financial Certification",
        icon: <Award size={20} />
    },
    {
        title: "BPTrends Process Specialist (BPT-PS)",
        issuer: "BPTrends",
        type: "Process Management",
        icon: <Trophy size={20} />
    },
    {
        title: "Negotiation",
        issuer: "University of Michigan",
        type: "Professional Development",
        icon: <Users size={20} />
    },
    {
        title: "English Language Course",
        issuer: "New Zealand",
        type: "Language Certification",
        period: "2019",
        icon: <Globe size={20} />
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="section-padding bg-slate-50/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl lg:text-6xl font-black text-slate-soft"
                    >
                        Professional <span className="text-gold-gradient italic">Certifications</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 gold-gradient mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group"
                        >
                            <div className="glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 border border-slate-100">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                            {cert.type}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-slate-soft mb-3 leading-tight group-hover:text-accent transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-600 font-medium mb-4">
                                    {cert.issuer}
                                </p>

                                {cert.period && (
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <BookOpen size={14} className="text-accent" />
                                        <span>{cert.period}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
