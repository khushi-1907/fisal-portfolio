"use client";

import { motion, Variants } from "framer-motion";
import {
    CheckCircle,
    Verified,
    Sparkles,
    TrendingUp,
    Users,
    FileText,
    BarChart,
} from "lucide-react";

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export default function Skills() {
    const categories = [
        {
            title: "Professional Skills",
            icon: <TrendingUp className="text-white" size={28} />,
            iconBg: "bg-primary",
            skills: [
                "Financial Analysis",
                "Credit Analysis",
                "Investments",
                "Quantitative Analysis",
                "Business Reporting",
                "Process Improvement",
                "Account Management",
                "Government Procurement Compliance",
                "Local Content Monitoring",
                "Data Collection & Analysis",
                "Stakeholder Coordination",
            ],
            checkIcon: <CheckCircle className="text-accent" size={18} />,
        },
        {
            title: "Business & Process Skills",
            icon: <FileText className="text-white" size={28} />,
            iconBg: "bg-accent",
            skills: [
                "Business Process Management (BPM)",
                "Process Documentation",
                "Process Flow Mapping",
                "RACI Matrix Development",
                "Compliance Monitoring",
                "Operational Auditing",
            ],
            checkIcon: <Verified className="text-primary" size={18} />,
        },
    ];

    return (
        <section
            id="skills"
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.06),transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* ---------------- HEADER ---------------- */}
                <div className="text-center mb-20 space-y-4">

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl lg:text-6xl font-black text-slate-soft"
                    >
                        Professional{" "}
                        <span className="text-gold-gradient italic">Competencies</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        A balanced mix of analytical, financial, and process-driven expertise
                        supporting strategic and operational excellence.
                    </motion.p>
                </div>

                {/* ---------------- SKILLS GRID ---------------- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-14"
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="space-y-10"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-6">
                                <div
                                    className={`w-16 h-16 ${cat.iconBg} rounded-2xl flex items-center justify-center shadow-xl`}
                                >
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display font-black text-slate-soft">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium mt-1">
                                        {cat.skills.length} core competencies
                                    </p>
                                </div>
                            </div>

                            {/* Skills */}
                            <motion.div
                                variants={containerVariants}
                                className="grid sm:grid-cols-2 gap-4"
                            >
                                {cat.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        variants={itemVariants}
                                        whileHover={{ y: -4 }}
                                        className="p-4 rounded-xl bg-white border border-slate-100 flex items-center gap-4 hover:shadow-lg transition"
                                    >
                                        {cat.checkIcon}
                                        <span className="font-semibold text-slate-700 text-sm">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
