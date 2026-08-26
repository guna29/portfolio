"use client";

import { ScrollAnimation } from "@/components/ScrollAnimation";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java (Spring Boot)", "TypeScript", "Node.js", "SQL (Postgres/MySQL)", "C++", "Go", "HTML/CSS"],
  },
  {
    category: "AI / Agentic",
    items: ["LangGraph", "RAG Pipelines", "Ollama", "Playwright", "GGUF Quantization", "Prompt Engineering", "Local LLM Inference"],
  },
  {
    category: "Infrastructure",
    items: ["AWS (EC2, S3, Lambda, Fargate)", "Docker", "Kubernetes", "Terraform (IaC)", "CI/CD", "GitHub Actions", "Linux"],
  },
  {
    category: "Web / Backend",
    items: ["React", "Next.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets", "Redis", "RabbitMQ", "Drizzle ORM"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Concepts",
    items: ["System Design", "Distributed Systems", "Microservices", "Performance Optimization", "Security Compliance", "SDLC", "Agile"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
      </ScrollAnimation>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <ScrollAnimation key={group.category}>
            <section className="rounded-xl border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-sm border border-white/10 bg-white/[0.03] text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
