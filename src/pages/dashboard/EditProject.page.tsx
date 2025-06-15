import Form from '@/components/Form'
import Title from '@/components/Title'
import { ProjectFormFields } from '@/constants/SubmitProject'
import { SubmitProjectFormProps } from '@/types/Form/SubmitProject.form'
import React, { useState } from 'react'

export default function EditProject() {
    const [loading] = useState(false);
    const [submitted] = useState(false);


    const handleSubmit = async (data: SubmitProjectFormProps) => {
        console.log(data)
        // setLoading(true);
        // setSubmitted(false);
        // try {

        //     const res = await createProject({
        //         // ...data,
        //         title: data.title,
        //         description: data.description,
        //         techStack: stringToarray(data?.techStacks as string || ''),
        //         tags: stringToarray(data?.tags || ''),
        //         links: {
        //             github: data.github as string,
        //             demo: data.demo as string,
        //             youtube: data.youtube as string,


        //         }
        //     })


        //     if (res) {
        //         setSubmitted(true);
        //     } else {
        //         alert("Submission failed. Please try again.");
        //     }
        // }
        // catch (error) {
        //     console.log('error: ', error)
        // }
        // finally {
        //     setLoading(false);
        // }
    };

    return (
        <>
            <Title>Update Project</Title>


            <Form<SubmitProjectFormProps>
                fields={ProjectFormFields}
                onSubmit={(data) => {
                    // console.log(data)
                    handleSubmit(data as SubmitProjectFormProps)
                }}
                submitText='Submit Project'
                submitClassName="bg-blue-600  px-6 py-2 rounded hover:bg-blue-700 transition"
                loading={loading}
            />

            {submitted && (
                <p className="text-green-600 mb-4">✅ Your project has been updated successfully!</p>
            )}
        </>
    )
}
