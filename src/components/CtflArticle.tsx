import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CircleGauge,
  FileChartColumn,
  FileCheck2,
  GitBranch,
  GraduationCap,
  Layers3,
  ListChecks,
  ShieldCheck,
  Target,
  Timer,
  Users,
  Wrench,
} from "lucide-react";

const articleSections = [
  { id: "visao-geral", label: "O que é CTFL" },
  { id: "valor-profissional", label: "Valor profissional" },
  { id: "estrutura-prova", label: "Estrutura da prova" },
  { id: "niveis-cognitivos", label: "Níveis K1, K2 e K3" },
  { id: "mapa-syllabus", label: "Mapa do syllabus" },
  { id: "fundamentos", label: "Fundamentos de teste" },
  { id: "atividades-papeis", label: "Atividades, testware e papéis" },
  { id: "ciclo-vida", label: "Ciclo de desenvolvimento" },
  { id: "niveis-tipos", label: "Níveis e tipos de teste" },
  { id: "historias-atdd", label: "Histórias, critérios e ATDD" },
  { id: "testes-estaticos", label: "Testes estáticos" },
  { id: "tecnicas", label: "Técnicas de teste" },
  { id: "cobertura", label: "Cobertura e seleção" },
  { id: "planejamento", label: "Planejamento e rastreabilidade" },
  { id: "estimativas", label: "Estimativas e priorização" },
  { id: "riscos", label: "Teste baseado em risco" },
  { id: "monitoramento", label: "Métricas e controle" },
  { id: "defeitos", label: "Gestão de defeitos" },
  { id: "ferramentas", label: "Ferramentas e automação" },
  { id: "configuracao-dados", label: "Configuração, ambiente e dados" },
  { id: "qa-sdet", label: "CTFL para QA e SDET" },
  { id: "plano-estudo", label: "Plano de preparação" },
  { id: "certificacao-pratica", label: "Certificação e experiência" },
  { id: "referencias-ctfl", label: "Referências oficiais" },
];

