export type SkillGroup = {
  id: string;
  label: string;
  comment: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "testing",
    label: "Test Automation",
    comment: "// end-to-end, regression & cross-browser",
    items: [
      "Playwright (TypeScript)",
      "End-to-End Testing",
      "UI Automation",
      "API Testing",
      "Regression Testing",
      "Cross-Browser Testing",
      "Schema Validation",
      "Pytest",
      "Testsigma",
      "Allure Reporting",
    ],
  },
  {
    id: "quality",
    label: "Quality Engineering",
    comment: "// process, triage & methodology",
    items: [
      "Manual Testing",
      "Debugging",
      "Root Cause Analysis",
      "Bug Reporting & Validation",
      "STLC",
      "SDLC",
      "Agile / Scrum",
    ],
  },
  {
    id: "cicd",
    label: "CI/CD & Pipeline Automation",
    comment: "// build, run, triage, repeat",
    items: [
      "GitHub Actions",
      "CI/CD Pipeline Integration & Maintenance",
      "Automated Test Execution",
      "Build Validation",
      "Pipeline Failure Triage",
    ],
  },
  {
    id: "platforms",
    label: "Platforms & Infrastructure",
    comment: "// where the tests actually run",
    items: ["Docker", "Kubernetes (Pods, Deployments, Services)", "Linux", "Git / GitHub"],
  },
  {
    id: "programming",
    label: "Programming",
    comment: "// scripting the automation layer",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "api",
    label: "API & Backend",
    comment: "// building and validating services",
    items: ["REST APIs", "Postman", "FastAPI", "Pydantic", "SQLAlchemy", "Request/Response Validation"],
  },
  {
    id: "ai",
    label: "AI/LLM-Assisted Automation",
    comment: "// applying LLMs to automation workflows",
    items: ["LangChain", "Prompt Engineering", "Few-Shot Prompting", "Structured Output Validation"],
  },
];
