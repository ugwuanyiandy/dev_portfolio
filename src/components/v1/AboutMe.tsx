import Link from 'next/link'
import { Plus, ExternalLink } from 'lucide-react'

export default function AboutMe() {
    return (
        <section id="about" className="pb-20 pt-0 bg-white dark:bg-gray-950">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Content */}
                    <div>
                        <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 dark:text-white mb-8">
                            About Me
                        </h2>

                        <div className="space-y-5 text-gray-600 dark:text-gray-300 text-[16px] leading-[1.8]">
                            <p>
                                I'm Ugwuanyi Andrew, a frontend engineer and product designer with a passion
                                for creating compelling user experiences that bridge the gap between aesthetics
                                and functionality.
                            </p>

                            <p>
                                My creative journey began years ago with character illustration. Much later,
                                I discovered user interface design and web development, which became my
                                professional calling.
                            </p>

                            <p>
                                I've had the privilege of working with several agencies, servicing clients
                                in the education, eCommerce, and FinTech industries. Each project has
                                deepened my understanding of how thoughtful design can transform digital experiences.
                            </p>

                            <p>
                                When I'm not designing or coding, I write short stories and poetry on Medium
                                and curate playlists on Spotify—because a good playlist is the real soundtrack
                                to any creative session.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Start a project
                            </Link>
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="bg-[#FAFAFA] dark:bg-gray-900 rounded-2xl p-8 lg:p-10">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8">
                            Connect with me
                        </h3>

                        <div className="space-y-3">
                            {/* Twitter/X */}
                            <a
                                href="https://twitter.com/UgwuanyiANDY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md dark:hover:bg-gray-700 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 dark:text-white">X (Twitter)</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">@UgwuanyiANDY</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/andy-ugwuanyi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md dark:hover:bg-gray-700 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 dark:text-white">LinkedIn</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">andy-ugwuanyi</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
                            </a>

                            {/* Dribbble */}
                            <a
                                href="https://dribbble.com/lego993"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md dark:hover:bg-gray-700 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#EA4C89] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.939 5.51c1.456 1.77 2.34 4.02 2.395 6.461-2.896-.612-5.547-.612-7.955-.135-.18-.42-.36-.83-.551-1.232 2.852-1.17 5.001-2.937 6.111-5.094zM12 1.669c2.725 0 5.216 1.035 7.1 2.726-1.005 1.943-2.937 3.544-5.521 4.571-1.703-3.127-3.555-5.673-5.535-7.558.621-.155 1.27-.239 1.956-.239zm-4.011.612c1.988 1.843 3.854 4.366 5.568 7.467-3.477.937-7.526 1.32-11.744.983.83-3.816 3.287-6.93 6.176-8.45zM1.669 12l.004-.324c4.688.405 9.16-.016 13.022-1.11.166.36.33.721.487 1.087a18.63 18.63 0 00-1.107.39c-4.572 1.75-7.726 5.115-9.407 9.149A10.32 10.32 0 011.669 12zm3.913 10.043c1.535-3.768 4.4-6.882 8.596-8.507a43.077 43.077 0 012.677 9.599 10.315 10.315 0 01-11.273-1.092zm13.23-.075a44.748 44.748 0 00-2.498-9.072c2.163-.39 4.539-.344 7.1.202a10.322 10.322 0 01-4.602 8.87z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 dark:text-white">Dribbble</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">lego993</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
                            </a>

                            {/* Medium */}
                            <a
                                href="https://medium.com/@ugwuanyiandrew"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md dark:hover:bg-gray-700 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 dark:text-white">Medium</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">@ugwuanyiandrew</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
