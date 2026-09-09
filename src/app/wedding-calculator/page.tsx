'use client';

import React, { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';

export default function WeddingCalculatorPage() {
  const [guests, setGuests] = useState<number>(500);
  const [venueType, setVenueType] = useState<number>(15000000); // 15jt default
  const [cateringTier, setCateringTier] = useState<number>(65000); // per pax
  const [decorTier, setDecorTier] = useState<number>(18000000); // 18jt
  const [docTier, setDocTier] = useState<number>(8500000); // 8.5jt
  const [makeupTier, setMakeupTier] = useState<number>(9000000); // 9jt
  const [woService, setWoService] = useState<number>(12000000); // WO Day / Full

  const totalEstimate = useMemo(() => {
    const cateringTotal = guests * cateringTier;
    return venueType + cateringTotal + decorTier + docTier + makeupTier + woService;
  }, [guests, venueType, cateringTier, decorTier, docTier, makeupTier, woService]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleConsult = () => {
    const msg = `*SIMULASI ESTIMASI BIAYA WEDDING CALCULATOR — MANTU WO BOYOLALI*

*Jumlah Undangan:* ${guests} Pax
*Estimasi Katering:* ${formatRupiah(guests * cateringTier)} (@ ${formatRupiah(cateringTier)}/pax)
*Estimasi Venue:* ${formatRupiah(venueType)}
*Estimasi Dekorasi:* ${formatRupiah(decorTier)}
*Estimasi Dokumentasi:* ${formatRupiah(docTier)}
*Estimasi Rias & Busana:* ${formatRupiah(makeupTier)}
*Estimasi WO Management:* ${formatRupiah(woService)}

*TOTAL ESTIMASI:* ${formatRupiah(totalEstimate)}

_Mohon informasi ketersediaan jadwal dan rekomendasi vendor terbaik MANTU._`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main>
      <PageHeader
        eyebrow="Simulasi Biaya Transparan"
        title="Wedding Calculator MANTU"
        description="Hitung perkiraan kebutuhan anggaran pernikahan Anda di Boyolali &amp; Solo Raya secara transparan dan terukur."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Wedding Calculator' },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Input Form / Sliders */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 border border-outline-variant/30 shadow-sm space-y-7 rounded-sm">
              
              {/* Guest Count */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs sm:text-sm font-semibold uppercase text-primary tracking-wider">Jumlah Undangan (Tamu)</label>
                  <span className="font-display text-base sm:text-lg font-bold text-secondary">{guests} Pax</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={1500}
                  step={50}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-surface-container-high rounded cursor-pointer"
                  aria-label="Geser jumlah tamu undangan"
                />
                <div className="flex justify-between text-[11px] text-on-surface-variant/70 mt-1.5 font-body">
                  <span>200 Pax (Intimate)</span>
                  <span>800 Pax (Sedang)</span>
                  <span>1.500 Pax (Ageng)</span>
                </div>
              </div>

              {/* Venue Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase text-primary tracking-wider mb-3">Tipe Lokasi / Venue</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Rumah / Gedung Lokal', price: 6000000 },
                    { name: 'Pendopo Joglo Klasik', price: 15000000 },
                    { name: 'Grand Ballroom Hotel', price: 28000000 },
                  ].map((v) => (
                    <button
                      key={v.name}
                      type="button"
                      onClick={() => setVenueType(v.price)}
                      className={`p-3.5 sm:p-4 border text-left rounded-sm transition-colors cursor-pointer min-h-[64px] ${
                        venueType === v.price
                          ? 'border-primary bg-primary/5 text-primary font-semibold ring-1 ring-primary'
                          : 'border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer'
                      }`}
                    >
                      <p className="text-xs font-semibold leading-tight">{v.name}</p>
                      <p className="text-xs text-secondary font-medium mt-1">{formatRupiah(v.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Catering Tier */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase text-primary tracking-wider mb-3">Pilihan Menu Katering (Per Pax)</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Standar Nusantara', price: 55000 },
                    { name: 'Tradisi + Gubukan', price: 65000 },
                    { name: 'Royal Feast Istimewa', price: 85000 },
                  ].map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setCateringTier(c.price)}
                      className={`p-3.5 sm:p-4 border text-left rounded-sm transition-colors cursor-pointer min-h-[64px] ${
                        cateringTier === c.price
                          ? 'border-primary bg-primary/5 text-primary font-semibold ring-1 ring-primary'
                          : 'border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer'
                      }`}
                    >
                      <p className="text-xs font-semibold leading-tight">{c.name}</p>
                      <p className="text-xs text-secondary font-medium mt-1">{formatRupiah(c.price)}/pax</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Decoration Tier */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase text-primary tracking-wider mb-3">Konsep Dekorasi Pelaminan</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Modern Minimalis', price: 12000000 },
                    { name: 'Gebyok Ukir Solo', price: 18000000 },
                    { name: 'Grand Florist Mewah', price: 30000000 },
                  ].map((d) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => setDecorTier(d.price)}
                      className={`p-3.5 sm:p-4 border text-left rounded-sm transition-colors cursor-pointer min-h-[64px] ${
                        decorTier === d.price
                          ? 'border-primary bg-primary/5 text-primary font-semibold ring-1 ring-primary'
                          : 'border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer'
                      }`}
                    >
                      <p className="text-xs font-semibold leading-tight">{d.name}</p>
                      <p className="text-xs text-secondary font-medium mt-1">{formatRupiah(d.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Documentation Tier */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase text-primary tracking-wider mb-3">Dokumentasi Foto &amp; Video</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Standard (Foto + Video Teaser)', price: 8500000 },
                    { name: 'Cinematic Drone + Album Premium', price: 15000000 },
                  ].map((doc) => (
                    <button
                      key={doc.name}
                      type="button"
                      onClick={() => setDocTier(doc.price)}
                      className={`p-3.5 sm:p-4 border text-left rounded-sm transition-colors cursor-pointer min-h-[64px] ${
                        docTier === doc.price
                          ? 'border-primary bg-primary/5 text-primary font-semibold ring-1 ring-primary'
                          : 'border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer'
                      }`}
                    >
                      <p className="text-xs font-semibold leading-tight">{doc.name}</p>
                      <p className="text-xs text-secondary font-medium mt-1">{formatRupiah(doc.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live Result Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary text-on-primary p-6 sm:p-8 md:p-9 border border-white/10 rounded-sm shadow-md lg:sticky lg:top-24 space-y-5">
                <span className="font-label-md text-gold-shimmer uppercase tracking-widest text-xs block font-semibold">
                  Hasil Estimasi Anggaran
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-tight">Ringkasan Biaya</h2>

                <div className="space-y-2.5 text-xs sm:text-sm border-t border-b border-white/15 py-4 font-body">
                  <div className="flex justify-between">
                    <span className="text-white/75">Katering ({guests} Pax):</span>
                    <span className="font-semibold text-white">{formatRupiah(guests * cateringTier)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Sewa Venue:</span>
                    <span className="font-semibold text-white">{formatRupiah(venueType)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Dekorasi:</span>
                    <span className="font-semibold text-white">{formatRupiah(decorTier)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Dokumentasi:</span>
                    <span className="font-semibold text-white">{formatRupiah(docTier)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Makeup &amp; Busana:</span>
                    <span className="font-semibold text-white">{formatRupiah(makeupTier)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">WO Management (Hari-H):</span>
                    <span className="font-semibold text-white">{formatRupiah(woService)}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-white/60 uppercase tracking-widest block">Perkiraan Total Investasi:</span>
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold-shimmer font-bold mt-1">
                    {formatRupiah(totalEstimate)}
                  </p>
                </div>

                <button
                  onClick={handleConsult}
                  className="inline-flex items-center justify-center min-h-[46px] w-full bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Konsultasikan Anggaran via WhatsApp
                </button>
                <p className="text-[11px] text-white/50 text-center leading-relaxed font-light">
                  *Simulasi awal ini dapat disesuaikan kembali dengan kapasitas gedung dan pilihan vendor keluarga.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
