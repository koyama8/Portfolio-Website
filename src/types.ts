import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  Icon: IconType;
};

export type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type ProjectTone = "amber" | "cyan" | "emerald" | "blue" | "violet" | "mint";

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  tags: string[];
  tone: ProjectTone;
};
