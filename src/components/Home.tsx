import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { homeHeroSlides, profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

const HOME_SLIDE_INTERVAL_MS = 10000;

export function Home() {
  const typedRole = useTypewriter(profile.typedRoles, {
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1100,
  });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = homeHeroSlides[activeSlideIndex] ?? {
    src: profile.aboutImage,
    alt: "Imagem de perfil de Matheus Koyama",
  };

  useEffect(() => {
    if (homeHeroSlides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % homeHeroSlides.length);
    }, HOME_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

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
        aria-label="Galeria de imagens de automação QA"
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <div className="home-photo-card">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.src}
              className="home-carousel-image"
              src={activeSlide.src}
              alt={activeSlide.alt}
              initial={{ opacity: 0, scale: 1.045 }}
              animate={{ opacity: 1, scale: 1.01 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            />
          </AnimatePresence>
          <span className="home-photo-glow" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}
