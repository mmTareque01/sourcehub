import { ProjectType } from "@/types/project";
import { supabase } from "../connection";

// Sample update function
export const updateProjectById = async (id: string, updatedData: ProjectType) => {
  const { data, error } = await supabase
    .from("projects") // replace with your table
    .update(updatedData) // fields to update
    .eq("id", id); // where id = your provided id

  if (error) {
    console.error("Error updating data:", error);
    throw new Error("Failed to update project");
  } else {
    console.log("Update successful:", data);
    return data;
  }
};
