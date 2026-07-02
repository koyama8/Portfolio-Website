import type { ReactNode } from "react";
import { Bot, Brush, ServerCog } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { NavItem, Project, Service, SocialLink } from "../types";
import automationHubImage from "../../imagens/automation-hub.png";
import apiQaImage from "../../imagens/api-qa.png";
import automationImage from "../../imagens/automation.jpg";
import designImage from "../../imagens/design.jpg";
import goodayImage from "../../imagens/Gooday.png";
import homeAutomationApiImage from "../../imagens/home-carousel/home-automation-03-api.png";
import homeAutomationAppiumDashboardImage from "../../imagens/home-carousel/home-automation-19-appium-dashboard.png";
import homeAutomationAppiumDeskImage from "../../imagens/home-carousel/home-automation-17-appium-desk.png";
import homeAutomationBugImage from "../../imagens/home-carousel/home-automation-07-bug.png";
import homeAutomationCiImage from "../../imagens/home-carousel/home-automation-04-pipeline.png";
import homeAutomationCypressImage from "../../imagens/home-carousel/home-automation-01-cypress.png";
import homeAutomationDatabaseImage from "../../imagens/home-carousel/home-automation-06-database.png";
import homeAutomationEndpointImage from "../../imagens/home-carousel/home-automation-13-endpoint-lab.png";
import homeAutomationEvidenceImage from "../../imagens/home-carousel/home-automation-05-evidence.png";
import homeAutomationJourneyImage from "../../imagens/home-carousel/home-automation-08-journey.png";
import homeAutomationMobileImage from "../../imagens/home-carousel/home-automation-14-mobile-checks.png";
import homeAutomationMonitorImage from "../../imagens/home-carousel/home-automation-09-monitor.png";
import homeAutomationPlaywrightImage from "../../imagens/home-carousel/home-automation-02-playwright.png";
import homeAutomationMobileQualityImage from "../../imagens/home-carousel/home-automation-18-mobile-quality.png";
import homeAutomationQaSuiteImage from "../../imagens/home-carousel/home-automation-10-qa-suite.png";
import homeAutomationRequestsImage from "../../imagens/home-carousel/home-automation-12-api-collection.png";
import homeAutomationRegressionImage from "../../imagens/home-carousel/home-automation-15-regression-suite.png";
import homeAutomationVisualImage from "../../imagens/home-carousel/home-automation-16-visual-assert.png";
import homeAutomationWebImage from "../../imagens/home-carousel/home-automation-11-web-validation.png";
import homeImage from "../../imagens/home_2.png";
import playwrightImage from "../../imagens/Playwright.png";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contato", href: "#contact" },
];

export const profile: {
  name: string;
  title: string;
  typedRoles: string[];
  aboutImage: string;
  intro: string;
  aboutParagraphs: ReactNode[];
} = {
  name: "Matheus Koyama",
  title: "QA Automation",
  typedRoles: ["Automação", "UX/UI Design", "REST Assured", "Express", "CI/CD", "Selenium", "Cypress", "Playwright"],
  aboutImage: homeImage,
  intro:
    "Aqui você encontra meus projetos de automação, testes E2E para web e APIs, estudos de UX/UI e soluções voltadas à qualidade. Meu foco é criar validações confiáveis e conectar tecnologia à experiência do usuário.",
  aboutParagraphs: [
    <>
      Sou <strong>profissional de QA Manual e QA Automation</strong>, com experiência em produtos digitais,
      fluxos web, mobile e APIs. Atuo na análise de requisitos, critérios de aceite, estratégias de testes e
      validação de jornadas críticas, transformando regras de negócio em cenários claros, rastreáveis e
      orientados à qualidade e valor ao usuário.
    </>,
    <>
      Na automação de testes, estruturo suítes E2E, regressivas e de API com{" "}
      <strong>Selenium WebDriver</strong>, <strong>Cypress Web/API</strong>, <strong>Playwright</strong>,{" "}
      <strong>REST Assured</strong>, <strong>Postman</strong>, Java, JavaScript e TypeScript, aplicando boas
      práticas de arquitetura, versionamento, evidências e execução contínua.
    </>,
    <>
      Tenho vivência com <strong>Docker</strong>, <strong>PostgreSQL</strong>, GitHub Actions, Cypress
      Cloud e pipelines <strong>CI/CD</strong>, conectando automação, evidências técnicas e qualidade de
      entrega. Minha experiência em <strong>UX Design</strong>, Figma e Adobe XD apoia validações de
      usabilidade, acessibilidade e interfaces responsivas.
    </>,
    <>
      Valorizo <strong>aprendizado contínuo</strong>, colaboração entre áreas e comunicação clara para
      transformar testes, automação e design em produtos mais confiáveis, acessíveis e eficientes.
    </>,
  ],
};

