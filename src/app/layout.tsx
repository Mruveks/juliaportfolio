import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://juliamartinez.co";
const siteName = "Julia Martinez — Social Media Manager";
const siteDescription =
  "Social Media Manager pomagająca markom rosnąć w mediach społecznościowych. Strategia treści, wzrost na Instagramie, TikTok i analityka oparta na danych.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Julia Martinez",
  },
  description: siteDescription,
  keywords: [
    "social media manager",
    "strategia treści",
    "wzrost na instagramie",
    "treści tiktok",
    "marketing w mediach społecznościowych",
    "social media polska",
    "menadżer social media",
  ],
  authors: [{ name: "Julia Martinez" }],
  creator: "Julia Martinez",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Martinez — Social Media Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@juliamartinez",
    images: ["/images/og-image.jpg"],
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

// Replace with your actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Google Fonts — Inter + Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics 4 — replace GA_MEASUREMENT_ID with your actual ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
