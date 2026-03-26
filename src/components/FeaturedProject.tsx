'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        id: 1,
        image: '/assets/img/projectimg1.jpg',
        title: "Squad Bulk Payments",
        href: '/projects/squad-bulk-payment',
    },
    {
        id: 2,
        image: '/assets/img/gtfm0.png',
        title: 'GTFM Investment Portal',
        href: '/projects/gtfm-investment-portal',
    },
    {
        id: 3,
        image: '/assets/img/s4c1.png',
        title: 'Squad for Churches',
        href: '/projects/squad-for-churches',
    },
]

export default function FeaturedProject() {
    const [current, setCurrent] = useState(0)
    const touchStartX = useRef<number | null>(null)

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const delta = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(delta) > 40) delta > 0 ? nextSlide() : prevSlide()
        touchStartX.current = null
    }

    return (
        <section className="relative px-4 pb-20 -mt-20 z-20">
            <div className="max-w-[900px] mx-auto">
                <div className="relative rounded-[40px] p-3 shadow-2xl overflow-hidden">
                    {/* Spinning texture background */}
                    <div
                        className="absolute inset-[-100%] bg-cover bg-center animate-spin-slow"
                        style={{ backgroundImage: `url('/assets/img/monobg.jpg')` }}
                    />

                    <div className="relative z-10">
                        <div className="rounded-[30px] overflow-hidden">
                            <div
                                className="relative aspect-[16/9] bg-white rounded-[28px] overflow-hidden group"
                                onTouchStart={onTouchStart}
                                onTouchEnd={onTouchEnd}
                            >
                                {/* Sliding strip */}
                                <div
                                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out-back"
                                    style={{ transform: `translateX(-${current * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
                                >
                                    {slides.map((slide, i) => (
                                        <div key={slide.id} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                className="object-cover object-top"
                                                priority={i === 0}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Controls */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-800" />
                                </button>

                                {/* Indicators */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {slides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrent(idx)}
                                            className={`h-2 rounded-full transition-all duration-300 border border-gray-400/80 ${idx === current ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
