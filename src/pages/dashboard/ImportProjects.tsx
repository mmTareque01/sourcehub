'use client'
import Loading from '@/app/loading';
import { createBulkProject } from '@/backend/controller/createProject.controller';
import { useAppStore } from '@/stores/app.store';
import React, { useRef, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

// Sample template structure
const sampleProjectTemplate = [
    {
        "bgImg": "https://res.cloudinary.com/dehehgtez/image/upload/v1748705985/Screenshot2025-05-31at9.34.31P_qqiqlf.jpg",
        "title": "AI powered blog app",
        "description": "Write smarter, not harder! Our AI-powered blog app helps you generate, edit, and optimize content effortlessly. With intelligent suggestions, SEO enhancements, and automated drafting, creating engaging blog posts has never been easier. Perfect for writers, marketers, and businesses looking to boost productivity and quality. 🚀✍️",
        "techStack": ["MERN", "MongoDB", "Express", "React", "Node JS"],
        "tags": ["AI", "Blog", "Next.js", "Tailwind CSS"],
        "links": {
            "github": "",
            "demo": "https://quickblog-gs.vercel.app/",
            "youtube": "https://www.youtube.com/watch?v=yl9pwazDHUw"
        }
    }
];

export default function ImportProjects() {
    const { setHeader } = useAppStore();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    const handleDownloadTemplate = () => {
        const blob = new Blob([JSON.stringify(sampleProjectTemplate, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'projects_template.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file && file.type === 'application/json') {
            setLoading(true);
            const reader = new FileReader();
            reader.onload = async (event) => {
                try {
                    const result = event.target?.result;
                    if (typeof result === 'string') {
                        let jsonData = JSON.parse(result);

                        // If the JSON is an array, filter out objects with empty title
                        if (Array.isArray(jsonData)) {
                            jsonData = jsonData.filter(item => item.title && item.title.trim() !== '');
                        }

                        await createBulkProject(jsonData);
                        alert('Successfully created new projects');
                    } else {
                    }
                } catch (error) {
                    console.error("Invalid JSON file:", error);
                    alert('Something went wrong!');
                } finally {
                    setLoading(false);
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid JSON file.');
        }
    };

    React.useEffect(() => {
        setHeader(
            <p className="text-2xl font-bold capitalize">
                import projects
            </p>
        )
    }, [])

    return (
        <>
            {loading && <Loading clientComponent />}
            <div className="rounded-2xl shadow-lg relative flex size-full  flex-col bg-white justify-between group/design-root overflow-x-hidden">
                <div>
                    <div className="flex flex-col p-4 gap-4">
                        <div className="flex justify-between items-center">
                            <p className="text-[#111418] text-base font-normal leading-normal">
                                Upload a JSON file with your project data
                            </p>
                            <button
                                onClick={handleDownloadTemplate}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
                            >
                                <FiDownload className="text-lg" />
                                <span>Download Template</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#dbe0e6] px-6 py-14">
                            <div className="flex max-w-[480px] flex-col items-center gap-2">
                                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                                    Drag and drop your JSON file here
                                </p>
                                <p className="text-[#111418] text-sm font-normal leading-normal max-w-[480px] text-center">
                                    Or
                                </p>
                            </div>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e0e2e5] transition-colors"
                                onClick={handleBrowseClick}
                            >
                                <span className="truncate">Browse Files</span>
                            </button>

                            {/* Hidden file input */}
                            <input
                                type="file"
                                accept="application/json"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}