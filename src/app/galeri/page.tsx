'use client';

import React, { useState } from 'react';
import { galleryData } from '@/data/gallery';
import PageHeader from '@/components/PageHeader';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [activeLightbox, setActiveLightbox] = useState<any>(null);

  const categories = ['Semua', 'Adat Jawa', 'Modern Ballroom', 'Intimate Joglo', 'Detail & Ritual'];

  const filteredItems = activeCategory === 'Semua'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <main>
      <PageHeader
        eyebrow="Inspirasi &amp; Portofolio"
        title="Galeri Inspirasi Diamor"
        description="Dokumentasi visual dan ragam inspirasi tata rias, busana, prosesi adat, serta dekorasi perhelatan pernikahan dan acara istimewa di Ponorogo and beyond."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Galeri Inspirasi' },
        ]}
      />

      {/* Filter Tabs */}
      <section className="py-8 sm:py-10 bg-ivory-surface border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[40px] px-4 sm:px-6 py-2 font-label-md uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer font-semibold ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-white border border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative block aspect-square overflow-hidden rounded-sm bg-surface-container border border-outline-variant/30 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-opacity duration-300"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-shimmer font-semibold">{item.category}</span>
                  <h3 className="font-display text-base font-semibold leading-tight">{item.couple}</h3>
                  <p className="text-xs text-white/70 font-light">{item.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="modal-backdrop active" onClick={() => setActiveLightbox(null)}>
          <div className="modal-container max-w-3xl overflow-hidden p-0 rounded-sm" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Tutup Pratinjau"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase text-gold-shimmer tracking-widest">{activeLightbox.category}</span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary">{activeLightbox.couple}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light">{activeLightbox.venue}</p>
                </div>
                <a
                  href={`https://wa.me/6282132560310?text=${encodeURIComponent(
                    `Halo Diamor Wedding & Event Organizer, saya tertarik dengan inspirasi ${activeLightbox.couple} (${activeLightbox.category})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary px-6 py-2.5 font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold hover:bg-primary-container transition-colors gap-2"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Tanya Konsep Ini
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
