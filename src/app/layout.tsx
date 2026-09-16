import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const baseUrl = "https://mhamane.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#efeae2",
};

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | Architecture & Construction · Solapur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Vishwa Associates",
    "Solapur architects",
    "interior design Solapur",
    "house construction Maharashtra",
    "property valuation",
    "Vishal Mhamane",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: baseUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Vishwa Associates — Architecture, Interiors, Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/og-share.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
