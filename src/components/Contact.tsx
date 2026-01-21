"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Phone, Linkedin } from "lucide-react";

/* ------------------ Motion ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-slate-50 p-8 lg:p-20 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.15)]"
        >
          {/* Subtle light accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <motion.div variants={fadeUp} className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900">
                  Let&apos;s Connect
                  <span className="block text-accent italic">
                    Professional Opportunities
                  </span>
                </h2>
                <p className="text-slate-600 text-lg max-w-md leading-relaxed">
                  Open to discussions around collaboration, compliance
                  monitoring, and industrial optimization initiatives.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "fisal.alhakbani@example.com",
                    href: "mailto:fisal.alhakbani@example.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+966 56 088 2677",
                    href: "tel:+966560882677",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Riyadh, Saudi Arabia",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/fisal-a-114685202",
                    href: "https://www.linkedin.com/in/fisal-a-114685202",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    variants={fadeRight}
                    whileHover={{ x: 6 }}
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-200 shadow-lg"
            >
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input label="Full Name" placeholder="Your name" />
                  <Input label="Email" placeholder="your@email.com" />
                </div>

                <Input label="Subject" placeholder="How can I help?" />

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your opportunity..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-white font-bold hover:brightness-110 transition"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Input */

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
    </div>
  );
}
