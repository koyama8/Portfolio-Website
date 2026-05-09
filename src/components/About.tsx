import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-img"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <img src={profile.aboutImage} alt="Matheus Koyama em imagem de perfil do portfólio" />
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
          {profile.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/matheuskoyama/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Read More
        </a>
      </motion.div>
    </section>
  );
}
