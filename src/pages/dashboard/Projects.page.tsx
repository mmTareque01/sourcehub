'use client'
import Button from '@/components/Button';
import Filter from '@/components/dashboard-components/Filter';
import Search from '@/components/dashboard-components/Search';
import { Table } from '@/components/table'
import { useProjects } from '@/hook/callAPI.tsx/useProjects';
import { formatTime } from '@/libs/timeConvertion';
import { useAppStore } from '@/stores/app.store';
import { useProjectStore } from '@/stores/projects.store';
import { ProjectType } from '@/types/project';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {  IoMdEye } from 'react-icons/io';
// import { GrHide } from 'react-icons/gr';

export default function Projects({ type = 'active' }: { type?: string }) {
    const router = useRouter();
    const { handleGetProjects, handleUpdateProject } = useProjects();
    const { projects, projectPagination } = useProjectStore()
    const [pageNo, setPageNo] = useState(1);
    const [pageSize] = useState(25)
    const [search] = useState('')
    const { setHeader } = useAppStore();
    const [status, setStatus] = useState(type);



    useEffect(() => {
        handleGetProjects(pageNo, pageSize, search, status)
    }, [pageNo, pageSize, status, search ])


    const handleRowClick = (id: string) => {
        router.push(`/dashboard/projects/${id}`);
    };


    const generateRows = () => {
        return projects?.map(project => ({
            ...project,
            created_at: formatTime(project.created_at || '').relative,
            action: (
                <Button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        // Use window.event to stop propagation safely
                        // const event = window.event as MouseEvent;
                        e.stopPropagation();

                        // alert(1)
                        handleDeactiveProject(project.id as string);
                    }}
                    className='bg-gray-200 hover:bg-gray-300 p-1 rounded-full'
                    variant="ghost"
                >
                    <IoMdEye color='#4560FF' size={20} />
                </Button>


            )
        }))
    }

    const handleDeactiveProject = async (id: string) => {
        const formData = {

            status: 'inactive',
        }
        const updated = await handleUpdateProject(id as string, formData as ProjectType)

        if (updated) {

            alert('Updated data')
        }
        else {
            // alert('Failed to update!')

        }
    };

    React.useEffect(() => {
        setHeader(
            <>
                <Search />
                <Filter onFilterChange={setStatus}/>
            </>

        )
    }, [])
    return (
        <>
            <div
                className='!text-black'
            >
                <Table
                    columns={columns}
                    data={generateRows()}
                    paginate={
                        projectPagination
                    }
                    setPageNo={(pageNo) => setPageNo(pageNo)}
                    onClickRow={(data: ProjectType) => handleRowClick(data.id || '')}
                />
            </div>
        </>
    )
}


const columns = [
    { key: "title", header: "Title", className: "w-[350px] truncate" },
    // { key: "description", header: "Description", className: "" },
    // { key: "action", header: "Action", className: "text-center" },
    { key: "created_at", header: "Created At", className: "text-center" },
    { key: "action", header: "Action", className: "text-center" },
];