export const homeHeroSlides = [
  { src: homeAutomationCypressImage, alt: "Painel visual de automação E2E com Cypress" },
  { src: homeAutomationPlaywrightImage, alt: "Painel visual de execução Playwright em múltiplos navegadores" },
  { src: homeAutomationApiImage, alt: "Painel visual de validação de contratos API REST" },
  { src: homeAutomationWebImage, alt: "Painel visual de validação automatizada de telas web" },
  { src: homeAutomationRequestsImage, alt: "Painel visual de collection com requisições e payloads de API" },
  { src: homeAutomationEndpointImage, alt: "Painel visual de validação de endpoints e dados de requisição" },
  { src: homeAutomationCiImage, alt: "Painel visual de pipeline CI/CD para qualidade de software" },
  { src: homeAutomationEvidenceImage, alt: "Painel visual de evidências e relatórios de testes" },
  { src: homeAutomationMobileImage, alt: "Painel visual de testes automatizados em fluxo mobile" },
  { src: homeAutomationAppiumDeskImage, alt: "Imagem de automação mobile com Appium, código e teste aprovado" },
  { src: homeAutomationMobileQualityImage, alt: "Imagem de validação mobile com Appium e execução de testes" },
  { src: homeAutomationAppiumDashboardImage, alt: "Imagem de dashboard Appium com taxa de sucesso e execução mobile" },
  { src: homeAutomationDatabaseImage, alt: "Painel visual de massa de dados local para testes" },
  { src: homeAutomationBugImage, alt: "Painel visual de triagem de falhas em automação QA" },
  { src: homeAutomationJourneyImage, alt: "Painel visual de jornada de usuário validada por testes E2E" },
  { src: homeAutomationMonitorImage, alt: "Painel visual de métricas de qualidade QA" },
  { src: homeAutomationRegressionImage, alt: "Painel visual de suíte regressiva para confiança de release" },
  { src: homeAutomationVisualImage, alt: "Painel visual de validação visual por screenshots" },
  { src: homeAutomationQaSuiteImage, alt: "Painel visual de suíte de automação QA" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub de Matheus Koyama", href: "https://github.com/koyama8", Icon: FaGithub },
  {
    label: "LinkedIn de Matheus Koyama",
    href: "https://www.linkedin.com/in/matheuskoyama/",
    Icon: FaLinkedinIn,
  },
];

export const services: Service[] = [
  {
    title: "Test Automation",
    Icon: Bot,
    description:
      "Automação de testes web e mobile com foco em cobertura, estabilidade e qualidade contínua. Desenvolvimento de suítes E2E e regressivas com Selenium WebDriver, Cypress, Playwright, Java, JavaScript e TypeScript, integradas a CI/CD para validar fluxos reais em múltiplos navegadores.",
  },
  {
    title: "API Quality",
    Icon: ServerCog,
    description:
      "Testes e validações de APIs REST com foco em contratos, status codes, autenticação, payloads e regras de negócio. Experiência com Postman, REST Assured, Cypress API, Express, JavaScript, Docker, PostgreSQL e execução via CI/CD com evidências reais.",
  },
  {
    title: "Web & UI Design",
    Icon: Brush,
    description:
      "Desenho de interfaces digitais com foco em clareza, usabilidade, acessibilidade e consistência visual. Criação de layouts responsivos, protótipos, jornadas e validações UX/UI com Figma e Adobe XD, conectando experiência do usuário, performance e qualidade em produto digital.",
  },
];

export const projects: Project[] = [
  {
    title: "Automation",
    image: automationImage,
    imageAlt: "Interface visual do projeto de automação com Java e Selenium",
    href: "https://github.com/koyama8/the-internet-automation",
    tags: ["Java", "Selenium", "QA"],
    tone: "amber",
    description:
      "Automação web com Java e Selenium no The Internet, validando fluxos reais de QA com boas práticas e estrutura escalável.",
  },
  {
    title: "API QA Lab",
    image: apiQaImage,
    imageAlt: "Capa do projeto API QA Lab",
    href: "https://github.com/koyama8/api-qa-lab",
    tags: ["REST Assured", "Cypress", "API"],
    tone: "cyan",
    description:
      "Laboratório de QA Automation com testes de API e automação Web, usando REST Assured, Cypress, PostgreSQL, Docker e CI/CD com evidências no Cypress Cloud.",
  },
  {
    title: "Preview Out",
    image: playwrightImage,
    imageAlt: "Capa do projeto Preview Out com automação Playwright",
    href: "https://github.com/koyama8/playwright-web-api-lab",
    tags: ["Playwright", "Node.js", "E2E", "API"],
    tone: "gold",
    description:
      "Automação E2E com Playwright para fluxos web integrados à API e banco de dados, usando Page Objects, massa de testes, Docker e relatórios em nuvem.",
  },
  {
    title: "Automation Hub",
    image: automationHubImage,
    imageAlt: "Tela do projeto Automation Hub com formulário de acesso QA Automation Lab",
    href: "https://github.com/koyama8/automation-hub",
    description:
      "Projeto criado para organizar fluxos de automação QA, validar telas web e praticar cenários reais com Cypress, Playwright, API e evidências usando dados locais.",
    tags: ["Cypress", "Playwright", "API"],
    tone: "emerald",
  },
  {
    title: "Mordida Express",
    image: designImage,
    imageAlt: "Mockup visual do projeto Mordida Express",
    href: "https://rebrand.ly/Mordida-Express-Food",
    tags: ["UX", "UI", "Figma"],
    tone: "violet",
    description:
      "Projeto de UX Design para aplicativo de lanches, com prototipagem responsiva e mais de 60 templates desenvolvidos.",
  },
  {
    title: "Gooday",
    image: goodayImage,
    imageAlt: "Tela do projeto Gooday",
    href: "https://www.figma.com/proto/6h9yZA0DRuep2QHolsxpQ9/Gooday?node-id=2-2&t=eJJJO9hbSxJhZ07c-1",
    tags: ["Bem-estar", "UX/UI", "Prototype"],
    tone: "mint",
    description:
      "Plataforma digital de UX/UI focada em bem-estar, alimentação equilibrada, atividades físicas, saúde e eventos.",
  },
];

export const contact = {
  note: "Escolha o melhor canal para iniciar a conversa.",
  message:
    "Para obter mais informações, entre em contato diretamente comigo pelo LinkedIn. Estou à disposição para responder dúvidas, conversar sobre qualidade, automação, UX/UI e novas oportunidades.",
  primaryHref: "https://www.linkedin.com/in/matheuskoyama/",
  secondaryHref: "https://github.com/koyama8",
};

export const footer = {
  copyright: "Copyright © 2026 by Koyama | All Rights Reserved.",
};
