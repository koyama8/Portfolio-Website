import { useState } from "react";
import { BookOpen, CalendarDays, Clock3, Star } from "lucide-react";
import { motion } from "framer-motion";
import apiContractsImage from "../../imagens/blog-api-emblem.jpg";
import automationStrategyImage from "../../imagens/blog-test-strategy.jpg";
import cicdQualityGatesImage from "../../imagens/blog-cicd-status.jpg";
import ctflStudyImage from "../../imagens/blog-ctfl-official-wide.jpg";
import cypressTestingImage from "../../imagens/blog-cypress-emblem.jpg";
import playwrightLabImage from "../../imagens/blog-playwright-emblem.jpg";
import { SectionHeading } from "./SectionHeading";

const categories = ["Todos", "Cypress", "Playwright", "APIs", "CI/CD", "Carreira QA"] as const;

const articles = [
  {
    title: "CTFL e ISTQB: fundamentos que orientam decisões",
    description: "Um guia completo sobre princípios, técnicas, ciclo de vida de testes e preparação estratégica para a certificação.",
    category: "Carreira QA",
    image: ctflStudyImage,
    imageAlt: "Identidade oficial ISTQB Certified Tester Foundation Level CTFL 4.0",
    readTime: "18 min de leitura",
    date: "05 set. 2026",
    type: "Guia completo",
    href: "#blog/ctfl",
    featured: true,
  },
  {
    title: "Estratégias E2E com Playwright",
    description: "Isolamento, paralelismo, tracing e cobertura cross-browser para jornadas modernas.",
    category: "Playwright",
    image: playwrightLabImage,
    imageAlt: "Emblema do Playwright com as máscaras verde e coral",
    readTime: "8 min de leitura",
    date: "Em produção",
  },
  {
    title: "Contratos e testes de API",
    description: "Como validar schemas, autenticação, dados e regras de negócio além do status HTTP.",
    category: "APIs",
    image: apiContractsImage,
    imageAlt: "Emblema de integração e testes de API",
    readTime: "9 min de leitura",
    date: "Em produção",
  },
  {
    title: "Quality gates no CI/CD",
    description: "Evidências, critérios de bloqueio e feedback rápido para uma entrega mais segura.",
    category: "CI/CD",
    image: cicdQualityGatesImage,
    imageAlt: "Painel CI/CD com etapas de build, testes e relatório aprovadas antes do deploy",
    readTime: "7 min de leitura",
    date: "Em produção",
  },
  {
    title: "Cypress na engenharia de qualidade",
    description: "Arquitetura, dados, relatórios, segurança e práticas para construir testes Web e API confiáveis e sustentáveis.",
    category: "Cypress",
    image: cypressTestingImage,
    imageAlt: "Emblema do Cypress com indicadores de execução de testes",
    readTime: "12 min de leitura",
    date: "05 set. 2026",
    href: "#blog/cypress",
  },
  {
    title: "Como iniciar uma estratégia de automação",
    description: "Critérios para priorizar jornadas, escolher ferramentas e transformar risco de produto em cobertura útil.",
    category: "Carreira QA",
    image: automationStrategyImage,
    imageAlt: "Caderno de estratégia com pirâmide de testes e critérios de cobertura, risco e manutenção",
    readTime: "10 min de leitura",
    date: "Em produção",
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todos");
  const visibleArticles = activeCategory === "Todos"
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <section className="blog blog-editorial" id="blog">
      <header className="blog-editorial-header">
        <span className="blog-eyebrow">Conhecimento que gera qualidade</span>
        <SectionHeading prefix="" highlight="Blog" />
        <p>
          Conteúdo técnico sobre automação, arquitetura de testes e qualidade de software,
          conectado à prática real de Engenharia de Qualidade.
        </p>
      </header>

      <div className="blog-filter-row">
        <div className="blog-filters" role="group" aria-label="Filtrar artigos por assunto">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : ""}
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="blog-filter-note">Artigos, guias e experiências reais</span>
      </div>

      <div className={`blog-editorial-grid${visibleArticles.length < 3 ? " is-filtered" : ""}`} aria-live="polite">
        {visibleArticles.map((article, index) => (
          <motion.article
            className={`blog-article-card${index === 0 ? " is-featured" : ""}`}
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.42, delay: Math.min(index * 0.05, 0.2), ease: "easeOut" }}
          >
            <div className="blog-article-image">
              <img src={article.image} alt={article.imageAlt} />
              {article.featured ? (
                <span className="blog-featured-label"><Star aria-hidden="true" />Artigo em destaque</span>
              ) : null}
            </div>

            <div className="blog-article-content">
              <div className="blog-article-meta-top">
                <span>{article.category}</span>
                <time>{article.date}</time>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>

              <div className="blog-article-footer">
                <span><Clock3 aria-hidden="true" />{article.readTime}</span>
                {article.type ? <span><BookOpen aria-hidden="true" />{article.type}</span> : null}
                {article.href ? (
                  <a href={article.href}>{index === 0 ? "Ler artigo" : "Ver conteúdo"}</a>
                ) : (
                  <span className="blog-coming-soon"><CalendarDays aria-hidden="true" />Em breve</span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
