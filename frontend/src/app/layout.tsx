import type { Metadata, Viewport } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./vendor.css";
import "./globals.css";
import ScriptsAndProviders from "@/utils/ScriptsAndProviders";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { IconSprite } from '@/components/utility/IconSprite';
import { dmSans, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Pathivara Baby Store - Everything Your Little One Needs | Baby Products in Itahari",
  description: "Shop premium baby products at Pathivara Baby Store. Find baby clothes, shoes, toys, feeding essentials, nursery items, and more. Safe, quality products for newborns, infants, and toddlers. Fast delivery across Nepal.",
  keywords: [
    "baby store Itahari",
    "baby products Itahari",
    "baby clothes Itahari",
    "baby shoes",
    "infant clothing",
    "newborn essentials",
    "baby toys Itahari",
    "baby feeding products",
    "nursery items Itahari",
    "toddler clothes",
    "baby care products",
    "Pathivara Baby Store",
    "baby shop Itahari",
    "online baby store Itahari",
    "baby accessories",
    "baby gift items",
    "maternity products Itahari",
    "baby diapers Itahari",
    "baby strollers Itahari",
    "baby bedding",
    "safe baby products",
    "premium baby store",
  ],
  authors: [{ name: "Pathivara Baby Store" }],
  creator: "Pathivara Baby Store",
  publisher: "Pathivara Baby Store",
  metadataBase: new URL("https://pathivarababystore.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon_io/favicon-16x16.png',
  //       sizes: '16x16',
  //       type: 'image/png'
  //     },
  //     {
  //       url: '/favicon_io/favicon-32x32.png',
  //       sizes: '32x32',
  //       type: 'image/png'
  //     },
  //     {
  //       url: '/favicon_io/android-chrome-192x192.png',
  //       sizes: '192x192',
  //       type: 'image/png'
  //     },
  //     {
  //       url: '/favicon_io/android-chrome-512x512.png',
  //       sizes: '512x512',
  //       type: 'image/png'
  //     },
  //     {
  //       url: '/favicon_io/favicon.ico',
  //       sizes: '32x32'
  //     },
  //   ],
  //   shortcut: '/favicon_io/favicon.ico',
  //   apple: '/favicon_io/apple-touch-icon.png',
  // },
  // manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Pathivara Baby Store - Premium Baby Products & Essentials",
    description: "Your trusted destination for quality baby products in Itahari. Shop baby clothes, shoes, toys, feeding essentials, and nursery items. Safe products for your little ones.",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Pathivara Baby Store",
    // images: [
    //   {
    //     url: "/images/preview.webp",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pathivara Baby Store - Premium Baby Products",
    //   }
    // ],
  },
  category: "E-commerce",
  classification: "Baby & Kids Retail Store",
  referrer: "origin-when-cross-origin",
  applicationName: "Pathivara Baby Store",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        {/* <script
          type="application/ld+json"
          <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify("structured_data_from_constants"),
          }}
        /> */}
        {/* <Script id="check-plugins" strategy="afterInteractive">
          {`
            console.log('jQuery loaded:', typeof window.$ !== 'undefined');
            console.log('easyPieChart loaded:', typeof window.$.fn.easyPieChart !== 'undefined');
          `}
        </Script> */}
      </head>

      <body
        className={`${dmSans.variable} ${inter.variable}`}
        suppressHydrationWarning={true}
      >
        <ScriptsAndProviders>
          <IconSprite />
          {children}
        </ScriptsAndProviders>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
