// import { ProjectType } from "../project";

export interface SubmitProjectFormProps
  extends Record<string, string | number | boolean> {
  //   bgImg: string;
  title: string;
  description: string;
  techStack?: string; // e.g., ['Next.js', 'Tailwind']
  tags?: string; // e.g., ['UI', 'Portfolio']
  links?: {
    github?: string;
    demo?: string;
    youtube?: string;
    web?: string;
    gitlab?: string;
  };
}
