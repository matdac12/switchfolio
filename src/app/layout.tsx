import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "0xmatti - Portfolio",
    template: "%s | 0xmatti",
  },
  description:
    "Portfolio of 0xmatti - Software Engineer specializing in AI, Data Analysis, and Trading.",
  keywords: [
    "0xmatti",
    "Portfolio",
    "Software Engineer",
    "AI",
    "Data Analysis",
    "Trading",
  ],
  authors: [{ name: "0xmatti" }],
  creator: "0xmatti",
  metadataBase: new URL("https://0xmatti.com"),
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
    title: "0xmatti - Portfolio",
    description:
      "Portfolio of 0xmatti - Software Engineer specializing in AI, Data Analysis, and Trading.",
    url: "https://0xmatti.com",
    siteName: "0xmatti",
    images: [
      {
        url: "/assets/Images/meta/dontstop.JPG",
        width: 1200,
        height: 630,
        alt: "0xmatti - Portfolio",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0xmatti - Portfolio",
    description:
      "Portfolio of 0xmatti - Software Engineer specializing in AI, Data Analysis, and Trading.",
    images: ["/assets/Images/meta/dontstop.JPG"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
