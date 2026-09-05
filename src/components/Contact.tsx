import { ArrowUpRight, Clock3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";

const contactChannels = [
  {
    label: "LinkedIn",
    description: "Conecte-se comigo para conversar sobre oportunidades e Engenharia de Qualidade.",
    href: "https://www.linkedin.com/in/matheuskoyama/",
    Icon: FaLinkedinIn,
    tone: "linkedin",
  },
  {
    label: "GitHub",
    description: "Conheça meus projetos, automações, estudos e contribuições técnicas.",
    href: "https://github.com/koyama8",
    Icon: FaGithub,
    tone: "github",
  },
];

export function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionHeading prefix="" highlight="Contato" />
      <motion.div
        className="contact-directory"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <header className="contact-directory-header">
          <h3>Escolha seu canal <strong>preferido.</strong></h3>
          <p>Fale comigo pelo canal mais adequado. Retorno assim que possível.</p>
        </header>

        <div className="contact-channel-list">
          {contactChannels.map(({ label, description, href, Icon, tone }, index) => {
            const content = (
              <>
                <span className={`contact-channel-icon ${tone}`}><Icon aria-hidden="true" /></span>
                <span className="contact-channel-copy"><strong>{label}</strong><small>{description}</small></span>
                {href ? (
                  <span className="contact-channel-action" aria-hidden="true"><ArrowUpRight /></span>
                ) : (
                  <span className="contact-channel-pending">Em breve</span>
                )}
              </>
            );

            return href ? (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
                aria-label={`Abrir ${label}`}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                key={label}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                className="contact-channel is-pending"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                key={label}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="contact-trust">
          <span><ShieldCheck aria-hidden="true" />Você será direcionado ao canal escolhido.</span>
          <span><Clock3 aria-hidden="true" />Respondo assim que possível.</span>
        </div>
      </motion.div>
    </section>
  );
}
