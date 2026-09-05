import { motion } from "framer-motion";
import { ServerCog, Smartphone } from "lucide-react";
import { FaMasksTheater } from "react-icons/fa6";
import { SiAppium, SiCypress, SiSelenium } from "react-icons/si";
import { SectionHeading } from "./SectionHeading";

const serviceItems = [
  {
    title: "Cypress",
    description: "Estruturas de automação Web e API com dados controlados, relatórios, quality gates, segurança funcional e apoio a testes de performance.",
    tags: ["Web", "API", "k6", "Lighthouse", "Segurança"],
    Icon: SiCypress,
    tone: "cypress",
  },
  {
    title: "Playwright",
    description: "Testes Web e API cross-browser com auto-waiting, isolamento, execução paralela, tracing e evidências completas de diagnóstico.",
    tags: ["Web", "API", "TypeScript", "Tracing", "CI/CD"],
    Icon: FaMasksTheater,
    tone: "playwright",
  },
  {
    title: "Selenium",
    description: "Frameworks de automação Web com Java, arquitetura Page Object, execução regressiva e cobertura de jornadas críticas em múltiplos navegadores.",
    tags: ["Java", "JUnit", "Maven", "Page Object"],
    Icon: SiSelenium,
    tone: "selenium",
  },
  {
    title: "APIs",
    description: "Engenharia de testes com REST Assured e Postman para validar contratos, autenticação, payloads, dados e regras de negócio com rastreabilidade.",
    tags: ["REST Assured", "Postman", "Contratos", "CI/CD"],
    Icon: ServerCog,
    tone: "api",
  },
  {
    title: "Appium",
    description: "Automação mobile para Android e iOS com arquitetura reutilizável, execução em dispositivos reais e validação de fluxos críticos do produto.",
    tags: ["Android", "iOS", "Java", "WebDriver"],
    Icon: SiAppium,
    tone: "appium",
    SecondaryIcon: Smartphone,
  },
];

export function Services() {
  return (
    <section className="services services-showcase" id="services">
      <header className="services-showcase-header">
        <SectionHeading prefix="" highlight="Serviços" />
        <p>Estruturo soluções de automação para Web, APIs e mobile, integrando arquitetura de testes, CI/CD, relatórios, segurança funcional e performance com k6 e Lighthouse.</p>
      </header>

      <div className="service-grid">
        {serviceItems.map(({ title, description, tags, Icon, tone, SecondaryIcon }, index) => (
          <motion.article
            className={`service-card service-card-${tone}`}
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: index * 0.07, ease: "easeOut" }}
          >
            <div className="service-card-top">
              <span className="service-card-icon">
                {tone === "playwright" ? (
                  <span className="playwright-service-mark" aria-hidden="true">
                    <Icon className="playwright-service-red" />
                    <Icon className="playwright-service-green" />
                  </span>
                ) : <Icon aria-hidden="true" />}
                {SecondaryIcon ? <SecondaryIcon className="service-card-secondary-icon" aria-hidden="true" /> : null}
              </span>
              <span className="service-card-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="service-tags" aria-label={`Tecnologias de ${title}`}>
              {tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
