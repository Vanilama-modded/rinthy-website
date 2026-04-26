import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const screenshots = [
  {
    src: "https://raw.githubusercontent.com/imsawiq/Rinthy/main/docs/screenshots/login.png",
    alt: "Login Screen",
    label: "Login",
  },
  {
    src: "https://raw.githubusercontent.com/imsawiq/Rinthy/main/docs/screenshots/developer-panel.png",
    alt: "Developer Panel",
    label: "Dashboard",
  },
  {
    src: "https://raw.githubusercontent.com/imsawiq/Rinthy/main/docs/screenshots/analytics.png",
    alt: "Analytics",
    label: "Analytics",
  },
];

export default function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = () => setActive((a) => (a + 1) % screenshots.length);
  const prev = () => setActive((a) => (a - 1 + screenshots.length) % screenshots.length);

  return (
    <section id="screenshots" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            Screenshots
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            See it in action.
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            Clean, fast, and purpose-built for mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <button
              onClick={prev}
              className="hidden md:flex w-12 h-12 rounded-full glass items-center justify-center hover:bg-white/10 transition-colors shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="relative w-full max-w-sm md:max-w-md aspect-[9/19] rounded-[2.5rem] bg-modrinth-card border border-modrinth-border p-3 shadow-2xl glow-green overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={screenshots[active].src}
                  alt={screenshots[active].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover rounded-[2rem] cursor-pointer"
                  onClick={() => setLightbox(active)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </AnimatePresence>
              <button
                onClick={() => setLightbox(active)}
                className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition-colors z-20"
                aria-label="Expand"
              >
                <Maximize2 size={14} />
              </button>
            </div>

            <button
              onClick={next}
              className="hidden md:flex w-12 h-12 rounded-full glass items-center justify-center hover:bg-white/10 transition-colors shrink-0"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-10 bg-modrinth-green" : "w-4 bg-modrinth-border hover:bg-white/20"
                }`}
                aria-label={s.label}
              />
            ))}
          </div>

          <div className="flex md:hidden items-center justify-center gap-4 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

