import { ProjectType } from "@/types/project";
import { supabase } from "../connection";


export const getProjectById = async (projectId: string): Promise<ProjectType> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Project not found");
  }

  return data as ProjectType;
};