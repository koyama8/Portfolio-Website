import { BarChart3, Code2, ShieldCheck, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import aboutQaWorkspace from "../../imagens/about-qa-workspace.jpg";

const aboutPillars = [
  { label: "Qualidade", Icon: ShieldCheck },
  { label: "Automação", Icon: Code2 },
  { label: "Evolução contínua", Icon: BarChart3 },
];

export function About() {
  return (
    <section className="about about-showcase" id="about">
      <motion.figure
        className="about-visual"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="about-visual-card">
          <img
            src={aboutQaWorkspace}
            alt="Workspace de engenharia de qualidade com projeto de automação de testes em execução"
          />
        </div>
        <figcaption>Engenharia de testes orientada a confiança</figcaption>
      </motion.figure>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <span className="about-kicker"><UserRound aria-hidden="true" />Sobre mim</span>
        <h2>QA que entrega <span>qualidade com clareza.</span></h2>

        <div className="about-copy">
          <p>
            Sou profissional de <strong>QA Manual e Automação</strong>, com foco em qualidade de produtos
            digitais, automação de testes Web e APIs e melhoria contínua da experiência do usuário.
          </p>
          <p>
            Estruturo validações com <strong>Selenium, Cypress, Playwright, REST Assured, Java, JavaScript e
            TypeScript</strong>, conectando critérios de negócio, evidências técnicas e pipelines CI/CD para
            entregar software com mais segurança.
          </p>
        </div>

        <ul className="about-pillars" aria-label="Pilares de atuação">
          {aboutPillars.map(({ label, Icon }) => (
            <li key={label}><span><Icon aria-hidden="true" /></span>{label}</li>
          ))}
        </ul>

        <blockquote>“Qualidade não é um destino, mas um processo de melhoria contínua.”</blockquote>

        <a href="#contact" className="about-read-more">Vamos conversar</a>
      </motion.div>
    </section>
  );
}
