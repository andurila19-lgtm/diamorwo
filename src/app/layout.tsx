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
  title: "Diamor Wedding & Event Organizer di Ponorogo — Elegance in Every Detail",
  description: "Diamor Wedding & Event Organizer di Ponorogo and beyond. “Elegance in every detail. Making your moments more memorable”. Jasa WO & EO profesional, konsultasi setiap hari 08.00–22.00.",
  keywords: [
    "diamor wedding organizer",
    "diamor event organizer",
    "diamor organizer",
    "wedding organizer ponorogo",
    "event organizer ponorogo",
    "wo ponorogo",
    "paket pernikahan ponorogo",
    "eo ponorogo"
  ],
  icons: {
    icon: '/images/diamor-logo.png',
    apple: '/images/diamor-logo.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/images/mantu-team-hero.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is supported in modern browsers
          fetchpriority="high"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanningCompany",
              "name": "Diamor Wedding & Event Organizer",
              "alternateName": ["Diamor Organizer", "Diamor Wedding Organizer", "Diamor WO Ponorogo"],
              "logo": "https://diamororganizer.com/images/diamor-logo.png",
              "image": "https://diamororganizer.com/images/diamor-logo.png",
              "description": "Elegance in every detail. Making your moments more memorable. Jasa Wedding Organizer dan Event Organizer terpercaya di Ponorogo and beyond.",
              "url": "https://diamororganizer.com",
              "telephone": "+6282132560310",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Anilo No.42, Segading, Pakunden, Kec. Ponorogo",
                "addressLocality": "Ponorogo",
                "addressRegion": "Jawa Timur",
                "postalCode": "63416",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "ID"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "22:00"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+6282132560310",
                  "contactType": "customer service & wedding consultation",
                  "areaServed": "ID",
                  "availableLanguage": ["Indonesian", "Javanese"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+6283142141017",
                  "contactType": "event consultation via instagram",
                  "areaServed": "ID",
                  "availableLanguage": ["Indonesian", "Javanese"]
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "5"
              },
              "sameAs": [
                "https://instagram.com/diamor.organizer"
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
