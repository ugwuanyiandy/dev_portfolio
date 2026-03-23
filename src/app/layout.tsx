import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ContactModalProvider } from '@/components/ContactModalProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ugwuanyi Andrew: Frontend Engineer',
  description: 'Frontend Engineer portfolio',
  icons: {
    icon: [
      { url: '/ico/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/ico/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/ico/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark')}else{document.documentElement.classList.add('light')}}catch(e){}})()` }} />
      </head>
      <body>
        <ThemeProvider>
          <ContactModalProvider>
            {children}
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
