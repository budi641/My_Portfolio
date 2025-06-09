import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdelrahman Ameem | Portfolio',
  description: 'Welcome to my portfolio website showcasing my projects and skills',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
