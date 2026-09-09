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
  title: "Paket Pernikahan Boyolali — Wedding Organizer Terbaik | MANTU",
  description: "Paket Pernikahan Boyolali & Solo Raya dari MANTU — wedding organizer terpercaya sejak 2016. Pilihan Permata, Zamrud, Mutiara, catering, dekorasi, vendor kurasi. Konsultasi gratis!",
  keywords: ["paket pernikahan boyolali", "wedding organizer boyolali", "WO solo raya", "mantu wedding organizer"],
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
              "name": "Mantu Wedding Organizer Boyolali",
              "alternateName": "MANTU WO",
              "description": "Jasa Pernikahan dan Wedding Organizer terbaik & terpercaya di Boyolali dan Solo Raya.",
              "url": "https://mantuwo.com",
              "telephone": "+6281575200000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Merapi No.50, Surowedana, Pulisen",
                "addressLocality": "Boyolali",
                "addressRegion": "Jawa Tengah",
                "postalCode": "57316",
                "addressCountry": "ID"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "72"
              },
              "sameAs": [
                "https://instagram.com/mantu_wo",
                "https://linktr.ee/mantu_wo"
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
