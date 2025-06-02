import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#101923] dark group/design-root overflow-x-hidden"
        >
            <div className="layout-container flex h-full grow flex-col">
                {children}
            </div>
        </div>
    )
}
