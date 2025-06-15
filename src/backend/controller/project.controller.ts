import { supabase } from "../connection";

export const getProjects = async (
  page: number,
  limit: number,
  q: string,
  orderBy: string = "created_at",
  ascending: boolean = false
) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  console.log({ q });

  let query = supabase
    .from("projects")
    .select("*", { count: "exact" })
    .order(orderBy, { ascending })
    .eq('status', 'active')
    .range(from, to);

  if (q && q.trim() !== "") {
    query = query.or(`title.ilike.%${q}%,description.ilike.%${q}%`);
  }

  // console.log({query})

  const { data, error, count } = await query;

  if (error) {
    // console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
    
  }

  return {
    projects: data || [],
    totalCount: count || 0,
    totalPages: count ? Math.ceil(count / limit) : 0,
    searchQuery: q,
  };
};
