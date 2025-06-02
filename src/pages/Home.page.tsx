import { getAllProjects } from "@/backend/controller/project.controller";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Wrapper from "@/components/Wrapper";
import { ProjectType } from "@/types/project";
import { GetServerSideProps } from "next";
// import { db } from "@/libs/firebase";

interface ProjectsPageProps {
  projects: ProjectType[];
  lastVisibleId: string | null;
  hasMore: boolean;
}


export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async () => {
  const response = await getAllProjects();
  return response;
};


export default async function HomePage() {
  const { projects,  lastVisibleId } = (await getAllProjects()).props;

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
            projects.map((project, index) => (
              <Card key={index} {...project} />
            ))
          }

          <Pagination />
        </div>
      </div>
    </Wrapper>
  );
}
