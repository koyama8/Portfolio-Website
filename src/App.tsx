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

  if (hash === "#blog/cypress") {
    return <main><CypressArticle /></main>;
  }

  if (hash === "#blog/ctfl") {
    return <main><CtflArticle /></main>;
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
import { useEffect, useState } from "react";
