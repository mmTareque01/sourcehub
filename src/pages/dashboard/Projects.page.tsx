'use client'
import Search from '@/components/dashboard-components/Search';
import { Table } from '@/components/table'
import { useProjects } from '@/hook/callAPI.tsx/useProjects';
import { formatTime } from '@/libs/timeConvertion';
import { useAppStore } from '@/stores/app.store';
import { useProjectStore } from '@/stores/projects.store';
import { ProjectType } from '@/types/project';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Projects({ type = 'active' }: { type?: string }) {
    const router = useRouter();
    const { handleGetProjects } = useProjects();
    const { projects, projectPagination } = useProjectStore()
    const [pageNo, setPageNo] = useState(1);
    const [pageSize] = useState(25)
    const [search] = useState('')
    const { setHeader } = useAppStore();


    useEffect(() => {
        handleGetProjects(pageNo, pageSize, search, type)
    }, [pageNo, pageSize])


    const handleRowClick = (id: string) => {
        router.push(`/dashboard/projects/${id}`);
    };

    const generateRows = () => {
        return projects?.map(project => ({
            ...project,
            created_at: formatTime(project.created_at || '').relative
        }))
    }

    React.useEffect(() => {
        setHeader(
         <Search/>
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