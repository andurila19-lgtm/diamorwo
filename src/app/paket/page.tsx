import React from 'react';
import { packagesData } from '@/data/packages';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Paket Pernikahan Boyolali & Solo Raya — MANTU Wedding Organizer',
  description: 'Pilihan paket pernikahan lengkap adat Jawa & modern di Boyolali. Paket Permata, Zamrud, Mutiara, Lamaran, Siraman, dan Intimate Wedding.',
};

export default function PackagesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Katalog Eksklusif"
        title="Paket Pernikahan MANTU"
        description="Pilihan paket pernikahan fleksibel dan transparan untuk mewujudkan perayaan sakral keluarga Anda di Boyolali dan Solo Raya."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Paket Pernikahan' },
        ]}
      />

      {/* Grid of All Packages - Compact on Mobile */}
      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
            {packagesData.map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-surface-container-low hover:bg-white flex flex-col justify-between rounded-sm shadow-sm overflow-hidden"
              >
                <div className="flex sm:flex-col">
                  {/* Side-by-side image on mobile */}
                  <div className="w-2/5 sm:w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-black/5 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h2 className="font-display text-base sm:text-2xl text-primary font-semibold leading-snug">
                          {pkg.name}
                        </h2>
                        {pkg.badge && (
                          <span className="bg-gold-shimmer text-primary text-[9px] sm:text-[10px] px-2 py-0.5 uppercase tracking-wider font-bold whitespace-nowrap rounded-sm">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-[11px] sm:text-xs text-on-surface-variant mb-2 line-clamp-2 font-light">
                        {pkg.shortDesc}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className="text-[10px] font-body px-2 py-0.5 rounded bg-black/5 text-on-surface-variant">
                          {pkg.venueIncluded ? 'Venue ✓' : 'Non-Venue'}
                        </span>
                        <span className="text-[10px] font-body px-2 py-0.5 rounded bg-secondary/10 text-secondary font-medium">
                          {pkg.cateringIncluded ? 'Katering ✓' : 'Non-Katering'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase text-outline block">Mulai</span>
                        <p className="font-display text-sm sm:text-xl text-primary font-bold">{pkg.price}</p>
                      </div>
                      <a
                        href={`/paket/${pkg.slug}`}
                        className="px-3.5 py-1.5 sm:px-5 sm:py-2 bg-primary text-on-primary text-[10px] sm:text-xs uppercase font-label-md rounded-sm font-semibold tracking-wider hover:bg-primary-container"
                      >
                        Detail
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry Section - Compact */}
      <section className="bg-ivory-surface py-10 sm:py-16 md:py-20 border-t border-outline-variant/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4">
          <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block">
            Konsultasi Fleksibel
          </span>
          <h3 className="font-display text-xl sm:text-3xl text-primary font-semibold leading-snug">
            Butuh Penyesuaian Anggaran &amp; Konsep Adat Khusus?
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
            Setiap keluarga memiliki tradisi unik. Tim perencana MANTU siap membuatkan simulasi paket kustom sesuai jumlah undangan Anda.
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/6281575200000?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20paket%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] bg-primary hover:bg-primary-container text-on-primary px-6 sm:px-8 font-label-md text-[11px] sm:text-xs tracking-widest uppercase rounded-sm font-semibold transition-colors shadow-sm"
            >
              Konsultasi Custom via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
