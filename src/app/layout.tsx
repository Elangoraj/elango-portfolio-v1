import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import cvData from "../data/cv_info.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const siteUrl = "https://elangoraj.web.app";
const title = `${cvData.personalInfo.name} | AI Lead & Data Scientist`;
const description =
  "AI Lead & Data Scientist in London with 10 years of experience designing and scaling AI, ML and Generative AI: RAG, multi-agent systems and document AI for financial services and insurance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Elangoraj Thiruppandiaraj",
    "Elango Raj",
    "AI Lead",
    "Multi-Agent Systems",
    "Generative AI",
    "Document AI",
    "Machine Learning",
    "Data Scientist",
    "RAG",
    "LLM",
    "London",
  ],
  authors: [{ name: cvData.personalInfo.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: cvData.personalInfo.name,
    images: [{ url: "/images/web/og-image.jpg", width: 1200, height: 630, alt: cvData.personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/web/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// Applies the saved (or system) theme before first paint to avoid a flash of the wrong theme
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cvData.personalInfo.name,
  jobTitle: "AI Lead & Data Scientist",
  worksFor: { "@type": "Organization", name: "Just Group plc" },
  url: siteUrl,
  image: `${siteUrl}/images/web/headshot.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  alumniOf: cvData.education.map((e) => e.institution),
  sameAs: Object.values(cvData.personalInfo.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
