import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "Zebdine Festival 2025 - مهرجان زبدين ٢٠٢٥",
  description: "Traditional Lebanese cuisine festival menu - قائمة مهرجان الطعام اللبناني التقليدي",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, ${notoSansArabic.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-arabic: ${notoSansArabic.variable};
}
        `}</style>
      </head>
      <body className={`${notoSansArabic.variable}`}>{children}</body>
    </html>
  )
}
