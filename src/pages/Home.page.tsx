import Card from "@/components/Card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Wrapper from "@/components/Wrapper";
import { createClient } from "@supabase/supabase-js";
// import { db } from "@/libs/firebase";






export default async function HomePage({ page = 1 }: { page?: number }) {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")
  // const { data } = await supabase.from("projects").select();



  // const page = 1; // current page
  const pageSize = 2; // items per page

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;


  const { data, count } = await supabase
    .from("projects")
    .select("*", { count: "exact" }) // enables total count
    .range(from, to);
  // const { data, error } = await supabase.from('projects').insert(demo);
  const totalPages = count ? Math.ceil(count / pageSize) : 0;
  console.log({ count, totalPages: count ? Math.ceil(count / pageSize) : 0 });




  // console.log({ data })

  return (
    <Wrapper>
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Hero />


          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-4">


          </div>

          {
            data?.map((project, index) => (
              <Card key={index} {...project} />
            ))
          }

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            getPageLink={(page) => `/?page=${page}`}
          />

        </div>
      </div>
    </Wrapper>
  );
}
