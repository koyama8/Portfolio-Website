import type { ComponentType, SVGProps } from "react";
import { Braces, Globe2, ServerCog, Smartphone, Workflow } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import { SiCypress, SiPython, SiSelenium } from "react-icons/si";

export type TechnologyKey = "java" | "selenium" | "cypress" | "playwright" | "python";
type TechnologyIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Technology = {
  key: TechnologyKey;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  stack: string[];
  areas: string[];
  projectTitle?: string;
  Icon: TechnologyIcon;
  accent: string;
};

export const qualityAreas = [
  { label: "Web", Icon: Globe2 },
  { label: "APIs", Icon: ServerCog },
  { label: "Banco de Dados", Icon: Braces },
  { label: "Mobile", Icon: Smartphone },
  { label: "CI/CD", Icon: Workflow },
];

export const technologies: Technology[] = [
  {
    key: "java", name: "Java", category: "Automation • Frameworks • API",
    description: "Construção de estruturas de automação organizadas, reutilizáveis e orientadas à manutenção.",
    capabilities: ["OOP", "JUnit", "REST Assured", "Page Objects", "BDD", "Data Validation"],
    stack: ["Selenium", "Maven", "REST Assured", "Cucumber"], areas: ["Web", "APIs", "Banco de Dados", "CI/CD"],
    projectTitle: "Automation", Icon: FaJava, accent: "#f89820",
  },
  {
    key: "selenium", name: "Selenium", category: "Web • Regression • Cross-browser",
    description: "Automação de jornadas Web com foco em estabilidade, manutenção e cobertura de regressão.",
    capabilities: ["WebDriver", "Page Object Model", "Explicit Waits", "Locators", "Cross-browser", "Screenshots"],
    stack: ["Java", "JUnit", "Maven", "Cucumber"], areas: ["Web", "CI/CD"],
    projectTitle: "Automation", Icon: SiSelenium, accent: "#43b02a",
  },
  {
    key: "cypress", name: "Cypress", category: "E2E • API • Network",
    description: "Engenharia de automação para jornadas E2E, integrando validações de interface, APIs e comunicação entre serviços com foco em confiabilidade, rastreabilidade e feedback rápido.",
    capabilities: ["E2E Testing", "cy.intercept", "Fixtures", "Custom Commands", "API Testing", "Network Stubbing"],
    stack: ["JavaScript", "TypeScript", "Node.js", "CI/CD"], areas: ["Web", "APIs", "Banco de Dados", "CI/CD"],
    projectTitle: "Automation Hub", Icon: SiCypress, accent: "#69d3a7",
  },
  {
    key: "playwright", name: "Playwright", category: "Web • API • E2E",
    description: "Automação moderna de aplicações Web e APIs com foco em isolamento, estabilidade e feedback rápido.",
    capabilities: ["Locators semânticos", "Auto-waiting", "Web-first assertions", "API Testing", "Browser Contexts", "Tracing"],
    stack: ["TypeScript", "Node.js", "Playwright Test", "CI/CD"], areas: ["Web", "APIs", "Banco de Dados", "CI/CD"],
    projectTitle: "Web & API Quality Lab", Icon: FaMasksTheater, accent: "#e85b4f",
  },
  {
    key: "python", name: "Python", category: "Automation • API • Utilities",
    description: "Scripts, estudos e automações voltados a testes, APIs, manipulação e validação de dados.",
    capabilities: ["Pytest", "Requests", "Fixtures", "API Testing", "Data Validation"],
    stack: ["Python", "Pytest", "Requests", "Utilities"], areas: ["APIs", "Banco de Dados", "CI/CD"], Icon: SiPython, accent: "#3776ab",
  },
];
