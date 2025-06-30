import { ProjectType } from '@/types/project'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa'

export default function Card({
    bgImg,
    title,
    description,
    techStack = [],
    links = {
        github: ''
    },
}: ProjectType) {

    return (
        <div className="p-4 ">
            <Link href={links.github || links.demo || links.youtube || 'mmtareque.com'} target='_blank'>
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-[#1a2632] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] cursor-pointer">

                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                        style={{ backgroundImage: `url("${bgImg}")` }}
                    ></div>
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                        <div className="flex flex-col gap-1">

                            <div className='flex items-center justify-between'>
                                <p className=" text-base font-bold leading-tight">{title}</p>
                                <div>
                                    {(links.github || links.demo || links.youtube) && (
                                        <div className="flex gap-4 mt-2 ">
                                            {links.github && (
                                                <a
                                                    href={links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-blue-400"
                                                >
                                                    <FaGithub size={18} />
                                                </a>
                                            )}
                                            {links.demo && (
                                                <a
                                                    href={links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-green-400"
                                                >
                                                    <FaExternalLinkAlt size={18} />
                                                </a>
                                            )}
                                            {links.youtube && (
                                                <a
                                                    href={links.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-red-400"
                                                >
                                                    <FaYoutube size={18} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-[#93adc8] text-sm font-normal leading-normal mt-4">
                                {description}
                            </p>
                        </div>
                        <div className='flex items-center justify-between'>
                            {/* <div>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#243647]  text-sm font-medium leading-normal w-fit"
                            >
                                <span className="truncate">View Project</span>
                            </button>
                        </div> */}

                            {techStack.length > 0 && (
                                <div className="flex flex-wrap gap-2 max-h-20 overflow-hidden">
                                    {techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white/10  text-xs px-2 py-1 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    )


    //  Grid model card
    // return (
    //     <div className="flex flex-col gap-3 pb-3">
    //         <div
    //             className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
    //             style={{ backgroundImage: `url("${bgImg}")` }}
    //         ></div>

    //         <div className="flex flex-col gap-2">
    //             <p className=" text-base font-medium leading-normal mb-4 line-clamp-2">
    //                 {title}
    //             </p>

    //             <p className="text-[#90accb] text-sm font-normal leading-normal mb-10 line-clamp-5">
    //                 {description}
    //             </p>

    //             {techStack.length > 0 && (
    //                 <div className="flex flex-wrap gap-2 max-h-20 overflow-hidden">
    //                     {techStack.map((tech, idx) => (
    //                         <span
    //                             key={idx}
    //                             className="bg-white/10  text-xs px-2 py-1 rounded-md"
    //                         >
    //                             {tech}
    //                         </span>
    //                     ))}
    //                 </div>
    //             )}

    //             {tags.length > 0 && (
    //                 <div className="flex flex-wrap gap-2 max-h-20 overflow-hidden">
    //                     {tags.map((tag, idx) => (
    //                         <span
    //                             key={idx}
    //                             className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-md"
    //                         >
    //                             #{tag}
    //                         </span>
    //                     ))}
    //                 </div>
    //             )}

    //             {(links.github || links.demo || links.youtube) && (
    //                 <div className="flex gap-4 mt-2 ">
    //                     {links.github && (
    //                         <a
    //                             href={links.github}
    //                             target="_blank"
    //                             rel="noopener noreferrer"
    //                             className="hover:text-blue-400"
    //                         >
    //                             <FaGithub size={18} />
    //                         </a>
    //                     )}
    //                     {links.demo && (
    //                         <a
    //                             href={links.demo}
    //                             target="_blank"
    //                             rel="noopener noreferrer"
    //                             className="hover:text-green-400"
    //                         >
    //                             <FaExternalLinkAlt size={18} />
    //                         </a>
    //                     )}
    //                     {links.youtube && (
    //                         <a
    //                             href={links.youtube}
    //                             target="_blank"
    //                             rel="noopener noreferrer"
    //                             className="hover:text-red-400"
    //                         >
    //                             <FaYoutube size={18} />
    //                         </a>
    //                     )}
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // )
}
