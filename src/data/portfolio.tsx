import type { ReactNode } from "react";
import { Bot, Brush, ServerCog } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { NavItem, Project, Service, SocialLink } from "../types";
import agendaImage from "../../imagens/agenda.png";
import apiQaImage from "../../imagens/api-qa.png";
import automationImage from "../../imagens/automation.jpg";
import designImage from "../../imagens/design.jpg";
import goodayImage from "../../imagens/Gooday.png";
import homeImage from "../../imagens/home_2.png";
import vistaVaultImage from "../../imagens/VistaVault.png";

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
    "Transformo requisitos em testes claros, automações confiáveis e validações E2E para web, APIs e UX/UI. Meu foco é antecipar falhas, dar confiança às entregas e conectar qualidade técnica à experiência do usuário.",
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
      "Automação de testes para aplicações web com foco em cobertura, estabilidade e qualidade contínua. Desenvolvimento de suítes E2E e regressivas com Selenium, Cypress, Java, JavaScript e integração em pipelines CI/CD, validando fluxos críticos em múltiplos navegadores e dispositivos.",
  },
  {
    title: "API Quality",
    Icon: ServerCog,
    description:
      "Testes e validações de APIs REST com foco em confiabilidade, contratos, status codes, autenticação, payloads e regras de negócio. Experiência com Postman, Bruno, REST Assured, Cypress API, Express, Java, JavaScript e execução automatizada em CI/CD.",
  },
  {
    title: "Web & UI Design",
    Icon: Brush,
    description:
      "Desenvolvimento de identidades visuais, web design e interfaces digitais com foco em clareza, usabilidade e consistência visual. Criação de layouts responsivos, protótipos, design systems e experiências centradas no usuário com Figma, Adobe XD e princípios de acessibilidade.",
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
    title: "VistaVault",
    image: vistaVaultImage,
    imageAlt: "Tela do projeto VistaVault",
    href: "https://github.com/koyama8/Moments",
    tags: ["Social", "Privacidade", "Web"],
    tone: "blue",
    description:
      "Plataforma social intuitiva para compartilhar experiências e momentos especiais com foco em privacidade, controle e experiência de uso.",
  },
  {
    title: "Agendadify",
    image: agendaImage,
    imageAlt: "Tela do projeto Agendadify",
    href: "https://github.com/koyama8/Indexa",
    tags: ["CRUD", "Forms", "Web"],
    tone: "emerald",
    description:
      "Agenda digital para gestão completa de contatos por meio de CRUD, formulários com validações, descrições e imagens.",
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
