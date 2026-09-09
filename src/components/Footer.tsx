import React from 'react';

export default function Footer() {
  return (
    <footer id="tentang-footer" className="bg-[#00221b] text-on-primary border-t border-white/10">
      {/* MOBILE MINIMALIST FOOTER (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6 text-center">
        {/* Logo & Google Rating */}
        <div className="space-y-2">
          <a href="/" className="inline-block" aria-label="Mantu Wedding Organizer Boyolali">
            <img
              src="/images/logo-white.png"
              alt="Mantu Wedding Organizer Boyolali"
              className="h-10 w-auto object-contain mx-auto opacity-95"
              width={140}
              height={40}
            />
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-gold-shimmer/30 rounded-full text-xs text-gold-shimmer font-medium">
            <span>⭐⭐⭐⭐⭐</span>
            <strong className="text-white">5,0</strong>
            <span className="text-white/60">(72 Ulasan)</span>
          </div>
          <p className="font-body text-xs text-white/70 italic font-light">
            &quot;Bersama MANTU, pasti TERBANTU!&quot;
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
          <a href="/wedding-show" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Wedding Show
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

        {/* Direct Contact Links */}
        <div className="space-y-2.5 pt-1">
          <div className="flex flex-col gap-1.5 text-xs font-body text-white/90">
            <a
              href="https://wa.me/6288225322662?text=Halo%20Marketing%20MANTU%20WO%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span><strong>Marketing 1:</strong> 0882-2532-2662</span>
            </a>
            <a
              href="https://wa.me/6281575200000?text=Halo%20Admin%2FKerjasama%20MANTU%20WO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/80 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">handshake</span>
              <span><strong>Kerjasama / Admin:</strong> 0815-7520-0000</span>
            </a>
            <a
              href="https://instagram.com/mantu_wo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/70 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              <span>@mantu_wo</span>
            </a>
          </div>

          <div className="pt-1">
            <a
              href="https://linktr.ee/mantu_wo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold-shimmer text-primary font-label-md text-[11px] tracking-wider uppercase font-bold rounded-full shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">hub</span>
              Linktree (Admin, Marketing &amp; Office)
            </a>
          </div>
        </div>

        {/* Compact Address & Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-white/50 font-body space-y-1">
          <p>Jl. Merapi No.50, Surowedana, Pulisen, Boyolali, Jawa Tengah 57316</p>
          <p>&copy; 2026 Mantu Wedding Organizer Boyolali</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= 768px) */}
      <div className="hidden md:block max-w-container-max mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block" aria-label="Mantu Wedding Organizer Boyolali">
              <img
                src="/images/logo-white.png"
                alt="Mantu Wedding Organizer Boyolali"
                className="h-12 lg:h-14 w-auto object-contain opacity-95"
                width={160}
                height={56}
              />
            </a>
            <div className="flex items-center gap-2 text-gold-shimmer text-sm font-medium">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-white font-semibold">5,0</span>
              <span className="text-white/60">(72 Ulasan Google)</span>
            </div>
            <p className="font-body text-sm text-white/75 leading-relaxed max-w-sm font-light italic">
              &quot;Bersama MANTU, pasti TERBANTU!&quot; — Keanggunan abadi dan ketenangan batin pernikahan di Boyolali &amp; Solo Raya.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://instagram.com/mantu_wo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MANTU @mantu_wo"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://tiktok.com/@mantu_wo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok MANTU @mantu_wo"
              >
                <span className="material-symbols-outlined text-lg">videocam</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://linktr.ee/mantu_wo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree MANTU WO"
              >
                <span className="material-symbols-outlined text-lg">hub</span>
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
                  href="https://linktr.ee/mantu_wo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree Kontak
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://wa.me/6288225322662?text=Halo%20Marketing%20MANTU%20WO%2C%20saya%20ingin%20konsultasi%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marketing 1 (Konsul)
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Kantor &amp; Kontak Resmi
            </h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">
              <strong className="text-white font-medium block">Mantu Wedding Organizer Boyolali</strong>
              Jl. Merapi No.50, Surowedana, Pulisen, Kec. Boyolali, Kabupaten Boyolali, Jawa Tengah 57316
              <span className="block mt-1 text-xs text-white/50">Melayani: Boyolali, Solo, Karanganyar, Klaten, Sragen, Sukoharjo, &amp; Yogyakarta.</span>
            </p>
            <div className="space-y-2 pt-1 text-sm font-body">
              <a
                href="https://wa.me/6288225322662?text=Halo%20Marketing%20MANTU%20WO%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">chat</span>
                <span><strong>Marketing 1:</strong> 0882-2532-2662 (Konsultasi Paket)</span>
              </a>
              <a
                href="https://wa.me/6281575200000?text=Halo%20Admin%2FKerjasama%20MANTU%20WO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">handshake</span>
                <span><strong>Admin / Kerjasama:</strong> 0815-7520-0000</span>
              </a>
              <a
                href="https://linktr.ee/mantu_wo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">hub</span>
                <span>linktr.ee/mantu_wo (Admin, Marketing 1, Marketing 2, Office)</span>
              </a>
              <a
                href="https://instagram.com/mantu_wo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">photo_camera</span>
                <span>@mantu_wo (Instagram)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-body">
          <p>&copy; 2026 Mantu Wedding Organizer Boyolali. Hak Cipta Dilindungi.</p>
          <p>Rating 5,0 ⭐ (72 Ulasan) &bull; Bersama MANTU, pasti TERBANTU!</p>
        </div>
      </div>
    </footer>
  );
}
