// import { db } from "@/libs/firebase";
// import { ProjectType } from "@/types/project";
// import { collection, doc } from "firebase/firestore";

// export const ProjectsModelKey = {
//   id: "id",
//   bgImg: "name",
//   title: "email",
//   description: "description",
//   techStack: "techStack",
//   tags: "tags",
//   links: {
//     github: "github",
//     demo: "demo",
//     youtube: "youtube",
//     web: "web",
//     gitlab: "gitlab",
//   },
// };
// export const Projects = collection(db, "projects");
// export const ProjectsRef = (id: string) => {
//   return doc(db, "projects", id);
// };
// export const ProjectsModel = ({
//   id,
//   bgImg,
//   title,
//   description,
//   techStack,
//   tags,
//   links,
// }: ProjectType) => {
//   return { id, bgImg, title, description, techStack, tags, links };
// };
