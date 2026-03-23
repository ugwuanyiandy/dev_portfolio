const projects = [
    {
        title: 'squad',
        link: 'https://squadco.com/',
        image: '/images/projects/squad.png',
        description: 'A modern online payment processing system for Africa which makes it easy to receive recurring and one-off payments through cards, bank transfer, virtual accounts, USSD, Soft POS, payment links and more.',
        skills: ['Frontend Development', 'Product Design'],
        linkIcon: 'uil-link-alt',
    },
    {
        title: 'ai scripts',
        link: 'https://dribbble.com/shots/24863400-AI-Scripts-AI-data-extraction-platform',
        image: '/images/projects/aiscripts.jpg',
        description: 'An AI-powered data extraction and analysis platform, built for every industry from ecommerce to hospitality, education and business.',
        skills: ['Frontend Development', 'Product Design'],
        linkIcon: 'uil-link-alt',
    },
    {
        title: 'pmat',
        link: 'https://dribbble.com/shots/25498714-Property-Management-Landing-Page',
        image: '/images/projects/pmatdzn.jpg',
        description: 'A unified platform to manage real estate assets, automate maintenance and provide support.',
        skills: ['Frontend Development', 'Product Design'],
        linkIcon: 'uil-link-alt',
    },
    {
        title: 'winzy',
        link: 'https://dribbble.com/shots/25499984-Winzy-Brand-Growth-Landing-Page',
        image: '/images/projects/winzy.jpg',
        description: 'An application to create giveaways, grow your audience and elevate your brand.',
        skills: ['Frontend Development', 'Product Design'],
        linkIcon: 'uil-link-alt',
    },
    {
        title: 'gtworld (ux case study)',
        link: 'https://www.behance.net/gallery/162694189/GTWorld-Mobile-App-Redesign-%28Case-Study%29',
        image: '/images/projects/gtworld.jpg',
        description: 'The GTWorld mobile app is an essential part of the Guaranty Trust Holding Company\'s suite of services. The goal of this project was to redesign the existing app to bring the most popular actions front and centre.',
        skills: ['UI/UX Design', 'Brand Identity'],
        linkIcon: 'uil-behance',
    },
    {
        title: 'zeus node',
        link: 'https://vermillion-swan-35e2f5.netlify.app/',
        image: '/images/projects/zeusnode.png',
        description: 'A dynamic ecosystem of gamified utilities. Built on the Avalanche blockchain.',
        skills: ['UI/UX Design', 'Frontend Development'],
        linkIcon: 'uil-link-alt',
    },
]

export default function Projects() {
    return (
        <div className="mb-[120px]" id="projects">
            <div className="flex items-center justify-between">
                <div className="font-bold text-[28px] text-[var(--body-copy)]">My Work</div>
                <div className="font-gilmer text-[80px] text-gradient-numeral">02</div>
            </div>

            <div className="ml-5 relative border-l border-dashed border-[var(--work-border)]">
                {/* Work label */}
                <div className="absolute -left-4 bg-white px-3 py-[6px] flex justify-center items-center text-[#381A5B] font-bold rounded text-sm">
                    Design & Dev.
                </div>

                {projects.map((project, index) => (
                    <div key={index} className="mb-8 ml-[30px] md:flex md:items-center md:justify-between">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-max transition-transform duration-500 hover:scale-105 md:w-1/2"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full mb-3 mt-[60px] rounded-xl border border-[#381A5B]"
                            />
                        </a>

                        <div className="md:w-[40%]">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xl font-medium text-[var(--body-copy)]">{project.title}</div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <i className={`uil ${project.linkIcon} text-[var(--body-copy)] text-[22px]`}></i>
                                </a>
                            </div>

                            <div className="font-poppins text-sm text-[var(--body-copy)] font-light leading-[21px] tracking-[-0.02em] mb-2">
                                {project.description}
                            </div>

                            <div className="flex">
                                {project.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-[#91FCDC] rounded-[20px] px-3 py-1 text-[9px] text-[#381A5B] font-poppins font-medium mr-2"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
