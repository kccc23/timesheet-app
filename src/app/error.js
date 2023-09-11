'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h2 className="text-2xl mb-4 text-red-600 font-bold">Something went wrong!</h2>
        <button
            onClick={() => reset()}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            Try again
        </button>
    </div>
    )
}