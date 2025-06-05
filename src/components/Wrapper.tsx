import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex size-full min-h-screen flex-col dark group/design-root overflow-x-hidden"
        >
            <div className="layout-container flex h-full grow flex-col">
                {children}
            </div>
        </div>
    )
}
