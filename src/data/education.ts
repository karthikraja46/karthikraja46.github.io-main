export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "BML Munjal University",
    location: "Gurugram, Haryana",
    start: "Sep 2021",
    end: "Jul 2025",
    detail: "CGPA: 7.77 / 10",
  },
];

// Roadmap for the "Currently Learning & Building" section.
// "done" = solid ground already covered on the job; "current" = actively deepening;
// "next" = the direction the automation practice is headed.
export const roadmap = [
  { label: "Manual Testing", status: "done" as const },
  { label: "STLC / SDLC", status: "done" as const },
  { label: "Python + SQL", status: "done" as const },
  { label: "Playwright + TypeScript", status: "current" as const },
  { label: "CI/CD Pipeline Design", status: "current" as const },
  { label: "Containerized Test Environments", status: "current" as const },
  { label: "Advanced Framework Architecture", status: "next" as const },
];
