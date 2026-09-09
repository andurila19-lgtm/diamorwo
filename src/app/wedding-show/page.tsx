import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Wedding Show & Showcase Pameran — MANTU Wedding Organizer Boyolali',
  description: 'Jadwal pameran dan wedding showcase MANTU di Boyolali dan Solo Raya. Dapatkan promo eksklusif, cashback vendor, dan konsultasi gratis.',
};

export default function WeddingShowPage() {
  const events = [
    {
      title: 'MANTU Royal Heritage Wedding Showcase 2025',
      date: '18 - 20 Oktober 2025',
      location: 'Grand Ballroom The Heritage Boyolali',
      time: '10.00 - 21.00 WIB',
      desc: 'Pameran pernikahan terbesar di Boyolali menghadirkan 35+ vendor kurasi terbaik: dekorasi pelaminan gebyok, perias paes ageng, katering nusantara, dan fotografer profesional.',
      promo: 'Cashback Vendor s/d Rp 5.000.000 + Free Upgrade Photobooth',
      status: 'Akan Datang',
    },
    {
      title: 'Solo Raya Intimate Wedding Fair',
      date: '15 - 17 November 2025',
      location: 'Pendopo Ageng Siswodipuran Boyolali',
      time: '11.00 - 20.00 WIB',
      desc: 'Showcase khusus bagi calon pengantin yang mendambakan konsep intimate wedding berbalut nuansa tradisi Jawa klasik dan modern minimalis.',
      promo: 'Free Testing Food Katering & Konsultasi Adat Gratis',
      status: 'Akan Datang',
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Pameran &amp; Event"
        title="Wedding Show MANTU"
        description="Temui tim MANTU dan vendor-vendor pilihan kami secara langsung di acara pameran pernikahan Boyolali &amp; Solo Raya."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Wedding Show' },
        ]}
      />

      {/* Events List */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {events.map((ev) => (
              <article
                key={ev.title}
                className="bg-white border border-outline-variant/30 p-6 sm:p-8 shadow-sm hover:border-gold-shimmer transition-colors space-y-6 rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-gold-shimmer text-primary text-[10px] px-2.5 py-1 uppercase tracking-widest font-bold rounded-sm">
                      {ev.status}
                    </span>
                    <span className="text-xs text-on-surface-variant/70 font-body">{ev.time}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold leading-snug">
                    {ev.title}
                  </h2>

                  <div className="space-y-2 text-xs sm:text-sm text-on-surface-variant font-body">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">calendar_month</span>
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base">location_on</span>
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {ev.desc}
                  </p>

                  <div className="p-4 bg-surface-container-low border border-secondary/20 rounded-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary block mb-1">
                      Penawaran Eksklusif di Tempat:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-primary">{ev.promo}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                      `Halo MANTU, saya ingin reservasi tiket / undangan khusus untuk ${ev.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[44px] w-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors shadow-sm"
                  >
                    Daftar Undangan VIP Gratis
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
