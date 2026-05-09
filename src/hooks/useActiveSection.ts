import { useEffect, useState } from "react";
import type { NavItem } from "../types";

export function useActiveSection(items: NavItem[]) {
  const [activeSection, setActiveSection] = useState(items[0]?.href.slice(1) ?? "home");

  useEffect(() => {
    const updateActiveSection = () => {
      const top = window.scrollY;

      for (const item of items) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [items]);

  return activeSection;
}
