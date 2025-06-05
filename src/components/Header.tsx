import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223549] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
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
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Open Source SaaS</h2>
        </div>
        <div className="flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Projects</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Tutorials</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Resources</a>
        </div>
      </div>
      <div className="">
        <Search onNav={true}/>
      </div>
    </header>
  )
}
