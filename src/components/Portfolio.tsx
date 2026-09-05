import { motion } from "framer-motion";
import {
  Code,
  Database,
  ExternalLink,
  FileText,
  FolderPlus,
  Globe,
  HeartPulse,
  LockKeyhole,
  MousePointer2,
  Palette,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiCypress,
  SiFigma,
  SiK6,
  SiLighthouse,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOwasp,
  SiSelenium,
} from "react-icons/si";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const getTagClassName = (tag: string) =>
  tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getTagIcon = (tag: string) => {
  switch (getTagClassName(tag)) {
    case "java":
      return <FaJava />;
    case "selenium":
      return <SiSelenium />;
    case "cypress":
      return <SiCypress />;
    case "k6":
      return <SiK6 />;
    case "lighthouse":
      return <SiLighthouse />;
    case "seguranca":
      return <SiOwasp />;
    case "node-js":
      return <SiNodedotjs />;
    case "rest-assured":
      return <SiOpenapiinitiative />;
    case "api":
      return <ServerCog />;
    case "e2e":
      return <Workflow />;
    case "qa":
      return <ShieldCheck />;
    case "social":
      return <UsersRound />;
    case "privacidade":
      return <LockKeyhole />;
    case "web":
      return <Globe />;
    case "crud":
      return <Database />;
    case "forms":
      return <FileText />;
    case "ux":
      return <MousePointer2 />;
    case "ui":
      return <PanelsTopLeft />;
    case "ux-ui":
      return <Palette />;
    case "figma":
      return <SiFigma />;
    case "bem-estar":
      return <HeartPulse />;
    case "prototype":
      return <Workflow />;
    default:
      return <Code />;
  }
};

export function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <SectionHeading prefix="Latest" highlight="Projects" />

      <div className="portfolio-container">
        {projects.map((project, index) => {
          const isPlaceholder = project.isPlaceholder;
          const isDense = project.tags.length > 4 || project.title.length > 20;

          return (
            <motion.article
              className={`portfolio-box${isPlaceholder ? " portfolio-box-placeholder" : ""}${isDense ? " portfolio-box-dense" : ""}`}
              data-tone={project.tone}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
            >
              {isPlaceholder ? (
                <div className="portfolio-placeholder-visual" aria-hidden="true">
                  <FolderPlus />
                </div>
              ) : (
                <img
                  src={project.image ?? ""}
                  alt={project.imageAlt ?? project.title}
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="portfolio-layer">
                {isPlaceholder ? (
                  <span className="portfolio-placeholder-icon" aria-hidden="true">
                    <FolderPlus />
                  </span>
                ) : null}
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {!isPlaceholder ? (
                  <>
                    <ul className="project-tags" aria-label={`Tecnologias de ${project.title}`}>
                      {project.tags.map((tag, tagIndex) => {
                        const tagClassName = getTagClassName(tag);

                        return (
                          <li
                            key={tag}
                            className={`tag-${tagClassName}${tagIndex === 0 ? " project-tag-primary" : ""}`}
                          >
                            <span className="project-tag-icon" aria-hidden="true">
                              {getTagIcon(tag)}
                            </span>
                            <span className="project-tag-label">{tag}</span>
                          </li>
                        );
                      })}
                      {project.tags.length > 2 ? (
                        <li className="project-tags-more" aria-hidden="true">
                          +{project.tags.length - 2}
                        </li>
                      ) : null}
                    </ul>
                    {project.href ? (
                      <a
                        className="project-cta"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir projeto ${project.title}`}
                      >
                        <span>Ver projeto</span>
                        <ExternalLink aria-hidden="true" />
                      </a>
                    ) : (
                      <span
                        className="project-cta project-cta-disabled"
                        aria-disabled="true"
                        title="Repositório em breve"
                      >
                        <span>Ver projeto</span>
                        <ExternalLink aria-hidden="true" />
                      </span>
                    )}
                  </>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
