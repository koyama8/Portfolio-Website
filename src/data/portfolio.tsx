import type { ReactNode } from "react";
import { Bot, Brush, ServerCog, ShieldCheck } from "lucide-react";
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
  title: "QA Automation | UX/UI Design",
  typedRoles: ["Automação", "UX/UI Design", "React + TypeScript"],
  aboutImage: homeImage,
  intro:
    "Apaixonado por tecnologia e guiado pela curiosidade criativa, atuo com QA manual, automação de testes e tenho conhecimento em Angular. Também atuo em projetos de UX Design e Interface, conectando performance técnica à experiência do usuário e à acessibilidade.",
  aboutParagraphs: [
    <>
      Sou um <strong>profissional de QA Manual e Automação</strong>, com ampla experiência na
      implementação de estratégias de testes para aplicações web e mobile. Trabalho de forma contínua
      para <strong>garantir a qualidade</strong>, a <strong>acessibilidade</strong> e a{" "}
      <strong>inclusão</strong> em cada etapa do desenvolvimento, aplicando{" "}
      <strong>metodologias ágeis</strong> (Scrum e Kanban) e alinhando práticas de{" "}
      <strong>User Experience (UX)</strong> a testes eficientes.
    </>,
    <>
      Para <strong>testes automatizados</strong>, utilizo ferramentas e tecnologias como{" "}
      <strong>Selenium WebDriver</strong>, <strong>Cypress</strong>, <strong>Postman</strong> e
      integrações de <strong>CI/CD</strong> (por exemplo, Jenkins, GitHub Actions), criando{" "}
      <strong>scripts robustos</strong> que cobrem cenários críticos e mantêm a estabilidade do
      produto.
    </>,
    <>
      Atuei em projetos de <strong>UX e UI Design</strong>, desenvolvendo interfaces funcionais e
      intuitivas com foco em <strong>usabilidade, desempenho e clareza visual</strong>. Utilizei{" "}
      <strong>Figma</strong>, <strong>Adobe XD</strong> e <strong>Sketch</strong> para criar
      protótipos e validar soluções com base em dados e testes de usabilidade.
    </>,
    <>
      Acredito em uma cultura de <strong>aprendizado contínuo</strong>, na qual feedbacks são
      valorizados e a colaboração é essencial para produzir resultados excepcionais.
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
    description:
      "Projeto de automação web com Java e Selenium no site The Internet, desenvolvido para validar cenários reais de QA com boas práticas, organização do código e estrutura escalável.",
  },
  {
    title: "API QA Lab",
    image: apiQaImage,
    imageAlt: "Capa do projeto API QA Lab",
    href: "https://github.com/koyama8/api-qa-lab",
    tags: ["REST Assured", "Cypress", "API"],
    description:
      "Projeto de API em contexto bancário, com login, clientes, cartões, faturas e pagamentos, estruturado para testes manuais, automação e futura integração CI/CD.",
  },
  {
    title: "VistaVault",
    image: vistaVaultImage,
    imageAlt: "Tela do projeto VistaVault",
    href: "https://github.com/koyama8/Moments",
    tags: ["Social", "Privacidade", "Web"],
    description:
      "Plataforma social intuitiva para compartilhar experiências e momentos especiais com foco em privacidade, controle e experiência de uso.",
  },
  {
    title: "Agendadify",
    image: agendaImage,
    imageAlt: "Tela do projeto Agendadify",
    href: "https://github.com/koyama8/Indexa",
    tags: ["CRUD", "Forms", "Web"],
    description:
      "Agenda digital para gestão completa de contatos por meio de CRUD, formulários com validações, descrições e imagens.",
  },
  {
    title: "Mordida Express",
    image: designImage,
    imageAlt: "Mockup visual do projeto Mordida Express",
    href: "https://rebrand.ly/Mordida-Express-Food",
    tags: ["UX", "UI", "Figma"],
    description:
      "Projeto de UX Design para aplicativo de lanches, com prototipagem responsiva e mais de 60 templates desenvolvidos.",
  },
  {
    title: "Gooday",
    image: goodayImage,
    imageAlt: "Tela do projeto Gooday",
    href: "https://www.figma.com/proto/6h9yZA0DRuep2QHolsxpQ9/Gooday?node-id=2-2&t=eJJJO9hbSxJhZ07c-1",
    tags: ["Bem-estar", "UX/UI", "Prototype"],
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

export const qualityBadge = {
  Icon: ShieldCheck,
  label: "QA, acessibilidade e experiência conectadas em uma base moderna com React + TypeScript.",
};
