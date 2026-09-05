import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, CircleGauge, CloudCog, Database, FileChartColumn, Gauge, Globe2, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import { SiCypress } from "react-icons/si";

const articleSections = [
  { id: "decisao", label: "Decisão de negócio" },
  { id: "web-e-api", label: "Arquitetura Web e API" },
  { id: "dados-e-isolamento", label: "Engenharia de dados" },
  { id: "relatorios", label: "Métricas e relatórios" },
  { id: "pipeline", label: "Quality gates no CI/CD" },
  { id: "requisitos-avancados", label: "Requisitos avançados" },
  { id: "governanca", label: "Governança e limites" },
  { id: "referencias", label: "Referências" },
];

export function CypressArticle() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Cypress na Engenharia de Qualidade | Matheus Koyama";
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => { document.title = previousTitle; };
  }, []);

  return (
    <article className="cypress-article">
      <header className="article-hero">
        <a className="article-back" href="#home"><ArrowLeft aria-hidden="true" />Voltar à página principal</a>
        <div className="article-heading">
          <span className="article-logo"><SiCypress aria-hidden="true" /></span>
          <div>
            <span className="article-category">Cypress</span>
            <h1>Cypress na engenharia de qualidade</h1>
          </div>
        </div>
        <p className="article-lead">
          Uma análise prática sobre como transformar automação Web e API em informação confiável para engenharia,
          produto e negócio, da primeira execução local ao quality gate em produção.
        </p>
        <div className="article-pillars" aria-label="Pilares abordados no artigo">
          <span><Globe2 aria-hidden="true" />Testes Web</span>
          <span><Network aria-hidden="true" />APIs e rede</span>
          <span><CloudCog aria-hidden="true" />Execução contínua</span>
        </div>
        <div className="article-impact" aria-label="Impactos do Cypress na qualidade">
          <div><strong>Risco controlado</strong><span>Regressões críticas identificadas antes da promoção</span></div>
          <div><strong>Feedback acionável</strong><span>Falhas acompanhadas de contexto, rede e evidências</span></div>
          <div><strong>Decisão orientada por dados</strong><span>Métricas que mostram saúde, tendência e confiabilidade</span></div>
        </div>
      </header>

      <div className="article-layout">
        <aside className="article-index" aria-label="Neste artigo">
          <strong>Neste artigo</strong>
          <nav>
            {articleSections.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        </aside>

        <div className="article-body">
          <section id="decisao">
            <span className="article-section-icon"><CircleGauge aria-hidden="true" /></span>
            <p className="article-eyebrow">DECISÃO DE NEGÓCIO</p>
            <h2>O valor do Cypress não está na quantidade de testes</h2>
            <p>
              Empresas não adotam automação para acumular cenários verdes. Elas adotam automação para reduzir a
              incerteza de cada entrega. Nesse contexto, Cypress é relevante porque aproxima o teste do ambiente em
              que a aplicação Web realmente opera: navegador, DOM, chamadas HTTP, armazenamento, autenticação e
              comportamento assíncrono passam a ser observados em uma única experiência de desenvolvimento.
            </p>
            <p>
              Sua arquitetura oferece histórico de comandos, inspeção visual e mensagens contextualizadas. A
              retry-ability reexecuta consultas e assertions até que a condição seja atendida ou o timeout termine,
              reduzindo a dependência de esperas fixas. Isso não elimina instabilidade automaticamente; cria uma base
              melhor para distinguir sincronização legítima de um defeito real no produto ou no teste.
            </p>
            <p>
              A decisão de adoção deve responder a três perguntas: quais jornadas representam maior risco financeiro
              ou reputacional, quanto tempo o time perde diagnosticando regressões e quais evidências são necessárias
              para liberar uma versão. A ferramenta gera retorno quando encurta esse ciclo de decisão, não quando
              simplesmente aumenta a contagem de casos automatizados.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Proteção das jornadas que sustentam receita e operação</li>
              <li><Check aria-hidden="true" />Diagnóstico com histórico de comandos e evidências</li>
              <li><Check aria-hidden="true" />Linguagem compartilhada entre QA e desenvolvimento</li>
              <li><Check aria-hidden="true" />Execução reproduzível no computador local e no pipeline</li>
            </ul>
          </section>

          <section id="web-e-api">
            <span className="article-section-icon"><Network aria-hidden="true" /></span>
            <p className="article-eyebrow">ARQUITETURA DE AUTOMAÇÃO</p>
            <h2>Web e API devem contar a mesma história</h2>
            <p>
              Uma suíte madura não trata interface e serviço como projetos desconectados. A jornada Web verifica o que
              o usuário percebe; a API prepara pré-condições, valida regras e confirma efeitos que não precisam ser
              repetidos visualmente. Essa divisão reduz tempo de execução e mantém o E2E concentrado no comportamento
              que somente a integração completa consegue provar.
            </p>
            <p>
              <code>cy.request()</code> executa chamadas pelo processo Node do Cypress e é apropriado para autenticação,
              seed de dados e validação direta de endpoints. <code>cy.intercept()</code> atua sobre o tráfego iniciado
              pela aplicação no navegador: observa, aguarda, altera ou simula requests e responses. Confundir essas
              responsabilidades produz testes que passam sem demonstrar a integração que deveriam proteger.
            </p>
            <div className="article-callout">
              <strong>Princípio de projeto</strong>
              <p>Prepare por API, percorra pela interface e confirme pela camada que representa a regra de negócio.</p>
            </div>
            <pre><code>{`cy.intercept('GET', '/api/customers').as('customers')
cy.visit('/dashboard')
cy.wait('@customers').then(({ response }) => {
  expect(response?.statusCode).to.eq(200)
  expect(response?.body).to.have.property('items')
})
cy.get('[data-cy="customer-list"]').should('be.visible')`}</code></pre>
            <p>
              O exemplo valida transporte, estrutura mínima do payload e reflexo visual. O seletor dedicado desacopla o
              teste de classes de estilo, enquanto o alias de rede substitui uma espera arbitrária por um evento
              observável. Esse desenho melhora legibilidade, precisão do diagnóstico e resistência a refatorações.
            </p>
          </section>

          <section id="dados-e-isolamento">
            <span className="article-section-icon"><Database aria-hidden="true" /></span>
            <p className="article-eyebrow">CONFIABILIDADE</p>
            <h2>Engenharia de dados é parte da engenharia de testes</h2>
            <p>
              Grande parte das suítes consideradas “instáveis” sofre, na verdade, de dados imprevisíveis. Um cenário
              que depende do horário, da ordem de execução ou de um cadastro compartilhado não possui pré-condição
              controlada. Cada teste deve criar, localizar ou restaurar seu contexto por API, fixture, task ou rotina
              autorizada de banco de dados, com identificadores únicos e limpeza definida.
            </p>
            <p>
              Com test isolation habilitado, o Cypress limpa página, cookies, localStorage e sessionStorage entre
              testes E2E. IndexedDB exige atenção específica, pois não é automaticamente limpo. Esse detalhe importa
              em aplicações offline-first, PWAs e produtos que usam bancos no navegador: ignorá-lo pode criar
              dependência invisível entre cenários e diagnósticos contraditórios.
            </p>
            <p>
              Dados sensíveis nunca devem entrar no repositório, fixture, screenshot ou vídeo. Segredos pertencem ao
              gerenciador de credenciais do pipeline; massas devem ser sintéticas ou anonimizadas; logs precisam de
              mascaramento; e a retenção de artefatos deve respeitar a política de segurança da organização. Qualidade
              e proteção de dados são requisitos do mesmo sistema.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Uma fonte de verdade para criação e limpeza de massas</li>
              <li><Check aria-hidden="true" />Identificadores únicos para permitir paralelização</li>
              <li><Check aria-hidden="true" />Segredos injetados pelo ambiente, nunca versionados</li>
              <li><Check aria-hidden="true" />Política explícita para logs, vídeos e screenshots</li>
            </ul>
          </section>

          <section id="relatorios">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">OBSERVABILIDADE DA QUALIDADE</p>
            <h2>Relatórios precisam orientar ação, não decorar dashboards</h2>
            <p>
              Um relatório profissional responde cinco perguntas: o que falhou, em qual versão, em qual ambiente, qual
              jornada foi afetada e quem precisa agir. Screenshots, vídeos, traces de rede, logs e metadados do commit
              formam a evidência operacional. Sem correlação entre esses elementos, o dashboard informa que existe um
              problema, mas transfere todo o custo de investigação para o time.
            </p>
            <p>
              Cypress Cloud oferece análise de uso, resultados, configuração, execução e flaky tests; em planos que
              incluem Enterprise Reporting, os dados também podem ser extraídos para plataformas analíticas. Allure e
              Mochawesome são alternativas para relatórios publicados como artefatos. A escolha deve considerar
              histórico, retenção, governança, custo e integração, não apenas a aparência do HTML.
            </p>
            <div className="article-metrics" aria-label="Indicadores recomendados para automação">
              <div><span>Confiabilidade</span><strong>Passes consistentes / execuções totais</strong><p>Mostra se a suíte é confiável o bastante para apoiar uma decisão.</p></div>
              <div><span>Flake rate</span><strong>Resultados inconsistentes / testes executados</strong><p>Expõe ruído que consome tempo e enfraquece o quality gate.</p></div>
              <div><span>Tempo de feedback</span><strong>Commit até resultado acionável</strong><p>Mede a velocidade real da proteção, não só a duração do runner.</p></div>
              <div><span>Cobertura crítica</span><strong>Jornadas protegidas / jornadas prioritárias</strong><p>Relaciona automação ao risco do produto e ao impacto de negócio.</p></div>
            </div>
            <div className="article-table-wrap">
              <table className="article-table">
                <thead><tr><th>Audiência</th><th>O que precisa enxergar</th><th>Ação esperada</th></tr></thead>
                <tbody>
                  <tr><td>Engenharia</td><td>Stack trace, request, response, screenshot e commit</td><td>Diagnosticar e corrigir</td></tr>
                  <tr><td>QA / SDET</td><td>Flake, duração, recorrência e cobertura da jornada</td><td>Manter a suíte saudável</td></tr>
                  <tr><td>Produto</td><td>Risco por funcionalidade e impacto da regressão</td><td>Priorizar e decidir a entrega</td></tr>
                  <tr><td>Liderança</td><td>Tendência, confiabilidade e tempo de feedback</td><td>Direcionar investimento</td></tr>
                </tbody>
              </table>
            </div>
            <p className="article-note">
              As fórmulas acima são um modelo de gestão, não metas universais. O baseline deve ser calculado com dados
              reais do produto; só então o time define limites, acompanha tendência e mede evolução.
            </p>
          </section>

          <section id="pipeline">
            <span className="article-section-icon"><CloudCog aria-hidden="true" /></span>
            <p className="article-eyebrow">ENTREGA CONTÍNUA</p>
            <h2>Quality gates devem refletir risco e criticidade</h2>
            <p>
              Executar todos os testes em toda mudança parece rigoroso, mas frequentemente gera filas longas e feedback
              tardio. Uma estratégia eficiente distribui proteção por camadas: validações estáticas e componentes no
              início, smoke tests em pull requests, regressão de jornadas críticas antes da promoção e cobertura ampla
              em execução programada. O gate bloqueia com base em impacto conhecido, não em volume indiscriminado.
            </p>
            <p>
              Paralelização por spec, cache de dependências, balanceamento pela duração histórica e execução seletiva
              ajudam a reduzir o tempo de retorno. Retries podem revelar flakiness, mas não devem converter uma falha
              intermitente em sucesso silencioso. O resultado precisa registrar as tentativas e abrir trabalho de
              estabilização quando o padrão se repete.
            </p>
            <div className="article-flow" aria-label="Fluxo recomendado de CI/CD">
              <span>Pull request<strong>Smoke + API crítica</strong></span>
              <span>Homologação<strong>Jornadas E2E</strong></span>
              <span>Quality gate<strong>Risco + evidências</strong></span>
              <span>Produção<strong>Monitoramento</strong></span>
            </div>
            <p>
              Integrado a GitHub Actions, GitLab CI, Jenkins ou Azure DevOps, Cypress passa a comunicar risco antes da
              mudança chegar ao cliente. Um gate confiável exige ownership: cada falha precisa de responsável, prazo
              de triagem e critério documentado para bloqueio, quarentena ou correção.
            </p>
          </section>

          <section id="requisitos-avancados">
            <span className="article-section-icon"><ShieldCheck aria-hidden="true" /></span>
            <p className="article-eyebrow">REQUISITOS AVANÇADOS PARA QE E SDET</p>
            <h2>Qualidade também protege dados, segurança e desempenho</h2>
            <p>
              Uma estratégia de automação torna-se incompleta quando valida apenas o caminho feliz. Sistemas reais
              operam sob entradas malformadas, picos de acesso, integrações lentas e regras de privacidade. O papel de
              Quality Engineering é transformar esses riscos em critérios verificáveis, usando Cypress onde ele oferece
              boa observabilidade e integrando ferramentas especializadas quando o problema exige outra abordagem.
            </p>

            <div className="article-advanced-grid">
              <article className="article-advanced-card security">
                <span className="article-advanced-label"><LockKeyhole aria-hidden="true" />Segurança e privacidade</span>
                <h3>Teste funcional não substitui segurança, mas deve revelar exposições básicas</h3>
                <p>
                  Fixtures e massas não devem conter CPF, e-mail corporativo, tokens ou qualquer dado pessoal real.
                  Use dados sintéticos ou mascarados e aplique a mesma proteção a screenshots, vídeos, logs e relatórios,
                  pois esses artefatos também podem vazar informação durante o pipeline.
                </p>
                <p>
                  Chaves, senhas e tokens pertencem ao cofre de segredos do CI/CD e entram por variáveis de ambiente.
                  O arquivo <code>.env.example</code> documenta somente nomes e formatos esperados, nunca valores válidos.
                  Essa separação reduz exposição acidental e facilita rotação de credenciais por ambiente.
                </p>
                <p>
                  Cenários automatizados podem enviar entradas malformadas e strings inofensivas que representem
                  tentativas de XSS ou SQL Injection, confirmando validação, escaping, mensagens e códigos de resposta.
                  A cobertura aprofundada deve seguir o OWASP WSTG e ser executada com DAST, revisão de código e testes
                  de segurança autorizados. Cypress complementa esse trabalho; não substitui pentest.
                </p>
                <ul className="article-checklist compact">
                  <li><Check aria-hidden="true" />Massas sintéticas e artefatos sem dados pessoais</li>
                  <li><Check aria-hidden="true" />Segredos fora do código e com rotação definida</li>
                  <li><Check aria-hidden="true" />Cenários negativos na interface e diretamente na API</li>
                  <li><Check aria-hidden="true" />DAST separado, autorizado e rastreável no pipeline</li>
                </ul>
              </article>

              <article className="article-advanced-card performance">
                <span className="article-advanced-label"><Gauge aria-hidden="true" />Performance e capacidade</span>
                <h3>Desempenho precisa de baseline, percentis e contexto de usuário</h3>
                <p>
                  Lighthouse fornece uma auditoria de laboratório útil para impedir regressões óbvias. Para experiência
                  real, acompanhe os Core Web Vitals no percentil 75, separados entre mobile e desktop: LCP de até 2,5 s,
                  INP de até 200 ms e CLS de até 0,1 representam a faixa considerada boa pela documentação do Chrome.
                </p>
                <p>
                  O resultado de laboratório não substitui telemetria de campo. Rede, dispositivo, cache e comportamento
                  do usuário alteram a experiência. O gate deve comparar a página com seu baseline e explicar qual
                  recurso regrediu, em vez de bloquear uma entrega apenas por uma nota agregada do Lighthouse.
                </p>
                <p>
                  Para APIs, k6 ou JMeter simulam concorrência e avaliam latência, throughput e taxa de erro. Um smoke de
                  10 usuários virtuais por 30 segundos com <code>p(95) &lt; 800 ms</code> e erros abaixo de 1% é um ponto
                  inicial demonstrativo, não um SLA universal. O limite correto nasce do volume esperado, da capacidade
                  do ambiente e do objetivo de nível de serviço acordado com o negócio.
                </p>
                <pre><code>{`export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
}`}</code></pre>
              </article>
            </div>

            <div className="article-requirement-flow" aria-label="Integração de requisitos avançados">
              <span><strong>Funcional</strong>Cypress valida jornada e integração</span>
              <span><strong>Segurança</strong>OWASP e DAST exploram superfícies de ataque</span>
              <span><strong>Performance</strong>Lighthouse e k6 medem experiência e capacidade</span>
              <span><strong>Decisão</strong>Relatórios consolidam risco e evidência</span>
            </div>
          </section>

          <section id="governanca">
            <span className="article-section-icon"><ShieldCheck aria-hidden="true" /></span>
            <p className="article-eyebrow">GOVERNANÇA</p>
            <h2>Uma suíte sustentável exige limites claros</h2>
            <p>
              Cypress não substitui uma estratégia de qualidade. Testes unitários e de componente localizam defeitos
              com rapidez; testes de contrato protegem acordos entre serviços; ferramentas especializadas cobrem carga,
              segurança, acessibilidade e aplicações móveis nativas. O E2E deve provar integrações e jornadas de alto
              valor, sem reproduzir em interface cada combinação já validada em camadas mais baratas.
            </p>
            <p>
              A arquitetura precisa de convenções pequenas e explícitas: estrutura por domínio, seletores estáveis,
              comandos que expressem intenção, configuração por ambiente e revisão de código. Abstrações excessivas
              escondem o comportamento; repetição descontrolada encarece manutenção. O ponto de equilíbrio é tornar o
              cenário compreensível para quem investiga uma falha meses depois de sua criação.
            </p>
            <ul className="article-checklist">
              <li><Check aria-hidden="true" />Organizar specs por domínio e jornada, não por página</li>
              <li><Check aria-hidden="true" />Usar atributos de teste e evitar seletores de apresentação</li>
              <li><Check aria-hidden="true" />Substituir esperas fixas por condições observáveis</li>
              <li><Check aria-hidden="true" />Tratar flaky tests como dívida com owner e prazo</li>
              <li><Check aria-hidden="true" />Revisar cobertura quando o risco do produto mudar</li>
              <li><Check aria-hidden="true" />Excluir cenários que não sustentam mais uma decisão</li>
            </ul>
            <blockquote>
              A maturidade de uma suíte não é medida pelo número de testes, mas pela qualidade das decisões que ela
              permite tomar com velocidade, contexto e confiança.
            </blockquote>
          </section>

          <section id="referencias" className="article-references">
            <span className="article-section-icon"><FileChartColumn aria-hidden="true" /></span>
            <p className="article-eyebrow">LEITURA TÉCNICA</p>
            <h2>Referências oficiais</h2>
            <p>
              As capacidades e recomendações técnicas deste artigo foram confrontadas com a documentação oficial.
              Consulte as fontes para detalhes de configuração, limitações e mudanças de versão.
            </p>
            <div className="article-reference-list">
              <a href="https://docs.cypress.io/app/core-concepts/retry-ability" target="_blank" rel="noreferrer"><span><strong>Retry-ability</strong>Consultas, assertions e sincronização</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://docs.cypress.io/app/core-concepts/test-isolation" target="_blank" rel="noreferrer"><span><strong>Test isolation</strong>Estado do navegador e independência</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://docs.cypress.io/app/guides/api-testing" target="_blank" rel="noreferrer"><span><strong>API testing</strong>Estratégias para suítes de serviços</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://docs.cypress.io/cloud/features/analytics/enterprise-reporting" target="_blank" rel="noreferrer"><span><strong>Enterprise Reporting</strong>Métricas, tendências e dados brutos</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/" target="_blank" rel="noreferrer"><span><strong>OWASP WSTG</strong>Validação de entrada e testes de segurança Web</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer"><span><strong>Core Web Vitals</strong>LCP, INP e CLS para experiência de usuário</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://grafana.com/docs/k6/latest/using-k6/thresholds/" target="_blank" rel="noreferrer"><span><strong>Thresholds no k6</strong>Critérios de aprovação para performance</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
