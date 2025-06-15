'use client'
import { getProjects } from '@/backend/controller/project.controller';
import { Table } from '@/components/table'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Projects() {
    const router = useRouter();
    const [projectData, setProjectData] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [pageSize] = useState(10)
    const [search] = useState('')
    const [pageParams, setPageParams] = useState({
        totalData: 0,
        totalPages: 0
    })




    useEffect(() => {
        getProjectData()
    }, [pageNo, pageSize])


    const getProjectData = async () => {
        const { projects, totalPages, totalCount } = await getProjects(pageNo, pageSize, search);
        setProjectData(projects)
        setPageParams({
            totalPages, totalData: totalCount
        })

    }

    const handleRowClick = (data) => {
        // Assuming data has a project_id property
        router.push(`/dashboard/projects/${data.id}`);

        // Alternatively, for better type safety:
        // router.push(`/dashboard/projects/${data.id}`);
    };

    // const generateRows = () => {
    //     return projectData?.map(project => ({

    //     }))
    // }


    return (
        <>
            <div
                className='!text-black'
            >
                <Table
                    columns={columns}
                    data={projectData}
                    paginate={
                        {
                            pageSize,
                            pageNo,
                            totalData: pageParams.totalData,
                            totalPage: pageParams.totalPages
                        }
                    }
                    setPageNo={(pageNo) => setPageNo(pageNo)}
                    onClickRow={handleRowClick}
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
    { key: "status", header: "Status", className: "text-center" },
];