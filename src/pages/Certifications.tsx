"use client";

import { ExternalLink, BadgeCheck, GitPullRequest, Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  url: string;
  description: string;
  logo: string;
  /** Fallback letter shown if logo fails to load */
  logoFallback?: string;
  /** Tailwind classes for the branded top-bar gradient */
  brandBar: string;
  /** Tailwind classes for the subtle card background tint */
  brandBg: string;
  /** Tailwind classes for the issuer label text */
  brandText: string;
};

const certifications: Certification[] = [
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    issued: "Aug 2024",
    expires: "Aug 2028",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6E7676E2A49E0DC47E89DF8FB620DBC8DE1C3AAF8F18097DE768EF2809FBAC7",
    description:
      "Built and deployed agentic AI systems using LangChain, OpenAI Agents SDK, and real MCP servers on Oracle Cloud Infrastructure (OCI). Covered multi-agent orchestration, tool use, memory management, and enterprise AI deployment patterns.",
    logo: "/oracle-agentic-ai-badge.png",
    logoFallback: "O",
    brandBar: "from-[#C74634] via-[#e05a47] to-[#C74634]",
    brandBg: "bg-[#C74634]/[0.06]",
    brandText: "text-[#e07060]",
  },
  {
    title: "AI Infrastructure: Introduction to AI Hypercomputer",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    credentialId: "K6LYXGBG3024",
    url: "https://coursera.org/verify/K6LYXGBG3024",
    description:
      "Completed Google Cloud's course on AI Hypercomputer architecture — covering the hardware and software stack behind large-scale AI training and inference, including TPU/GPU cluster design, high-bandwidth interconnects, distributed memory systems, and Google's AI-optimized infrastructure used for training frontier models.",
    logo: "https://cdn.simpleicons.org/googlecloud",
    brandBar: "from-[#4285F4] via-[#34A853] to-[#EA4335]",
    brandBg: "bg-[#4285F4]/[0.05]",
    brandText: "text-[#6ba4f7]",
  },
  {
    title: "AI Open Source Capstone Certificate",
    issuer: "CodePath",
    issued: "Aug 2026",
    credentialId: "421975",
    url: "https://certificates.codepath.org/a304d57c-ff29-48a7-8d48-8263739e3a7e.pdf",
    description:
      "Certificate of Achievement — Honors — awarded by CodePath (CEO: Michael Ellison) in recognition of outstanding performance during the successful completion of the AI Open Source Capstone Course. Summer 2026 cohort.",
    logo: "https://github.com/codepath.png?size=40",
    brandBar: "from-[#00C853] via-[#00e676] to-[#00C853]",
    brandBg: "bg-[#00C853]/[0.05]",
    brandText: "text-[#4cde7e]",
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    issued: "Aug 2026",
    url: "https://coursera.org/share/d4cb2ceea8d5be8ee2809df645706e48",
    description:
      "Completed NVIDIA's course on AI infrastructure and operations — covering GPU architectures, AI data center design, cluster networking, storage systems, and operational best practices for deploying and managing large-scale AI workloads. Scored 96%.",
    logo: "https://cdn.simpleicons.org/nvidia/76B900",
    brandBar: "from-[#76B900] via-[#8fd400] to-[#76B900]",
    brandBg: "bg-[#76B900]/[0.05]",
    brandText: "text-[#8fd400]",
  },
  {
    title: "AI Infrastructure: Cloud TPUs",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    url: "https://coursera.org/share/3d974fc3b9a3abd143737e1ac93ddc93",
    description:
      "Completed Google Cloud's deep-dive on Cloud TPU architecture — covering TPU v4/v5 hardware design, systolic array computation, XLA compilation, distributed TPU pod configurations, and best practices for training large-scale ML models on Google's TPU infrastructure. Scored 100%.",
    logo: "https://cdn.simpleicons.org/googlecloud",
    brandBar: "from-[#4285F4] via-[#34A853] to-[#EA4335]",
    brandBg: "bg-[#4285F4]/[0.05]",
    brandText: "text-[#6ba4f7]",
  },
  {
    title: "AI Infrastructure: Cloud GPUs",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    url: "https://coursera.org/share/598229a30ecac27f2676cd4a3e4dc247",
    description:
      "Completed Google Cloud's course on Cloud GPU infrastructure — covering NVIDIA A100/H100 GPU provisioning on GCP, GPU-to-GPU NVLink interconnects, CUDA/cuDNN optimization, multi-GPU distributed training strategies, and cost-efficient GPU cluster management. Scored 100%.",
    logo: "https://cdn.simpleicons.org/googlecloud",
    brandBar: "from-[#4285F4] via-[#34A853] to-[#EA4335]",
    brandBg: "bg-[#4285F4]/[0.05]",
    brandText: "text-[#6ba4f7]",
  },
  {
    title: "Foundations of Site Reliability Engineering",
    issuer: "Simplilearn",
    issued: "Aug 2026",
    url: "https://coursera.org/share/a31e29998006997a54cb2d4a27bd8776",
    description:
      "Completed Simplilearn's SRE foundations course — covering SLOs/SLAs/SLIs, error budgets, toil reduction, incident management, blameless postmortems, capacity planning, and the cultural and operational principles that underpin Site Reliability Engineering at scale. Scored 99.22%.",
    logo: "",
    logoFallback: "S",
    brandBar: "from-[#FF6B35] via-[#ff8c5a] to-[#FF6B35]",
    brandBg: "bg-[#FF6B35]/[0.05]",
    brandText: "text-[#ff8c5a]",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-4xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
        <p className="text-gray-400 mt-2 text-sm">Verified credentials, completed programs, and open-source contributions.</p>
      </ScrollAnimation>

      {/* ── Cert cards ─────────────────────────────────────── */}
      <div className="mt-10 flex flex-col gap-6">
        {certifications.map((cert) => (
          <ScrollAnimation key={cert.title}>
            <article className={`rounded-2xl border border-white/10 ${cert.brandBg} backdrop-blur-sm overflow-hidden`}>
              {/* Branded top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.brandBar}`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1.5">
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <span
                        className="text-sm font-bold text-white"
                        style={{ display: cert.logo ? "none" : "flex" }}
                      >
                        {cert.logoFallback ?? cert.issuer[0]}
                      </span>
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${cert.brandText}`}>
                        {cert.issuer}
                      </p>
                      <h3 className="text-lg font-semibold text-white leading-snug">{cert.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Issued {cert.issued}
                        {cert.expires && (
                          <>
                            <span className="text-gray-600 mx-2">·</span>
                            Expires {cert.expires}
                          </>
                        )}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-500 mt-1">
                          Certificate ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View
                  </a>
                </div>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed pl-14">{cert.description}</p>

                <div className="mt-4 pl-14">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            </article>
          </ScrollAnimation>
        ))}

      </div>

      {/* ── Open Source Contribution ────────────────────────── */}
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-20">Open Source</h2>
        <p className="text-gray-400 mt-2 text-sm">Real-world contributions to production codebases used by thousands of developers.</p>
      </ScrollAnimation>

      <ScrollAnimation>
        <article className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Merged Pull Request
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Open Source Contribution —{" "}
                  <a
                    href="https://github.com/scikit-learn/scikit-learn/pull/34685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
                  >
                    scikit-learn
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1.5">
                  Python Machine Learning Library
                  <span className="text-gray-600">·</span>
                  <Star className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                  <span>60k+ GitHub Stars</span>
                </p>
              </div>

              <a
                href="https://github.com/scikit-learn/scikit-learn/pull/34685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all self-start whitespace-nowrap"
              >
                <GitPullRequest className="w-4 h-4" />
                View PR #34685
              </a>
            </div>

            <p className="text-gray-300 mt-5 leading-relaxed">
              Contributed a new feature to scikit-learn&apos;s{" "}
              <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">RFECV</code> class
              by implementing the{" "}
              <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">elimination_order_</code>{" "}
              attribute, which exposes the per-step order in which features are eliminated during recursive feature elimination —
              previously discarded information users couldn&apos;t access.
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                Set up a full local development environment using a Docker dev container with micromamba; debugged a BLAS/aarch64 incompatibility on Apple Silicon and built scikit-learn from source.
              </li>
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                <span>
                  Implemented the fix in{" "}
                  <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono break-all">
                    sklearn/feature_selection/_rfe.py
                  </code>{" "}
                  following scikit-learn&apos;s contribution guidelines, including changelog entry and docstring conventions.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                Wrote a unit test suite — <span className="text-white font-medium">60 tests passing, 0 regressions</span>.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "scikit-learn", "pytest", "Docker", "micromamba", "Git"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </ScrollAnimation>
    </div>
  );
};

export default Certifications;
