"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar, MapPin, Settings, Package, PieChart, Building } from "lucide-react";

const milestones = [
    {
        year: "Feb 2024 – Present",
        title: "Local Content Monitoring Specialist",
        company: "LCGPA",
        location: "Saudi Arabia",
        description: "Manage accounts for high-spender government entities. Ensure compliance with LCGPA standards. Monitor and analyze procurement data for local suppliers and vendors.",
        icon: <Settings size={22} />,
        tags: ["Government Compliance", "Data Analysis", "Local Content", "Stakeholder Management"]
    },
    {
        year: "Nov 2022 – Feb 2024",
        title: "Operations – Local Content Monitoring Analyst",
        company: "LCGPA",
        location: "Saudi Arabia",
        description: "Monitored compliance for government procurement entities. Collected and analyzed local content data. Coordinated with internal teams to ensure regulatory adherence.",
        icon: <Package size={22} />,
        tags: ["Compliance Monitoring", "Data Collection", "Regulatory Adherence", "Reporting"]
    },
    {
        year: "Sep 2022 – Nov 2022",
        title: "Business Process Trainee – GRC",
        company: "THIQAH Business Services",
        location: "Saudi Arabia",
        description: "Gained hands-on BPM experience. Prepared final drafts of process documentation including flow charts, RACI matrices, and process narratives.",
        icon: <PieChart size={22} />,
        tags: ["BPM", "Process Documentation", "GRC", "Cross-functional Collaboration"]
    },
    {
        year: "Jun 2021 – Aug 2021",
        title: "Summer Intern",
        company: "stc (Saudi Telecom Company)",
        location: "Saudi Arabia",
        description: "Supported team members to ensure operational continuity. Assisted in daily report auditing and participated in problem-solving workshops.",
        icon: <Building size={22} />,
        tags: []
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="section-padding bg-white relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl lg:text-6xl font-black text-slate-soft"
                    >
                        Career <span className="text-gold-gradient italic">Milestones</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        A timeline of professional growth and industrial impact.
                    </motion.p>
                </div>

                <div ref={containerRef} className="relative">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-px h-full w-1 overflow-hidden pointer-events-none">
                        {/* Background Line */}
                        <div className="absolute inset-0 bg-slate-100" />
                        {/* Animated Progress Line */}
                        <motion.div
                            style={{ scaleY }}
                            className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top"
                        />
                    </div>

                    {milestones.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-20 last:mb-0"
                        >
                            {/* Icon / Dot with Glow */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                className="flex items-center justify-center w-14 h-14 rounded-2xl border-4 border-white bg-slate-50 text-slate-400 group-hover:text-white group-hover:bg-accent group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20"
                            >
                                {item.icon}
                            </motion.div>

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-[calc(100%-5rem)] md:w-[45%] glass-card p-8 lg:p-10 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {item.year}
                                    </span>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                        <MapPin size={14} className="text-accent" /> {item.location}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-slate-soft mb-2 leading-tight group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 mb-6 font-bold tracking-tight italic">{item.company}</p>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">{item.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-tighter"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
