import { ProjectType } from "@/types/project";
import { supabase } from "../connection";


export const getProjectBySlug = async (slug: string): Promise<ProjectType > => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq('status', 'active')
    .maybeSingle();

  if (error) {
    // return false;
    throw new Error(error?.message || "Project not found");
  }

  return data as ProjectType;
};
