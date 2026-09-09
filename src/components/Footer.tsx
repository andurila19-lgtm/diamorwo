import React from 'react';

export default function Footer() {
  return (
    <footer id="tentang-footer" className="bg-[#00221b] text-on-primary border-t border-white/10">
      {/* MOBILE MINIMALIST FOOTER (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6 text-center">
        {/* Logo & Quick Tagline */}
        <div className="space-y-2">
          <a href="/" className="inline-block" aria-label="MANTU Wedding Organizer">
            <img
              src="/images/logo-white.png"
              alt="MANTU Wedding Organizer"
              className="h-10 w-auto object-contain mx-auto opacity-95"
              width={140}
              height={40}
            />
          </a>
          <p className="font-body text-xs text-white/70 font-light">
            Wedding Organizer Terpercaya Boyolali &amp; Solo Raya
          </p>
        </div>

        {/* Minimalist Quick Link Chips */}
        <div className="flex flex-wrap justify-center gap-2 text-xs font-body">
          <a href="/paket" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Paket
          </a>
          <a href="/galeri" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Galeri
          </a>
          <a href="/test-food" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Test Food
          </a>
          <a href="/tips" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tips
          </a>
          <a href="/tentang" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tentang
          </a>
        </div>

        {/* Direct Contact Bar */}
        <div className="flex justify-center items-center gap-4 text-xs font-body text-white/80 pt-1">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gold-shimmer hover:underline"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <span>+62 812-3456-7890</span>
          </a>
          <span className="text-white/20">&bull;</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gold-shimmer hover:underline"
          >
            <span className="material-symbols-outlined text-base">photo_camera</span>
            <span>@mantu_wo</span>
          </a>
        </div>

        {/* Compact Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-white/40 font-body">
          <p>&copy; 2026 MANTU Wedding Organizer Boyolali</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= 768px) */}
      <div className="hidden md:block max-w-container-max mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block" aria-label="MANTU Wedding Organizer">
              <img
                src="/images/logo-white.png"
                alt="MANTU Wedding Organizer"
                className="h-12 lg:h-14 w-auto object-contain opacity-95"
                width={160}
                height={56}
              />
            </a>
            <p className="font-body text-sm text-white/75 leading-relaxed max-w-sm font-light">
              Keanggunan abadi dalam setiap detail. Wedding Organizer terpercaya di Boyolali &amp; Solo Raya sejak 2016.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook MANTU Wedding Organizer"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MANTU Wedding Organizer"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube MANTU Wedding Organizer"
              >
                <span className="material-symbols-outlined text-lg">smart_display</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Layanan &amp; Acara
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/paket">
                  Paket Pernikahan
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/wedding-show">
                  Wedding Show &amp; Expo
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/test-food">
                  Jadwal Test Food
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/galeri">
                  Galeri Inspirasi
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
                  Tentang MANTU
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/tips">
                  Tips &amp; Panduan
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://wa.me/6281234567890?text=Halo%20MANTU%20Wedding%20Organizer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Kantor &amp; Wilayah Layanan
            </h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">
              <strong className="text-white font-medium block">MANTU Wedding Management</strong>
              Jl. Pandanaran No. 88, Siswodipuran, Boyolali, Jawa Tengah 57311
              <span className="block mt-1 text-xs text-white/50">Melayani: Boyolali, Solo, Karanganyar, Klaten, Sragen, Sukoharjo, &amp; Yogyakarta.</span>
            </p>
            <div className="space-y-2 pt-1 text-sm font-body">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">call</span>
                <span>+62 812-3456-7890</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">photo_camera</span>
                <span>@mantu_wo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-body">
          <p>&copy; 2026 MANTU Wedding Organizer Boyolali. Hak Cipta Dilindungi.</p>
          <p>Tradisi Adiluhung &bull; Ketenangan Pengantin &bull; Dedikasi Sejak 2016</p>
        </div>
      </div>
    </footer>
  );
}
