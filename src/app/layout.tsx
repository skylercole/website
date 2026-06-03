import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { BASE_PATH, SITE } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const CANONICAL_HOME = `${SITE.url}${BASE_PATH}/`;

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: CANONICAL_HOME,
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: CANONICAL_HOME,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Helsinki",
    addressCountry: "FI",
  },
  founder: {
    "@type": "Person",
    name: "Stanislav Stoyanov-Pitkänen",
    jobTitle: "Solution Architect & Founder",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Solution Architecture",
    "Cloud Engineering",
    "Software Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary">
        <Script
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
          {...{
            "data-goatcounter": "https://300consulting.goatcounter.com/count",
          }}
        />
        {children}
      </body>
    </html>
  );
}
