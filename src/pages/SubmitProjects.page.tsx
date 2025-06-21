'use client'
import { createProject } from '@/backend/controller/createProject.controller';
import Form from '@/components/Form';
import Title from '@/components/Title';
import { SubmitProjectFormFields } from '@/constants/SubmitProject';
import { stringToarray } from '@/libs/string2Array';
import { SubmitProjectFormProps } from '@/types/Form/SubmitProject.form';
import Head from 'next/head';
import React, { useState } from 'react'

export default function SubmitProjects() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (data: SubmitProjectFormProps) => {
        setLoading(true);
        setSubmitted(false);
        try {

            const res = await createProject({
                // ...data,
                title: data.title,
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
        <>
            <div className='my-5 max-w-2xl w-full mx-auto p-8 rounded-lg shadow-lg bg-[#192d42]'>
                <Head>
                    <title>Submit Project | Open Source Projects</title>
                </Head>

                <main className=" mx-auto">
                    <Title >Submit Your Open Source Project</Title>


                    <Form<SubmitProjectFormProps>
                        fields={SubmitProjectFormFields}
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
        </>
    )
}
