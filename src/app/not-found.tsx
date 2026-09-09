import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function NotFound() {
  return (
    <main>
      <PageHeader
        eyebrow="404 Error"
        title="Halaman Tidak Ditemukan"
        description="Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: '404' },
        ]}
      />

      <section className="py-16 sm:py-20 md:py-24 bg-surface text-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 space-y-6">
          <p className="font-body text-sm sm:text-base text-on-surface-variant font-light">
            Silakan kembali ke beranda atau lihat pilihan paket pernikahan kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center min-h-[44px] px-6 bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors"
            >
              Kembali ke Beranda
            </a>
            <a
              href="/paket"
              className="inline-flex items-center justify-center min-h-[44px] px-6 border border-primary text-primary hover:bg-primary hover:text-white font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors"
            >
              Lihat Paket
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
