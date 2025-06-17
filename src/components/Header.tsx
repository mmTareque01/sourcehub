'use client'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  const mode = process.env.NEXT_PUBLIC_MODE || "dev"
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223549] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="" >
          <Link href={'/'} className='flex items-center gap-4  '>
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className=" text-lg font-bold leading-tight tracking-[-0.015em]">Open Source SaaS</h2>
          </Link>
        </div>
        <div className="flex items-center gap-9">
          <Link className=" text-sm font-medium leading-normal" href="/">Home</Link>
          <Link className=" text-sm font-medium leading-normal" href="/contact-us">Contact Us</Link>
          <Link className=" text-sm font-medium leading-normal" href="/about">About Us</Link>
          {/* <Link className=" text-sm font-medium leading-normal" href="/submit-project">Submit Project</Link> */}
        </div>
      </div>
      <div className="flex gap-2">
        {/* <Search onNav={true}/> */}
        <Link
          href={'/submit-projects'}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3490f3]  text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Submit Project</span>
        </Link>

        {
          mode == 'dev' ?
            <Link
              href={'/dashboard'}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6b78f0]  text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Admin</span>
            </Link> : null
        }
      </div>
    </header>
  )
}
