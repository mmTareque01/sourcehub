export interface ProjectType extends Record<string, string | number | boolean> {
  [key: string]: unknown; // Add index signature
  id?: string;
  bgImg?: string;
  title: string;
  description: string;
  techStack?: string[]; // e.g., ['Next.js', 'Tailwind']
  tags?: string[]; // e.g., ['UI', 'Portfolio']
  created_at?: string;
  status?: string;
  links?: {
    github?: string;
    demo?: string;
    youtube?: string;
    web?: string;
    gitlab?: string;
  };
}
