import { getProjects } from "@/backend/controller/project.controller";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Wrapper from "@/components/Wrapper";






export default async function HomePage({ page = 1, q = '' }: { page?: number, q?: string }) {
  const pageSize = 10; // items per page
  const { projects, totalPages } = await getProjects(page, pageSize, q);

  return (
    <Wrapper>

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Hero />


          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-4">


          </div>

          {
            projects?.map((project, index) => (
              <Card key={index} {...project} />
            ))
          }

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            getPageLink={(page) => `/?page=${page}&q=${q}`}
          />

        </div>
      </div>
    </Wrapper>
  );
}
