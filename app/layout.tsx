import type { Metadata } from "next"
import { Patrick_Hand } from "next/font/google"
import "./globals.css"
import { assetPath } from "@/lib/asset-path"
import { content } from "@/lib/content"

const hand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
})

const { site } = content

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: content.home.text,
  keywords: ["Technical Game Design", "Graphics Programming", "Unreal Engine", "Vulkan", "C++", "Portfolio"],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: [{ url: assetPath("/images/joystick.png"), type: "image/png" }],
  },
  openGraph: {
    title: `${site.name} | Portfolio`,
    description: content.home.text,
    type: "website",
    url: site.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hand.variable} ${hand.className}`}>
      <head>
        <link rel="icon" href={assetPath("/images/joystick.png")} type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
