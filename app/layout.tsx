import type { Metadata } from 'next'
import './globals.css'
import { assetPath } from '@/lib/asset-path'

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
    <html lang="en">
      <head>
        <link rel="icon" href={assetPath("/tabicon.svg")} type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
