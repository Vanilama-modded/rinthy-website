import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FolderOpen,
  BarChart3,
  Package,
  Users,
  Bell,
  UserCircle,
  Palette,
  Wallet,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: FolderOpen,
    title: "Projects Dashboard",
    desc: "Browse and manage all your Modrinth projects in one clean list.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Track downloads, follows, and engagement trends in real time.",
  },
  {
    icon: Package,
    title: "Version Management",
    desc: "View, create, and edit project versions from your phone.",
  },
  {
    icon: Users,
    title: "Team Control",
    desc: "Add, remove, and manage project team members on the go.",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Stay on top of unread alerts without opening a browser.",
  },
  {
    icon: UserCircle,
    title: "Profile Editing",
    desc: "Update username, bio, and avatar directly in the app.",
  },
  {
    icon: Palette,
    title: "Appearance",
    desc: "Switch themes and pick your accent color for a personal touch.",
  },
  {
    icon: Wallet,
    title: "Balance View",
    desc: "Check your Modrinth earnings and payout status instantly.",
  },
  {
    icon: Globe,
    title: "RU / EN",
    desc: "Full Russian and English language support baked in.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-6 rounded-2xl glass hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-modrinth-green/10 text-modrinth-green group-hover:bg-modrinth-green group-hover:text-modrinth-dark transition-all duration-300">
        <feature.icon size={20} strokeWidth={2} />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-sm text-modrinth-muted leading-relaxed">{feature.desc}</p>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-modrinth-green/20" />
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase mb-5">
            Features
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-5">
            Everything you need.
          </h2>
          <p className="text-modrinth-muted max-w-xl mx-auto text-lg">
            A full toolkit for Modrinth developers, redesigned for mobile.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

