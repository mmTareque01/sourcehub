'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import Title from '@/components/Title'
import Form from '@/components/Form'
import { SubmitProjectFormProps } from '@/types/Form/SubmitProject.form'
import { ProjectFormFields } from '@/constants/SubmitProject'
import { createProject } from '@/backend/controller/createProject.controller'
import { stringToarray } from '@/libs/string2Array'

export default function AddProject() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (data: SubmitProjectFormProps) => {
        setLoading(true);
        setSubmitted(false);
        try {

            const res = await createProject({
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
            })


            if (res) {
                setSubmitted(true);
            } else {
                alert("Submission failed. Please try again.");
            }
        }
        catch (error) {
            console.log('error: ', error)
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <Head>
                <title>Add Project | Open Source Projects</title>
            </Head>
            <main className="max-w-2xl mx-auto py-10 px-4">
                <Title>Add New Open Source Project</Title>


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
                    <p className="text-green-600 mb-4">✅ Your project has been submitted successfully!</p>
                )}
            </main>
        </div>
    )
}
