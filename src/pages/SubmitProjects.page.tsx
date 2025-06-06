'use client'
import Head from 'next/head';
import React, { useState } from 'react'

export default function SubmitProjects() {
    const [form, setForm] = useState({
        name: '',
        url: '',
        description: '',
        tags: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        setLoading(false);
        if (res.ok) {
            setSubmitted(true);
            setForm({ name: '', url: '', description: '', tags: '' });
        } else {
            alert("Submission failed. Please try again.");
        }
    };


    return (
        <>
            <Head>
                <title>Submit Project | Open Source Projects</title>
            </Head>
            <main className="max-w-2xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-6">Submit Your Open Source Project</h1>

                {submitted && (
                    <p className="text-green-600 mb-4">✅ Your project has been submitted successfully!</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Project Name</label>
                        <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Repository URL</label>
                        <input
                            required
                            name="url"
                            type="url"
                            value={form.url}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="https://github.com/your/repo"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            required
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Tags (comma-separated)</label>
                        <input
                            name="tags"
                            value={form.tags}
                            onChange={handleChange}
                            placeholder="react, tailwind, nextjs"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {loading ? 'Submitting...' : 'Submit Project'}
                    </button>
                </form>
            </main>
        </>
    )
}
