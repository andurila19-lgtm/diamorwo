import React from 'react';

export default function Footer() {
  return (
    <footer id="tentang-footer" className="bg-[#001438] text-on-primary border-t border-white/10">
      {/* MOBILE MINIMALIST FOOTER (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6 text-center">
        {/* Logo & Google Rating */}
        <div className="space-y-3">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="Diamor Wedding & Event Organizer Ponorogo">
            <img
              src="/images/diamor-logo-horizontal-white.png"
              alt="Diamor Wedding & Event Organizer"
              className="h-9 w-auto object-contain mx-auto"
              width={180}
              height={36}
            />
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-gold-shimmer/30 rounded-full text-xs text-gold-shimmer font-medium">
            <span>⭐⭐⭐⭐⭐</span>
            <strong className="text-white">5,0</strong>
            <span className="text-white/70">(5 Ulasan Google)</span>
          </div>
          <p className="font-body text-xs text-white/80 italic font-light">
            &quot;Elegance in every detail. Making your moments more memorable&quot;
          </p>
        </div>

        {/* Minimalist Quick Link Chips */}
        <div className="flex flex-wrap justify-center gap-2 text-xs font-body">
          <a href="/paket" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Paket &amp; Layanan
          </a>
          <a href="/wedding-calculator" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Kalkulator Biaya
          </a>
          <a href="/galeri" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Galeri
          </a>
          <a href="/tips" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tips
          </a>
          <a href="/tentang" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tentang Kami
          </a>
        </div>

        {/* Official Channels on Mobile */}
        <div className="space-y-2.5 pt-1">
          <div className="flex flex-col gap-2 text-xs font-body text-white/90">
            <a
              href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span><strong>WA 1:</strong> 0821-3256-0310</span>
            </a>
            <a
              href="https://wa.me/6283142141017?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/85 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span><strong>WA 2:</strong> 0831-4214-1017</span>
            </a>
            <a
              href="https://instagram.com/diamor.organizer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/85 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              <span><strong>Instagram:</strong> @diamor.organizer (±2.497 followers)</span>
            </a>
            <a
              href="https://maps.google.com/?q=Diamor+Wedding+Organizer+Jl.+Anilo+No.42+Segading+Pakunden+Kec.+Ponorogo+Kabupaten+Ponorogo+Jawa+Timur+63416"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/75 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">location_on</span>
              <span><strong>Lokasi:</strong> Pakunden, Ponorogo (Buka 08.00–22.00)</span>
            </a>
          </div>
        </div>

        {/* Compact Address & Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-white/50 font-body space-y-1">
          <p>Jl. Anilo No.42, Segading, Pakunden, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63416</p>
          <p>&copy; 2026 Diamor Wedding &amp; Event Organizer Ponorogo</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= 768px) */}
      <div className="hidden md:block max-w-container-max mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-flex items-center group" aria-label="Diamor Wedding & Event Organizer Ponorogo">
              <img
                src="/images/diamor-logo-horizontal-white.png"
                alt="Diamor Wedding & Event Organizer"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width={220}
                height={48}
              />
            </a>
            <div className="flex items-center gap-2 text-gold-shimmer text-sm font-medium">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-white font-semibold">5,0</span>
              <span className="text-white/60">(5 Ulasan Google Terverifikasi)</span>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed max-w-sm font-light italic">
              &quot;Elegance in every detail. Making your moments more memorable&quot; — Mewujudkan momen sakral dan perayaan elegan di Ponorogo and beyond.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://instagram.com/diamor.organizer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Diamor Organizer"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp 1 Diamor Organizer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://wa.me/6283142141017?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp 2 Diamor Organizer"
              >
                <span className="material-symbols-outlined text-lg">support_agent</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://maps.google.com/?q=Diamor+Wedding+Organizer+Jl.+Anilo+No.42+Segading+Pakunden+Kec.+Ponorogo+Kabupaten+Ponorogo+Jawa+Timur+63416"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi Diamor Wedding Organizer Google Maps"
              >
                <span className="material-symbols-outlined text-lg">location_on</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Layanan &amp; Fitur
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/paket">
                  Paket &amp; Layanan WO
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/wedding-calculator">
                  Kalkulator Anggaran
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/galeri">
                  Galeri Inspirasi
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/tips">
                  Tips &amp; Panduan
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Informasi
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/tentang">
                  Tentang Diamor
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://instagram.com/diamor.organizer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Resmi
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://wa.me/6282132560310?text=Halo%20Diamor%20Organizer%2C%20saya%20ingin%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Konsultasi 1
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://wa.me/6283142141017?text=Halo%20Diamor%20Organizer%2C%20saya%20ingin%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Konsultasi 2
                </a>
              </li>
            </ul>
          </div>

          {/* Official Location & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Lokasi &amp; Kontak Resmi
            </h4>
            <div className="font-body text-sm text-white/70 leading-relaxed font-light space-y-1">
              <strong className="text-white font-medium block">Diamor Wedding &amp; Event Organizer</strong>
              <p>Jl. Anilo No.42, Segading, Pakunden, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63416</p>
              <p className="text-xs text-gold-shimmer font-normal pt-1">
                Jam Operasional: 08.00 – 22.00 WIB (Buka Setiap Hari)
              </p>
              <span className="block mt-1 text-xs text-white/50">
                Area Layanan: Ponorogo and beyond (Ponorogo, Madiun, Magetan, Ngawi, Pacitan, dan sekitarnya)
              </span>
            </div>
            <div className="space-y-2.5 pt-1 text-sm font-body">
              <a
                href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">chat</span>
                <span><strong>WA (Google Maps):</strong> 0821-3256-0310</span>
              </a>
              <a
                href="https://wa.me/6283142141017?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">chat</span>
                <span><strong>WA (Instagram):</strong> +62 831-4214-1017</span>
              </a>
              <a
                href="https://instagram.com/diamor.organizer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">photo_camera</span>
                <span><strong>Instagram:</strong> @diamor.organizer (±2.497 followers)</span>
              </a>
              <a
                href="https://maps.google.com/?q=Diamor+Wedding+Organizer+Jl.+Anilo+No.42+Segading+Pakunden+Kec.+Ponorogo+Kabupaten+Ponorogo+Jawa+Timur+63416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">location_on</span>
                <span><strong>Google Maps:</strong> Buka Petunjuk Arah</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-body">
          <p>&copy; 2026 Diamor Wedding &amp; Event Organizer Ponorogo. Hak Cipta Dilindungi.</p>
          <p>Rating 5,0 ⭐ (5 Ulasan Google Terverifikasi) &bull; Elegance in every detail</p>
        </div>
      </div>
    </footer>
  );
}
