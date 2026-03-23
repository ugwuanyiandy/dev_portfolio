"use client"

import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    text: "I needed someone who could wear multiple hats - design thinking and solid development skills. Andrew delivered beyond expectations. He redesigned our entire fund management interface from scratch, then helped build an end-user portal that performs beautifully. His attention to micro-interactions and loading states made our app feel premium. Six months post-launch, we have a 4.8-star rating by our clients.",
    name: "John Babawale",
    role: "CTO - Paystack MFB",
    image: "/assets/img/jon.jpeg"
  },
  {
    id: 2,
    text: "The collaboration was seamless from day one. Andrew didn't just code what we asked for - he challenged our assumptions and proposed better solutions. His component library approach saved us months of development time, and the design system he created scales perfectly as we add new features. The accessibility compliance he built in was thorough and much-needed for our users.",
    name: "Amalu Peter",
    role: "Engineering Lead - HabariPay",
    image: "/assets/img/pita.jpeg"
  },
  {
    id: 3,
    text: "Working with Andrew transformed our digital presence. He took our outdated legacy platform and reimagined it into a modern, high-performance web application. His ability to bridge the gap between complex backend logic and a beautiful, intuitive frontend interface is rare. Our user engagement metrics have increased by 40% since the redesign launch.",
    name: "Anuebunwa Victor",
    role: "Founder - Invoge Services",
    image: "/assets/img/vic.jpeg"
  }
]

export default function Testimonials() {
  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-10 px-6 lg:px-8 dark:bg-gray-950">
      <div className="max-w-[628px] mx-auto px-6 w-full overflow-hidden">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Testimonials</h3>
        </div>
      </div>

      {/* Slider Container - Full width for infinite scroll */}
      <div className="max-w-[628px] mx-auto relative w-full overflow-hidden group/slider">
        <div
          className="flex gap-6 animate-scroll hover:[animation-play-state:paused]"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[85vw] md:w-[500px] flex-none"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-[32px] p-8 md:p-10 h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-normal">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
