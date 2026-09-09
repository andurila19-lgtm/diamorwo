import React from 'react';
import { notFound } from 'next/navigation';
import { tipsData } from '@/data/tips';
import PageHeader from '@/components/PageHeader';

export async function generateStaticParams() {
  return tipsData.map((tip) => ({
    slug: tip.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = tipsData.find((t) => t.slug === slug);
  if (!tip) return { title: 'Artikel Tidak Ditemukan | MANTU' };
  return {
    title: `${tip.title} — Tips Pernikahan | MANTU`,
    description: tip.excerpt,
  };
}

export default async function TipDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = tipsData.find((t) => t.slug === slug);

  if (!tip) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        eyebrow={`Artikel • ${tip.category}`}
        title={tip.title}
        description={`Dipublikasikan pada ${tip.date} • Estimasi baca ${tip.readTime}`}
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tips Pernikahan', href: '/tips' },
          { label: tip.title },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-sm mb-8 sm:mb-10 border border-outline-variant/30 shadow-sm bg-black/5">
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-full object-cover"
              width={900}
              height={500}
            />
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 border border-outline-variant/30 rounded-sm shadow-sm space-y-6 text-on-surface leading-relaxed font-body">
            {tip.content.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed text-on-surface-variant font-light">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-surface-container-low border border-outline-variant/30 text-center space-y-4 rounded-sm">
            <h3 className="font-display text-lg sm:text-xl text-primary font-semibold">
              Ingin Berkonsultasi Seputar Konsep Acara Anda?
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light max-w-xl mx-auto leading-relaxed">
              Tim kurator MANTU siap mendampingi Anda memilih adat yang tepat, menghitung porsi katering, dan menyusun rundown hari-H.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20MANTU%2C%20saya%20ingin%20konsultasi%20pernikahan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] bg-primary hover:bg-primary-container text-on-primary px-8 font-label-md uppercase tracking-widest text-xs rounded-sm font-semibold transition-colors shadow-sm"
              >
                Konsultasi WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
