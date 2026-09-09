'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';

export default function TestFoodPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guestCount, setGuestCount] = useState('500');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*RESERVASI TEST FOOD KATERING — MANTU WO BOYOLALI*\n\n*Nama:* ${name}\n*Nomor WA:* ${phone}\n*Rencana Tanggal Acara:* ${date}\n*Estimasi Tamu:* ${guestCount} Pax`;
    window.open(`https://wa.me/6288225322662?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      <PageHeader
        eyebrow="Cita Rasa Terpilih"
        title="Jadwal &amp; Reservasi Test Food"
        description="Rasakan langsung kelezatan menu katering prasmanan dan gubukan autentik Boyolali &amp; Solo Raya sebelum Anda memutuskan."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Test Food Katering' },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Info & Schedule */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-sm shadow-sm space-y-6">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                  Mengapa Wajib Test Food Bersama MANTU?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">restaurant</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Kualitas Rasa Konsisten</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Mencicipi langsung olahan menu utama (Dendeng Balado, Sup Pengantin Solo, Bestik Daging Lidah) dan gubukan favorit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">visibility</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Inspeksi Penyajian &amp; Kebersihan</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Melihat langsung standar set-up peralatan chafing dish, garnish bunga segar, dan seragam rapi staf katering.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">diversity_1</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Konsultasi Selera Keluarga</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Diskusikan tingkat kepedasan, penambahan menu vegetarian, atau hidangan tradisional khusus adat bersama chef kami.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-6 border border-outline-variant/30 space-y-2 rounded-sm">
                <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Jadwal Sesi Test Food Reguler</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                  Setiap hari <strong>Sabtu &amp; Minggu (Pukul 12.00 - 15.00 WIB)</strong> di Dapur Kurasi MANTU Boyolali atau pada saat simulasi event berlangsung.
                </p>
              </div>
            </div>

            {/* Right: Reservation Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 md:p-10 border-2 border-gold-shimmer/50 shadow-md rounded-sm space-y-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-primary font-semibold">Formulir Pendaftaran Test Food</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light mt-1">
                    Silakan isi data calon pengantin untuk mengonfirmasi meja reservasi VIP Anda.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                      Nama Calon Pengantin / Perwakilan *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Raras & Dimas"
                      className="w-full px-4 min-h-[44px] bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0812xxxxxxx"
                      className="w-full px-4 min-h-[44px] bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary rounded-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                        Rencana Tanggal Acara
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Contoh: Oktober 2025"
                        className="w-full px-4 min-h-[44px] bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                        Estimasi Undangan
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 min-h-[44px] bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary rounded-sm"
                      >
                        <option value="300">300 Pax (Intimate)</option>
                        <option value="500">500 Pax (Sedang)</option>
                        <option value="800">800 Pax (Ageng)</option>
                        <option value="1000+">1.000+ Pax (Akbar)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center min-h-[46px] w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors shadow-sm mt-2"
                  >
                    Kirim Reservasi Sesi Test Food
                  </button>
                </form>

                {submitted && (
                  <div className="p-4 bg-surface-container-high border-l-4 border-gold-shimmer text-xs text-primary font-medium rounded-sm">
                    Pendaftaran Anda telah diteruskan ke WhatsApp Concierge MANTU Boyolali. Sampai jumpa di sesi test food!
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
