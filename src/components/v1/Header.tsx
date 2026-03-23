'use client'

import { useTheme } from './ThemeProvider'

export default function Header() {
    const { toggleTheme } = useTheme()

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:block fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-[30px] flex items-center justify-between">
                    <a href="#hero">
                        <img src="/images/logo.png" alt="Logo" className="w-10 h-auto mt-10 mb-5" />
                    </a>

                    <nav className="flex items-center justify-end">
                        <div className="flex items-center justify-between max-w-[500px] min-w-[500px] pt-10 pb-5 md:max-[768px]:min-w-[370px]">
                            <a href="#hero">
                                <div className="text-[var(--body-copy)] cursor-pointer">
                                    <i className="uil uil-estate"></i>
                                </div>
                            </a>

                            <a href="#about">
                                <div className="text-[var(--body-copy)] cursor-pointer">About</div>
                            </a>

                            <a href="#projects">
                                <div className="text-[var(--body-copy)] cursor-pointer">Projects</div>
                            </a>

                            <a href="#contact">
                                <div className="text-[var(--body-copy)] cursor-pointer">Contact</div>
                            </a>

                            <div className="text-[var(--body-copy)] cursor-pointer" onClick={toggleTheme}>
                                <i className="uil uil-sunset"></i>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--header-bg)] rounded-t-[20px] shadow-[0px_-357px_161px_rgba(0,0,0,0.0243888),0px_-107.625px_48.5368px_rgba(0,0,0,0.035),0px_-44.7019px_20.1597px_rgba(0,0,0,0.0456112),0px_-16.1678px_7.29137px_rgba(0,0,0,0.07)] z-[100]">
                <nav className="flex items-center justify-between py-5 px-[30px]">
                    <a href="#hero">
                        <div className="text-[var(--body-copy)] cursor-pointer">
                            <i className="uil uil-estate"></i>
                        </div>
                    </a>

                    <a href="#about">
                        <div className="text-[var(--body-copy)] cursor-pointer">About</div>
                    </a>

                    <a href="#projects">
                        <div className="text-[var(--body-copy)] cursor-pointer">Projects</div>
                    </a>

                    <a href="#contact">
                        <div className="text-[var(--body-copy)] cursor-pointer">Contact</div>
                    </a>

                    <div className="text-[var(--body-copy)] cursor-pointer" onClick={toggleTheme}>
                        <i className="uil uil-sunset"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}
