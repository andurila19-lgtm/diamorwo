import type { Metadata } from 'next';
import { Bodoni_Moda, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollReveal from '@/components/ScrollReveal';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Paket Pernikahan Boyolali — Wedding Organizer Terbaik | Galipat Wedding Organizer",
  description: "Paket Pernikahan Boyolali & Solo Raya dari Galipat Wedding Organizer — WO profesional terpercaya. Pilihan Permata, Zamrud, Mutiara, catering, dekorasi, vendor kurasi. Konsultasi gratis!",
  keywords: ["paket pernikahan boyolali", "wedding organizer boyolali", "WO solo raya", "galipat wedding organizer", "galipat wo"],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Galipat Wedding Organizer",
              "alternateName": ["Galipat WO", "Kantor Galipat Wedding Organizer"],
              "description": "Galipat Wedding Organizer — Partner for your Wedding Party. Jasa Pernikahan dan Wedding Organizer terpercaya di Boyolali dan Solo Raya.",
              "url": "https://galipatwo.com",
              "telephone": "+6288902968424",
              "email": "galipat.weddingorganizer@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Prof. Soeharso Tegalmulyo Timur No.4, Karanggeneng",
                "addressLocality": "Boyolali",
                "addressRegion": "Jawa Tengah",
                "postalCode": "57312",
                "addressCountry": "ID"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+6288902968424",
                  "contactType": "customer service & wedding consultation",
                  "areaServed": "ID",
                  "availableLanguage": ["Indonesian", "Javanese"]
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "76"
              },
              "sameAs": [
                "https://linktr.ee/galipatwo",
                "mailto:galipat.weddingorganizer@gmail.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${bodoni.variable} ${openSans.variable} font-body bg-background text-on-surface`}>
        <Navbar />
        <ScrollReveal>
          <main className="min-h-screen">
            {children}
          </main>
        </ScrollReveal>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
