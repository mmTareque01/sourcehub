import React from 'react'

export default function loading() {
    return (
        <div className="flex items-center justify-center min-h-[150px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
