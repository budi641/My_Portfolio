import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdelrahman Ameen | Portfolio',
  description: 'Gameplay & Graphics Programmer specializing in Unreal Engine and VR development with modern rendering techniques.',
  keywords: ['Game Development', 'Graphics Programming', 'Unreal Engine', 'VR Development', 'Vulkan', 'C++', 'Portfolio'],
  authors: [{ name: 'Abdelrahman Ameen' }],
  creator: 'Abdelrahman Ameen',
  publisher: 'Abdelrahman Ameen',
  openGraph: {
    title: 'Abdelrahman Ameen | Portfolio',
    description: 'Gameplay & Graphics Programmer specializing in Unreal Engine and VR development with modern rendering techniques.',
    type: 'website',
    url: 'https://budi641.github.io/My_Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrahman Ameen | Portfolio',
    description: 'Gameplay & Graphics Programmer specializing in Unreal Engine and VR development with modern rendering techniques.',
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
        <link rel="icon" href={(process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '') + '/tabicon.svg'} type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
