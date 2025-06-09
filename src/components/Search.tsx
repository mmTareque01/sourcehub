// 'use client'
// import { useRouter } from 'next/navigation';
import React from 'react';

export default function Search({ onNav = false }) {
    // const router = useRouter()

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const search = formData.get('search');

    //     if (typeof search === 'string' && search.trim() !== '') {
    //         router.push(`/?q=${encodeURIComponent(search)}`);
    //     }
    // };



    return (
        <>
            <form  action={'/'} className='flex flex-1 justify-end gap-8'>
                {onNav ? (

                    <>
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div
                                    className="text-[#90accb] flex border-none bg-[#223549] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                    data-icon="MagnifyingGlass"
                                    data-size="24px"
                                    data-weight="regular"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    name="search"
                                    placeholder="Search"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223549] focus:border-none h-full placeholder:text-[#90accb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                />
                            </div>
                        </label>
                        <button
                            type="submit"
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3490f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Search</span>
                        </button>
                    </>
                ) : (
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                            className="text-[#90accb] flex border border-[#314c68] bg-[#182634] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="20px"
                            data-weight="regular"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            placeholder="Search projects..."
                            name="search"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#314c68] bg-[#182634] focus:border-[#314c68] h-full placeholder:text-[#90accb] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                            // value={query || ''}
                            // onChange={e => {
                            //     setQuery(e.target.value)
                            // }}
                        />
                        <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#314c68] bg-[#182634] pr-[7px]">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3490f3] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                            >
                                <span className="truncate">Search</span>
                            </button>
                        </div>
                    </div>)}
            </form>
        </>
    );
}