export function CtflArticle() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "CTFL e Engenharia de Qualidade | Matheus Koyama";
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => { document.title = previousTitle; };
  }, []);

  return (
    <article className="cypress-article ctfl-article">
      <header className="article-hero">
        <a className="article-back" href="#home"><ArrowLeft aria-hidden="true" />Voltar à página principal</a>
        <div className="article-heading">
          <span className="article-logo"><Award aria-hidden="true" /></span>
          <div>
            <span className="article-category">CTFL • ISTQB</span>
            <h1>CTFL como base para Engenharia de Qualidade</h1>
          </div>
        </div>
        <p className="article-lead">
          Um guia profissional sobre o valor da certificação, o conteúdo do syllabus v4.0.1 e a aplicação dos
          fundamentos em QA, SDET, automação de testes, produtos ágeis e entrega contínua.
        </p>
        <div className="article-pillars" aria-label="Pilares abordados no artigo">
          <span><BookOpen aria-hidden="true" />Fundamentos</span>
          <span><Target aria-hidden="true" />Risco e estratégia</span>
          <span><Wrench aria-hidden="true" />Prática em QA e SDET</span>
        </div>
        <div className="article-impact" aria-label="Impactos profissionais da certificação CTFL">
          <div><strong>Linguagem comum</strong><span>Conceitos consistentes entre qualidade, engenharia, produto e negócio</span></div>
          <div><strong>Decisões melhores</strong><span>Técnicas e prioridades conectadas ao risco real do software</span></div>
          <div><strong>Base de carreira</strong><span>Fundamento reconhecido para trilhas Core, Agile e Specialist do ISTQB</span></div>
        </div>
      </header>

      <div className="article-layout">
        <aside className="article-index" aria-label="Neste artigo">
          <strong>Neste artigo</strong>
          <nav>{articleSections.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        </aside>

        <div className="article-body">
          <section id="visao-geral">
            <span className="article-section-icon"><BadgeCheck aria-hidden="true" /></span>
            <p className="article-eyebrow">VISÃO GERAL</p>
            <h2>CTFL é uma base de conhecimento, não apenas uma prova</h2>
            <p>
              Certified Tester Foundation Level é a certificação fundamental do esquema ISTQB. Seu objetivo é criar
              uma compreensão prática e compartilhada sobre teste de software: por que testar, como organizar o
              trabalho, quais técnicas selecionar, como comunicar resultados e de que maneira risco, contexto e ciclo
              de desenvolvimento alteram a estratégia de qualidade.
            </p>
            <p>
              A versão 4.0 foi reescrita para refletir práticas contemporâneas. O conteúdo é aplicável a modelos
              sequenciais, iterativos e incrementais, além de Agile, DevOps e Continuous Delivery. Isso torna o CTFL
              relevante para testers, analistas, engenheiros de teste, desenvolvedores, profissionais de produto,
              gestores e qualquer pessoa que participe de decisões sobre qualidade.
            </p>
            <p>
              A certificação não ensina uma ferramenta específica. Ela organiza o raciocínio que vem antes da escolha
              entre Cypress, Playwright, Selenium, testes de API ou validação manual: objetivo, cobertura, prioridade,
              evidência, oráculo, risco e critério de encerramento.
            </p>
          </section>

          <section id="valor-profissional">
            <span className="article-section-icon"><BriefcaseBusiness aria-hidden="true" /></span>
            <p className="article-eyebrow">CARREIRA E NEGÓCIO</p>
            <h2>Por que a certificação importa para profissionais e empresas?</h2>
            <p>
              Para o profissional, CTFL demonstra domínio de um vocabulário internacional e de princípios que não
              dependem de uma stack. Isso melhora a qualidade de entrevistas, documentação, refinamentos e discussões
              técnicas, porque o candidato consegue explicar não apenas como executa um teste, mas por que aquela
              abordagem é adequada ao risco e ao contexto.
            </p>
            <p>
              Para a empresa, o ganho potencial está na consistência. Equipes que distinguem erro, defeito, falha,
              causa raiz, confirmação e regressão reduzem ambiguidades. Critérios de aceite melhor definidos, revisões
              antecipadas e relatórios orientados à decisão diminuem retrabalho e tornam a comunicação entre QA,
              desenvolvimento, produto e liderança mais objetiva.
            </p>
            <div className="article-callout">
              <strong>Valor real</strong>
              <p>A credencial abre uma porta; a capacidade de aplicar os fundamentos a problemas reais sustenta a carreira.</p>
            </div>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Vocabulário técnico reconhecido internacionalmente</li>
              <li><Check aria-hidden="true" />Base para especializações e níveis avançados do ISTQB</li>
              <li><Check aria-hidden="true" />Raciocínio estruturado para entrevistas e decisões de projeto</li>
              <li><Check aria-hidden="true" />Melhor colaboração em equipes multidisciplinares</li>
            </ul>
          </section>

          <section id="estrutura-prova">
            <span className="article-section-icon"><Timer aria-hidden="true" /></span>
            <p className="article-eyebrow">EXAME CTFL v4.0</p>
            <h2>Conhecer a prova ajuda a preparar conhecimento, não atalhos</h2>
            <p>
              A tabela oficial de estrutura publicada pelo ISTQB estabelece 40 questões, 40 pontos possíveis e nota
              mínima de 26 pontos, equivalente a 65%. O tempo padrão é de 60 minutos; a tabela também registra 75
              minutos na condição de acréscimo de 25%. Regras de idioma, agendamento, identificação e aplicação devem
              ser confirmadas com o provedor do exame escolhido.
            </p>
            <div className="article-metrics" aria-label="Estrutura oficial do exame CTFL">
              <div><span>Questões</span><strong>40</strong><p>Questões objetivas distribuídas pelos objetivos de aprendizagem.</p></div>
              <div><span>Aprovação</span><strong>26 pontos</strong><p>O candidato precisa alcançar pelo menos 65% do total.</p></div>
              <div><span>Tempo padrão</span><strong>60 minutos</strong><p>A gestão do tempo deve reservar espaço para revisão.</p></div>
              <div><span>Tempo +25%</span><strong>75 minutos</strong><p>Aplicável conforme as regras oficiais e o provedor do exame.</p></div>
            </div>
            <p>
              A distribuição atual contempla níveis cognitivos K1, K2 e K3: lembrar, compreender e aplicar. Portanto,
              decorar definições não é suficiente. Questões de aplicação exigem reconhecer a técnica correta, derivar
              casos de teste, interpretar cobertura ou escolher a ação mais adequada em um cenário contextualizado.
            </p>
          </section>

          <section id="niveis-cognitivos">
            <span className="article-section-icon"><CircleGauge aria-hidden="true" /></span>
            <p className="article-eyebrow">OBJETIVOS DE APRENDIZAGEM</p>
            <h2>K1, K2 e K3 exigem formas diferentes de estudo</h2>
            <p>
              Os níveis cognitivos indicam a profundidade esperada. K1 exige reconhecer ou recordar um conceito. K2
              pede compreensão suficiente para explicar, comparar, classificar ou distinguir alternativas. K3 exige
              aplicação: o candidato recebe dados ou um cenário e precisa usar uma técnica para chegar à resposta.
            </p>
            <p>
              Na estrutura oficial atual, a prova CTFL contém oito questões K1, 24 questões K2 e oito questões K3.
              Isso concentra a preparação em interpretação e compreensão, mas torna perigoso ignorar exercícios. As
              questões K3 incluem aplicação de particionamento de equivalência, valores limite, tabelas de decisão,
              transição de estados, ATDD, estimativas, priorização e preparação de relatório de defeito.
            </p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Nível</th><th>O que demonstra</th><th>Como estudar</th></tr></thead>
                <tbody>
                  <tr><td>K1</td><td>Lembrar termos, princípios e fatos</td><td>Glossário, flashcards e revisão espaçada</td></tr>
                  <tr><td>K2</td><td>Explicar relações e escolher conceitos</td><td>Comparações, mapas mentais e justificativas</td></tr>
                  <tr><td>K3</td><td>Aplicar uma técnica a um problema</td><td>Exercícios, cálculos e casos completos</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="mapa-syllabus">
            <span className="article-section-icon"><Layers3 aria-hidden="true" /></span>
            <p className="article-eyebrow">SYLLABUS v4.0.1</p>
            <h2>Os seis capítulos formam uma linha de raciocínio completa</h2>
            <p>
              O syllabus oficial organiza o conhecimento em seis capítulos. Eles começam pelo propósito do teste,
              avançam pela integração ao ciclo de desenvolvimento, apresentam revisões e técnicas de projeto, e
              terminam com gestão e ferramentas. Estudar nessa ordem ajuda a conectar conceitos em vez de tratá-los
              como listas isoladas.
            </p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Capítulo</th><th>Foco</th><th>Aplicação profissional</th></tr></thead>
                <tbody>
                  <tr><td>1. Fundamentos</td><td>Objetivos, princípios, atividades e papéis</td><td>Explicar o valor do teste e organizar o trabalho</td></tr>
                  <tr><td>2. SDLC</td><td>Níveis, tipos, manutenção e abordagens</td><td>Adaptar a estratégia ao ciclo de desenvolvimento</td></tr>
                  <tr><td>3. Teste estático</td><td>Revisões, feedback e análise sem execução</td><td>Prevenir defeitos antes que cheguem ao código</td></tr>
                  <tr><td>4. Análise e projeto</td><td>Técnicas caixa-preta, caixa-branca e experiência</td><td>Derivar cobertura justificável e reproduzível</td></tr>
                  <tr><td>5. Gestão</td><td>Planejamento, risco, monitoramento e defeitos</td><td>Transformar evidência em decisão</td></tr>
                  <tr><td>6. Ferramentas</td><td>Benefícios e riscos da automação</td><td>Adotar tecnologia com governança</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="fundamentos">
            <span className="article-section-icon"><BookOpen aria-hidden="true" /></span>
            <p className="article-eyebrow">FUNDAMENTOS</p>
            <h2>Teste reduz incerteza, mas não prova ausência de defeitos</h2>
            <p>
              O CTFL diferencia teste de debugging. Testar envolve avaliar produtos de trabalho e software para revelar
              defeitos, reduzir risco e fornecer informação. Debugging localiza causas, corrige o defeito e confirma a
              correção. A distinção define responsabilidades e evita que uma falha descoberta vire um chamado sem
              contexto ou que uma correção seja considerada concluída sem confirmação.
            </p>
            <p>
              Os sete princípios lembram que testes mostram a presença, não a ausência, de defeitos; testar tudo é
              inviável; começar cedo economiza retrabalho; defeitos tendem a se concentrar; testes perdem eficácia se
              nunca evoluem; a abordagem depende do contexto; e um sistema sem falhas pode continuar inútil se não
              atender às necessidades do usuário.
            </p>
            <blockquote>
              Qualidade não nasce de uma etapa final. Ela emerge de decisões verificáveis ao longo de todo o produto.
            </blockquote>
          </section>

          <section id="atividades-papeis">
            <span className="article-section-icon"><ListChecks aria-hidden="true" /></span>
            <p className="article-eyebrow">PROCESSO DE TESTE</p>
            <h2>Atividades, testware e papéis organizam o trabalho de qualidade</h2>
            <p>
              O processo reúne planejamento, monitoramento e controle, análise, projeto, implementação, execução e
              conclusão. Essas atividades parecem sequenciais quando descritas, mas em projetos reais acontecem de
              forma iterativa e paralela. Análise responde “o que testar”; projeto responde “como testar”;
              implementação prepara casos, dados, suites, scripts e ambiente para execução.
            </p>
            <p>
              Testware é o conjunto de produtos de trabalho gerados para testar: plano, registro de riscos, condições,
              casos, charters exploratórios, dados, scripts, resultados, logs e relatórios. Manter rastreabilidade entre
              a base de teste e esse material permite avaliar cobertura, impacto de mudanças e estado dos objetivos.
            </p>
            <p>
              O syllabus distingue o papel de gestão do teste, voltado a planejamento, liderança, monitoramento e
              conclusão, do papel de teste, concentrado em análise, projeto, implementação e execução. A distribuição
              concreta depende do contexto; em times ágeis uma pessoa pode assumir atividades de ambos sem eliminar a
              necessidade de responsabilidade explícita.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Planejar objetivos e abordagem dentro das restrições</li>
              <li><Check aria-hidden="true" />Analisar a base de teste e priorizar condições</li>
              <li><Check aria-hidden="true" />Projetar cobertura, dados, ambiente e resultados esperados</li>
              <li><Check aria-hidden="true" />Executar, comparar resultados e investigar anomalias</li>
              <li><Check aria-hidden="true" />Concluir, arquivar testware e registrar aprendizado</li>
              <li><Check aria-hidden="true" />Controlar o trabalho quando o progresso divergir do plano</li>
            </ul>
          </section>

          <section id="ciclo-vida">
            <span className="article-section-icon"><GitBranch aria-hidden="true" /></span>
            <p className="article-eyebrow">SDLC, AGILE E DEVOPS</p>
            <h2>O teste acompanha cada atividade de desenvolvimento</h2>
            <p>
              Cada modelo de ciclo de vida altera momento, documentação, independência e automação, mas não elimina a
              necessidade de objetivos claros. Testes de componente, integração, sistema e aceitação observam riscos
              diferentes. Testes funcionais e não funcionais complementam essa visão, enquanto confirmação e regressão
              respondem a perguntas distintas depois de uma mudança.
            </p>
            <p>
              Shift-left antecipa análise, revisão e feedback. Whole-team approach distribui responsabilidade pela
              qualidade sem apagar especialidades. Em Agile e DevOps, QA contribui para exemplos, critérios de aceite,
              testabilidade, observabilidade e pipelines. Desenvolvedores, produto e operações participam porque a
              qualidade final depende das decisões de todos.
            </p>
            <div className="article-flow" aria-label="Qualidade ao longo do ciclo de desenvolvimento">
              <span>Descoberta<strong>Riscos e exemplos</strong></span>
              <span>Construção<strong>Revisões e testes</strong></span>
              <span>Entrega<strong>Gates e evidências</strong></span>
              <span>Operação<strong>Monitoramento e aprendizado</strong></span>
            </div>
          </section>

          <section id="niveis-tipos">
            <span className="article-section-icon"><Layers3 aria-hidden="true" /></span>
            <p className="article-eyebrow">COBERTURA EM CAMADAS</p>
            <h2>Níveis e tipos de teste protegem riscos diferentes</h2>
            <p>
              O CTFL v4.0.1 descreve cinco níveis: componente, integração de componentes, sistema, integração de
              sistemas e aceitação. Cada nível possui objeto, objetivo, base, defeitos típicos e responsabilidades
              próprios. Separá-los evita concentrar toda a confiança no E2E e ajuda a localizar falhas com precisão.
            </p>
            <p>
              Tipos de teste agrupam objetivos relacionados a características de qualidade. Testes funcionais avaliam
              o que o sistema faz; testes não funcionais examinam como ele se comporta, incluindo desempenho,
              usabilidade, compatibilidade e segurança. Caixa-preta observa comportamento, enquanto caixa-branca usa a
              estrutura interna para medir cobertura.
            </p>
            <p>
              Depois de uma correção, o teste de confirmação verifica se o defeito específico foi resolvido. O teste de
              regressão procura efeitos adversos em áreas relacionadas. Na manutenção, mudanças, migrações, atualizações
              de plataforma e desativação de sistemas podem exigir análise de impacto e nova cobertura.
            </p>
            <div className="article-flow" aria-label="Níveis de teste do CTFL">
              <span>Componente<strong>Unidade isolada</strong></span>
              <span>Integrações<strong>Contratos e interfaces</strong></span>
              <span>Sistema<strong>Produto completo</strong></span>
              <span>Aceitação<strong>Necessidade do usuário</strong></span>
            </div>
          </section>

          <section id="historias-atdd">
            <span className="article-section-icon"><Users aria-hidden="true" /></span>
            <p className="article-eyebrow">ABORDAGEM COLABORATIVA</p>
            <h2>Histórias, critérios de aceite e ATDD transformam conversa em exemplos</h2>
            <p>
              Histórias de usuário aproximam necessidade e entrega. Os três Cs lembram que o cartão registra a intenção,
              a conversa constrói entendimento e a confirmação demonstra valor. O modelo INVEST ajuda a avaliar se a
              história é independente, negociável, valiosa, estimável, pequena e testável.
            </p>
            <p>
              Critérios de aceite delimitam escopo, alinham stakeholders e cobrem cenários positivos e negativos. Eles
              podem ser orientados a cenários, como Given/When/Then, ou orientados a regras, usando listas e tabelas.
              Clareza importa mais do que o formato: uma frase bonita que admite interpretações conflitantes não é um
              bom critério.
            </p>
            <p>
              Em ATDD, produto, desenvolvimento e teste discutem exemplos antes da implementação. Os casos resultantes
              orientam o desenvolvimento e podem ser manuais ou automatizados. O objetivo não é converter cada frase em
              script, mas resolver ambiguidades cedo e criar uma visão compartilhada do comportamento esperado.
            </p>
            <div className="article-callout">
              <strong>Exemplo de pergunta</strong>
              <p>Além do caminho feliz, quais permissões, limites, estados anteriores e falhas externas alteram a aceitação?</p>
            </div>
          </section>

          <section id="testes-estaticos">
            <span className="article-section-icon"><FileCheck2 aria-hidden="true" /></span>
            <p className="article-eyebrow">PREVENÇÃO</p>
            <h2>Encontrar ambiguidades antes da execução custa menos</h2>
            <p>
              Testes estáticos avaliam requisitos, histórias, critérios de aceite, código, modelos e documentos sem
              executar o software. Revisões bem conduzidas identificam contradições, lacunas, termos vagos, regras não
              testáveis e riscos de manutenção quando a correção ainda é mais simples.
            </p>
            <p>
              O processo de revisão envolve planejamento, início, revisão individual, comunicação e análise, correção
              e reporte. O nível de formalidade depende do risco. Uma conversa estruturada pode ser suficiente para uma
              mudança pequena; produtos regulados ou críticos podem exigir papéis, critérios, registros e métricas.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Requisitos com resultado observável e critérios verificáveis</li>
              <li><Check aria-hidden="true" />Participantes preparados e objetivo de revisão explícito</li>
              <li><Check aria-hidden="true" />Achados registrados sem transformar a revisão em disputa pessoal</li>
              <li><Check aria-hidden="true" />Ações acompanhadas até correção ou decisão consciente</li>
            </ul>
          </section>

          <section id="tecnicas">
            <span className="article-section-icon"><ListChecks aria-hidden="true" /></span>
            <p className="article-eyebrow">ANÁLISE E PROJETO</p>
            <h2>Técnicas tornam a cobertura explicável</h2>
            <p>
              Particionamento de equivalência divide dados em grupos tratados de forma semelhante. Análise de valor
              limite concentra casos nas bordas, onde defeitos são frequentes. Tabelas de decisão combinam condições e
              ações de regras de negócio. Transição de estados modela comportamento dependente de histórico. Essas
              técnicas caixa-preta derivam testes a partir do comportamento esperado.
            </p>
            <p>
              Técnicas caixa-branca analisam a estrutura implementada, como cobertura de instruções e de ramos.
              Técnicas baseadas em experiência incluem error guessing, teste exploratório e checklists. Nenhuma técnica
              é universal; a escolha depende da base de teste, do risco, do nível de teste e da informação disponível.
            </p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Situação</th><th>Técnica útil</th><th>Pergunta respondida</th></tr></thead>
                <tbody>
                  <tr><td>Faixas de idade, preço ou quantidade</td><td>Equivalência + valores limite</td><td>Quais classes e bordas precisam ser exercitadas?</td></tr>
                  <tr><td>Desconto com várias condições</td><td>Tabela de decisão</td><td>Quais combinações alteram o resultado?</td></tr>
                  <tr><td>Pedido, sessão ou workflow</td><td>Transição de estados</td><td>Quais eventos e sequências são válidos?</td></tr>
                  <tr><td>Fluxo implementado no código</td><td>Cobertura de ramos</td><td>As decisões estruturais foram percorridas?</td></tr>
                  <tr><td>Área nova ou pouco documentada</td><td>Teste exploratório</td><td>Que riscos surgem ao aprender e testar simultaneamente?</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="cobertura">
            <span className="article-section-icon"><Target aria-hidden="true" /></span>
            <p className="article-eyebrow">COBERTURA E SELEÇÃO</p>
            <h2>Cobertura mede o que foi exercitado, não a qualidade final</h2>
            <p>
              Cobertura relaciona itens exercitados ao universo definido por uma técnica. Em caixa-preta, o item pode
              ser uma partição, limite, regra ou transição. Em caixa-branca, pode ser uma instrução ou ramo. O número é
              útil quando o critério está explícito; “90% de cobertura” sem dizer de quê produz pouca informação.
            </p>
            <p>
              Cem por cento de cobertura segundo um critério não significa ausência de defeitos. Uma tabela de decisão
              completa pode usar dados incorretos; todos os ramos podem ser executados sem validar segurança,
              acessibilidade ou valor para o usuário. Cobertura apoia identificação de lacunas, mas precisa ser
              combinada a oráculos, risco, revisão e experiência.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Definir o conjunto de itens de cobertura</li>
              <li><Check aria-hidden="true" />Derivar casos rastreáveis aos itens selecionados</li>
              <li><Check aria-hidden="true" />Calcular lacunas e decidir se o risco residual é aceitável</li>
              <li><Check aria-hidden="true" />Evitar transformar percentual em meta sem contexto</li>
            </ul>
          </section>

          <section id="planejamento">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">GESTÃO DO TESTE</p>
            <h2>Planejamento conecta objetivo, cobertura e evidência</h2>
            <p>
              Um plano útil define escopo, objetivos, abordagem, recursos, ambiente, dados, agenda, critérios de entrada
              e saída, riscos e responsabilidades. Ele deve orientar escolhas, não existir apenas para auditoria. Em
              times ágeis, parte desse conteúdo pode viver no backlog, na estratégia do produto e no pipeline, desde
              que permaneça acessível, coerente e rastreável.
            </p>
            <p>
              Rastreabilidade liga requisitos e riscos a condições, casos, resultados e defeitos. Essa cadeia permite
              responder o que foi coberto, o que falhou, qual impacto existe e por que a entrega foi aprovada. Métricas
              devem apoiar essas decisões; quantidade de casos ou percentual de aprovação sem contexto podem produzir
              uma sensação enganosa de segurança.
            </p>
          </section>

          <section id="estimativas">
            <span className="article-section-icon"><Timer aria-hidden="true" /></span>
            <p className="article-eyebrow">ESFORÇO E PRIORIDADE</p>
            <h2>Estimativas tornam premissas e incertezas visíveis</h2>
            <p>
              O CTFL apresenta estimativas baseadas em métricas e em especialistas. Razões históricas e extrapolação
              usam dados comparáveis; Wideband Delphi busca consenso independente e iterativo; Planning Poker é uma
              variação comum em Agile. A estimativa de três pontos combina cenário otimista, mais provável e pessimista
              para representar incerteza em vez de escondê-la em um único número.
            </p>
            <p>
              A priorização pode considerar risco, cobertura, requisitos e dependências. Testes de maior impacto ou que
              detectam falhas bloqueadoras devem rodar antes. Em regressão automatizada, duração histórica e flakiness
              também importam: feedback rápido perde valor quando os primeiros resultados não são confiáveis.
            </p>
            <div className="article-metrics" aria-label="Fatores de estimativa e priorização">
              <div><span>Escopo</span><strong>O que será coberto?</strong><p>Objetos, níveis, tipos e profundidade esperada.</p></div>
              <div><span>Complexidade</span><strong>Quais dependências existem?</strong><p>Integrações, estados, dados e ambientes.</p></div>
              <div><span>Capacidade</span><strong>Quem e quando?</strong><p>Competências, disponibilidade e paralelismo.</p></div>
              <div><span>Incerteza</span><strong>O que ainda não sabemos?</strong><p>Premissas, variações e riscos da estimativa.</p></div>
            </div>
          </section>

          <section id="riscos">
            <span className="article-section-icon"><ShieldCheck aria-hidden="true" /></span>
            <p className="article-eyebrow">TESTE BASEADO EM RISCO</p>
            <h2>Prioridade nasce da probabilidade combinada ao impacto</h2>
            <p>
              Risco de produto é a possibilidade de o software falhar em qualidade, segurança, desempenho, negócio ou
              experiência. Risco de projeto ameaça prazo, orçamento, equipe, ambiente ou capacidade de entrega. O CTFL
              ensina a diferenciar ambos para que mitigação e comunicação sejam direcionadas corretamente.
            </p>
            <p>
              A análise de risco identifica itens, estima probabilidade e impacto e estabelece prioridade. Quanto maior
              a exposição, mais cedo, profundo e independente deve ser o teste. Quando prazo ou ambiente são limitados,
              essa lógica torna explícito o que será protegido e qual risco residual será aceito.
            </p>
            <div className="article-callout">
              <strong>Aplicação em automação</strong>
              <p>Automatize primeiro as jornadas repetidas, estáveis e críticas para receita, segurança, operação ou reputação.</p>
            </div>
          </section>

          <section id="monitoramento">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">MÉTRICAS, CONTROLE E CONCLUSÃO</p>
            <h2>O status do teste deve apoiar uma decisão específica</h2>
            <p>
              Monitoramento compara progresso real e plano; controle ajusta prioridade, recursos, agenda, ambiente ou
              escopo quando necessário. Métricas podem cobrir esforço, preparação, execução, defeitos, cobertura, risco
              e custo. A seleção depende da audiência: engenharia precisa de diagnóstico; produto precisa de impacto;
              liderança precisa de tendência, confiança e risco residual.
            </p>
            <p>
              Relatórios de progresso apoiam decisões durante o trabalho. O relatório de conclusão consolida objetivos,
              resultados, desvios, defeitos abertos, riscos residuais, testware reutilizável e lições aprendidas. Um
              dashboard não substitui comunicação: números precisam de interpretação, limitações e recomendação.
            </p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Métrica</th><th>Leitura útil</th><th>Cuidado</th></tr></thead>
                <tbody>
                  <tr><td>Execução</td><td>Concluído versus planejado</td><td>Volume não representa criticidade</td></tr>
                  <tr><td>Defeitos</td><td>Tendência, severidade e concentração</td><td>Contagem isolada pode punir transparência</td></tr>
                  <tr><td>Cobertura</td><td>Lacunas por requisito, risco ou estrutura</td><td>Percentual não prova correção</td></tr>
                  <tr><td>Automação</td><td>Confiabilidade, duração e flakiness</td><td>Mais scripts podem gerar mais manutenção</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="defeitos">
            <span className="article-section-icon"><CircleGauge aria-hidden="true" /></span>
            <p className="article-eyebrow">DIAGNÓSTICO E COMUNICAÇÃO</p>
            <h2>Um bom relatório reduz o tempo entre descoberta e correção</h2>
            <p>
              Um defeito profissionalmente registrado inclui identificador, título objetivo, ambiente, versão, passos,
              dados, resultado esperado, resultado observado, evidências, severidade, prioridade e referências. O nível
              de detalhe deve permitir reprodução e decisão sem esconder o impacto em uma descrição excessivamente
              técnica.
            </p>
            <p>
              Severidade expressa consequência técnica ou de negócio; prioridade representa urgência de tratamento.
              Elas podem divergir. Um erro visual grave em uma campanha próxima pode ter prioridade alta, enquanto um
              defeito severo em funcionalidade desativada pode ser planejado para outro momento. A decisão deve ser
              transparente e compartilhada.
            </p>
          </section>

          <section id="ferramentas">
            <span className="article-section-icon"><Wrench aria-hidden="true" /></span>
            <p className="article-eyebrow">FERRAMENTAS E AUTOMAÇÃO</p>
            <h2>Automação amplia capacidade, mas também cria riscos</h2>
            <p>
              Ferramentas apoiam gestão, análise estática, projeto, preparação de dados, execução, cobertura, integração
              contínua e colaboração. Os benefícios incluem repetibilidade, velocidade, rastreabilidade e acesso a
              informação. Os riscos incluem expectativas irreais, dependência excessiva, manutenção, falsos positivos,
              perda de conhecimento e adoção sem processo adequado.
            </p>
            <p>
              Uma prova de conceito deve representar o produto real, medir custo total e definir critérios de sucesso.
              Em Engenharia de Automação, a pirâmide não é uma regra visual rígida: é um lembrete econômico para colocar
              cada verificação na camada mais rápida, estável e informativa capaz de demonstrar o risco.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Selecionar ferramenta pelo problema, equipe e arquitetura</li>
              <li><Check aria-hidden="true" />Versionar código, configuração e dados de teste</li>
              <li><Check aria-hidden="true" />Publicar evidências acionáveis no CI/CD</li>
              <li><Check aria-hidden="true" />Medir confiabilidade, duração, cobertura crítica e manutenção</li>
            </ul>
          </section>

          <section id="configuracao-dados">
            <span className="article-section-icon"><GitBranch aria-hidden="true" /></span>
            <p className="article-eyebrow">REPRODUTIBILIDADE</p>
            <h2>Configuração, ambientes e dados sustentam evidências confiáveis</h2>
            <p>
              Gestão de configuração identifica, controla e rastreia versões de planos, casos, scripts, resultados,
              logs, relatórios e ambientes. Uma baseline aprovada permite reproduzir o contexto de uma execução e
              entender quais mudanças ocorreram entre dois resultados. Sem essa disciplina, uma falha pode desaparecer
              porque software, dados e configuração mudaram silenciosamente.
            </p>
            <p>
              Ambientes devem registrar versão da aplicação, dependências, serviços, feature flags, navegador,
              dispositivo e conectividade relevantes. Dados precisam ter origem, finalidade, isolamento e limpeza
              definidos. Em automação, massas compartilhadas e credenciais embutidas criam flakiness e risco de
              segurança; prefira dados sintéticos, identificadores únicos e segredos gerenciados pelo ambiente.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Relacionar resultado ao commit, build e configuração</li>
              <li><Check aria-hidden="true" />Versionar scripts e arquivos de apoio junto ao produto</li>
              <li><Check aria-hidden="true" />Controlar alterações em baselines e ambientes críticos</li>
              <li><Check aria-hidden="true" />Criar dados reproduzíveis sem informação pessoal real</li>
              <li><Check aria-hidden="true" />Registrar dependências externas e feature flags</li>
              <li><Check aria-hidden="true" />Preservar evidências pelo período exigido pela organização</li>
            </ul>
          </section>

          <section id="qa-sdet">
            <span className="article-section-icon"><Users aria-hidden="true" /></span>
            <p className="article-eyebrow">ENGENHARIA DE AUTOMAÇÃO • QA • SDET</p>
            <h2>O CTFL melhora o raciocínio por trás do código de teste</h2>
            <p>
              Para QA, a certificação fortalece análise, desenho, comunicação de risco, teste exploratório e gestão de
              defeitos. Para SDET e profissionais de automação, ela fornece critérios para decidir o que automatizar,
              em qual camada, com qual cobertura e qual evidência. O código continua essencial, mas deixa de ser o ponto
              de partida de todas as respostas.
            </p>
            <p>
              Um cenário E2E bem escrito não compensa uma condição de teste fraca. Da mesma forma, cobertura estrutural
              não demonstra sozinha que a regra de negócio está correta. O profissional completo combina técnicas do
              CTFL com programação, APIs, banco de dados, arquitetura, observabilidade, segurança e CI/CD.
            </p>
            <div className="article-requirement-flow" aria-label="Evolução do fundamento CTFL para a prática">
              <span><strong>Analisar</strong>Risco, requisito e comportamento</span>
              <span><strong>Projetar</strong>Técnica, dados e cobertura</span>
              <span><strong>Automatizar</strong>Camada, arquitetura e evidência</span>
              <span><strong>Aprender</strong>Métricas, falhas e melhoria contínua</span>
            </div>
          </section>

          <section id="plano-estudo">
            <span className="article-section-icon"><GraduationCap aria-hidden="true" /></span>
            <p className="article-eyebrow">PREPARAÇÃO</p>
            <h2>Um plano de estudo eficaz alterna teoria, aplicação e revisão</h2>
            <p>
              O próprio ISTQB permite preparação por treinamento acreditado ou estudo independente. Em ambos os casos,
              o syllabus deve ser a fonte de verdade. Glossário e exames simulados oficiais complementam o estudo; eles
              ajudam a calibrar linguagem, formato e aplicação sem substituir a compreensão dos objetivos de aprendizagem.
            </p>
            <div className="article-flow" aria-label="Ciclo recomendado de estudo CTFL">
              <span>Semana 1<strong>Capítulos 1 e 2</strong></span>
              <span>Semana 2<strong>Capítulos 3 e 4</strong></span>
              <span>Semana 3<strong>Capítulos 5 e 6</strong></span>
              <span>Semana 4<strong>Simulados e revisão</strong></span>
            </div>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Ler cada objetivo de aprendizagem antes do capítulo</li>
              <li><Check aria-hidden="true" />Criar exemplos próprios para cada técnica</li>
              <li><Check aria-hidden="true" />Revisar erros de simulados pela justificativa, não pela letra</li>
              <li><Check aria-hidden="true" />Treinar ritmo sem sacrificar interpretação</li>
              <li><Check aria-hidden="true" />Confirmar versão, idioma e regras com o provedor</li>
              <li><Check aria-hidden="true" />Dormir e revisar com leveza na véspera da prova</li>
            </ul>
          </section>

          <section id="certificacao-pratica">
            <span className="article-section-icon"><Award aria-hidden="true" /></span>
            <p className="article-eyebrow">MATURIDADE PROFISSIONAL</p>
            <h2>Certificação não substitui portfólio, prática ou pensamento crítico</h2>
            <p>
              CTFL valida conhecimento fundamental dentro de um escopo definido. Ela não comprova, isoladamente,
              senioridade, domínio de automação, experiência em incidentes ou capacidade de liderar qualidade. Uma
              avaliação profissional forte combina certificação, projetos demonstráveis, decisões explicadas, código,
              evidências, colaboração e aprendizado com falhas reais.
            </p>
            <p>
              O certificado possui validade vitalícia segundo o ISTQB. Ainda assim, a área evolui. Estudar a versão
              atual, acompanhar práticas modernas e aplicar os conceitos mantém o conhecimento relevante. O passo
              seguinte pode estar nas trilhas Core Advanced, Agile ou Specialist, escolhido de acordo com função,
              contexto e objetivo de carreira.
            </p>
            <blockquote>
              O melhor resultado do CTFL não é decorar uma terminologia: é tomar decisões de qualidade com mais clareza,
              contexto e responsabilidade.
            </blockquote>
          </section>

          <section id="referencias-ctfl" className="article-references">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">FONTES PRIMÁRIAS</p>
            <h2>Referências oficiais</h2>
            <p>
              Conteúdo e dados da prova foram confrontados com materiais oficiais do ISTQB disponíveis em setembro de
              2026. Consulte sempre a versão vigente e as regras do seu provedor antes da inscrição.
            </p>
            <div className="article-reference-list">
              <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" target="_blank" rel="noreferrer"><span><strong>CTFL v4.0</strong>Visão geral, público, resultados e materiais</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf" target="_blank" rel="noreferrer"><span><strong>Syllabus CTFL v4.0.1</strong>Fonte oficial dos objetivos e conteúdos</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://istqb.org/wp-content/uploads/2026/05/ISTQB_Exam-Structure-Tables_v1.17.pdf" target="_blank" rel="noreferrer"><span><strong>Exam Structure Tables v1.17</strong>Questões, pontuação e duração</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_v4.0_Sample-Exam-A-Questions_v1.6.pdf" target="_blank" rel="noreferrer"><span><strong>Simulado oficial CTFL</strong>Questões para preparação e aplicação</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://glossary.istqb.org/" target="_blank" rel="noreferrer"><span><strong>Glossário ISTQB</strong>Terminologia oficial de teste de software</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://istqb.org/help/ctfl-v40/" target="_blank" rel="noreferrer"><span><strong>FAQ oficial CTFL 4.0</strong>Preparação, validade e transição de versão</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
