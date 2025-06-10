import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdelrahman Ameen | Portfolio',
  description: 'Created with v0',
  generator: 'v0.dev',
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
