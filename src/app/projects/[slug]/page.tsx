import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'
import Header from '@/components/Header'

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) return {}
    return { title: `${project.title} — Andrew Ugwuanyi` }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <main className="min-h-screen bg-[#F7FAFC] dark:bg-gray-950 font-sans selection:bg-purple-500/30 relative">
            {/* Layout Grid Borders */}
            <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-[628px] border-x border-[#ECECEC] dark:border-gray-800 pointer-events-none z-[10]" />

            <div className="relative">
                <Header />

                <div className="max-w-[628px] mx-auto px-6 pt-40 pb-24">

                    {/* Back link */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        All projects
                    </Link>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {project.primaryTags.map((tag) => (
                            <span
                                key={tag}
                                className={`px-3 py-1.5 rounded-lg text-xs font-normal ${
                                    tag.toLowerCase().includes('design') || tag.toLowerCase().includes('research')
                                        ? 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300'
                                        : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                        <div className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
                        {project.secondaryTags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-normal">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight font-founders mb-3">
                        {project.title}
                    </h1>

                    {/* Role + Year */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                        {project.role} &middot; {project.year}
                    </p>

                    {/* Coming soon state */}
                    {project.comingSoon && (
                        <div className="rounded-[24px] bg-gray-100 dark:bg-gray-900 overflow-hidden mb-14">
                            {/* Blurred cover */}
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top blur-sm scale-105 opacity-40"
                                    priority
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">
                                        Case study
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-founders tracking-tight mb-2">
                                        Coming Soon
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light max-w-xs">
                                        This project is still in the works. Check back soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Cover image + full case study — hidden when coming soon */}
                    {!project.comingSoon && <>
                    <div className="rounded-[24px] overflow-hidden bg-gray-100 dark:bg-gray-900 mb-14 shadow-sm">
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Case study body */}
                    <div className="space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                                Overview
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                {project.overview}
                            </p>
                        </section>

                        <div className="border-t border-[#ECECEC] dark:border-gray-800" />

                        {/* Challenge */}
                        <section>
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                                The Challenge
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                {project.challenge}
                            </p>
                        </section>

                        <div className="border-t border-[#ECECEC] dark:border-gray-800" />

                        {/* Approach */}
                        <section>
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                                My Approach
                            </h2>
                            <ul className="space-y-3">
                                {project.approach.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                        <span className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Inline screens (beyond the cover) */}
                        {project.screens.length > 1 && (
                            <div className="space-y-4">
                                {project.screens.slice(1).map((src, i) => (
                                    <div key={i} className="rounded-[24px] overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-sm">
                                        <div className="relative w-full aspect-[16/9]">
                                            <Image
                                                src={src}
                                                alt={`${project.title} — screen ${i + 2}`}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="border-t border-[#ECECEC] dark:border-gray-800" />

                        {/* Outcome */}
                        <section>
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                                Outcome
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                {project.outcome}
                            </p>
                        </section>

                        {/* Funds — rendered only for projects that have fund data */}
                        {project.funds && project.funds.length > 0 && (
                            <>
                                <div className="border-t border-[#ECECEC] dark:border-gray-800" />
                                <section>
                                    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                                        Investment Products Built
                                    </h2>
                                    <div className="grid gap-4">
                                        {project.funds.map((fund) => (
                                            <div
                                                key={fund.code}
                                                className="rounded-2xl bg-gray-100 dark:bg-gray-900 p-5 space-y-3"
                                            >
                                                {/* Fund header */}
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <p className="text-[11px] font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-0.5">
                                                            {fund.code}
                                                        </p>
                                                        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                                                            {fund.label}
                                                        </h3>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                            fund.currency === 'USD'
                                                                ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                                                                : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                                                        }`}>
                                                            {fund.currency}
                                                        </span>
                                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                                            Min {fund.minAmount}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                                    {fund.shortDescription}
                                                </p>

                                                {/* Features */}
                                                <ul className="space-y-1">
                                                    {fund.features.map((f, i) => (
                                                        <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </>
                        )}

                    </div>
                    </>}

                    {/* Footer nav */}
                    <div className="mt-16 pt-10 border-t border-[#ECECEC] dark:border-gray-800">
                        <Link
                            href="/#projects"
                            className="relative overflow-hidden inline-flex items-center gap-2 hover:gap-5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-base font-medium transition-all duration-500 ease-in-out-back hover:bg-gray-800 dark:hover:bg-gray-100"
                        >
                            <span className="absolute inset-0 animate-sheen dark:hidden" style={{
                                background: 'linear-gradient(120deg, transparent 10%, rgba(192,192,192,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(192,192,192,0.3) 60%, transparent 90%)',
                            }} />
                            <span className="absolute inset-0 animate-sheen hidden dark:block" style={{
                                background: 'linear-gradient(120deg, transparent 10%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 60%, transparent 90%)',
                            }} />
                            <ArrowLeft className="w-4 h-4" />
                            Back to projects
                        </Link>
                    </div>

                </div>

                <footer className="py-10 text-center text-gray-500 dark:text-gray-500 text-sm">
                    <p>Designed & Developed by Andrew Ugwuanyi.</p>
                </footer>
            </div>
        </main>
    )
}
