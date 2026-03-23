import Image from 'next/image'

const tools = {
    design: [
        { name: 'Figma', icon: '/assets/img/fig.svg' },
        { name: 'Webflow', icon: '/assets/img/webf.svg' },
        { name: 'Illustrator', icon: '/assets/img/illus.svg' },
    ],
    dev: [
        { name: 'React', icon: '/assets/img/react.svg' },
        { name: 'TypeScript', icon: '/assets/img/types.svg' },
        { name: 'Tailwind', icon: '/assets/img/tail.svg' },
    ]
}

export default function Toolkit() {
    return (
        <section className="py-10 px-6 lg:px-8 dark:bg-gray-950">
            <div className="max-w-[628px] mx-auto px-6 w-full">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">My Toolkit</h3>
                    </div>

                    <div className="space-y-8">
                        {/* Design */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                            <span className="text-base font-medium text-gray-500 w-32">Design</span>
                            <div className="flex flex-wrap gap-3">
                                {tools.design.map((tool) => (
                                    <div key={tool.name} className="group inline-flex items-center gap-2 hover:gap-3 w-[130px] px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 text-[15px] font-medium cursor-pointer transition-all duration-500 ease-in-out-back">
                                        <Image src={tool.icon} alt={tool.name} width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
                                        {tool.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dev */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                            <span className="text-base font-medium text-gray-500 w-32">Development</span>
                            <div className="flex flex-wrap gap-3">
                                {tools.dev.map((tool) => (
                                    <div key={tool.name} className="group inline-flex items-center gap-2 hover:gap-3 w-[130px] px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 text-[15px] font-medium cursor-pointer transition-all duration-500 ease-in-out-back">
                                        <Image src={tool.icon} alt={tool.name} width={20} height={20} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
                                        {tool.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
