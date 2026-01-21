"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, GraduationCap, Award } from "lucide-react";

const education = [
  {
    year: "June 2024 – August 2024",
    title: "Professional Certificate",
    company: "Stanford University",
    location: "Stanford, California",
    description:
      "Elite professional development program focused on Credit Analysis and Technology Entrepreneurship at one of the world’s leading universities.",
    icon: <Award size={22} />,
    tags: ["Credit Analysis", "Entrepreneurship", "Professional Program"],
  },
  {
    year: "2017 – 2022",
    title: "Bachelor's Degree in Industrial Engineering",
    company: "Prince Sattam bin Abdulaziz University",
    location: "Saudi Arabia",
    description:
      "Completed undergraduate studies in Industrial Engineering with a strong foundation in systems optimization, engineering principles, and analytical problem-solving.",
    icon: <GraduationCap size={22} />,
    tags: ["Industrial Engineering", "Optimization", "Engineering"],
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl font-black text-slate-soft"
          >
            Academic <span className="text-gold-gradient italic">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Education and professional certifications that shaped my foundation.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px h-full w-1 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-slate-100" />
            <motion.div
              style={{ scaleY }}
              className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top"
            />
          </div>

          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-20 last:mb-0"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="flex items-center justify-center w-14 h-14 rounded-2xl border-4 border-white bg-slate-50 text-slate-400 group-hover:text-white group-hover:bg-accent transition-all duration-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20"
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
                  <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-[10px] font-black uppercase tracking-widest">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                    <MapPin size={14} className="text-accent" /> {item.location}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-soft mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 mb-6 font-bold italic">
                  {item.company}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase"
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
