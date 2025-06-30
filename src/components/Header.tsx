'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const mode = process.env.NEXT_PUBLIC_MODE || "dev"

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="border-b border-solid border-b-[#223549] px-4 md:px-10 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Nav (for md and up) */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Open Source SaaS</h2>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            <Link className="text-sm font-medium" href="/">Home</Link>
            <Link className="text-sm font-medium" href="/contact-us">Contact Us</Link>
            <Link className="text-sm font-medium" href="/about">About Us</Link>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-2">
          <Link
            href={'/submit-projects'}
            className="flex min-w-[84px] items-center justify-center rounded-full  px-4 py-3 bg-[#3490f3] text-sm font-bold"
          >
            <span className="truncate">Submit Project</span>
          </Link>

          {mode === 'dev' && (
            <Link
              href={'/dashboard'}
              className="flex min-w-[84px] items-center justify-center rounded-full  px-4 py-3 bg-[#6b78f0] text-sm font-bold"
            >
              <span className="truncate">Admin</span>
            </Link>
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/" className="block text-sm font-medium">Home</Link>
          <Link href="/contact-us" className="block text-sm font-medium">Contact Us</Link>
          <Link href="/about" className="block text-sm font-medium">About Us</Link>

          <Link
            href="/submit-projects"
            className="block text-center rounded-full px-4 py-3 bg-[#3490f3] text-sm font-bold"
          >
            Submit Project
          </Link>

          {mode === 'dev' && (
            <Link
              href="/dashboard"
              className="block text-center rounded-full px-4 py-3 bg-[#6b78f0] text-sm font-bold"
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
