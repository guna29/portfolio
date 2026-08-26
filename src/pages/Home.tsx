"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Cpu } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/contact";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Home = () => {
  const emailHref = `mailto:${CONTACT_INFO.email}?subject=Portfolio%20Inquiry&body=Hi%20Gunakarthik,`;

  return (
    <div className="min-h-screen px-4 pt-28 pb-20">
      <div className="w-full max-w-4xl mx-auto">

        {/* ── Hero: name + photo side by side ─────────────────── */}
        <div className="grid sm:grid-cols-[1fr,200px] gap-10 items-start">

          {/* Left: text column */}
          <div>
            <motion.div {...fadeUp(0)}>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                Available for SWE roles · OPT / H-1B Ready
              </p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-none">
                Gunakarthik<br />Naidu Lanka
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Software engineer focused on AI infrastructure, automation, and backend systems.
                BS + MS CS @ ASU, GPA 4.0. Python, FastAPI, GPU Systems.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div {...fadeUp(0.08)} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                See my work <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Experience <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.14)} className="mt-6 flex flex-wrap items-center gap-5 text-sm">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={emailHref}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {CONTACT_INFO.email}
              </a>
              <span className="inline-flex items-center gap-1.5 text-gray-500">
                <MapPin className="w-4 h-4" /> {CONTACT_INFO.location}
              </span>
            </motion.div>
          </div>

          {/* Right: profile photo */}
          <motion.div
            {...fadeUp(0.06)}
            className="hidden sm:block rounded-2xl border border-white/10 overflow-hidden aspect-[3/4]"
          >
            <img
              src="/profile/profile.png"
              alt="Gunakarthik Naidu Lanka"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        {/* ── About text ─────────────────────────────────────── */}
        <motion.div {...fadeUp(0.2)} className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">About</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              I&apos;m a software engineer focused on AI infrastructure, automation, and backend systems,
              with a B.S. and M.S. in Computer Science from Arizona State University.
            </p>
            <p>
              Most recently I built a <span className="text-white font-medium">GPU cluster telemetry system</span> that
              monitors hardware in real time, flags anomalies, and automatically remediates issues, backed
              by Prometheus and Grafana. I also built{" "}
              <span className="text-white font-medium">HireAgent</span>, an autonomous automation pipeline
              that&apos;s processed 700+ real cases in production, and contributed a merged fix to{" "}
              <span className="text-white font-medium">scikit-learn</span>.
            </p>
            <p>
              At <span className="text-white font-medium">Velocity Tech</span> I built backend services in
              FastAPI and PostgreSQL, cutting retrieval latency 45%. I&apos;m looking for roles where I can
              keep building reliable AI infrastructure and automation at scale.
            </p>
          </div>
        </motion.div>

        {/* ── Snapshot cards ─────────────────────────────────── */}
        <motion.div {...fadeUp(0.28)} className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex gap-3 items-start">
            <GraduationCap className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Education</p>
              <p className="mt-1.5 text-sm text-gray-100 font-medium">BS + MS CS @ ASU</p>
              <p className="text-xs text-gray-500 mt-0.5">Accelerated · GPA 4.0 · Minor in Business</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex gap-3 items-start">
            <Cpu className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Focus</p>
              <p className="mt-1.5 text-sm text-gray-100 font-medium">AI Infrastructure</p>
              <p className="text-xs text-gray-500 mt-0.5">Automation · GPU Systems · Backend</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex gap-3 items-start">
            <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Stack</p>
              <p className="mt-1.5 text-sm text-gray-100 font-medium">Python · Java · TypeScript</p>
              <p className="text-xs text-gray-500 mt-0.5">AWS · Kubernetes · Docker · LLMs</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
