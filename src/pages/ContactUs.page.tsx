"use client";

import { useState } from "react";



export default function ContactUs() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<null | "loading" | "success" | "error">(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (e) {
            console.log(e)
            setStatus("error");
        }
    };
    return (
        <div className="max-w-md mx-auto p-8">
            <h1 className="text-3xl mb-6 font-bold">Contact Us</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                    type="text"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full p-2 border rounded"
                    type="email"
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-2 border rounded"
                />
                <button
                    disabled={status === "loading"}
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {status === "loading" ? "Sending..." : "Send"}
                </button>

                {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-600">Failed to send message.</p>}
            </form>
        </div>
    )
}
