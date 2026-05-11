import { motion } from "framer-motion";
import automationQaImage from "../../imagens/automa-qa.png";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const summaryParagraphs = profile.aboutParagraphs.slice(0, 3);

  return (
    <section className="about" id="about">
      <motion.div
        className="about-visual"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="about-visual-card">
          <img src={automationQaImage} alt="Código de automação de testes em ambiente digital" />
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <SectionHeading prefix="About" highlight="Me" />
        <h3>{profile.title}</h3>

        <div className="about-copy">
          {summaryParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <a href="#contact" className="btn about-read-more">
          Vamos conversar
        </a>
      </motion.div>
    </section>
  );
}
