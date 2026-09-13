import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Tentang Kami — Diamor Wedding & Event Organizer Ponorogo',
  description:
    'Mengenal Diamor Wedding & Event Organizer di Ponorogo. Elegance in every detail, making your moments more memorable untuk pernikahan dan acara istimewa Anda di Ponorogo and beyond.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Dedikasi &amp; Keanggunan"
        title="Tentang Diamor"
        description="Mewujudkan perhelatan istimewa dengan keanggunan, ketelitian, dan ketenangan batin untuk setiap momen berharga Anda di Ponorogo and beyond."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tentang Kami' },
        ]}
      />

      {/* Main Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-outline-variant/30 shadow-sm bg-black/5">
                <img
                  src="/images/hero-portrait.png"
                  alt="Diamor Wedding & Event Organizer Ponorogo"
                  className="w-full h-full object-cover"
                  width={600}
                  height={750}
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="mb-2">
                <img
                  src="/images/diamor-logo-horizontal.png"
                  alt="Diamor Wedding & Event Organizer"
                  className="h-11 sm:h-12 w-auto object-contain"
                  width={220}
                  height={48}
                />
              </div>
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs block font-semibold">
                Elegance in Every Detail
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold leading-tight">
                Pernikahan &amp; Acara Berharga Layak Dikelola dengan Sempurna dan Penuh Ketenangan.
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                Berlokasi di Kabupaten Ponorogo, Jawa Timur, Diamor Wedding &amp; Event Organizer hadir dengan komitmen menghadirkan keanggunan di setiap detail perhelatan Anda. Kami percaya bahwa pernikahan dan perayaan istimewa adalah amanah kehormatan keluarga yang patut dinikmati tanpa kekhawatiran teknis.
              </p>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Sebagai perencana dan koordinator profesional, Diamor siap mendampingi Anda mulai dari penyusunan konsep, koordinasi vendor, sinkronisasi rundown, hingga pengawalan hari-H secara presisi. Dari prosesi adat, pernikahan modern, hingga event korporat dan perayaan keluarga, kami memastikan momen Anda menjadi lebih berkesan.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 sm:p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">5.0 / 5</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Rating Google</p>
                </div>
                <div className="p-3 sm:p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">±2.497</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Instagram Followers</p>
                </div>
                <div className="p-3 sm:p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">08–22</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">Buka Setiap Hari</p>
                </div>
                <div className="p-3 sm:p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">Ponorogo</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">&amp; Beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="bg-ivory-surface py-12 sm:py-16 md:py-20 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase text-xs mb-2 block font-bold">
              Nilai &amp; Komitmen
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Pilar Pelayanan Diamor
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">auto_awesome</span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-primary">Keanggunan Detail</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Menaruh perhatian saksama pada setiap elemen acara, memastikan keserasian estetika dan nuansa acara.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">self_improvement</span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-primary">Ketenangan Klien</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Keluarga dan pengantin dapat menikmati perayaan dengan damai tanpa perlu memikirkan kerumitan teknis di lapangan.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">timer</span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-primary">Presisi Koordinasi</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Rundown terstruktur rapi dan koordinasi vendor yang harmonis untuk alur acara yang tepat waktu dan lancar.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm hover:border-gold-shimmer/50 transition-colors">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">handshake</span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-primary">Solusi Terpadu</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Layanan fleksibel mencakup wedding planning, wedding day coordination, lamaran, hingga perhelatan event organizer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Business & Location Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-outline-variant/30 rounded-sm p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-700 font-semibold">
                  <span>⭐ 5.0 Rating Sempurna</span>
                  <span>•</span>
                  <span>5 Ulasan Terverifikasi Google</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-primary font-semibold">
                  Diamor Wedding &amp; Event Organizer
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Mitra terpercaya untuk perhelatan pernikahan dan acara istimewa di Ponorogo dan sekitarnya. Konsultasikan konsep dan kebutuhan Anda langsung bersama tim kami.
                </p>
                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-on-surface">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0 mt-0.5">location_on</span>
                    <span>
                      <strong className="text-primary font-medium">Alamat:</strong> Jl. Anilo No.42, Segading, Pakunden, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63416
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">schedule</span>
                    <span>
                      <strong className="text-primary font-medium">Jam Buka:</strong> 08.00 – 22.00 WIB (Setiap Hari)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">chat</span>
                    <span>
                      <strong className="text-primary font-medium">WhatsApp (Maps):</strong> 0821-3256-0310
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">chat</span>
                    <span>
                      <strong className="text-primary font-medium">WhatsApp (Instagram):</strong> 0831-4214-1017
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">photo_camera</span>
                    <span>
                      <strong className="text-primary font-medium">Instagram:</strong> @diamor.organizer (±2.497 followers)
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-sm border border-outline-variant/30 space-y-4 text-center">
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  Kanal Resmi Diamor
                </span>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Hubungi kami secara langsung melalui kontak dan saluran resmi berikut:
                </p>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <a
                    href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%2C%20saya%20ingin%20konsultasi%20layanan%20acara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-bold shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp Utama (0821-3256-0310)
                  </a>
                  <a
                    href="https://wa.me/6283142141017?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%2C%20saya%20ingin%20konsultasi%20layanan%20acara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 bg-primary hover:bg-primary-container text-white font-label-md tracking-wider uppercase transition-colors rounded-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp Kedua (0831-4214-1017)
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.+Anilo+No.42+Segading+Pakunden+Kec.+Ponorogo+Kabupaten+Ponorogo+Jawa+Timur+63416+Diamor+Wedding+Organizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[40px] px-5 bg-white border border-outline-variant/60 hover:border-gold-shimmer text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-base text-gold-shimmer">location_on</span>
                    Petunjuk Lokasi Google Maps
                  </a>
                  <a
                    href="https://www.instagram.com/diamor.organizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[38px] px-5 bg-surface-container-high hover:bg-surface-container text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-base">photo_camera</span>
                    Instagram @diamor.organizer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
