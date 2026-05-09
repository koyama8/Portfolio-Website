import { ChevronUp } from "lucide-react";
import { footer } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>{footer.copyright}</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          voltar para o topo <ChevronUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
