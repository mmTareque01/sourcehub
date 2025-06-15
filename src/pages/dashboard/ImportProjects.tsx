'use client'
import Loading from '@/app/loading';
import { createBulkProject } from '@/backend/controller/createProject.controller';
import React, { useRef, useState } from 'react';

export default function ImportProjects() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
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

                        console.log("Filtered JSON Data:", jsonData);
                        await createBulkProject(jsonData);
                        alert('successfully created new projects')
                    } else {
                        console.error("File content is not a string.");
                    }
                } catch (error) {
                    console.error("Invalid JSON file:", error);
                    alert('Something went wrong!')
                }
                finally {
                    setLoading(false)
                }
            };
            reader.readAsText(file);
        } else {
            console.warn("Please upload a valid JSON file.");
        }
    };




    return (
        <>
            {
                loading && (
                    <Loading clientComponent />
                )
            }
            <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
                <div>
                    <div className="flex items-center bg-white p-4 pb-2 justify-between">
                        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">Import JSON</h2>
                    </div>
                    <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">Drag and drop a JSON file here, or click to browse.</p>
                    <div className="flex flex-col p-4">
                        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#dbe0e6] px-6 py-14">
                            <div className="flex max-w-[480px] flex-col items-center gap-2">
                                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drag and drop your JSON file here</p>
                                <p className="text-[#111418] text-sm font-normal leading-normal max-w-[480px] text-center">Or</p>
                            </div>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
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
                <div>
                    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                        <p className="text-[#60758a] text-base font-normal leading-normal">© 2024 Data Processing App</p>
                    </footer>
                    <div className="h-5 bg-white"></div>
                </div>
            </div>
        </>
    );
}

