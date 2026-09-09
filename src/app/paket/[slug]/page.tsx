import React from 'react';
import { notFound } from 'next/navigation';
import { packagesData } from '@/data/packages';
import PageHeader from '@/components/PageHeader';

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: 'Paket Tidak Ditemukan | MANTU' };
  return {
    title: `${pkg.name} — Paket Pernikahan Boyolali | MANTU`,
    description: pkg.shortDesc,
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        eyebrow="Rincian Paket Pernikahan"
        title={pkg.name}
        description={pkg.shortDesc}
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Paket Pernikahan', href: '/paket' },
          { label: pkg.name },
        ]}
        action={
          <div className="bg-white/10 border border-white/20 p-4 sm:p-5 rounded-sm text-right">
            <span className="text-[11px] text-white/70 uppercase tracking-widest block font-medium">Investasi Mulai</span>
            <span className="font-display text-2xl sm:text-3xl text-gold-shimmer font-bold block">{pkg.price}</span>
          </div>
        }
      />

      {/* Main Detail Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Image & Overview */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-outline-variant/30 shadow-sm bg-black/5">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  width={800}
                  height={500}
                />
              </div>

              <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-sm shadow-sm space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                  Gambaran Layanan &amp; Konsep
                </h2>
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                  {pkg.longDesc}
                </p>
              </div>

              {/* Tier Breakdown if available */}
              {pkg.tiers && (
                <div className="bg-ivory-surface p-6 sm:p-8 border border-outline-variant/30 rounded-sm space-y-5">
                  <h3 className="font-display text-lg sm:text-xl text-primary font-semibold">
                    Pilihan Skala Undangan (Tier)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pkg.tiers.map((t) => (
                      <div key={t.name} className="bg-white p-5 border border-outline-variant/30 text-center space-y-2 rounded-sm">
                        <h4 className="font-display text-sm sm:text-base font-semibold text-primary">{t.name}</h4>
                        <p className="text-xs text-on-surface-variant font-light">{t.pax}</p>
                        <p className="font-display text-base sm:text-lg text-secondary font-bold">{t.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Inclusions Checklist & Booking CTA */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 border-2 border-gold-shimmer/50 shadow-md rounded-sm space-y-6">
                <div>
                  <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                    Kelengkapan Fasilitas
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                    Termasuk Dalam Paket Ini
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-outline-variant/20 space-y-3">
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                      `Halo MANTU Wedding Organizer Boyolali, saya tertarik dan ingin konsultasi lebih lanjut mengenai ${pkg.name} (${pkg.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full min-h-[46px] px-6 bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Konsultasi via WhatsApp
                  </a>

                  <a
                    href="/wedding-calculator"
                    className="flex items-center justify-center min-h-[44px] w-full border border-primary text-primary hover:bg-primary hover:text-white font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors"
                  >
                    Hitung Anggaran Sendiri
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-low p-6 border border-outline-variant/30 text-center space-y-3 rounded-sm">
                <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                <h4 className="font-display text-base text-primary font-semibold">Konsultasi Tatap Muka</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed font-light">
                  Tim kurator MANTU siap menyambut Anda dan keluarga di kantor Boyolali untuk diskusi langsung dan bedah moodboard.
                </p>
                <p className="font-semibold text-xs text-primary">+62 812-3456-7890</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
