import React from 'react'

export default function Loading({ clientComponent = false }: { clientComponent?: boolean }) {
    if (clientComponent) {
        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/50"
                role="status"
                aria-live="polite"
            >
                <div className="flex flex-col items-center gap-4">
                    <svg
                        className="w-12 h-12 animate-spin text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                    <span className="text-gray-800 font-medium text-lg">Retriving data...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex items-center justify-center min-h-[150px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
