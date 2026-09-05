import { FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const blogFolders = [
  { title: "Cypress", tone: "emerald" },
  { title: "Playwright", tone: "coral" },
  { title: "CI/CD & Pipelines", tone: "cyan" },
  { title: "Qualidade de APIs", tone: "blue" },
];

export function Blog() {
  return (
    <section className="blog" id="blog">
      <SectionHeading prefix="QA" highlight="Blog" />

      <div className="blog-folders" aria-label="Pastas futuras do blog">
        {blogFolders.map(({ title, tone }, index) => {
          const sharedProps = {
            className: `blog-folder blog-folder-${tone}`,
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.45, delay: index * 0.07, ease: "easeOut" as const },
          };

          if (title === "Cypress") {
            return (
              <motion.a {...sharedProps} className={`${sharedProps.className} is-available`} href="#blog/cypress" key={title}>
                <FolderOpen aria-hidden="true" /><h3>{title}</h3><span>Ler artigo</span>
              </motion.a>
            );
          }

          return (
            <motion.article {...sharedProps} key={title}>
              <FolderOpen aria-hidden="true" /><h3>{title}</h3><span>Em breve</span>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
