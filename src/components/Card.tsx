import { ProjectType } from '@/types/project'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa'

export default function Card({
    bgImg,
    title,
    description,
    slug,
    techStack = [],
    links = {
        github: ''
    },
}: ProjectType) {

    return (
        <div className="p-4 ">
            <Link 
            href={`/project/${slug}`}
            // href={links.github || links.demo || links.youtube || 'mmtareque.com'} 
            // target='_blank'
            >
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
                                                <Link
                                                    href={links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-blue-400"
                                                >
                                                    <FaGithub size={18} />
                                                </Link>
                                            )}
                                            {links.demo && (
                                                <Link
                                                    href={links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-green-400"
                                                >
                                                    <FaExternalLinkAlt size={18} />
                                                </Link>
                                            )}
                                            {links.youtube && (
                                                <Link
                                                    href={links.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-red-400"
                                                >
                                                    <FaYoutube size={18} />
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-[#93adc8] text-sm font-normal leading-normal mt-4 line-clamp-3">
                                {description}
                            </p>

                        </div>
                        <div className='flex items-center justify-between'>
                   


                            <div className="relative max-w-full overflow-hidden">
                                <div className="flex flex-nowrap gap-2">
                                    {techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white/10 text-xs px-2 py-1 rounded-md whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Optional gradient fade */}
                                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f172a] to-transparent"></div>
                            </div>


                        </div>

                    </div>

                </div>
            </Link>
        </div>
    )
}
