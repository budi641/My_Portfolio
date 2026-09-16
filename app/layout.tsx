import type { Metadata } from "next"
import { Patrick_Hand } from "next/font/google"
import "./globals.css"
import { assetPath } from "@/lib/asset-path"
import { content } from "@/lib/content"
import { jsonLd, seo } from "@/lib/seo"

const hand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
})

const pageUrl = content.site.url.replace(/\/$/, "")
const ogImage = `${pageUrl}${seo.ogImage.startsWith("/") ? seo.ogImage : `/${seo.ogImage}`}`

export const metadata: Metadata = {
  metadataBase: new URL(`${pageUrl}/`),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: content.site.name, url: pageUrl }],
  creator: content.site.name,
  publisher: content.site.name,
  category: "portfolio",
  applicationName: `${content.site.name} Portfolio`,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${pageUrl}/`,
  },
  icons: {
    icon: [{ url: assetPath("/images/joystick.png"), type: "image/png" }],
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: `${pageUrl}/`,
    siteName: content.site.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 765,
        alt: `${content.site.name}, technical game designer and game developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImage],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
