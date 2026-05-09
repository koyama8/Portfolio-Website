import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <SectionHeading prefix="Latest" highlight="Project" />

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <motion.article
            className="portfolio-box"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
          >
            <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />

            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`Tecnologias de ${project.title}`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
