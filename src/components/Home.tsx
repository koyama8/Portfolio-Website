import { motion } from "framer-motion";
import { profile, socialLinks } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

export function Home() {
  const typedRole = useTypewriter(profile.typedRoles, {
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1100,
  });
  return (
    <section className="home" id="home">
      <motion.div className="home-content">
        <h3>Bem-vindo, eu sou</h3>
        <h1>{profile.name}.</h1>
        <h3>
          <span className="multiple-text" aria-live="polite">
            {typedRole}
          </span>
        </h3>

        <p className="whitespace-nowrap">{profile.intro}</p>

        <div className="social-media" aria-label="Redes sociais">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
