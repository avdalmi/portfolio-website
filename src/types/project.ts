export interface Project {
  date?: string;
  description?: string;
  id?: number;
  links?: {
    frontendLink?: string | undefined;
    backendLink?: string | undefined;
    demoLink?: string | undefined;
  };
  location?: string;
  title?: string;
  type?: string;
  tech?: {
    frontend?: string[];
    backend?: string[];
  };
  readMe?: {
    userStories?: string[] | null;
    wireframes?: string | null;
    database?: string | null;
  };
}
