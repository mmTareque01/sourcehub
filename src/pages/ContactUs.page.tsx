"use client";

import Form from "@/components/Form";
import { ContactUsFormFields } from "@/constants/ContactUs";
import { ContactUsFormProps } from "@/types/Form/ContactUs.form";
import { useState } from "react";





export default function ContactUs() {
    // const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<null | "loading" | "success" | "error">(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (data: ContactUsFormProps) => {
        // e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                // setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (e) {
            console.log(e)
            setStatus("error");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full mx-auto p-8 rounded-lg shadow-lg bg-[#192d42]">
                <h1 className="text-3xl mb-6 font-bold">Contact Us</h1>
                <Form<ContactUsFormProps>
                    fields={ContactUsFormFields}
                    submitText="Send"
                    onSubmit={(data) => {
                        if (data) {
                            handleSubmit(data as ContactUsFormProps)
                        }
                    }}
                    loading={status === 'loading'}
                />

                {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-600">Failed to send message.</p>}
            </div>
        </div>
    )
}



