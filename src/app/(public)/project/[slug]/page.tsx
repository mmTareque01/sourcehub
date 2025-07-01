import { getProjectBySlug } from '@/backend/controller/getProjectBySlug.controller'
// import { BASE } from '@/libs/base'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import defaultImage from "@/assets/demo-1.png"
import { ProjectType } from '@/types/project'

const BASE = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'


const defaultImage_dynamic = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk3Bm1y6zwwZMjRqBCh-q9HZGagJSeLyTskomXl_z2YxU4YusYC70L0WAsoJd0dAFxmMBAzipkojdcGyTfhlrb3NsYMyXuZFR20THtZGH5uiEQVQ8oqE3D7h2g44_wy_WVNslYe1lxbsqcQw_nOaTru1iYxra12DHJ5WaAd7xc-nRM9EHPB-nH_1WXRM9W6DKS2QSbmyaSyIwXhTpaGKYFGwBKay2X1peU1BDZAjtHgCcHsd3pKIOy7-8nd7kJ0CyR7dP0Ixg8Xe4R'

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string }>

}): Promise<Metadata> {
  const slug = (await params).slug;
  try {

    const project = await getProjectBySlug(slug);

    return {
      title: `${project.title || project.name} | Open Source Project`,
      description: project.description || "Discover a high-quality open-source project with full source code.",
      openGraph: {
        title: project.title || "Open Source Project",
        description: project.description || "Browse high-quality and community-driven open-source software.",
        url: `${BASE}/project/${slug}`,
        images: [
          {
            url: project.bgImg || defaultImage_dynamic,
            alt: project.title || 'Open Source Project',
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title || "Open Source Project",
        description: project.description || "A modern open-source project with GitHub repo and demo.",
        images: [project.bgImg || defaultImage_dynamic],
      },
      metadataBase: new URL(BASE),
      alternates: {
        canonical: `/project/${slug}`,
      },
    };
  } catch (error) {
    console.error("Metadata generation failed:", error);

    return {
      title: "Project Not Found | Open Source Project",
      description: "This project could not be found or may have been removed.",
      openGraph: {
        title: "Project Not Found | Open Source Project",
        description: "This project could not be found or may have been removed.",
        url: `${BASE}/project/${slug}`,
        images: [
          {
            url: defaultImage_dynamic,
            alt: 'Project not found',
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: "Project Not Found | Open Source Project",
        description: "This project could not be found or may have been removed.",
        images: [defaultImage_dynamic],
      },
      metadataBase: new URL(BASE),
      alternates: {
        canonical: `/project/${slug}`,
      },
    };
  }
}




export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  let project: ProjectType | null = null;
  const slug = (await params).slug;
  try {

    project = await getProjectBySlug(slug);
  } catch (error) {
    console.error("Project not found or failed to fetch:", error);
  }


  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Project Not Found</h2>
        <p className="text-gray-400">Sorry, we couldn&apos;t find the project you are looking for.</p>
      </div>
    );
  }


  // console.log({project})

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h1>

      <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
        <Image
          src={project.bgImg || defaultImage}
          alt={project.title}
          width={1200}
          height={350}
          className="w-full object-cover h-[350px]"
        />
      </div>

      <p className="text-gray-300 text-lg mb-6">{project.description}</p>


      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map(tech => (
            <span key={tech} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>


      {
        project?.tags && project?.tags?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project?.tags?.map(tag => (
                <span key={tag} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )
      }





      <div className="space-y-3">
        {project.links.github && (
          <Link href={project.links.github} target="_blank" className="inline-block px-5 text-blue-600 font-medium underline">
            🔗 GitHub Repository
          </Link>
        )}
        {project.links.demo && (
          <Link href={project.links.demo} target="_blank" className="inline-block px-5 text-green-600 font-medium underline">
            🚀 Live Demo
          </Link>
        )}
        {project.links.youtube && (
          <Link href={project.links.youtube} target="_blank" className="inline-block px-5 text-red-600 font-medium underline">
            ▶️ YouTube Video
          </Link>
        )}
      </div>

      {/* <div className="text-sm text-gray-500 mt-10 space-y-1">
        {project.author && <p>👤 Author: {project.author}</p>}
        {project.license && <p>📄 License: {project.license}</p>}
      </div> */}




      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": project.title,
            "url": `${BASE}/project/${slug}`,
            "description": project.description,
            "codeRepository": project.links.github,
            "programmingLanguage": project.techStack?.join(', ') || 'JavaScript',
            "license": project.license || "Open Source",
            "applicationCategory": "DeveloperTool",
            "image": project.bgImg || defaultImage_dynamic,
            "author": {
              "@type": "Person",
              "name": project.author || "Anonymous"
            }
          }),
        }}
      />


    </div>
  )


}
