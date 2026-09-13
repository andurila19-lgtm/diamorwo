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
            <div className="p-2.5 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">5,0 ⭐</p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">5 Ulasan Google Terverifikasi</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">±2.497</p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Followers @diamor.organizer</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">08.00–22.00</p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Buka Setiap Hari (Google)</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">100%</p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Elegance in Every Detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - COMPACT BENTO GRID */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-bold block mb-1.5">
              Tantangan Mempersiapkan Acara
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Apakah Anda Mengkhawatirkan Hal Ini?
            </h2>
          </div>

          {/* Bento Grid: 1-col on small mobile, 2-col on tablet, 3-col on desktop for maximum legibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">schedule</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Waktu Terbatas?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Padatnya pekerjaan membuat koordinasi puluhan kebutuhan acara terasa melelahkan tanpa pendampingan profesional.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">search</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Bingung Memilih WO / EO?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Mencari tim yang profesional, komunikatif, dan memperhatikan setiap detail dengan cermat dan bertanggung jawab.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">hub</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Vendor Terpecah-pecah?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Sulit menyelaraskan komunikasi antara dekorasi, katering, foto-video, dan MC agar selaras satu visi.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">location_on</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Area Ponorogo &amp; Sekitarnya?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Memerlukan tim lokal yang menguasai alur acara adat, venue, dan jejaring vendor terbaik di Ponorogo and beyond.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">payments</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Anggaran Tidak Terarah?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Khawatir pengeluaran membengkak tanpa rencana anggaran terstruktur dan transparan sejak awal.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/40 p-4 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/60 transition-colors">
              <div className="space-y-2 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">warning</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary leading-snug">Khawatir Acara Berantakan?</h3>
                <p className="font-body text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  Tanpa master rundown yang presisi, jalannya acara berisiko molor, canggung, dan membuat keluarga panik.
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
                <span className="font-label-md text-gold-shimmer text-xs uppercase tracking-[0.2em] font-bold block mb-1">
                  Solusi Bersama Diamor
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
                  Elegance in Every Detail. Menghadirkan Momen Berkesan dan Penuh Ketenangan.
                </h2>
              </div>

              {/* Bento Mini Tiles: 1 col on mobile, 2 col on sm+ for maximum readability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="p-3.5 sm:p-4 bg-white/10 border border-white/20 rounded-sm space-y-1.5">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl">auto_awesome</span>
                  <h3 className="font-display text-sm sm:text-base text-white font-semibold leading-snug">Detail Oriented</h3>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">Memperhatikan setiap sudut visual, dekorasi, &amp; presisi waktu.</p>
                </div>
                <div className="p-3.5 sm:p-4 bg-white/10 border border-white/20 rounded-sm space-y-1.5">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl">self_improvement</span>
                  <h3 className="font-display text-sm sm:text-base text-white font-semibold leading-snug">Ketenangan Keluarga</h3>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">Pendampingan penuh agar pengantin &amp; keluarga fokus bersyukur.</p>
                </div>
                <div className="p-3.5 sm:p-4 bg-white/10 border border-white/20 rounded-sm space-y-1.5">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl">hub</span>
                  <h3 className="font-display text-sm sm:text-base text-white font-semibold leading-snug">Koordinasi Terpadu</h3>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">Satu pintu komunikasi untuk seluruh kebutuhan vendor acara.</p>
                </div>
                <div className="p-3.5 sm:p-4 bg-white/10 border border-white/20 rounded-sm space-y-1.5">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl">timer</span>
                  <h3 className="font-display text-sm sm:text-base text-white font-semibold leading-snug">Rundown Presisi</h3>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">Akad, tradisi adat, hingga resepsi berjalan tertib &amp; khidmat.</p>
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
              <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-bold block mb-1">
                Katalog Layanan
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {packagesData.slice(0, 3).map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-surface-container-low hover:bg-white rounded-sm shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col">
                  {/* Full image width on mobile for cleaner look */}
                  <div className="w-full aspect-[16/10] overflow-hidden bg-black/5 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-display text-base sm:text-lg text-primary font-semibold leading-snug">{pkg.name}</h3>
                        {pkg.badge && (
                          <span className="bg-gold-shimmer text-primary text-xs px-2 py-0.5 uppercase tracking-wider font-bold rounded-sm whitespace-nowrap">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-700 line-clamp-2 font-normal mb-3 leading-relaxed">
                        {pkg.shortDesc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase text-slate-500 font-medium block">Paket Fleksibel</span>
                        <p className="font-display text-sm sm:text-base text-primary font-bold">{pkg.price}</p>
                      </div>
                      <a
                        href={`/paket/${pkg.slug}`}
                        className="px-4 py-2 bg-primary text-on-primary text-xs uppercase font-label-md rounded-sm font-semibold tracking-wider hover:bg-primary-container transition-colors"
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
              className="inline-flex items-center justify-center min-h-[44px] w-full bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold shadow-sm"
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
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-bold block mb-1">
              Ruang Lingkup Acara
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold">
              Keahlian Pengorganisasian Acara
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            <div className="bg-white border border-outline-variant/30 p-4 sm:p-5 rounded-sm text-center space-y-2 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">celebration</span>
              <h3 className="font-display text-base font-semibold text-primary">Wedding Organizer</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">Perencanaan terpadu &amp; eksekusi pernikahan impian tanpa cemas.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-4 sm:p-5 rounded-sm text-center space-y-2 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">event</span>
              <h3 className="font-display text-base font-semibold text-primary">Event Organizer</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">Corporate event, gathering, perayaan ulang tahun, &amp; pesta keluarga.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-4 sm:p-5 rounded-sm text-center space-y-2 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">favorite</span>
              <h3 className="font-display text-base font-semibold text-primary">Lamaran &amp; Engagement</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">Momen pertemuan dua keluarga besar yang santun, hangat, dan teratur.</p>
            </div>
            <div className="bg-white border border-outline-variant/30 p-4 sm:p-5 rounded-sm text-center space-y-2 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">spa</span>
              <h3 className="font-display text-base font-semibold text-primary">Prosesi Tradisi &amp; Siraman</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">Menjaga keluhuran tata krama adat Jawa dengan bimbingan cermat.</p>
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
