import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Tentang Kami — Galipat Wedding Organizer Boyolali',
  description: 'Mengenal sejarah, nilai luhur adat Jawa, dan komitmen tim profesional Galipat Wedding Organizer di Boyolali & Solo Raya.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Filosofi &amp; Dedikasi"
        title="Tentang Galipat"
        description="Menjaga kemuliaan tata krama adat Jawa dan menghadirkan ketenangan batin dalam setiap perhelatan pernikahan suci di Boyolali dan Solo Raya."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tentang Kami' },
        ]}
      />

      {/* Main Story & Monograph */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-outline-variant/30 shadow-sm bg-black/5">
                <img
                  src="/images/hero-portrait.png"
                  alt="Filosofi Galipat Wedding Organizer"
                  className="w-full h-full object-cover"
                  width={600}
                  height={750}
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs block font-semibold">
                Perjalanan Kami Sejak 2016
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold leading-tight">
                Pernikahan Bukan Sekadar Pesta, Melainkan Amanah Martabat Dua Keluarga.
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                Di tanah Boyolali yang tenteram di lereng Merbabu-Merapi, prosesi pernikahan memuat doa panjang orang tua dan kehormatan silsilah keluarga. Galipat didirikan pada tahun 2016 dari pemahaman bahwa pesta yang indah tidak boleh menyisakan kelelahan emosional bagi pengantin maupun keluarga besar.
              </p>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Kami hadir sebagai orkestrator yang menjaga ketenangan batin Anda. Dari penataan uba rampe siraman, bimbingan paes ageng, hingga penyambutan tamu kehormatan, setiap babak diiringi keanggunan yang tertata rapi tanpa kepanikan.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 bg-white border border-outline-variant/30 rounded-sm">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-primary">1.000+</span>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Pernikahan Terselenggara</p>
                </div>
                <div className="p-4 sm:p-5 bg-white border border-outline-variant/30 rounded-sm">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-primary">50+</span>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Vendor Kurasi Terpercaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Team Pillars */}
      <section className="bg-ivory-surface py-12 sm:py-16 md:py-20 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase text-xs mb-2 block font-semibold">
              Prinsip Kerja
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Pilar Dedikasi Galipat
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">auto_awesome</span>
              <h3 className="font-display text-base font-semibold text-primary">Pakem Adiluhung</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Memahami esensi filosofis adat Jawa Solo dan Yogyakarta tanpa meninggalkan sentuhan elegan.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">self_improvement</span>
              <h3 className="font-display text-base font-semibold text-primary">Ketenangan Pengantin</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Personal bride assistant yang siaga mendampingi sejak subuh rias hingga resepsi selesai.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">timer</span>
              <h3 className="font-display text-base font-semibold text-primary">Presisi Waktu</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Master rundown tersinkronisasi antar katering, dekorasi, MC, dan penghulu tanpa jeda canggung.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">handshake</span>
              <h3 className="font-display text-base font-semibold text-primary">Transparansi Anggaran</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Estimasi biaya terbuka tanpa markup tersembunyi, disesuaikan dengan kapasitas keluarga.
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
                  <span>⭐ 4.8 Rating Sempurna</span>
                  <span>•</span>
                  <span>76 Ulasan Terverifikasi Google</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-primary font-semibold">
                  Kantor Galipat Wedding Organizer
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Mitra pernikahan terpercaya (“Partner for your Wedding Party”) yang mengutamakan ketenangan, kerapian prosesi, dan transparansi anggaran di Boyolali &amp; Solo Raya.
                </p>
                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-on-surface">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0 mt-0.5">location_on</span>
                    <span>
                      <strong className="text-primary font-medium">Location:</strong> Jl. Prof. Soeharso Tegalmulyo Timur No.4, Karanggeneng, Boyolali, Jawa Tengah 57312
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">chat</span>
                    <span>
                      <strong className="text-primary font-medium">WA Admin:</strong> 0889-0296-8424
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">person_pin</span>
                    <span>
                      <strong className="text-primary font-medium">CEO / Owner:</strong> Konsultasi Langsung via Linktree
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">mail</span>
                    <span>
                      <strong className="text-primary font-medium">Email:</strong> galipat.weddingorganizer@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-sm border border-outline-variant/30 space-y-4 text-center">
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  4 Kanal Resmi Linktree
                </span>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Akses langsung layanan resmi Galipat Wedding Organizer:
                </p>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <a
                    href="https://wa.me/6288902968424?text=Halo%20Admin%20Galipat%20Wedding%20Organizer%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-bold shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    1. WA Admin (0889-0296-8424)
                  </a>
                  <a
                    href="https://linktr.ee/galipatwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 bg-primary hover:bg-primary-container text-white font-label-md tracking-wider uppercase transition-colors rounded-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-base">person_pin</span>
                    2. CEO Consultation
                  </a>
                  <a
                    href="https://maps.google.com/?q=Kantor+Galipat+Wedding+Organizer+Jl.+Prof.+Soeharso+Tegalmulyo+Timur+No.4+Karanggeneng+Boyolali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[40px] px-5 bg-white border border-outline-variant/60 hover:border-gold-shimmer text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-base text-gold-shimmer">location_on</span>
                    3. Location (Peta Google Maps)
                  </a>
                  <a
                    href="https://linktr.ee/galipatwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[38px] px-5 bg-surface-container-high hover:bg-surface-container text-primary font-label-md tracking-wider uppercase transition-colors rounded-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-base">hub</span>
                    4. Portal Linktree (linktr.ee/galipatwo)
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
