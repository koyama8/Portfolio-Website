import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navItems } from "../data/portfolio";

const serviceLinks = [
  "Automação Web",
  "Qualidade de APIs",
  "Automação Mobile",
  "CI/CD e pipelines",
  "Estratégia de QA",
];

const connectionLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheuskoyama/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/koyama8",
    Icon: FaGithub,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-redesign">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-brand-link" aria-label="Koyama, voltar ao início">
            <span className="footer-brand-mark" aria-hidden="true">K</span>
            <strong>Koyama</strong>
          </a>
          <p>Qualidade que impulsiona<br />produtos melhores.</p>
        </div>

        <nav className="footer-column" aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label === "Home" ? "Início" : item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column">
          <h2>Serviços</h2>
          <ul>
            {serviceLinks.map((service) => (
              <li key={service}><a href="#services">{service}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-connect">
          <h2>Conecte-se</h2>
          <ul>
            {connectionLinks.map(({ label, href, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="footer-quote">
          <p>“Automação hoje,<br /> qualidade sempre.”</p>
          <span aria-hidden="true" />
        </blockquote>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Koyama. Todos os direitos reservados.</p>
        <p className="footer-principles">Qualidade · Automação · Melhoria contínua</p>
        <a href="#home" className="footer-back-top">
          <span>Voltar para o topo</span>
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
