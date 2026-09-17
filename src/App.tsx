import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CypressArticle } from "./components/CypressArticle";
import { CtflArticle } from "./components/CtflArticle";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const cypressRoute = "#blog/cypress";
  const ctflRoute = "#blog/ctfl";
  const cypressSection = hash.startsWith(`${cypressRoute}/`)
    ? decodeURIComponent(hash.slice(cypressRoute.length + 1))
    : undefined;
  const ctflSection = hash.startsWith(`${ctflRoute}/`)
    ? decodeURIComponent(hash.slice(ctflRoute.length + 1))
    : undefined;

  if (hash === cypressRoute || cypressSection) {
    return <main><CypressArticle sectionId={cypressSection} /></main>;
  }

  if (hash === ctflRoute || ctflSection) {
    return <main><CtflArticle sectionId={ctflSection} /></main>;
  }

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
