'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContactModal } from './ContactModalProvider'

export default function Header() {
    const { openContactModal } = useContactModal()
    return (
        <header className="fixed top-[60px] left-0 right-0 z-50">
            <div className="max-w-[628px] mx-auto px-6 py-[12px] mb-[12px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="w-[36px] h-[36px] flex items-center justify-center">
                        <Image
                            src="/assets/img/logo.svg"
                            alt="Logo"
                            width={36}
                            height={36}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>

                {/* Navigation Pill */}
                <nav className="flex items-center bg-white/50 dark:bg-gray-900/50 rounded-full p-1 pl-6 shadow-sm border border-gray-100/80 dark:border-gray-800/80 backdrop-blur-md">
                    <div className="flex items-center gap-6 mr-4">
                        <Link
                            href="/#about"
                            className="text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/#projects"
                            className="text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Projects
                        </Link>
                    </div>

                    <button
                        onClick={openContactModal}
                        className="bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 px-5 py-1.5 rounded-full text-[13px] font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    )
}
