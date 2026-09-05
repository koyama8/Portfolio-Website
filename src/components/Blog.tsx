import { ArrowRight, Clock3, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const blogFolders = [
  {
    title: "Cypress",
    description: "Engenharia de Automação, QA e SDET aplicada a testes Web e API, dados, relatórios e quality gates.",
    tone: "emerald",
    href: "#blog/cypress",
  },
  {
    title: "Playwright",
    description: "Engenharia de Automação, QA e SDET com testes E2E cross-browser, tracing e execução paralela.",
    tone: "coral",
  },
  {
    title: "CI/CD & Pipelines",
    description: "Engenharia de Automação, QA e SDET integrada a pipelines, quality gates e evidências.",
    tone: "cyan",
  },
  {
    title: "Qualidade de APIs",
    description: "Engenharia de Automação, QA e SDET para contratos, autenticação, dados e cenários negativos.",
    tone: "violet",
  },
  {
    title: "CTFL • ISTQB",
    description: "Engenharia de Automação, QA e SDET apoiada por fundamentos de testes, ciclo de vida e técnicas CTFL.",
    tone: "gold",
    href: "#blog/ctfl",
  },
];

export function Blog() {
  return (
    <section className="blog" id="blog">
      <SectionHeading prefix="" highlight="Blog" />
      <p className="blog-intro">Conteúdo técnico sobre automação, arquitetura de testes e qualidade contínua, escrito para conectar decisões de engenharia ao risco real do produto.</p>

      <div className="blog-folders" aria-label="Conteúdos do blog">
        {blogFolders.map(({ title, description, tone, href }, index) => (
          <motion.article
            className={`blog-folder blog-folder-${tone}${href ? " is-available" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
            key={title}
          >
            <div className="blog-folder-head">
              <span className="blog-folder-icon"><FolderOpen aria-hidden="true" /></span>
              <span className="blog-folder-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{title}</h3>
            <p className="blog-folder-description">{description}</p>
            <div className="blog-folder-footer">
              {href ? (
                <a href={href}>Ler artigo <ArrowRight aria-hidden="true" /></a>
              ) : (
                <span className="blog-folder-status"><Clock3 aria-hidden="true" />Em breve</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
