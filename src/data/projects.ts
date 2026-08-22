export type Project = {
  id: string;
  title: string;
  tag: string;
  status: "prod" | "shipped" | "exploring";
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "playwright-framework",
    title: "Playwright + TypeScript Automation Framework",
    tag: "UI & regression automation",
    status: "prod",
    description:
      "A Page Object Model based UI automation framework built for end-to-end, regression, and cross-browser coverage of critical user journeys, wired into GitHub Actions for continuous execution.",
    problem:
      "Manual regression cycles were slow and inconsistent across browsers, and release validation depended heavily on repeated human execution of the same journeys.",
    solution:
      "Built and maintained a Playwright (TypeScript) suite using the Page Object Model, with reusable test utilities and fixtures, integrated directly into CI/CD so regression runs on every change instead of before every release.",
    features: [
      "Page Object Model with reusable, composable page components",
      "Cross-browser end-to-end and regression coverage",
      "GitHub Actions integration with parallel test execution",
      "Flaky-test triage that cut false-positive failures by 40%",
    ],
    stack: ["Playwright", "TypeScript", "Page Object Model", "GitHub Actions"],
    github: "https://github.com/karthikraja46",
  },
  {
    id: "rest-api-suite",
    title: "REST API Test Automation Suite",
    tag: "API & schema validation",
    status: "prod",
    description:
      "A structured API test suite covering 15+ REST endpoints with functional, negative, and edge-case coverage, backed by JSON Schema validation.",
    problem:
      "API regressions were surfacing late in the release cycle, and validation coverage across endpoints was inconsistent between functional and edge-case paths.",
    solution:
      "Automated request/response validation with Pytest and Postman, layering JSON Schema checks on top of functional tests so contract breaks and edge-case failures surface before release.",
    features: [
      "15+ endpoints covered across functional, negative, and edge-case scenarios",
      "JSON Schema validation for response contracts",
      "CI-integrated runs supporting regression and release validation",
      "Contributed to a 25% reduction in release regression issues",
    ],
    stack: ["Pytest", "Postman", "JSON Schema", "GitHub Actions"],
    github: "https://github.com/karthikraja46",
  },
  {
    id: "llm-extraction-pipeline",
    title: "LLM-Based Document Extraction Pipeline",
    tag: "AI/LLM-assisted automation",
    status: "shipped",
    description:
      "A LangChain-based pipeline that extracts structured data from unstructured documents using hierarchical chunking and few-shot prompting, feeding downstream analytics workflows.",
    problem:
      "Manual data extraction from documents was slowing down downstream analytics, with inconsistent output structure between runs.",
    solution:
      "Engineered a Python and LangChain pipeline with hierarchical chunking and few-shot prompt templates, enforcing structured schema validation so every extraction produces consistent, analytics-ready output.",
    features: [
      "Hierarchical chunking for long, unstructured documents",
      "Few-shot prompt templates for consistent extraction quality",
      "Structured schema validation on every model output",
      "Increased data ingestion efficiency by 25%",
    ],
    stack: ["LangChain", "Python", "Prompt Engineering", "Structured Output Validation"],
    github: "https://github.com/karthikraja46",
  },
  {
    id: "yolo-object-detection",
    title: "YOLO-Based Object Detection",
    tag: "Computer vision · independent project",
    status: "exploring",
    description:
      "An independent computer vision project training and evaluating YOLOv8/YOLO11 object detection models, with explainability layered in via Eigen-CAM.",
    problem:
      "Wanted hands-on depth in the model-training side of ML — data preparation, augmentation, and evaluation — beyond consuming pre-trained models.",
    solution:
      "Trained and evaluated YOLOv8 / YOLO11 models in PyTorch, using data augmentation to improve robustness, and applied Eigen-CAM to visualize what the model was attending to during detection.",
    features: [
      "Custom dataset preparation and augmentation",
      "Model training and evaluation with YOLOv8 / YOLO11",
      "Explainability via Eigen-CAM visualizations",
      "Built in PyTorch end-to-end",
    ],
    stack: ["YOLOv8", "YOLO11", "PyTorch", "Eigen-CAM", "Python"],
    github: "https://github.com/karthikraja46",
  },
];
