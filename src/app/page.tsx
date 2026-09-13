'use client';

import React, { useState, useEffect } from 'react';
import { packagesData } from '@/data/packages';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/mantu-team-hero.jpg',
      alt: 'Diamor Wedding & Event Organizer Ponorogo',
      title: 'Elegance in Every Detail',
      subtitle: 'Making your moments more memorable — Solusi perencanaan dan pengorganisasian pernikahan & event di Ponorogo and beyond.',
    },
    {
      image: '/images/hero-portrait.png',
      alt: 'Pernikahan Elegan Diamor Organizer',
      title: 'Perayaan Sakral Penuh Keanggunan',
      subtitle: 'Memadukan keindahan tradisi adat dan estetika modern dalam harmoni yang tertata rapi.',
    },
    {
      image: '/images/ballroom-candid.png',
      alt: 'Resepsi Tertata Rapi Diamor Organizer',
      title: 'Manajemen Acara Tanpa Rasa Cemas',
      subtitle: 'Master rundown presisi dan koordinasi vendor terpadu agar keluarga dapat menikmati momen bahagia.',
    },
    {
      image: '/images/joglo-pendopo.jpg',
      alt: 'Intimate Wedding & Event Organizer Ponorogo',
      title: 'Momen Hangat & Penuh Makna',
      subtitle: 'Setiap detik perayaan dirancang dengan dedikasi tinggi demi kenyamanan kedua keluarga besar.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 pb-12 sm:pt-24 sm:pb-16">
        {/* Background Crossfade Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}

        {/* Hero Overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 text-center text-on-primary my-auto">
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-6">
            <div className="flex justify-center mb-1 sm:mb-2">
              <img
                src="/images/diamor-emblem.png"
                alt="Diamor Organizer Emblem"
                className="h-10 sm:h-14 w-auto object-contain drop-shadow-[0_4px_16px_rgba(239,207,88,0.5)]"
                width={120}
                height={48}
              />
            </div>
            <span className="inline-block font-label-md text-[11px] sm:text-xs tracking-[0.25em] uppercase text-gold-shimmer font-semibold">
              Diamor Wedding &amp; Event Organizer • Ponorogo
            </span>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-[1.14] tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="font-body text-xs sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-row items-center justify-center gap-2.5 sm:gap-4">
              <a
                href="/paket"
                className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-5 sm:px-8 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-sm"
              >
                Pilihan Layanan
              </a>
              <a
                href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-4 sm:px-8 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold"
              >
                Konsultasi WA
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-12">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentSlide ? 'w-6 sm:w-8 bg-gold-shimmer' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS BENTO RIBBON - VERIFIED DATA */}
      <section className="bg-white border-b border-outline-variant/30 py-4 sm:py-8">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">5,0 ⭐</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">5 Ulasan Google Terverifikasi</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">±2.497</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Followers @diamor.organizer</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">08.00–22.00</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Buka Setiap Hari (Google)</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">100%</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Elegance in Every Detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - COMPACT BENTO GRID */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1.5">
              Tantangan Mempersiapkan Acara
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Apakah Anda Mengkhawatirkan Hal Ini?
            </h2>
          </div>

          {/* Bento Grid: 2-col on mobile, 3-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">schedule</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Waktu Terbatas?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Padatnya pekerjaan membuat koordinasi puluhan kebutuhan acara terasa melelahkan.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">search</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Bingung Memilih WO / EO?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Mencari tim yang profesional, komunikatif, dan memperhatikan setiap detail dengan cermat.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">hub</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Vendor Terpecah-pecah?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Sulit menyelaraskan komunikasi antara dekorasi, katering, foto-video, dan MC.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">location_on</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Area Ponorogo &amp; Sekitarnya?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Memerlukan tim yang menguasai alur acara lokal di Ponorogo and beyond.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">payments</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Anggaran Tidak Terarah?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Khawatir pengeluaran membengkak tanpa rencana anggaran yang terstruktur.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">warning</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Khawatir Acara Berantakan?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Tanpa master rundown yang presisi, jalannya acara berisiko molor dan canggung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - BENTO COMPOSITION */}
      <section className="py-10 sm:py-16 md:py-20 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Image Tile */}
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/5] overflow-hidden rounded-sm border border-white/20 shadow-sm bg-black/10">
                <img
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-opacity duration-300"
                  src="/images/hero-portrait.png"
                  alt="Diamor Wedding & Event Organizer Ponorogo"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
            </div>

            {/* Content & Bento Advantage Cards */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <span className="font-label-md text-gold-shimmer text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                  Solusi Bersama Diamor
                </span>
                <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
                  Elegance in Every Detail. Menghadirkan Momen Berkesan dan Penuh Ketenangan.
                </h2>
              </div>

              {/* 2x2 Bento Mini Tiles */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">auto_awesome</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Detail Oriented</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Memperhatikan setiap sudut visual &amp; waktu.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">self_improvement</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Ketenangan Keluarga</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Pendampingan penuh agar keluarga fokus bersyukur.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">hub</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Koordinasi Terpadu</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Satu pintu komunikasi untuk seluruh kebutuhan.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">timer</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Rundown Presisi</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Akad, tradisi adat, hingga resepsi berjalan tertib.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES - BENTO CARDS */}
      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-6 sm:mb-12">
            <div>
              <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Katalog Layanan
              </span>
              <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
                Pilihan Layanan Diamor Organizer
              </h2>
            </div>
            <a
              href="/paket"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-label-md uppercase tracking-wider text-primary hover:text-gold-shimmer font-semibold"
            >
              Semua Layanan <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {packagesData.slice(0, 3).map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-surface-container-low hover:bg-white rounded-sm shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div className="flex sm:flex-col">
                  {/* Image side-by-side on mobile */}
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
                        <h3 className="font-display text-sm sm:text-lg text-primary font-semibold leading-tight">{pkg.name}</h3>
                        {pkg.badge && (
                          <span className="bg-gold-shimmer text-primary text-[9px] px-1.5 py-0.5 uppercase tracking-wider font-bold rounded-sm">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-[11px] sm:text-xs text-on-surface-variant line-clamp-2 font-light mb-2">
                        {pkg.shortDesc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase text-outline block">Paket Fleksibel</span>
                        <p className="font-display text-xs sm:text-base text-primary font-bold">{pkg.price}</p>
                      </div>
                      <a
                        href={`/paket/${pkg.slug}`}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-on-primary text-[10px] sm:text-xs uppercase font-label-md rounded-sm font-semibold tracking-wider hover:bg-primary-container"
                      >
                        Detail
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <a
              href="/paket"
              className="inline-flex items-center justify-center min-h-[42px] w-full bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold shadow-sm"
            >
              Lihat Semua Layanan ({packagesData.length})
            </a>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES - BENTO TILES */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-surface border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
              Ruang Lingkup Acara
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
              Keahlian Pengorganisasian Acara
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white border border-outline-variant/30 p-3 sm:p-5 rounded-sm text-center space-y-1.5 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">celebration</span>
              <h3 className="font-display text-xs sm:text-sm text-primary font-semibold">Wedding Organizer</h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant font-light">Perencanaan &amp; eksekusi pernikahan impian.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-3 sm:p-5 rounded-sm text-center space-y-1.5 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">event</span>
              <h3 className="font-display text-xs sm:text-sm text-primary font-semibold">Event Organizer</h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant font-light">Corporate, gathering, &amp; perayaan istimewa.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-3 sm:p-5 rounded-sm text-center space-y-1.5 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">favorite</span>
              <h3 className="font-display text-xs sm:text-sm text-primary font-semibold">Lamaran &amp; Engagement</h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant font-light">Momen pertemuan dua keluarga yang santun.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-3 sm:p-5 rounded-sm text-center space-y-1.5 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">spa</span>
              <h3 className="font-display text-xs sm:text-sm text-primary font-semibold">Prosesi Tradisi &amp; Siraman</h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant font-light">Menjaga kesakralan tata krama adat Jawa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY - BENTO MOSAIC */}
      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-4 sm:mb-10">
            <div>
              <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Portofolio Visual
              </span>
              <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
                Galeri Inspirasi Diamor
              </h2>
            </div>
            <a
              href="/galeri"
              className="text-xs font-label-md uppercase tracking-wider text-primary hover:text-gold-shimmer font-semibold flex items-center gap-1"
            >
              Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Bento Mosaic Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
            <a href="/galeri" className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/mantu-team-hero.jpg" alt="Galeri Diamor Organizer" loading="lazy" />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
              </div>
            </a>
            <a href="/galeri" className="aspect-square overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/hero-portrait.png" alt="Galeri Adat Tradisional" loading="lazy" />
            </a>
            <a href="/galeri" className="aspect-square overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/ballroom-candid.png" alt="Galeri Resepsi Modern" loading="lazy" />
            </a>
            <a href="/galeri" className="col-span-2 sm:col-span-2 aspect-[2/1] overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/joglo-pendopo.jpg" alt="Galeri Intimate Venue" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary text-on-primary py-10 sm:py-16 md:py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-5">
          <div className="flex justify-center mb-1">
            <img
              src="/images/diamor-logo-horizontal-white.png"
              alt="Diamor Organizer"
              className="h-10 sm:h-12 w-auto object-contain"
              width={200}
              height={44}
            />
          </div>
          <span className="font-label-md text-gold-shimmer text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold block">
            Langkah Awal Ketenangan Acara Anda
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
            Wujudkan Acara Impian Bersama Diamor Wedding &amp; Event Organizer
          </h2>
          <p className="font-body text-xs sm:text-base text-white/85 font-light leading-relaxed max-w-lg mx-auto italic">
            &quot;Elegance in every detail. Making your moments more memorable&quot;
          </p>
          <p className="font-body text-xs text-white/70 max-w-md mx-auto">
            Buka setiap hari (08.00–22.00 WIB) di Ponorogo. Konsultasikan tanggal, konsep acara, dan preferensi anggaran Anda bersama tim kami.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-5 sm:px-7 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-sm"
            >
              WhatsApp 0821-3256-0310
            </a>
            <a
              href="https://instagram.com/diamor.organizer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-4 sm:px-6 border border-white/30 hover:bg-white/10 text-white font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold"
            >
              Instagram @diamor.organizer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
