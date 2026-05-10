import { ArrowRight, CircleCheck, LoaderCircle, Play, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { SiJunit5, SiSelenium } from "react-icons/si";

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
const qualityGates = [
  { value: "84%", label: "coverage" },
  { value: "REG", label: "pack" },
  { value: "0", label: "flaky" },
  { value: "PASS", label: "gate" },
];

type AutomationPanelProps = {
  className?: string;
};

export function AutomationPanel({ className = "" }: AutomationPanelProps) {
  const [runnerStep, setRunnerStep] = useState(0);

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
    <div className={`automation-panel ${className}`} aria-label="Painel visual de automação com JUnit">
      <div className="automation-panel-frame">
        <div className="automation-panel-screen">
          <div className="automation-panel-focus">
            <SiSelenium aria-hidden="true" />
            <div>
              <span>Selenium WebDriver</span>
              <strong>JUnit Suite</strong>
            </div>
            <em>CI ready</em>
          </div>

          <div className="automation-status-list">
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
                <div key={label} className={`automation-status-row automation-status-row-${rowState}`}>
                  <span className={`automation-status-icon automation-status-icon-${rowState}`} aria-hidden="true">
                    <Icon />
                    <span className="automation-status-mark">
                      {rowState === "running" ? <LoaderCircle /> : null}
                      {rowState === "complete" ? <CircleCheck /> : null}
                    </span>
                  </span>
                  <span className="automation-status-label">
                    <span className="automation-status-title">{label}</span>
                    <small>{command}</small>
                  </span>
                  <strong className="automation-test-flow">
                    {steps.map((step, stepIndex) => {
                      const stepState =
                        rowState === "complete" || (rowState === "running" && stepIndex < currentStepIndex)
                          ? "done"
                          : rowState === "running" && stepIndex === currentStepIndex
                            ? "running"
                            : "pending";

                      return (
                        <span className="automation-test-flow-part" key={step}>
                          <span className={`automation-test-token automation-test-token-${stepState}`}>
                            {step}
                            {stepState === "running" ? <LoaderCircle className="automation-test-loader" /> : null}
                            {stepState === "done" ? <CircleCheck className="automation-test-check" /> : null}
                          </span>
                          {stepIndex < steps.length - 1 ? (
                            <ArrowRight
                              className={`automation-test-arrow ${
                                rowState === "complete" || stepIndex < currentStepIndex
                                  ? "automation-test-arrow-active"
                                  : ""
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

          <div className="automation-run-summary" aria-label="Resumo da execução da suíte">
            <div className="automation-run-summary-head">
              <span>Run summary</span>
              <strong>{runnerProgress >= 100 ? "Suite passed" : "Running suite"}</strong>
            </div>
            <div className="automation-run-progress" aria-hidden="true">
              <span style={{ width: `${runnerProgress}%` }} />
            </div>
            <div className="automation-run-metrics">
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

          <div className="automation-quality-gates" aria-label="Quality gates da suíte">
            {qualityGates.map((gate) => (
              <span key={gate.label}>
                <strong>{gate.value}</strong>
                {gate.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
