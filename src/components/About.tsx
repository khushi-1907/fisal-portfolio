"use client";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="bg-white py-24 relative overflow-hidden"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.h2
          variants={itemVariants}
          className="relative inline-block font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#D4AF37] leading-tight"
        >
          Professional Summary
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-1 w-1/2 gold-gradient rounded-full origin-left"
          />
        </motion.h2>

        {/* Summary Text */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg sm:text-xl text-slate-700 leading-relaxed"
        >
          With a robust foundation in <strong>Industrial Engineering</strong> and a specialized focus on <strong>Local Content Monitoring</strong>, I bring a data-driven approach to optimizing industrial operations, ensuring compliance, and delivering measurable domestic growth. I excel in <strong>quantitative analysis, credit assessment, and process improvement</strong>, and am a detail-oriented, self-motivated communicator focused on impactful results.
        </motion.p>
      </motion.div>

      {/* Optional subtle background accent */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.05, x: "50%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/2 h-full gold-gradient -skew-x-12 translate-x-1/2"
      />
    </section>
  );
}
