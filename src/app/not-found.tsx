import Link from 'next/link'
import { House } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F7FAFC] dark:bg-gray-950 flex flex-col items-center justify-center px-6">
            <div className="max-w-[628px] w-full text-center">
                {/* 404 number */}
                <p className="text-[120px] leading-none font-bold text-gray-200 dark:text-gray-800 select-none font-founders">
                    404
                </p>

                {/* Heading */}
                <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white tracking-tight font-founders">
                    You&apos;ve gone off the map.
                </h1>

                {/* Description */}
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    This page doesn&apos;t exist — or maybe it moved.{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">Either way, let&apos;s get you back.</span>
                </p>

                {/* CTA */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="relative overflow-hidden inline-flex items-center gap-2 hover:gap-5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-base font-medium transition-all duration-500 ease-in-out-back hover:bg-gray-800 dark:hover:bg-gray-100"
                    >
                        <span className="absolute inset-0 animate-sheen dark:hidden" style={{
                            background: 'linear-gradient(120deg, transparent 10%, rgba(192,192,192,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(192,192,192,0.3) 60%, transparent 90%)',
                        }} />
                        <span className="absolute inset-0 animate-sheen hidden dark:block" style={{
                            background: 'linear-gradient(120deg, transparent 10%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 60%, transparent 90%)',
                        }} />
                        <House className="w-4 h-4" />
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}
