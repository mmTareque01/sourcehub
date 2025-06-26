'use client';

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getProjects } from '@/backend/controller/project.controller';
import Pagination from './Pagination';
import { ProjectType } from '@/types/project';
import Loading from '@/app/loading';

export default function ProjectsList({
  page = 1,
  q = '',
  pageSize = 10,
}: {
  page?: number;
  q?: string;
  pageSize?: number;
}) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await getProjects(page, pageSize, q);
        setProjects(res.projects);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page, q, pageSize]);

  if (loading) {
    return <Loading clientComponent/>
  }

  return (
    <>
      {projects?.map((project, index) => (
        <Card key={index} {...project} />
      ))}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        getPageLink={(page) => `/?page=${page}&q=${q}`}
      />
    </>
  );
}
