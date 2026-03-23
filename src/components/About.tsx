"use client"

import { Twitter, Linkedin, Github, Rocket } from 'lucide-react'
import { Button } from './ui/button'
import { useContactModal } from './ContactModalProvider'

export default function About() {
    const { openContactModal } = useContactModal()
    return (
        <section className="pb-10 px-6 lg:px-8 dark:bg-gray-950" id="about">
            <div className="max-w-[628px] mx-auto px-6 w-full">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">About Me</h3>
                    </div>

                    <div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            I'm Andrew Ugwuanyi, a product designer and frontend engineer who transforms ideas into
                            engaging digital experiences. My journey from character illustration to UI design and web
                            development gave me a unique eye for both visual storytelling and technical execution.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            I've worked with agencies delivering solutions for clients in education, ecommerce, and
                            fintech — always focusing on user-centered design that drives real results.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            Ready to bring your project to life? Let's create something exceptional together.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 text-sm hover:gap-5 gap-2 transition-all duration-500 ease-in-out-back"
                                    onClick={openContactModal}
                                >
                                    Start a project
                                    <Rocket className="w-4 h-4" />
                                </Button>

                                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-gray-500 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400"
                                        onClick={() => window.open('https://twitter.com/UgwuanyiANDY', '_blank')}
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-gray-500 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400"
                                        onClick={() => window.open('https://www.linkedin.com/in/andy-ugwuanyi/', '_blank')}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-gray-500 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400"
                                        onClick={() => window.open('https://github.com/yourusername', '_blank')}
                                    >
                                        <Github className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
