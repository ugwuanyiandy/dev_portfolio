'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 p-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Something went wrong!</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="rounded-full bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
                Try again
            </button>
        </div>
    )
}
