import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
    darkMode: ['class'],
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            fontFamily: {
                sans: ['Founders Grotesk', 'sans-serif'],
                founders: ['Founders Grotesk', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'hero-dark': "url('/images/maskbgdk.jpg')",
                'hero-light': "url('/images/maskbglt.jpg')",
            },
            transitionTimingFunction: {
                'in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                sheen: {
                    '0%': { transform: 'translateX(-100%)' },
                    '25%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                modalIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
                sheen: 'sheen 5s ease-in-out infinite',
                fadeIn: 'fadeIn 0.2s ease-out',
                modalIn: 'modalIn 0.3s ease-out',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config
