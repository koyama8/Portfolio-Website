import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

export function Home() {
  const typedRole = useTypewriter(profile.typedRoles, {
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1100,
  });

  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h3>Bem-vindo, eu sou</h3>
        <h1>{profile.name}.</h1>
        <h3>
          <span className="multiple-text" aria-live="polite">
            {typedRole}
          </span>
        </h3>

        <p className="whitespace-nowrap">{profile.intro}</p>

        <div className="home-actions" aria-label="Ações principais">
          <a className="home-action-primary" href="#contact">
            Conectar comigo
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="home-visual home-profile-visual"
        aria-label="Imagem de perfil de Matheus Koyama"
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <div className="home-photo-card">
          <img src={profile.aboutImage} alt="Matheus Koyama sorrindo" />
          <span className="home-photo-glow" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}
