'use client';

import React, { useState, useEffect } from 'react';
import { packagesData } from '@/data/packages';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/mantu-team-hero.jpg',
      alt: 'MANTU Wedding Organizer Boyolali',
      title: 'Solusi Pernikahan Sakral & Tenang di Boyolali',
      subtitle: 'Menjaga marwah adat Jawa dan ketenangan batin Anda dalam setiap detik perayaan cinta.',
    },
    {
      image: '/images/hero-portrait.png',
      alt: 'Pengantin Adat Jawa MANTU',
      title: 'Kemuliaan Tradisi dengan Sentuhan Modern',
      subtitle: 'Pakem Solo & Yogyakarta yang terkurasi anggun oleh tim pranata adat berpengalaman.',
    },
    {
      image: '/images/ballroom-candid.png',
      alt: 'Resepsi Modern MANTU',
      title: 'Manajemen Acara Tanpa Beban Pikiran',
      subtitle: 'Master rundown terstruktur rapi, mendampingi keluarga dari temu konsep hingga hari-H.',
    },
    {
      image: '/images/joglo-pendopo.jpg',
      alt: 'Intimate Joglo Wedding MANTU',
      title: 'Kehangatan Intimate Wedding di Tanah Boyolali',
      subtitle: 'Suasana pendopo asri lereng Merbabu untuk momen paling sakral dalam hidup Anda.',
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
            <span className="inline-block font-label-md text-[11px] sm:text-xs tracking-[0.25em] uppercase text-gold-shimmer font-semibold">
              MANTU Wedding Organizer Boyolali
            </span>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-[1.14] tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="font-body text-xs sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-row items-center justify-center gap-2.5 sm:gap-4">
              <a
                href="/paket"
                className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-5 sm:px-8 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-sm"
              >
                Pilihan Paket
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20pernikahan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-4 sm:px-8 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold"
              >
                WhatsApp
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

      {/* STATS BENTO RIBBON */}
      <section className="bg-white border-b border-outline-variant/30 py-4 sm:py-8">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">1.000+</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Pernikahan Sukses</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">50+</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Vendor Kurasi</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">9 Tahun</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">Boyolali &amp; Solo</p>
            </div>
            <div className="p-2 sm:p-3 bg-surface-container-low sm:bg-transparent rounded-sm">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-bold">100%</p>
              <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium mt-0.5">RAB Transparan</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - COMPACT BENTO GRID ON MOBILE */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1.5">
              Tantangan Calon Pengantin
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Apakah Anda Mengalami Hal Ini?
            </h2>
          </div>

          {/* Bento Grid: 2-col on mobile, 3-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">schedule</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Tidak Punya Waktu?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Sulit menyelaraskan jadwal kerja dengan puluhan vendor.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">search</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Bingung Pilih WO?</h3>
                <p className="font-body text-xs sm:text-xs text-on-surface-variant font-light leading-snug">
                  Khawatir janji manis di awal tidak sesuai saat hari-H.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">restaurant</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Cemas Rasa Katering?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Butuh jaminan hidangan enak dan porsi aman untuk tamu.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">location_on</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Sulit Cari Gedung/Joglo?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Mencari venue Boyolali-Solo yang pas dengan tanggal impian.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">payments</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Biaya Tak Terduga?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Takut anggaran membengkak tanpa RAB yang transparan.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant/30 p-3.5 sm:p-6 rounded-sm shadow-sm flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3">
                <span className="material-symbols-outlined text-gold-shimmer text-2xl sm:text-3xl">warning</span>
                <h3 className="font-display text-xs sm:text-base font-semibold text-primary leading-tight">Takut Acara Molor?</h3>
                <p className="font-body text-[11px] sm:text-xs text-on-surface-variant font-light leading-snug">
                  Tanpa rundown presisi, prosesi adat bisa melelahkan.
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
            {/* Image / Bento Hero Tile */}
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/5] overflow-hidden rounded-sm border border-white/20 shadow-sm bg-black/10">
                <img
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-opacity duration-300"
                  src="/images/hero-portrait.png"
                  alt="Tim MANTU Wedding Organizer"
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
                  Solusi Nyata MANTU
                </span>
                <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
                  Menjaga Martabat Acara dan Ketenangan Batin Dua Keluarga.
                </h2>
              </div>

              {/* 2x2 Bento Mini Tiles on Mobile & Desktop */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">hub</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">1 Pintu Terpadu</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Semua vendor terkoordinasi tanpa repot.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">self_improvement</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Bride Concierge</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Pendamping pribadi pengantin sejak subuh.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">receipt_long</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">RAB Transparan</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Tanpa markup siluman di tengah persiapan.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <span className="material-symbols-outlined text-gold-shimmer text-xl">timer</span>
                  <h3 className="font-display text-xs sm:text-sm text-white font-semibold leading-tight">Rundown Presisi</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 font-light leading-tight">Prosesi adat dan resepsi tertata tanpa jeda.</p>
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
                Katalog Pilihan
              </span>
              <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
                Paket Pernikahan Favorit
              </h2>
            </div>
            <a
              href="/paket"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-label-md uppercase tracking-wider text-primary hover:text-gold-shimmer font-semibold"
            >
              Semua Paket <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {packagesData.slice(0, 3).map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-surface-container-low hover:bg-white rounded-sm shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div className="flex sm:flex-col">
                  {/* Image side-by-side on mobile for vertical efficiency! */}
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
                        <span className="text-[9px] sm:text-[10px] uppercase text-outline block">Mulai</span>
                        <p className="font-display text-sm sm:text-lg text-primary font-bold">{pkg.price}</p>
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
              Lihat Semua Paket ({packagesData.length})
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES - 4x2 BENTO TILES */}
      <section className="py-10 sm:py-16 md:py-20 bg-ivory-surface border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="font-label-md text-secondary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
              Layanan Lengkap
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
              Kebutuhan Acara dalam Satu Pintu
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">assignment</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">WO Service</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">brush</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Rias &amp; Paes</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">restaurant</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Katering</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">celebration</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Dekorasi</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">photo_camera</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Foto &amp; Video</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">mic</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">MC &amp; Pranata</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">music_note</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Hiburan</h3>
            </div>
            <div className="bg-white border border-outline-variant/30 p-2.5 sm:p-5 rounded-sm text-center space-y-1 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-xl sm:text-3xl">temple_buddhist</span>
              <h3 className="font-display text-[10px] sm:text-sm text-primary font-semibold">Siraman</h3>
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
                Portofolio Nyata
              </span>
              <h2 className="font-display text-xl sm:text-3xl text-primary font-semibold">
                Galeri Inspirasi MANTU
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
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/mantu-team-hero.jpg" alt="Galeri Utama MANTU" loading="lazy" />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
              </div>
            </a>
            <a href="/galeri" className="aspect-square overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/hero-portrait.png" alt="Galeri Adat" loading="lazy" />
            </a>
            <a href="/galeri" className="aspect-square overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/ballroom-candid.png" alt="Galeri Resepsi" loading="lazy" />
            </a>
            <a href="/galeri" className="col-span-2 sm:col-span-2 aspect-[2/1] overflow-hidden rounded-sm bg-black/5 shadow-sm relative group block">
              <img className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-opacity" src="/images/joglo-pendopo.jpg" alt="Galeri Joglo" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER - COMPACT */}
      <section className="bg-primary text-on-primary py-10 sm:py-16 md:py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-5">
          <span className="font-label-md text-gold-shimmer text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold block">
            Langkah Awal Ketenangan Anda
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
            Wujudkan Pernikahan Sakral &amp; Tenang Bersama MANTU
          </h2>
          <p className="font-body text-xs sm:text-base text-white/80 font-light leading-relaxed max-w-lg mx-auto">
            Konsultasikan tanggal impian, perkiraan tamu, dan konsep adat Anda. Tim kami siap menyusun estimasi anggaran dan moodboard gratis.
          </p>
          <div className="pt-2 flex flex-row items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-5 sm:px-8 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-sm"
            >
              Konsultasi WhatsApp
            </a>
            <a
              href="/wedding-calculator"
              className="inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] px-4 sm:px-8 border border-white/30 hover:bg-white/10 text-white font-label-md text-[11px] sm:text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold"
            >
              Kalkulator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
