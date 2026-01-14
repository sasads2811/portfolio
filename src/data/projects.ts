export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Document Service",
    description: "FastAPI service for document storage and import/export",
    tech: ["Python", "FastAPI", "MongoDB"],
    githubUrl: "https://github.com/yourname/project",
  },
];
