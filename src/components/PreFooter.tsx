"use client"

import { Rocket, Twitter, Linkedin, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { useContactModal } from './ContactModalProvider'

export default function PreFooter() {
    const { openContactModal } = useContactModal()
    return (
        <section className="py-20 px-6 lg:px-8 dark:bg-gray-950">
            <div className="max-w-[628px] mx-auto px-6 w-full">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                        Let’s create value together!
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                        Ready to bring your vision to life? Let's create something exceptional together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <Button
                            size="lg"
                            className="relative overflow-hidden w-full sm:w-auto rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm hover:gap-5 gap-2 transition-all duration-500 ease-in-out-back"
                            onClick={openContactModal}
                        >
                            <span className="absolute inset-0 animate-sheen dark:hidden" style={{
                                background: 'linear-gradient(120deg, transparent 10%, rgba(192,192,192,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(192,192,192,0.3) 60%, transparent 90%)',
                            }} />
                            <span className="absolute inset-0 animate-sheen hidden dark:block" style={{
                                background: 'linear-gradient(120deg, transparent 10%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 60%, transparent 90%)',
                            }} />
                            Start a project
                            <Rocket className="w-4 h-4" />
                        </Button>

                        <div className="h-px w- full sm:h-8 sm:w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-12 h-12 border-gray-300 dark:border-gray-700 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-gray-400"
                                onClick={() => window.open('https://twitter.com/UgwuanyiANDY', '_blank')}
                            >
                                <Twitter className="w-5 h-5" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-12 h-12 border-gray-300 dark:border-gray-700 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-gray-400"
                                onClick={() => window.open('https://www.linkedin.com/in/andy-ugwuanyi/', '_blank')}
                            >
                                <Linkedin className="w-5 h-5" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-12 h-12 border-gray-300 dark:border-gray-700 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-gray-400"
                                onClick={() => window.open('tel:+1234567890', '_blank')}
                            >
                                <Phone className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
