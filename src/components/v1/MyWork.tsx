import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Squad',
    link: 'https://squadco.com/',
    image: '/images/projects/squad.png',
    description: 'Payment processing for Africa',
  },
  {
    title: 'AI Scripts',
    link: 'https://dribbble.com/shots/24863400-AI-Scripts-AI-data-extraction-platform',
    image: '/images/projects/aiscripts.jpg',
    description: 'AI data extraction platform',
  },
  {
    title: 'PMAT',
    link: 'https://dribbble.com/shots/25498714-Property-Management-Landing-Page',
    image: '/images/projects/pmatdzn.jpg',
    description: 'Property management platform',
  },
  {
    title: 'Winzy',
    link: 'https://dribbble.com/shots/25499984-Winzy-Brand-Growth-Landing-Page',
    image: '/images/projects/winzy.jpg',
    description: 'Brand growth & giveaways',
  },
  {
    title: 'GTWorld',
    link: 'https://www.behance.net/gallery/162694189/GTWorld-Mobile-App-Redesign-%28Case-Study%29',
    image: '/images/projects/gtworld.jpg',
    description: 'Mobile banking redesign',
  },
  {
    title: 'Zeus Node',
    link: 'https://vermillion-swan-35e2f5.netlify.app/',
    image: '/images/projects/zeusnode.png',
    description: 'Blockchain gaming ecosystem',
  },
]

export default function MyWork() {
  return (
    <section id="projects" className="py-10 bg-white dark:bg-gray-950">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 dark:text-white mb-12 text-center px-6">
          My Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAFAFA] dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
