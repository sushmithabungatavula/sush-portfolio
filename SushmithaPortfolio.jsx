import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Folder,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Sparkles,
  Shield,
  Code2,
  Palette,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  Monitor,
  Star,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Accessibility Resource Hub (ARHub)",
    subtitle: "Accessible web platform with AI-supported resources",
    tech: ["React", "Spring Boot", "Firebase"],
    live: "https://arhub-f7416.web.app/home",
    code: "#",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20",
  },
  {
    title: "Thrift Store System",
    subtitle: "Full-stack e-commerce with inventory management",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://thrift-store-customer-git-main-saiteja1911s-projects.vercel.app/",
    code: "https://github.com/sushmithabungatavula/THRIFT-STORE",
    gradient: "from-cyan-500/30 via-blue-500/20 to-violet-400/20",
  },
  {
    title: "Envy-Free Cake Cutting",
    subtitle: "Algorithmic fairness for resource allocation",
    tech: ["Algorithms", "Complexity", "Modeling"],
    live: "#",
    code: "#",
    gradient: "from-orange-500/30 via-pink-500/20 to-violet-500/20",
  },
  {
    title: "KWTA Model",
    subtitle: "PySpark-based top-K ranking for large datasets",
    tech: ["Python", "PySpark", "Big Data"],
    live: "#",
    code: "#",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
  },
];

const experiences = [
  {
    role: "Analyst II Software Engineering",
    company: "DXC Technology",
    period: "Nov 2021 – Jul 2024",
    points: [
      "Built an employee background verification platform with production-ready workflows.",
      "Integrated real-time notifications and messaging for smoother operations.",
      "Worked on payment flows and full-stack delivery using React, Node.js, MySQL, and MongoDB.",
    ],
  },
  {
    role: "Product Intern",
    company: "HackBoats.Inc",
    period: "Summer 2019",
    points: [
      "Worked on IoT devices using Python, Arduino, and Raspberry Pi.",
      "Integrated Bluetooth and Wi-Fi modules for connected communication.",
    ],
  },
  {
    role: "Advert Designing Intern",
    company: "Organic Learning",
    period: "Oct 2019 – Dec 2019",
    points: [
      "Created promotional graphics and video assets using Photoshop and Premiere Pro.",
      "Balanced digital storytelling with clean visual branding.",
    ],
  },
];

const skills = [
  {
    title: "Development",
    icon: Code2,
    items: ["Python", "JavaScript", "React.js", "Node.js", "Spring Boot", "HTML/CSS", "MySQL"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    items: ["OWASP ZAP", "Burp Suite", "Nmap", "Wireshark", "Web Security", "Testing"],
  },
  {
    title: "Design",
    icon: Palette,
    items: ["Photoshop", "Premiere Pro", "Figma", "Canva", "CapCut", "Brand Visuals"],
  },
];

const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of North Texas",
    period: "2024 – Present",
  },
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "Sridevi Women's Engineering College (JNTU)",
    period: "2017 – 2021",
  },
];

