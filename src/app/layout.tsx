import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Mattia Da Campo - Portfolio",
    template: "%s | Mattia Da Campo"
  },
  description: "Portfolio of Mattia Da Campo - Software Engineer and Professional Basketball Player specializing in AI, Data Analysis, and Trading.",
  keywords: ["Mattia Da Campo", "Portfolio", "Software Engineer", "Basketball Player", "AI", "Data Analysis", "Trading"],
  authors: [{ name: "Mattia Da Campo" }],
  creator: "Mattia Da Campo",
  metadataBase: new URL("https://mattiadacampo.com"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Mattia Da Campo - Portfolio",
    description: "Portfolio of Mattia Da Campo - Software Engineer and Professional Basketball Player specializing in AI, Data Analysis, and Trading.",
    url: "https://mattiadacampo.com",
    siteName: "Mattia Da Campo",
    images: [
      {
        url: "https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png",
        width: 1200,
        height: 630,
        alt: "Mattia Da Campo - Portfolio"
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattia Da Campo - Portfolio",
    description: "Portfolio of Mattia Da Campo - Software Engineer and Professional Basketball Player specializing in AI, Data Analysis, and Trading.",
    images: ["https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png"],
    creator: "@0xmatti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
