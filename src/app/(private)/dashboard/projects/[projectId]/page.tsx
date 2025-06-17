'use client';
import EditProject from '@/pages/dashboard/EditProject.page';
import React from 'react';

export default function ProjectEdit({ params }: { params: Promise<{ projectId: string }> }) {
  // Unwrap the params promise
  const resolvedParams = React.use(params);
  const { projectId } = resolvedParams;

  return (
    <div>
      <EditProject projectId={projectId} />
    </div>
  );
}