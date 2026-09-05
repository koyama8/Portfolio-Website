import { BarChart3, Check, Trophy, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

const competencies = ["Testes Web e APIs", "Frameworks e CI/CD", "Foco em qualidade"];
const stats = [
  { value: `${projects.length}`, label: "Projetos de automação", Icon: Trophy },
  { value: "100%", label: "Foco em qualidade", Icon: Users },
  { value: "5", label: "Tecnologias principais", Icon: BarChart3 },
  { value: "Sempre", label: "Em aprendizado", Icon: Zap },
];

export function Home() {
  return (
    <section className="home home-redesign" id="home">
      <div className="home-hero-layout">
        <motion.div className="home-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
          <span className="availability-badge"><i aria-hidden="true" />Disponível para oportunidades</span>
          <h1>Qualidade que <span>Impulsiona Produtos.</span></h1>
          <p>Sou Matheus Koyama, especialista em automação de testes, com foco em soluções que garantem qualidade, confiabilidade e melhor experiência para o usuário.</p>
          <ul className="home-competencies" aria-label="Principais competências">
            {competencies.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
          </ul>
          <div className="home-actions" aria-label="Ações principais">
            <a className="home-action-primary" href="#portfolio">Ver meus projetos</a>
            <a className="home-action-secondary" href="#contact">Vamos conversar</a>
          </div>
        </motion.div>

      </div>

      <div className="home-proof">
        <div className="home-stats">
          {stats.map(({ value, label, Icon }) => <div className="home-stat" key={label}><Icon aria-hidden="true" /><div><strong>{value}</strong><span>{label}</span></div></div>)}
        </div>
        <blockquote>“Testar não é apenas encontrar erros, mas construir confiança.”</blockquote>
      </div>
    </section>
  );
}
