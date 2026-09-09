import {
  Activity,
  Braces,
  ChartNoAxesCombined,
  CircleGauge,
  CloudCog,
  Code2,
  Container,
  Database,
  FileCheck2,
  GitBranch,
  Globe2,
  KeyRound,
  MonitorCheck,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const serviceItems = [
  {
    title: "Automação Web",
    description:
      "Jornadas E2E e regressivas estruturadas para validar regras de negócio, interfaces e integrações em múltiplos navegadores, com execução estável e evidências claras.",
    tools: [
      { label: "Cypress", Icon: Code2 },
      { label: "Playwright", Icon: Globe2 },
      { label: "Selenium", Icon: MonitorCheck },
      { label: "Qualidade", Icon: ShieldCheck },
    ],
    Icon: MonitorCheck,
    tone: "web",
  },
  {
    title: "Qualidade de APIs",
    description:
      "Validação de contratos, autenticação, payloads, dados e cenários negativos para garantir serviços confiáveis, rastreáveis e alinhados às regras do produto.",
    tools: [
      { label: "REST Assured", Icon: Braces },
      { label: "Postman", Icon: ServerCog },
      { label: "Contratos", Icon: FileCheck2 },
      { label: "Dados", Icon: Database },
    ],
    Icon: ServerCog,
    tone: "api",
  },
  {
    title: "Automação Mobile",
    description:
      "Cobertura de fluxos críticos em Android e iOS com arquitetura reutilizável, execução em dispositivos reais e atenção à estabilidade da experiência móvel.",
    tools: [
      { label: "Appium", Icon: Smartphone },
      { label: "Android", Icon: Activity },
      { label: "iOS", Icon: KeyRound },
      { label: "WebDriver", Icon: Workflow },
    ],
    Icon: Smartphone,
    tone: "mobile",
  },
  {
    title: "Qualidade Contínua",
    description:
      "Automação integrada ao CI/CD com quality gates, relatórios, observabilidade e testes de performance para apoiar decisões de entrega com menos risco.",
    tools: [
      { label: "GitHub Actions", Icon: GitBranch },
      { label: "Docker", Icon: Container },
      { label: "k6", Icon: CircleGauge },
      { label: "Lighthouse", Icon: ChartNoAxesCombined },
    ],
    Icon: CloudCog,
    tone: "continuous",
  },
];

export function Services() {
  return (
    <section className="services services-editorial" id="services">
      <header className="services-showcase-header">
        <SectionHeading prefix="" highlight="Serviços" />
        <p>
          Soluções de Engenharia de Qualidade para Web, APIs e mobile, conectando automação,
          performance e entrega contínua aos riscos reais do produto.
        </p>
      </header>

      <div className="service-grid" aria-label="Áreas de serviço">
        {serviceItems.map(({ title, description, tools, Icon, tone }, index) => (
          <motion.article
            className={`service-card service-card-${tone}`}
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: index * 0.07, ease: "easeOut" }}
          >
            <div className="service-card-top">
              <span className="service-card-icon"><Icon aria-hidden="true" /></span>
              <span className="service-card-number">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="service-card-bottom">
              <ul className="service-tools" aria-label={`Tecnologias de ${title}`}>
                {tools.map(({ label, Icon: ToolIcon }) => (
                  <li key={label}><ToolIcon aria-hidden="true" /><span>{label}</span></li>
                ))}
              </ul>
              <a href="#portfolio">Ver projetos</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
