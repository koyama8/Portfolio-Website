import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Check,
  CloudCog,
  Code2,
  Database,
  FileChartColumn,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  Network,
  PanelsTopLeft,
  ScanSearch,
  ShieldCheck,
  Split,
  TestTube2,
} from "lucide-react";
import playwrightEmblem from "../../imagens/blog-playwright-emblem.jpg";

const articleSections = [
  { id: "estrategia", label: "Estratégia E2E" },
  { id: "arquitetura", label: "Arquitetura da suíte" },
  { id: "locators", label: "Locators e auto-wait" },
  { id: "fixtures", label: "Fixtures e Page Objects" },
  { id: "isolamento", label: "Isolamento, autenticação e dados" },
  { id: "web-api", label: "Integração Web e API" },
  { id: "cross-browser", label: "Cross-browser e dispositivos" },
  { id: "paralelismo", label: "Workers e sharding" },
  { id: "evidencias", label: "Trace e diagnóstico" },
  { id: "qualidade-ampliada", label: "Qualidade ampliada" },
  { id: "pipeline", label: "CI/CD e governança" },
  { id: "referencias-playwright", label: "Referências oficiais" },
];

type PlaywrightArticleProps = {
  sectionId?: string;
};

export function PlaywrightArticle({ sectionId }: PlaywrightArticleProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Estratégias E2E com Playwright | Matheus Koyama";
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => { document.title = previousTitle; };
  }, []);

  useEffect(() => {
    if (!sectionId) return;

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [sectionId]);

  return (
    <article className="cypress-article playwright-article">
      <header className="article-hero">
        <a className="article-back" href="#blog"><ArrowLeft aria-hidden="true" />Voltar ao Blog</a>
        <div className="article-heading">
          <span className="article-logo playwright-article-logo">
            <img src={playwrightEmblem} alt="Emblema do Playwright com as máscaras verde e coral" />
          </span>
          <div>
            <span className="article-category">Playwright • Engenharia E2E</span>
            <h1>Estratégias E2E com Playwright</h1>
          </div>
        </div>
        <p className="article-lead">
          Um guia prático para projetar suítes Web e API isoladas, observáveis e escaláveis, usando locators semânticos,
          fixtures tipadas, execução cross-browser, paralelismo controlado e evidências que aceleram decisões de qualidade.
        </p>
        <div className="article-pillars" aria-label="Pilares abordados no artigo">
          <span><Globe2 aria-hidden="true" />Web e cross-browser</span>
          <span><Blocks aria-hidden="true" />Arquitetura e isolamento</span>
          <span><CloudCog aria-hidden="true" />CI/CD e observabilidade</span>
        </div>
        <div className="article-impact" aria-label="Impactos de uma estratégia Playwright bem estruturada">
          <div><strong>Feedback confiável</strong><span>Falhas reproduzíveis e conectadas ao risco da jornada</span></div>
          <div><strong>Diagnóstico rápido</strong><span>Trace, rede, DOM e evidências reunidos por execução</span></div>
          <div><strong>Escala sustentável</strong><span>Contextos isolados, workers e shards sem dados compartilhados</span></div>
        </div>
      </header>

      <div className="article-layout">
        <aside className="article-index" aria-label="Neste artigo">
          <strong>Neste artigo</strong>
          <nav>
            {articleSections.map(({ id, label }) => <a key={id} href={`#blog/playwright/${id}`}>{label}</a>)}
          </nav>
        </aside>

        <div className="article-body">
          <section id="estrategia">
            <span className="article-section-icon"><Gauge aria-hidden="true" /></span>
            <p className="article-eyebrow">DECISÃO DE QUALIDADE</p>
            <h2>E2E protege jornadas; não deve repetir toda a pirâmide</h2>
            <p>
              Playwright permite automatizar interações reais em Chromium, Firefox e WebKit, mas capacidade técnica não
              significa que toda regra deva ser validada pela interface. Testes E2E custam mais para preparar, executar
              e diagnosticar. Seu melhor uso está nas jornadas que atravessam componentes, serviços e decisões de
              negócio cuja integração completa precisa ser demonstrada.
            </p>
            <p>
              A seleção começa pelo risco: impacto financeiro, exposição regulatória, frequência de uso, histórico de
              falhas e dificuldade de recuperação. Regras combinatórias permanecem em testes unitários, de serviço ou
              contrato; o navegador confirma que os principais caminhos continuam utilizáveis e que as camadas contam
              a mesma história para o usuário.
            </p>
            <div className="article-callout">
              <strong>Princípio de cobertura</strong>
              <p>Automatize no nível mais barato que prove o comportamento e reserve E2E para integrações de alto valor.</p>
            </div>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Priorizar jornadas por risco e valor, não por quantidade de telas</li>
              <li><Check aria-hidden="true" />Definir oráculo e evidência antes de escrever o teste</li>
              <li><Check aria-hidden="true" />Separar smoke, regressão crítica e cobertura ampliada</li>
              <li><Check aria-hidden="true" />Excluir cenários que não sustentam mais uma decisão</li>
            </ul>
          </section>

          <section id="arquitetura">
            <span className="article-section-icon"><Layers3 aria-hidden="true" /></span>
            <p className="article-eyebrow">ARQUITETURA DA AUTOMAÇÃO</p>
            <h2>Uma suíte escalável organiza intenção, domínio e responsabilidade</h2>
            <p>
              A estrutura deve permitir que uma falha indique rapidamente o domínio afetado. Specs descrevem o
              comportamento; fixtures fornecem dependências; clients encapsulam comunicação HTTP; page e component
              objects concentram interações recorrentes; builders criam dados válidos. Colocar tudo em uma BasePage
              genérica ou em hooks globais reduz visibilidade e aumenta acoplamento.
            </p>
            <p>
              O cenário precisa continuar legível como regra de negócio. Assertions relevantes devem permanecer perto
              da ação que comprovam, evitando helpers que escondem dezenas de passos ou validam silenciosamente. Uma
              abstração merece existir quando reduz duplicação real sem apagar o significado do teste.
            </p>
            <pre><code>{`tests/
├── web/              # jornadas percebidas pelo usuário
├── api/              # contratos e regras de serviço
├── fixtures/         # dependências e lifecycle tipados
├── pages/            # páginas e componentes reutilizáveis
├── clients/          # acesso a APIs e integrações
├── data/             # builders e massas sintéticas
└── support/          # utilidades pequenas e explícitas`}</code></pre>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Camada</th><th>Responsabilidade</th><th>Sinal de alerta</th></tr></thead>
                <tbody>
                  <tr><td>Spec</td><td>Expressar jornada, risco e resultado esperado</td><td>Cenário dominado por detalhes técnicos</td></tr>
                  <tr><td>Fixture</td><td>Entregar dependência pronta e executar teardown</td><td>Setup global invisível para todos os testes</td></tr>
                  <tr><td>Page/Component</td><td>Encapsular interação recorrente com a interface</td><td>Classe gigante que representa o sistema inteiro</td></tr>
                  <tr><td>Client</td><td>Centralizar chamadas e contratos de integração</td><td>Request duplicado e payload espalhado nas specs</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="locators">
            <span className="article-section-icon"><ScanSearch aria-hidden="true" /></span>
            <p className="article-eyebrow">SEMÂNTICA E SINCRONIZAÇÃO</p>
            <h2>Locators e web-first assertions eliminam esperas por adivinhação</h2>
            <p>
              Locators são o centro do auto-waiting e da retry-ability do Playwright. Para clicar, a ferramenta verifica
              condições como unicidade, visibilidade, estabilidade, capacidade de receber eventos e estado habilitado.
              Assertions como <code>toBeVisible()</code> e <code>toHaveText()</code> repetem a consulta até que a condição
              seja atendida ou o timeout expire.
            </p>
            <p>
              A preferência deve ser por atributos percebidos pelo usuário: role, nome acessível, label, placeholder e
              texto. <code>getByTestId()</code> é apropriado quando não existe contrato semântico estável. Seletores CSS
              dependentes da estrutura, <code>nth()</code> e <code>first()</code> usados para silenciar ambiguidade tornam
              o teste vulnerável a refatorações e podem interagir com o elemento errado.
            </p>
            <pre><code>{`const checkout = page.getByRole('button', { name: 'Finalizar compra' })
await expect(checkout).toBeEnabled()
await checkout.click()

await expect(page.getByRole('heading', { name: 'Pedido confirmado' }))
  .toBeVisible()
await expect(page).toHaveURL(/\/orders\/\d+$/)`}</code></pre>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Preferir role e nome acessível</li>
              <li><Check aria-hidden="true" />Usar assertions com polling em estados assíncronos</li>
              <li><Check aria-hidden="true" />Esperar eventos observáveis, não <code>waitForTimeout</code></li>
              <li><Check aria-hidden="true" />Corrigir ambiguidade em vez de escolher o primeiro elemento</li>
            </ul>
          </section>

          <section id="fixtures">
            <span className="article-section-icon"><Code2 aria-hidden="true" /></span>
            <p className="article-eyebrow">REUTILIZAÇÃO COM CONTROLE</p>
            <h2>Fixtures tipadas entregam contexto e encerram recursos</h2>
            <p>
              Fixtures declaram exatamente o que cada teste precisa e são preparadas sob demanda. Fixtures de teste
              atendem isolamento fino; fixtures de worker são úteis para serviços ou recursos caros compartilhados de
              forma segura. O código antes de <code>use()</code> prepara a dependência e o código posterior executa o
              teardown, mantendo o lifecycle próximo daquilo que ele controla.
            </p>
            <p>
              Page Objects podem concentrar locators e ações estáveis, enquanto Component Objects representam elementos
              reutilizados em diferentes páginas. Eles não devem transformar o teste em uma sequência opaca de métodos
              genéricos. O objetivo é expressar intenção, não criar uma segunda linguagem sobre o produto.
            </p>
            <pre><code>{`type Fixtures = { authenticatedPage: Page }

export const test = base.extend<Fixtures>({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: '.auth/user.json' })
    const page = await context.newPage()
    await use(page)
    await context.close()
  },
})`}</code></pre>
            <p className="article-note">
              O exemplo demonstra lifecycle. Em um projeto real, valide expiração da sessão, proteja o arquivo de
              autenticação e escolha contas compatíveis com execução paralela.
            </p>
          </section>

          <section id="isolamento">
            <span className="article-section-icon"><KeyRound aria-hidden="true" /></span>
            <p className="article-eyebrow">CONFIABILIDADE E DADOS</p>
            <h2>BrowserContext isolado não corrige dados compartilhados no backend</h2>
            <p>
              Cada teste recebe um BrowserContext independente, com cookies, armazenamento e sessão separados. Essa
              proteção reduz falhas em cascata e permite cenários com múltiplos usuários. Ainda assim, dois testes podem
              colidir se alterarem a mesma conta, pedido ou registro no servidor. Isolamento do navegador e isolamento
              de dados são problemas complementares.
            </p>
            <p>
              Use identificadores únicos, contas por worker ou recursos criados por API, com teardown por ID. O
              <code>storageState</code> acelera autenticação ao reutilizar cookies e armazenamento, mas pode conter
              material sensível. Arquivos de estado devem ficar fora do Git, ter validade controlada e nunca ser
              tratados como credencial permanente.
            </p>
            <div className="article-metrics" aria-label="Controles para isolamento de testes">
              <div><span>Navegador</span><strong>Um contexto limpo por teste</strong><p>Evita dependência de cookies, sessão e navegação anterior.</p></div>
              <div><span>Backend</span><strong>Recurso único por execução</strong><p>Impede colisões entre workers e pipelines simultâneos.</p></div>
              <div><span>Autenticação</span><strong>Estado protegido e renovável</strong><p>Reduz login repetido sem versionar segredos.</p></div>
              <div><span>Teardown</span><strong>Limpeza pelo ID criado</strong><p>Remove somente o recurso pertencente ao cenário.</p></div>
            </div>
          </section>

          <section id="web-api">
            <span className="article-section-icon"><Network aria-hidden="true" /></span>
            <p className="article-eyebrow">INTEGRAÇÃO WEB E API</p>
            <h2>Prepare por API, percorra pela interface e confirme o efeito</h2>
            <p>
              O fixture <code>request</code> fornece um APIRequestContext isolado para testar serviços, criar
              pré-condições e validar pós-condições. Essa combinação reduz o tempo gasto navegando por telas que não
              fazem parte do objetivo do cenário. A interface continua responsável por demonstrar a experiência do
              usuário; a API confirma regras e efeitos com maior precisão.
            </p>
            <p>
              Interceptação com <code>page.route()</code> e HAR é útil para dependências indisponíveis, estados difíceis
              ou testes determinísticos de frontend. Um mock precisa ser declarado como tal: ele prova o comportamento
              do cliente diante de um contrato simulado, não a integração real com o backend.
            </p>
            <pre><code>{`test('pedido criado por API aparece no histórico', async ({ page, request }) => {
  const response = await request.post('/api/orders', {
    data: { productId: 'qa-product', quantity: 1 },
  })
  expect(response.ok()).toBeTruthy()
  const order = await response.json()

  await page.goto('/orders')
  await expect(page.getByRole('row', { name: new RegExp(order.id) }))
    .toBeVisible()
})`}</code></pre>
          </section>

          <section id="cross-browser">
            <span className="article-section-icon"><PanelsTopLeft aria-hidden="true" /></span>
            <p className="article-eyebrow">COBERTURA DE PLATAFORMA</p>
            <h2>Projects transformam compatibilidade em configuração explícita</h2>
            <p>
              Projects executam a mesma suíte com configurações diferentes: Chromium, Firefox, WebKit, canais
              específicos, dispositivos emulados, ambientes, estados autenticados e políticas de retry. Isso cria uma
              matriz rastreável sem duplicar specs. A matriz deve refletir tráfego, criticidade e suporte oficial do
              produto; executar tudo em todos os navegadores sem prioridade apenas aumenta custo e ruído.
            </p>
            <p>
              Emulação mobile altera viewport, user agent e parâmetros do dispositivo, mas não substitui validação em
              aparelho físico nem automação nativa com Appium. Recursos de hardware, WebViews, notificações e
              comportamento específico do sistema operacional exigem estratégia própria.
            </p>
            <pre><code>{`projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'mobile-web', use: { ...devices['Pixel 7'] } },
]`}</code></pre>
          </section>

          <section id="paralelismo">
            <span className="article-section-icon"><Split aria-hidden="true" /></span>
            <p className="article-eyebrow">ESCALA DE EXECUÇÃO</p>
            <h2>Workers aceleram somente testes que já são independentes</h2>
            <p>
              Playwright executa arquivos em paralelo por padrão, usando processos workers independentes. Testes do
              mesmo arquivo permanecem sequenciais por padrão, a menos que o modo paralelo seja habilitado. Aumentar
              workers antes de separar dados, contas e serviços apenas converte dependências ocultas em flakiness.
            </p>
            <p>
              Sharding distribui a suíte entre jobs ou máquinas. Com <code>fullyParallel</code>, a divisão tende a ser
              mais equilibrada no nível de testes; sem isso, a distribuição ocorre por arquivos. O ganho deve ser
              medido junto com tempo de provisionamento, limites do ambiente, rate limiting e custo de artefatos.
            </p>
            <div className="article-flow" aria-label="Evolução segura da execução paralela">
              <span>Isolamento<strong>Dados e contas independentes</strong></span>
              <span>Workers<strong>Paralelismo na mesma máquina</strong></span>
              <span>Shards<strong>Distribuição entre jobs</strong></span>
              <span>Métricas<strong>Tempo, custo e estabilidade</strong></span>
            </div>
            <pre><code>{`# Quatro partes independentes da suíte
npx playwright test --shard=1/4
npx playwright test --shard=2/4
npx playwright test --shard=3/4
npx playwright test --shard=4/4`}</code></pre>
          </section>

          <section id="evidencias">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">OBSERVABILIDADE E DEBUGGING</p>
            <h2>Trace Viewer transforma falha remota em investigação reproduzível</h2>
            <p>
              Um trace registra ações, snapshots do DOM, rede, console, erros e estado da página ao longo do teste. No
              CI, <code>on-first-retry</code> equilibra custo e evidência; <code>retain-on-failure</code> é útil quando não
              há retries. Gravar trace, vídeo e screenshot para toda execução pode aumentar duração e armazenamento sem
              melhorar a decisão.
            </p>
            <p>
              Retries ajudam a classificar resultados inconsistentes, mas um teste que passa somente na repetição não
              está saudável. A investigação deve localizar o primeiro erro, reproduzir isoladamente e em paralelo,
              confrontar DOM, requests, console, autenticação e dados, e então corrigir a causa sem enfraquecer a
              assertion.
            </p>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Evidência</th><th>Responde</th><th>Uso recomendado</th></tr></thead>
                <tbody>
                  <tr><td>Trace</td><td>O que ocorreu antes e durante a falha?</td><td>Primeiro retry ou falha retida</td></tr>
                  <tr><td>Screenshot</td><td>Qual estado visual ficou aparente?</td><td>Falhas e checkpoints relevantes</td></tr>
                  <tr><td>Vídeo</td><td>Como a jornada evoluiu no tempo?</td><td>Fluxos difíceis de reproduzir</td></tr>
                  <tr><td>HTML report</td><td>Qual projeto, duração e resultado?</td><td>Resumo técnico da execução</td></tr>
                </tbody>
              </table>
            </div>
            <pre><code>{`use: {
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
}`}</code></pre>
          </section>

          <section id="qualidade-ampliada">
            <span className="article-section-icon"><ShieldCheck aria-hidden="true" /></span>
            <p className="article-eyebrow">REQUISITOS NÃO FUNCIONAIS</p>
            <h2>Playwright amplia a cobertura, mas não substitui ferramentas especializadas</h2>
            <p>
              Visual testing compara screenshots com baselines e detecta regressões de layout, desde que sistema
              operacional, browser, fontes, animações e dados sejam reproduzíveis. Tolerâncias devem nascer de ruído
              conhecido, nunca ser ampliadas apenas para fazer o teste passar.
            </p>
            <div className="article-advanced-grid">
              <article className="article-advanced-card security">
                <span className="article-advanced-label"><ShieldCheck aria-hidden="true" />Acessibilidade e segurança</span>
                <h3>Automação apoia auditoria, mas não representa toda a experiência nem um pentest</h3>
                <p>
                  Locators por role e label incentivam semântica, e bibliotecas como axe-core podem encontrar violações
                  automatizáveis. Revisão por teclado, leitor de tela e avaliação humana continuam necessárias. Da mesma
                  forma, cenários negativos ajudam a validar autorização e mensagens, mas não substituem análise de
                  segurança, SAST, DAST ou pentest autorizado.
                </p>
              </article>
              <article className="article-advanced-card performance">
                <span className="article-advanced-label"><Gauge aria-hidden="true" />Performance e experiência</span>
                <h3>Tempo de uma jornada E2E não é teste de carga</h3>
                <p>
                  Playwright pode coletar métricas do navegador e identificar regressões percebidas em uma jornada.
                  Lighthouse é mais adequado para auditorias de laboratório e k6 ou JMeter para carga, stress, spike e
                  soak. Cada ferramenta responde a uma pergunta distinta e precisa de baseline e critérios próprios.
                </p>
              </article>
            </div>
            <div className="article-requirement-flow" aria-label="Cobertura complementar de qualidade">
              <span><strong>Visual</strong>Baselines estáveis com <code>toHaveScreenshot</code></span>
              <span><strong>Acessibilidade</strong>Automação, teclado e avaliação humana</span>
              <span><strong>Performance</strong>Lighthouse para página e k6 para capacidade</span>
              <span><strong>Segurança</strong>Controles funcionais mais análise especializada</span>
            </div>
          </section>

          <section id="pipeline">
            <span className="article-section-icon"><GitBranch aria-hidden="true" /></span>
            <p className="article-eyebrow">CI/CD E GOVERNANÇA</p>
            <h2>O pipeline deve entregar confiança antes de entregar volume</h2>
            <p>
              No CI, dependências devem ser instaladas de forma determinística com <code>npm ci</code>, seguidas pelos
              browsers e dependências do Playwright. Em runners restritos, começar com um worker favorece
              reprodutibilidade; quando a suíte estiver isolada, sharding entre jobs costuma escalar melhor do que
              elevar indiscriminadamente a concorrência em uma única máquina.
            </p>
            <p>
              Um quality gate profissional diferencia falha de produto, ambiente, dado e teste. Smoke tests protegem
              pull requests; regressão crítica acompanha promoção; cobertura cross-browser ampliada pode rodar por
              agendamento. Artefatos precisam de retenção definida, responsável pela triagem e proteção contra dados
              sensíveis em traces, screenshots, vídeos e logs.
            </p>
            <div className="article-flow" aria-label="Fluxo de qualidade no pipeline">
              <span>Pull request<strong>Lint, tipos e smoke</strong></span>
              <span>Integração<strong>Web, API e contratos</strong></span>
              <span>Promoção<strong>Jornadas críticas</strong></span>
              <span>Agendado<strong>Matriz e regressão ampla</strong></span>
            </div>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Executar gates compatíveis com o risco da mudança</li>
              <li><Check aria-hidden="true" />Publicar report e trace como artefatos de diagnóstico</li>
              <li><Check aria-hidden="true" />Tratar flaky test como dívida com owner e prazo</li>
              <li><Check aria-hidden="true" />Medir confiabilidade, duração e cobertura crítica</li>
              <li><Check aria-hidden="true" />Revisar retries e quarentena de forma auditável</li>
              <li><Check aria-hidden="true" />Não armazenar tokens ou dados pessoais em evidências</li>
            </ul>
            <blockquote>
              Uma suíte madura não é a que executa mais testes; é a que transforma risco em evidência clara no tempo
              necessário para decidir uma entrega.
            </blockquote>
          </section>

          <section id="referencias-playwright" className="article-references">
            <span className="article-section-icon"><TestTube2 aria-hidden="true" /></span>
            <p className="article-eyebrow">DOCUMENTAÇÃO TÉCNICA</p>
            <h2>Referências oficiais</h2>
            <p>
              As capacidades e recomendações deste guia foram confrontadas com a documentação oficial do Playwright.
              Consulte as fontes para configuração detalhada e alterações entre versões.
            </p>
            <div className="article-reference-list">
              <a href="https://playwright.dev/docs/best-practices" target="_blank" rel="noreferrer"><span><strong>Boas práticas</strong>Isolamento, locators e organização de testes</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/locators" target="_blank" rel="noreferrer"><span><strong>Locators</strong>Semântica, strictness e composição</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/actionability" target="_blank" rel="noreferrer"><span><strong>Auto-waiting</strong>Actionability checks e assertions</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/test-fixtures" target="_blank" rel="noreferrer"><span><strong>Fixtures</strong>Lifecycle, tipagem e escopos</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/auth" target="_blank" rel="noreferrer"><span><strong>Autenticação</strong>Storage state e estratégias de sessão</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/api-testing" target="_blank" rel="noreferrer"><span><strong>API testing</strong>Precondições, pós-condições e contratos</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/test-projects" target="_blank" rel="noreferrer"><span><strong>Projects</strong>Browsers, dispositivos e configurações</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/test-sharding" target="_blank" rel="noreferrer"><span><strong>Paralelismo e sharding</strong>Distribuição e escala da suíte</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/trace-viewer-intro" target="_blank" rel="noreferrer"><span><strong>Trace Viewer</strong>Diagnóstico de falhas e evidências</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/test-snapshots" target="_blank" rel="noreferrer"><span><strong>Visual comparisons</strong>Baselines e screenshots</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/accessibility-testing" target="_blank" rel="noreferrer"><span><strong>Acessibilidade</strong>Integração com análise automatizada</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://playwright.dev/docs/ci" target="_blank" rel="noreferrer"><span><strong>Continuous Integration</strong>Execução em pipelines e runners</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
