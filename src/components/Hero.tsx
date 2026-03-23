"use client"

import Image from 'next/image'
import { Twitter, Linkedin, Handshake } from 'lucide-react'
import { Button } from './ui/button'
import { useContactModal } from './ContactModalProvider'

export default function Hero() {
  const { openContactModal } = useContactModal()
  return (
    <section className="pt-20 pb-15 dark:bg-gray-950 min-h-[600px] flex flex-col justify-center">
      <div className="max-w-[628px] mx-auto px-6 w-full">
        {/* Intro Group */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-[124px] hover:w-[148px] h-[56px] rounded-[10px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-in-out-back">
            <Image
              src="/images/avtr.png"
              alt="Andrew Ugwuanyi"
              width={148}
              height={56}
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <span className="text-gray-700 dark:text-gray-400 font-light text-lg leading-none">Hello, I am</span>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight font-founders">
              Andrew Ugwuanyi
            </h1>
          </div>
        </div>
        
        {/* Bio Description */}
        <p className="text-xl text-gray-700 dark:text-gray-400 mb-6 max-w-2xl leading-relaxed font-light">
          Frontend Engineer and Product Designer, creating applications for{' '} <br/>
          <span className="font-semibold text-gray-900 dark:text-white">FinTech, eCommerce & SaaS</span>.
        </p>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="relative overflow-hidden rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-4 py-2.5 text-base hover:gap-5 gap-2 transition-all duration-500 ease-in-out-back"
            onClick={openContactModal}
          >
            <span className="absolute inset-0 animate-sheen dark:hidden" style={{
              background: 'linear-gradient(120deg, transparent 10%, rgba(192,192,192,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(192,192,192,0.3) 60%, transparent 90%)',
            }} />
            <span className="absolute inset-0 animate-sheen hidden dark:block" style={{
              background: 'linear-gradient(120deg, transparent 10%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 60%, transparent 90%)',
            }} />
            Let's work together
            <Handshake className="w-4 h-4" />
          </Button>
          
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
          
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
        </div>
      </div>
    </section>
  )
}
