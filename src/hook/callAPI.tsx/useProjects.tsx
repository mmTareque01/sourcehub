// hooks/useApi.ts
"use client";
import { useProjectStore } from "@/stores/projects.store";
import { getProjects } from "@/backend/controller/project.controller";
import { getProjectById } from "@/backend/controller/getProjectById.controller";
import { ProjectType } from "@/types/project";
import { updateProjectById } from "@/backend/controller/updateProject.controller";

export function useProjects() {
  const { setProjects, setProject, setProjectPagination } = useProjectStore();

  const handleGetProjects = async (pageNo: number = 1, pageSize: number = 10, search: string = '') => {

    try {
      const { projects, totalCount, totalPages } = await getProjects(pageNo, pageSize, search)

      setProjects(projects)
      setProjectPagination({
        pageNo,
        pageSize,
        totalData: totalCount,
        totalPage: totalPages
      })

    }
    catch (error) {
      console.log(error)
    }
  };


  const handleGetProjectById = async (id: string) => {
    try {
      const projects = await getProjectById(id)
      setProject(projects)
      return true;
    }
    catch (error) {
      console.log(error)
      return false
    }
  };

  // const handleCreateNewsletterType = async (data: NewsletterType) => {
  //   const newsletterTypes = await callApi(NewsletterTypes, { method: "POST", data: data }, "New type created successfully");
  //   if (newsletterTypes) {
  //     // setNewsletterTypes(newsletterTypes?.data || []);
  //     handleGetNewsletter();
  //   }
  // };

  const handleUpdateProject = async (id: string, data: ProjectType) => {

    try {
      const newsletterTypes = await updateProjectById(id, data)
      console.log({newsletterTypes})
      return newsletterTypes;
    }
    catch (error) {
      console.log(error);
      return false
    }
  };

  // const handleDeleteNewsletterType = async (id: string) => {
  //   const newsletterTypes = await callApi(`${NewsletterTypes}/${id}`, { method: "DELETE" }, "Type deleted successfully");
  //   if (newsletterTypes) {
  //     // setNewsletterTypes(newsletterTypes?.data || []);
  //     handleGetNewsletter();
  //   }
  // };

  return {
    handleGetProjects,
    handleGetProjectById,
    handleUpdateProject,
    // handleUpdateNewsletterType
    // handleUpdateSubscriber,
    // handleDeleteSubscriber,
  };
}
