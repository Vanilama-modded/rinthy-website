import { motion } from "framer-motion";

import { Download, LogIn, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Get the app",
    desc: "Grab the latest APK from GitHub Releases or build from source. It's open source and free forever.",
  },
  {
    icon: LogIn,
    step: "02",
    title: "Sign in",
    desc: "Use Modrinth OAuth for a seamless login, or fall back to a Personal Access Token if you prefer.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Take control",
    desc: "Manage projects, check analytics, edit versions, and handle your team — all from your phone.",
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >

          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            How it works
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            Three steps to power.
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            No complicated setup. Just install, log in, and go.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-modrinth-green/50 via-modrinth-green/20 to-transparent hidden sm:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}

                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-6xl font-display font-bold text-white/5 absolute -top-6 select-none">
                      {s.step}
                    </span>
                    <h3 className="font-display font-semibold text-2xl mb-3 relative">{s.title}</h3>
                    <p className="text-modrinth-muted leading-relaxed max-w-md mx-0 md:mx-auto">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-modrinth-green flex items-center justify-center shadow-lg shadow-modrinth-green/20">
                      <s.icon size={24} className="text-modrinth-dark" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
