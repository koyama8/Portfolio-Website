import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const activeSection = useActiveSection(navItems);
  const headerSocialLinks = [...socialLinks].sort((first, second) => {
    const firstIsLinkedIn = first.label.includes("LinkedIn") ? 1 : 0;
    const secondIsLinkedIn = second.label.includes("LinkedIn") ? 1 : 0;

    return secondIsLinkedIn - firstIsLinkedIn;
  });

  useEffect(() => {
    const updateHeader = () => {
      setIsSticky(window.scrollY > 100);
      setIsMenuOpen(false);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`header${isSticky ? " sticky" : ""}`}>
      <a href="#home" className="logo" aria-label="Voltar para o início">
        Portfolio
      </a>

      <button
        type="button"
        id="menu-icon"
        className={isMenuOpen ? "bx-x" : ""}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="main-navigation" className={`navbar${isMenuOpen ? " active" : ""}`}>
        {navItems.map((item) => {
          const sectionId = item.href.slice(1);

          return (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === sectionId ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="header-actions" aria-label="Ações rápidas">
        {headerSocialLinks.map(({ label, href, Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
        <a className="header-connect" href="#contact">
          Conectar comigo
        </a>
      </div>
    </header>
  );
}
