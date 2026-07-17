import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { assetPath } from '@/lib/asset-path'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: 'Abdelrahman Ameen | Portfolio',
  description: 'Technical Game Designer and Graphics Programmer working in Unreal Engine, C++, and real-time rendering.',
  keywords: ['Technical Game Design', 'Graphics Programming', 'Unreal Engine', 'VR Development', 'Vulkan', 'C++', 'Portfolio'],
  authors: [{ name: 'Abdelrahman Ameen' }],
  creator: 'Abdelrahman Ameen',
  publisher: 'Abdelrahman Ameen',
  openGraph: {
    title: 'Abdelrahman Ameen | Portfolio',
    description: 'Technical Game Designer and Graphics Programmer working in Unreal Engine, C++, and real-time rendering.',
    type: 'website',
    url: 'https://budi641.github.io/My_Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrahman Ameen | Portfolio',
    description: 'Technical Game Designer and Graphics Programmer working in Unreal Engine, C++, and real-time rendering.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href={assetPath("/tabicon.svg")} type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
