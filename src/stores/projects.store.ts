import { PaginationParams } from "@/types/pagination";
import { ProjectType } from "@/types/project";
import { create } from "zustand";

interface ProjectState {
  projects: ProjectType[];
  project: ProjectType;
  setProject: (types: ProjectType) => void;
  setProjects: (types: ProjectType[]) => void;
  addProject: (type: ProjectType) => void;
  removeProject: (id: string) => void;
  updateProject: (type: ProjectType) => void;
  getProjectById: (id: string) => ProjectType | undefined;

  projectPagination: PaginationParams;
  setProjectPagination: (newsletterPagination: PaginationParams) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  project: {
    description: "",
    title: "",
    bgImg: "",
    created_at: "",
    id: "",
    links: {
      github: "",
    },
  },
  projectPagination: {} as PaginationParams,
  setProject: (types) => set({ project: types }),

  setProjects: (types) => set({ projects: types }),

  addProject: (type) =>
    set((state) => ({
      projects: [...state.projects, type],
    })),

  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((type) => type.id !== id),
    })),

  updateProject: (updatedType) =>
    set((state) => ({
      projects: state.projects.map((type) =>
        type.id === updatedType.id ? updatedType : type
      ),
    })),

  getProjectById: (id) => {
    console.log({ id });
    const state = get();
    const data = state.projects.find((type) => type.id === id);
    console.log({ state: state.projects });
    console.log({ data });
    return data; //state.projects.find((type) => type.id === id);
  },
  setProjectPagination: (pagination) => set({ projectPagination: pagination }),
}));
