import { ArrowRight, CircleCheck, LoaderCircle, Play, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiJunit5, SiSelenium } from "react-icons/si";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

const testRunnerRows = [
  {
    label: "JUnit test",
    command: "LoginFlowTest.shouldAuthenticateUser()",
    Icon: SiJunit5,
    steps: ["Build", "Execute", "Assert", "Passed"],
  },
  {
    label: "API assert",
    command: "GET /api/customers/{id}",
    Icon: Terminal,
    steps: ["Request", "Schema", "Status", "200 OK"],
  },
  {
    label: "UI flow",
    command: "CheckoutPage.submitOrder()",
    Icon: Play,
    steps: ["Open", "Action", "Verify", "OK"],
  },
] as const;

const testRunnerStepCount = testRunnerRows.reduce((total, row) => total + row.steps.length, 0);
const testRunnerPauseSteps = 3;

export function Home() {
  const [runnerStep, setRunnerStep] = useState(0);
  const typedRole = useTypewriter(profile.typedRoles, {
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1100,
  });

  useEffect(() => {
    const runnerTimer = window.setInterval(() => {
      setRunnerStep((currentStep) => (currentStep + 1) % (testRunnerStepCount + testRunnerPauseSteps));
    }, 1450);

    return () => window.clearInterval(runnerTimer);
  }, []);

  let stepCursor = 0;
  const runnerProgress = Math.min((runnerStep / testRunnerStepCount) * 100, 100);
  const completedSuites =
    runnerStep >= testRunnerStepCount
      ? testRunnerRows.length
      : testRunnerRows.reduce((total, row, index) => {
          const rowStart = testRunnerRows
            .slice(0, index)
            .reduce((stepTotal, currentRow) => stepTotal + currentRow.steps.length, 0);

          return runnerStep >= rowStart + row.steps.length ? total + 1 : total;
        }, 0);
  const completedAssertions = Math.min(runnerStep, testRunnerStepCount);
  const elapsedTime = Math.min(0.4 + runnerStep * 0.23, 3.2).toFixed(1);

  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h3>Bem-vindo, eu sou</h3>
        <h1>{profile.name}.</h1>
        <h3>
          <span className="multiple-text" aria-live="polite">
            {typedRole}
          </span>
        </h3>

        <p className="whitespace-nowrap">{profile.intro}</p>

        <div className="home-actions" aria-label="Ações principais">
          <a className="home-action-primary" href="#contact">
            Conectar comigo
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="home-visual"
        aria-label="Painel visual de qualidade, automação e UX"
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <div className="home-visual-frame">
          <div className="home-visual-screen">
            <div className="home-visual-focus">
              <SiSelenium aria-hidden="true" />
              <div>
                <span>Selenium WebDriver</span>
                <strong>JUnit Suite</strong>
              </div>
            </div>

            <div className="home-status-list">
              {testRunnerRows.map(({ label, command, Icon, steps }) => {
                const rowStart = stepCursor;
                const activeStep = runnerStep - rowStart;
                const rowState =
                  runnerStep >= testRunnerStepCount
                    ? "complete"
                    : activeStep < 0
                      ? "pending"
                      : activeStep >= steps.length
                        ? "complete"
                        : "running";
                const currentStepIndex = Math.min(Math.max(activeStep, 0), steps.length - 1);

                stepCursor += steps.length;

                return (
                  <div key={label} className={`home-status-row home-status-row-${rowState}`}>
                    <span className={`home-status-icon home-status-icon-${rowState}`} aria-hidden="true">
                      <Icon />
                      <span className="home-status-mark">
                        {rowState === "running" ? <LoaderCircle /> : null}
                        {rowState === "complete" ? <CircleCheck /> : null}
                      </span>
                    </span>
                    <span className="home-status-label">
                      <span className="home-status-title">{label}</span>
                      <small>{command}</small>
                    </span>
                    <strong className="home-test-flow">
                      {steps.map((step, stepIndex) => {
                        const stepState =
                          rowState === "complete" || (rowState === "running" && stepIndex < currentStepIndex)
                            ? "done"
                            : rowState === "running" && stepIndex === currentStepIndex
                              ? "running"
                              : "pending";

                        return (
                          <span className="home-test-flow-part" key={step}>
                            <span className={`home-test-token home-test-token-${stepState}`}>
                              {step}
                              {stepState === "running" ? <LoaderCircle className="home-test-loader" /> : null}
                              {stepState === "done" ? <CircleCheck className="home-test-check" /> : null}
                            </span>
                            {stepIndex < steps.length - 1 ? (
                              <ArrowRight
                                className={`home-test-arrow ${
                                  rowState === "complete" || stepIndex < currentStepIndex ? "home-test-arrow-active" : ""
                                }`}
                                aria-hidden="true"
                              />
                            ) : null}
                          </span>
                        );
                      })}
                    </strong>
                  </div>
                );
              })}
            </div>

            <div className="home-run-summary" aria-label="Resumo da execução da suíte">
              <div className="home-run-summary-head">
                <span>Run summary</span>
                <strong>{runnerProgress >= 100 ? "Suite passed" : "Running suite"}</strong>
              </div>
              <div className="home-run-progress" aria-hidden="true">
                <span style={{ width: `${runnerProgress}%` }} />
              </div>
              <div className="home-run-metrics">
                <span>
                  <strong>{completedSuites}/3</strong>
                  suites
                </span>
                <span>
                  <strong>{completedAssertions}/12</strong>
                  assertions
                </span>
                <span>
                  <strong>0</strong>
                  failures
                </span>
                <span>
                  <strong>{elapsedTime}s</strong>
                  time
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
