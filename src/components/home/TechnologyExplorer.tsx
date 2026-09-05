import { useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Code2, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import { qualityAreas, technologies, type TechnologyKey } from "../../data/technologies";

export function TechnologyExplorer() {
  const [activeKey, setActiveKey] = useState<TechnologyKey>("playwright");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTechnology = technologies.find(({ key }) => key === activeKey) ?? technologies[0];
  const relatedProject = projects.find(({ title }) => title === activeTechnology.projectTitle);

  const selectTab = (index: number) => {
    const nextIndex = (index + technologies.length) % technologies.length;
    setActiveKey(technologies[nextIndex].key);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <div className={`technology-explorer active-${activeTechnology.key}`} style={{ "--technology-accent": activeTechnology.accent } as CSSProperties} aria-label="Tecnologias e áreas de qualidade">
      <div className="technology-tabs" role="tablist" aria-label="Selecionar tecnologia">
        {technologies.map(({ key, name, Icon }, index) => (
          <button key={key} ref={(element) => { tabsRef.current[index] = element; }} id={`technology-tab-${key}`}
            className={`technology-tab tech-${key}${key === activeKey ? " is-active" : ""}`} type="button" role="tab"
            aria-selected={key === activeKey} aria-controls="technology-panel" tabIndex={key === activeKey ? 0 : -1}
            onClick={() => setActiveKey(key)} onKeyDown={(event) => {
              if (["ArrowRight", "ArrowDown"].includes(event.key)) { event.preventDefault(); selectTab(index + 1); }
              else if (["ArrowLeft", "ArrowUp"].includes(event.key)) { event.preventDefault(); selectTab(index - 1); }
              else if (event.key === "Home") { event.preventDefault(); selectTab(0); }
              else if (event.key === "End") { event.preventDefault(); selectTab(technologies.length - 1); }
            }} aria-label={`Exibir experiência com ${name}`}>
            <span className="technology-icon" aria-hidden="true">
              <Icon className="icon-layer icon-primary" />
              {["java", "playwright", "python"].includes(key) && <Icon className="icon-layer icon-secondary" />}
            </span>
            <span className="technology-tab-label">{name}</span>
          </button>
        ))}
      </div>

      <section id="technology-panel" className="technology-panel" role="tabpanel"
        aria-labelledby={`technology-tab-${activeTechnology.key}`}>
        <div className="technology-copy">
          <span className="technology-kicker"><Code2 aria-hidden="true" /> {activeTechnology.name}</span>
          <p className="technology-category">{activeTechnology.category}</p>
          <h2>{activeTechnology.name}</h2>
          <p className="technology-description">{activeTechnology.description}</p>

          <div className="related-project">
            <FolderKanban aria-hidden="true" />
            <div className="related-project-copy">
              <span>Projeto em destaque</span>
              <strong>{relatedProject?.title ?? "Projeto em evolução"}</strong>
            </div>
            {relatedProject?.href ? (
              <a className="project-github-link" href={relatedProject.href} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" />Ver projeto no GitHub<ArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <span className="project-coming-soon">Em evolução</span>
            )}
            <div className="project-skills" aria-label="Skills utilizadas no projeto">
              {(relatedProject?.tags ?? activeTechnology.stack).map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <ul className="technology-capabilities" aria-label="Competências">
            {activeTechnology.capabilities.map((capability) => <li key={capability}><Check aria-hidden="true" />{capability}</li>)}
          </ul>
          <div className="technology-stack" aria-label="Stack relacionada">
            {activeTechnology.stack.map((item) => <span className={`stack-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <aside className="quality-areas" aria-label="Áreas de qualidade">
        {qualityAreas.map(({ label, Icon }) => <span key={label} className={activeTechnology.areas.includes(label) ? "is-active" : ""}><Icon aria-hidden="true" />{label}</span>)}
      </aside>
    </div>
  );
}
