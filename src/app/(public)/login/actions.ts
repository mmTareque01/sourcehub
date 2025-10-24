"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabse/server";

export async function login(formData: FormData) {
  const supabase = await createClient();


  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {


    console.error("Login error:", error.message);
    return { error: error.message }; // Return error instead of redirecting
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