const desktopIcons = [
  { label: "Projects", icon: Folder, href: "#projects", x: "8%", y: "22%" },
  { label: "Resume", icon: Download, href: "#contact", x: "12%", y: "58%" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sushmitha-bungatavula-664964173/", x: "82%", y: "20%" },
  { label: "GitHub", icon: Github, href: "https://github.com/sushmithabungatavula", x: "80%", y: "54%" },
  { label: "Contact", icon: Mail, href: "#contact", x: "50%", y: "74%" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({ kicker, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
        <Sparkles className="h-3.5 w-3.5" />
        {kicker}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </motion.div>
  );
}

function FloatingOrb({ className }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={cn("absolute rounded-full blur-3xl", className)}
    />
  );
}

function DesktopIcon({ item }) {
  const Icon = item.icon;
  const isHash = item.href.startsWith("#");
  return (
    <motion.a
      href={item.href}
      target={isHash ? undefined : "_blank"}
      rel={isHash ? undefined : "noreferrer"}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.35 }}
      className="group absolute flex w-24 flex-col items-center gap-2 text-center"
      style={{ left: item.x, top: item.y }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/10">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-slate-100 backdrop-blur-md">{item.label}</span>
    </motion.a>
  );
}

export default function InteractivePortfolioRemake() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const fullName = "Sushmitha Bungatavula";
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 500], [0, 1]);
  const navY = useTransform(scrollY, [0, 500], [-20, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTyped(fullName.slice(0, index + 1));
      index += 1;
      if (index >= fullName.length) clearInterval(timer);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className={cn("min-h-screen overflow-x-hidden transition-colors duration-500", dark ? "bg-[#050816] text-white" : "bg-slate-100 text-slate-900")}>
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className={cn("absolute inset-0", dark ? "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_60%_80%,rgba(244,114,182,0.16),transparent_28%),linear-gradient(180deg,#050816_0%,#090d1f_100%)]" : "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_25%),radial-gradient(circle_at_60%_80%,rgba(244,114,182,0.10),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)]")} />
        <FloatingOrb className="left-[-80px] top-16 h-72 w-72 bg-violet-500/25" />
        <FloatingOrb className="right-[-60px] top-40 h-72 w-72 bg-cyan-400/20" />
        <FloatingOrb className="bottom-[-60px] left-[30%] h-80 w-80 bg-fuchsia-500/15" />
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className={cn("absolute h-1.5 w-1.5 rounded-full", dark ? "bg-white/30" : "bg-slate-700/20")}
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -80, 0], x: [0, 20, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.header
        style={{ opacity: navOpacity, y: navY }}
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border px-4 py-3 backdrop-blur-xl md:px-6",
          dark ? "border-white/10 bg-[#0c1228]/70 shadow-[0_10px_60px_rgba(0,0,0,0.35)]" : "border-slate-300/70 bg-white/70 shadow-[0_10px_60px_rgba(15,23,42,0.10)]"
        )}
      >
        <div className="flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3 font-semibold tracking-wide">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg">SB</div>
            <span className={dark ? "text-white" : "text-slate-900"}>Sushmitha</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={cn("text-sm transition hover:text-cyan-300", dark ? "text-slate-300" : "text-slate-700 hover:text-violet-600")}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((v) => !v)}
              className={cn("rounded-xl border p-2.5 transition", dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-300 bg-white hover:bg-slate-50")}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={cn("rounded-xl border p-2.5 md:hidden", dark ? "border-white/10 bg-white/5" : "border-slate-300 bg-white")}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn("fixed inset-x-4 top-24 z-40 rounded-3xl border p-5 backdrop-blur-2xl md:hidden", dark ? "border-white/10 bg-[#0c1228]/95" : "border-slate-300 bg-white/95")}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn("rounded-2xl px-4 py-3 text-sm font-medium transition", dark ? "bg-white/5 text-slate-200 hover:bg-white/10" : "bg-slate-100 text-slate-800 hover:bg-slate-200")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="about" className="relative flex min-h-screen items-center justify-center px-4 pb-16 pt-8 md:px-8">
        <div className="absolute inset-0">
          <div className={cn("absolute left-1/2 top-6 hidden h-[78vh] w-[92%] max-w-7xl -translate-x-1/2 rounded-[2rem] border md:block", dark ? "border-white/10 bg-white/[0.04]" : "border-slate-300/70 bg-white/40")} />
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {desktopIcons.map((item) => (
              <DesktopIcon key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center md:text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
              <Monitor className="h-4 w-4" />
              Interactive portfolio
            </div>
            <h1 className={cn("text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl", dark ? "text-white" : "text-slate-900")}>
              {typed}
              <span className="animate-pulse text-cyan-300">|</span>
            </h1>
            <p className={cn("mt-6 max-w-2xl text-base leading-8 md:text-lg", dark ? "text-slate-300" : "text-slate-700")}>
              Full-stack developer, cybersecurity enthusiast, and graphic designer creating bold digital experiences that feel alive, polished, and memorable.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a href="mailto:sushmithabungatavula@gmail.com" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> Gmail</span>
              </a>
              <a href="tel:+19405972706" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call</span>
              </a>
              <a href="https://www.linkedin.com/in/sushmitha-bungatavula-664964173/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                <span className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
              </a>
              <a href="https://github.com/sushmithabungatavula" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                <span className="flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition hover:-translate-y-1">
                Explore Projects
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#contact" className={cn("inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-4 text-sm font-semibold transition hover:-translate-y-1", dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-300 bg-white hover:bg-slate-50")}>
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className={cn("rounded-[2rem] border p-4 shadow-2xl backdrop-blur-2xl", dark ? "border-white/10 bg-white/[0.06]" : "border-slate-300/70 bg-white/70")}>
              <div className={cn("overflow-hidden rounded-[1.5rem] border", dark ? "border-white/10 bg-[#070b17]" : "border-slate-200 bg-slate-50")}>
                <div className={cn("flex items-center gap-2 border-b px-4 py-3", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}>
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className={cn("ml-3 text-xs", dark ? "text-slate-400" : "text-slate-500")}>sushmitha.exe</span>
                </div>
                <div className="space-y-4 p-5 font-mono text-sm">
                  <div className="text-emerald-300">$ launching portfolio...</div>
                  <div className={dark ? "text-slate-300" : "text-slate-700"}>
                    <span className="text-cyan-300">role:</span> Full-Stack Developer
                  </div>
                  <div className={dark ? "text-slate-300" : "text-slate-700"}>
                    <span className="text-cyan-300">focus:</span> Security • Design • User Experience
                  </div>
                  <div className={dark ? "text-slate-300" : "text-slate-700"}>
                    <span className="text-cyan-300">status:</span> Open to impactful opportunities
                  </div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="text-fuchsia-300"
                  >
                    &gt; making websites that don’t feel boring anymore.
                  </motion.div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  ["2+", "Years experience"],
                  ["4", "Featured projects"],
                  ["3", "Creative domains"],
                ].map(([value, label]) => (
                  <div key={label} className={cn("rounded-2xl border p-4 text-center", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white") }>
                    <div className="text-2xl font-bold text-cyan-300">{value}</div>
                    <div className={cn("mt-1 text-xs", dark ? "text-slate-400" : "text-slate-600")}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#experience"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className={cn("absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]", dark ? "border-white/10 bg-white/5 text-slate-300" : "border-slate-300 bg-white/70 text-slate-700")}
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </section>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <section id="experience" className="py-20">
          <SectionHeading
            kicker="Experience"
            title="Built across engineering, IoT, and design."
            description="A timeline that feels clean, dynamic, and easy to scan — with more personality than a basic resume dump."
          />
          <div className="relative ml-2 border-l border-white/10 pl-6 md:ml-6 md:pl-10">
            {experiences.map((item, idx) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative mb-8"
              >
                <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-lg shadow-cyan-500/40 md:-left-[46px]" />
                <div className={cn("rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1", dark ? "border-white/10 bg-white/[0.05] hover:bg-white/[0.08]" : "border-slate-200 bg-white/80 hover:bg-white")}>
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white dark:text-white">{item.role}</h3>
                      <p className={cn("text-sm", dark ? "text-cyan-300" : "text-violet-600")}>{item.company}</p>
                    </div>
                    <span className={cn("rounded-full px-3 py-1 text-xs", dark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-700")}>{item.period}</span>
                  </div>
                  <ul className={cn("mt-4 space-y-3 text-sm leading-7", dark ? "text-slate-300" : "text-slate-700")}>
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <Star className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <SectionHeading
            kicker="Projects"
            title="Cards with motion, glow, and stronger visual hierarchy."
            description="These project blocks are redesigned to feel premium instead of flat — better spacing, layered backgrounds, hover lift, and action links that actually stand out."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className={cn("group relative overflow-hidden rounded-[2rem] border p-6", dark ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white/85")}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-100 transition duration-500", project.gradient)} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)] opacity-80" />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-slate-200">{project.subtitle}</p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-black/20 p-3 backdrop-blur-md">
                      <Folder className="h-6 w-6 text-cyan-200" />
                    </div>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-slate-100 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/30">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <SectionHeading
            kicker="Skills"
            title="Not just a list — now a sharper visual system."
            description="Grouped by strength area with icon-led cards, better spacing, subtle hover animation, and a cleaner premium look."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={cn("rounded-[2rem] border p-6", dark ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white/80")}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 p-3 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={cn("text-xl font-semibold", dark ? "text-white" : "text-slate-900")}>{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span key={item} className={cn("rounded-full px-4 py-2 text-sm", dark ? "bg-white/7 text-slate-200 ring-1 ring-white/10" : "bg-slate-100 text-slate-700 ring-1 ring-slate-200")}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="education" className="py-20">
          <SectionHeading
            kicker="Education"
            title="Academic journey, styled with more personality."
            description="Clean cards with stronger typography and polished glassmorphism instead of plain blocks."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className={cn("rounded-[2rem] border p-6", dark ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white/80")}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 to-orange-400 p-3 text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className={cn("rounded-full px-3 py-1 text-xs", dark ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-700")}>{item.period}</span>
                </div>
                <h3 className={cn("text-xl font-semibold", dark ? "text-white" : "text-slate-900")}>{item.degree}</h3>
                <p className={cn("mt-2 text-sm", dark ? "text-slate-300" : "text-slate-700")}>{item.school}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <SectionHeading
            kicker="Contact"
            title="A stronger finish with a lively call-to-action."
            description="This area replaces the plain old contact form feel with a modern end section that still stays professional and easy to use."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className={cn("relative overflow-hidden rounded-[2.2rem] border p-8 md:p-10", dark ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white/85")}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_25%)]" />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
                  <Briefcase className="h-4 w-4" />
                  Let’s build something great
                </div>
                <h3 className={cn("text-3xl font-bold leading-tight", dark ? "text-white" : "text-slate-900")}>Want this portfolio to feel even more custom and interactive?</h3>
                <p className={cn("mt-4 max-w-xl text-sm leading-7", dark ? "text-slate-300" : "text-slate-700")}>
                  Add your real resume file, project thumbnails, and design portfolio preview images next. Then this can become a polished final portfolio instead of a generic template.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:sushmithabungatavula@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                  <a href="https://github.com/sushmithabungatavula" target="_blank" rel="noreferrer" className={cn("inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold", dark ? "border-white/10 bg-white/5 text-white" : "border-slate-300 bg-slate-50 text-slate-900")}>
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Mail, label: "Email", value: "sushmithabungatavula@gmail.com", href: "mailto:sushmithabungatavula@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+1 (940) 597-2706", href: "tel:+19405972706" },
                  { icon: Linkedin, label: "LinkedIn", value: "Connect professionally", href: "https://www.linkedin.com/in/sushmitha-bungatavula-664964173/" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className={cn("flex items-center gap-4 rounded-2xl border p-4 transition hover:-translate-y-1", dark ? "border-white/10 bg-black/20 hover:bg-black/30" : "border-slate-200 bg-slate-50 hover:bg-white")}
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className={cn("text-xs uppercase tracking-[0.22em]", dark ? "text-slate-400" : "text-slate-500")}>{item.label}</div>
                        <div className={cn("mt-1 text-sm font-medium", dark ? "text-white" : "text-slate-900")}>{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
