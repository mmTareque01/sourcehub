import { supabase } from "../connection";
import { ProjectType } from "@/types/project";

export const createProject = async (projectData: ProjectType) => {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...projectData, status: "pending" }])
    .select(); // Optional: return the inserted record(s)

  if (error) {
    console.error("Error inserting project:", error.message);
    throw new Error("Failed to create project");
  }

  return data?.[0] || null; // Return the inserted project
};

export const createBulkProject = async (projectData: ProjectType[]) => {
  const { data, error } = await supabase
    .from("projects")
    .insert(projectData)
    .select(); // Optional: return the inserted record(s)

  if (error) {
    console.error("Error inserting project:", error.message);
    throw new Error("Failed to create project");
  }

  return data?.[0] || null; // Return the inserted project
};
