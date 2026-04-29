import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

function AndroidIcon({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full bg-center bg-no-repeat bg-contain rounded-xl ${className}`} style={{ backgroundImage: "url('/androidlogo.svg')" }} />
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.22 7.13-.57 1.5-1.31 2.99-2.27 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export default function DownloadSection() {
  const { t } = useI18n();
  const { enableAnimations } = usePerformanceProfile();

  const fadeUp = enableAnimations
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="download" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...fadeUp}
          transition={{ duration: enableAnimations ? 0.7 : 0.01, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            {t.download.badge}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            {t.download.title}
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            {t.download.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-5 xs:gap-6 max-w-2xl mx-auto">
          {/* Android Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-6 xs:p-8 rounded-3xl glass border border-modrinth-green/20 hover:border-modrinth-green/40 transition-all duration-500 touch-manipulation"
          >
            <div className="flex flex-col items-center text-center gap-4 xs:gap-5">
              <div className="w-14 h-14 xs:w-16 xs:h-16 rounded-2xl bg-modrinth-green/10 flex items-center justify-center">
                <AndroidIcon className="w-7 h-7 xs:w-8 xs:h-8 text-modrinth-green" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1">{t.download.android.title}</h3>
                <p className="text-sm text-modrinth-muted">{t.download.android.desc}</p>
              </div>
              <a
                href="https://github.com/imsawiq/Rinthy/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-modrinth-green text-modrinth-dark font-semibold hover:brightness-110 transition-all duration-300 w-full justify-center"
              >
                <Download size={18} />
                {t.download.android.button}
              </a>
            </div>
          </motion.div>

          {/* iOS Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 rounded-3xl glass border border-white/5 opacity-70"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                <AppleIcon className="w-8 h-8 text-white/60" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-white/60">{t.download.ios.title}</h3>
                <p className="text-sm text-modrinth-muted">{t.download.ios.desc}</p>
              </div>
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-modrinth-muted font-medium cursor-not-allowed border border-white/5 w-full justify-center"
              >
                {t.download.ios.button}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

