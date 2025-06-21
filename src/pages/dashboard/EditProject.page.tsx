import Loading from '@/app/loading'
import Form from '@/components/Form'
import { ProjectFormFields } from '@/constants/SubmitProject'
import { useProjects } from '@/hook/callAPI.tsx/useProjects'
import { stringToarray } from '@/libs/string2Array'
import { useAppStore } from '@/stores/app.store'
import { useProjectStore } from '@/stores/projects.store'
import { FieldProps } from '@/types/Form/form'
import { SubmitProjectFormProps } from '@/types/Form/SubmitProject.form'
import { ProjectType } from '@/types/project'
import React, { useEffect, useState } from 'react'

export default function EditProject({ projectId }: { projectId: string }) {
    const { setHeader } = useAppStore();
    const [loading, setLoading] = useState(false);
    const [submitted] = useState(false);
    const [fields, setFields] = useState<FieldProps<SubmitProjectFormProps>[]>([]);
    const { project } = useProjectStore();
    const { handleGetProjectById, handleUpdateProject } = useProjects();
    const [apiSuccess, setApiSuccess] = useState(false);

    const handleSubmit = async (data: SubmitProjectFormProps) => {
        // setLoading(true);
        // setSubmitted(false);
        const formData = {
            // ...data,
            status: 'active',
            title: data.title,
            bgImg: data.bgImg,
            description: data.description,
            techStack: stringToarray(data?.techStacks as string || ''),
            tags: stringToarray(data?.tags || ''),
            links: {
                github: data.github as string,
                demo: data.demo as string,
                youtube: data.youtube as string,


            }
        }
        const updated = await handleUpdateProject(project.id as string, formData as ProjectType)
        console.log({ updated })
        if (updated) {

            alert('updated data')
        }
        else {
            alert('Updated!')
        }
        //  try {

        //      const res = await createProject({
        //          // ...data,
        //          title: data.title,
        //          description: data.description,
        //          techStack: stringToarray(data?.techStacks as string || ''),
        //          tags: stringToarray(data?.tags || ''),
        //          links: {
        //              github: data.github as string,
        //              demo: data.demo as string,
        //              youtube: data.youtube as string,


        //          }
        //      })


        //      if (res) {
        //          setSubmitted(true);
        //      } else {
        //          alert("Submission failed. Please try again.");
        //      }
        //  }
        //  catch (error) {
        //      console.log('error: ', error)
        //  }
        //  finally {
        //      setLoading(false);
        //  }
    };

    function getFormFieldsWithDefaults(project: SubmitProjectFormProps): FieldProps<SubmitProjectFormProps>[] {
        return ProjectFormFields.map(field => {
            const fieldName = field.name as string;
            let value: string = "";

            const links = ['github', 'demo', 'youtube'] as const;

            type LinkKey = typeof links[number]; // "github" | "demo" | "youtube"
            console.log({ fieldName })
            if (links.includes(fieldName as LinkKey)) {
                const key = fieldName as LinkKey;
                value = project.links?.[key] ?? "";
            }
            else if (fieldName == 'techStacks' && Array.isArray(project['techStack'])) {
                value = (project?.techStack as string[])?.join(', ');
            }
            else if (Array.isArray(project[fieldName])) {
                console.log({ fieldName, data: project[fieldName], project })
                value = project[fieldName].join(', ')
            } else {
                value = project[field.name] as string; ///project?.[fieldName as keyof SubmitProjectFormProps];
            }

            return {
                ...field,
                defaultValue: project?.[field.name as keyof SubmitProjectFormProps] ?? value
            };
        });
    }


    useEffect(() => {
        const fetchProject = async () => {
            if (projectId) {
                setLoading(true);
                const result = await handleGetProjectById(projectId); // fetch & store project
                console.log({ result })
                setApiSuccess(result)
                console.log({ apiSuccess })
                // setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]); // Run on mount or if projectId changes

    useEffect(() => {
        console.log({ apiSuccess })
        if (apiSuccess) {
            setFields(getFormFieldsWithDefaults(project as SubmitProjectFormProps));
            setLoading(false);
        }
    }, [project?.id, apiSuccess]); // Only run when project.id is available
    React.useEffect(() => {
        setHeader(
            <p className="text-2xl font-bold capitalize">
               Update Project
            </p>
        )
    }, [])

    if (!project.id || loading) return (<Loading />)


    return (
        <>
            <div
                className='bg-white shadow-lg rounded-2xl p-5'
            >
               
                <Form<SubmitProjectFormProps>
                    // fields={getFormFieldsWithDefaults(project as SubmitProjectFormProps)}
                    fields={fields}
                    onSubmit={(data) => {
                        console.log('logging')
                        handleSubmit(data as SubmitProjectFormProps)
                    }}
                    submitText='Update Project'
                // submitClassName="bg-blue-600  px-6 py-2 rounded hover:bg-blue-700 transition"
                // loading={loading}
                />

                {submitted && (
                    <p className="text-green-600 mb-4">✅ Your project has been updated successfully!</p>
                )}

            </div>

        </>
    )
}
