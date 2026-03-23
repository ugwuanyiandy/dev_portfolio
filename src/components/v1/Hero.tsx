export default function Hero() {
    return (
        <div className="relative overflow-hidden h-screen min-h-[700px] bg-hero-light dark:bg-hero-dark bg-cover bg-no-repeat" id="hero">
            <div className="backdrop-blur-[10px] relative min-h-screen z-20">
                <div className="container mx-auto px-[30px]">
                    {/* Mobile Logo */}
                    <div className="md:hidden pt-10 pb-5">
                        <a href="#hero">
                            <img src="/images/logo.png" alt="Logo" className="w-10 h-auto block" />
                        </a>
                    </div>

                    {/* Hero Content */}
                    <div className="pt-[calc(35vh-100px)] pb-[60px] md:flex md:items-end md:justify-between md:pt-[40vh] lg:pt-[32vh] xl:pt-[38vh] 2xl:pt-[40vh]">
                        <div className="md:w-1/2">
                            <img
                                src="/images/avatar.JPG"
                                alt="Andrew Ugwuanyi"
                                className="w-[120px] rounded-full border-[3px] border-[var(--avatar-border)] mb-3 md:mb-5"
                            />

                            <h1 className="font-futura font-semibold text-[var(--body-heading)] mb-[50px] text-base md:text-2xl lg:text-[1.75rem]">
                                Hello, I'm Andrew
                            </h1>

                            <h1 className="font-futura font-semibold text-[var(--body-heading)] text-xl mb-2 md:text-[2rem] md:leading-[45px] lg:text-[3.2rem] lg:leading-[60px] xl:text-[3.5rem] xl:leading-[70px]">
                                Frontend Engineer, Product Designer
                            </h1>

                            <h1 className="font-futura font-semibold text-gradient-hero text-[22px] block mb-[34px] md:mb-0 md:text-[2rem] lg:text-[3.15rem] xl:text-[3.5rem]">
                                & Interface Lover
                            </h1>
                        </div>

                        <div className="md:w-[43%]">
                            <div className="text-[var(--body-copy)] leading-[21px] tracking-[-0.02em] mb-10 md:text-xl md:leading-[30px] lg:text-[1.45rem] lg:leading-[35px] xl:text-[1.6rem] xl:leading-[40px]">
                                Frontend Engineer and Product designer,
                                passionate about creating compelling
                                experiences for the web.
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <a href="https://dribbble.com/lego993" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <span className="text-sm text-[var(--body-copy)] mr-2 lg:text-xl">DR</span>
                                        <img src="/images/github.png" alt="Dribbble" className="w-[30px] lg:w-[44px]" />
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <a href="https://www.linkedin.com/in/andy-ugwuanyi/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <span className="text-sm text-[var(--body-copy)] mr-2 lg:text-xl">LN</span>
                                        <img src="/images/linkedin.png" alt="LinkedIn" className="w-[30px] lg:w-[44px]" />
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <a href="https://medium.com/@ugwuanyiandrew" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <span className="text-sm text-[var(--body-copy)] mr-2 lg:text-xl">MD</span>
                                        <img src="/images/medium.png" alt="Medium" className="w-[30px] lg:w-[44px]" />
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <a href="https://twitter.com/UgwuanyiANDY" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <span className="text-sm text-[var(--body-copy)] mr-2 lg:text-xl">TW</span>
                                        <img src="/images/twitter.png" alt="Twitter" className="w-[30px] lg:w-[44px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
