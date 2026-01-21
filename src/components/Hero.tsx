"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Download, Linkedin, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <header
      ref={ref}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-28 pb-20"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-primary/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="space-y-7 text-center lg:text-left"
        >
          {/* GOLD NAME */}
          <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#D4AF37]">
            Fisal <br />
            <span className="italic">Alhakbani</span>
          </h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
            }}
            className="space-y-1.5"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800">
              Local Content Monitoring Specialist
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Credit Analysis • Technology Entrepreneurship
            </p>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
            }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-slate-600"
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <MapPin size={15} className="text-accent" /> Riyadh, Saudi Arabia
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Phone size={15} className="text-accent" /> +966 56 088 2677
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.8 } },
            }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3"
          >
            <a href="#experience" className="btn-primary shadow-lg hover:shadow-xl transition-shadow group">
              Explore Portfolio
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline shadow-sm hover:shadow-md transition-shadow group"
            >
              <Download
                className="mr-2 transition-transform group-hover:translate-y-1"
                size={16}
              />
              Download CV
            </a>

          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.8 } },
            }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Connect</span>
            <a
              href="https://www.linkedin.com/in/fisal-a-114685202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-300 shadow-sm hover:shadow-lg hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Improved Animated Gradient Ring */}
          <motion.div
            aria-hidden
            className="
              absolute
              w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]
              rounded-full
              bg-[conic-gradient(from_0deg,#D4AF37,#FDE68A,#D4AF37)]
              shadow-xl
            "
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              relative
              w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem]
              rounded-full
              overflow-hidden
              border-8 border-white
              shadow-[0_40px_90px_-20px_rgba(0,0,0,0.35)]
              z-10
            "
          >
            <Image
              src="/photo.jpg"
              alt="Fisal Alhakbani"
              fill
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 304px, 384px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
