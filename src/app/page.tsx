import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import About from '@/components/About'
import Toolkit from '@/components/Toolkit'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import PreFooter from '@/components/PreFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-purple-500/30 relative">
      {/* Layout Grid Borders */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-[628px] border-x border-[#ECECEC] dark:border-gray-800 pointer-events-none z-[10]" />

      <div className="relative">
        <Header />
        <Hero />
        <FeaturedProject />
        <About />
        <Toolkit />
        <Work />
        <Testimonials />
        <PreFooter />

        {/* Simple Footer */}
        <footer className="py-10 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>Designed & Developed by Andrew Ugwuanyi.</p>
        </footer>
      </div>
    </main>
  )
}
