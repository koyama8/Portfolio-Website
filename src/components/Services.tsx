import { motion } from "framer-motion";
import { services } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section className="services" id="services">
      <SectionHeading prefix="My" highlight="projects" />

      <div className="services-container">
        {services.map(({ title, description, Icon }, index) => (
          <motion.article
            className="services-box"
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          >
            <i aria-hidden="true">
              <Icon />
            </i>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
