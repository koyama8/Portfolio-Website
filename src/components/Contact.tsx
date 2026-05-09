import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionHeading prefix="Contact" highlight="Me!" />

      <motion.form
        action="#"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="contact-note">
          <i aria-hidden="true">
            <MessageCircle />
          </i>
          <span>{contact.note}</span>
        </div>

        <textarea name="message" id="message" rows={10} value={contact.message} readOnly />

        <div className="contact-actions">
          <a
            href={contact.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Send Message
          </a>
          <a
            href={contact.secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-btn-secondary"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href={contact.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-btn-secondary"
          >
            <FaLinkedinIn aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </motion.form>
    </section>
  );
}
