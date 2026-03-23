'use client'

import React, { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        const apply = (dark: boolean) => {
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(dark ? 'dark' : 'light')
        }
        const handler = (e: MediaQueryListEvent) => apply(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    return <>{children}</>
}
