import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

export default function Work() {
	return (
		<section className="py-10 px-6 lg:px-8 dark:bg-gray-950" id="projects">
			<div className="max-w-[628px] mx-auto px-[1px]">
				<div className="mb-4 px-6 w-full">
					<h3 className="text-xl font-bold text-gray-900 dark:text-white">My Work</h3>
				</div>

				<div className="grid gap-16">
					{projects.map((project) => (
						<Link key={project.id} href={`/projects/${project.slug}`} className="block rounded-2xl md:rounded-3xl lg:rounded-[32px] bg-gray-100 dark:bg-gray-900 group">
							{/* Card Image Container */}
							<div className="relative w-full aspect-[2/1] rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden p-8 pb-0 flex items-end justify-center shadow-sm">
								{/* Blurred Background Image */}
								<Image
									src={project.image}
									alt=""
									fill
									className="object-cover scale-150 blur-md opacity-85"
								/>
								{/* Overlay for better contrast */}
								<div className="absolute inset-0 bg-black/20" />

								{/* Image Wrapper */}
								<div className="relative w-[90%] h-[70%] rounded-t-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out-back origin-bottom group-hover:scale-[1.06]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover object-top border border-white border-b-0 rounded-t-2xl"
									/>
								</div>
							</div>

							{/* Content */}
							<div className="space-y-4 px-6 py-4">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
									{project.title}
								</h3>

								<div className="flex flex-wrap items-center gap-3">
									{/* Primary Tags */}
									{project.primaryTags.map((tag) => (
										<span
											key={tag}
											className={`px-3 py-1.5 rounded-lg text-sm font-normal ${
												tag.toLowerCase().includes('design') || tag.toLowerCase().includes('research')
													? 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300'
													: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
											}`}
										>
											{tag}
										</span>
									))}

									<div className="h-5 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

									{/* Secondary Tags */}
									{project.secondaryTags.map((tag) => (
										<span key={tag} className="px-3 py-1.5 bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-normal">
											{tag}
										</span>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
