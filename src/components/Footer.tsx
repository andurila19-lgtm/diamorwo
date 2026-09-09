import React from 'react';

export default function Footer() {
  return (
    <footer id="tentang-footer" className="bg-[#0f172a] text-on-primary border-t border-white/10">
      {/* MOBILE MINIMALIST FOOTER (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6 text-center">
        {/* Logo & Google Rating */}
        <div className="space-y-3">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="Galipat Wedding Organizer Boyolali">
            <img
              src="/images/logo.png"
              alt="Galipat Wedding Organizer Boyolali"
              className="h-10 w-10 rounded-full object-cover border border-white/20 mx-auto"
              width={40}
              height={40}
            />
            <div className="flex flex-col text-left">
              <span className="font-display text-base font-bold tracking-wider text-white">
                GALIPAT
              </span>
              <span className="font-label-md text-[8px] tracking-[0.2em] text-gold-shimmer uppercase font-semibold">
                WEDDING ORGANIZER
              </span>
            </div>
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-gold-shimmer/30 rounded-full text-xs text-gold-shimmer font-medium">
            <span>⭐⭐⭐⭐⭐</span>
            <strong className="text-white">4,8</strong>
            <span className="text-white/60">(76 Ulasan Google)</span>
          </div>
          <p className="font-body text-xs text-white/70 italic font-light">
            &quot;Partner for your Wedding Party&quot;
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

        {/* 4 Official Linktree Channels on Mobile */}
        <div className="space-y-2.5 pt-1">
          <div className="flex flex-col gap-2 text-xs font-body text-white/90">
            <a
              href="https://wa.me/6288902968424?text=Halo%20Admin%20Galipat%20Wedding%20Organizer%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span><strong>WA Admin:</strong> 0889-0296-8424</span>
            </a>
            <a
              href="https://linktr.ee/galipatwo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/85 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">person_pin</span>
              <span><strong>CEO / Owner Consultation</strong></span>
            </a>
            <a
              href="https://maps.google.com/?q=Kantor+Galipat+Wedding+Organizer+Jl.+Prof.+Soeharso+Tegalmulyo+Timur+No.4+Karanggeneng+Boyolali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/75 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">location_on</span>
              <span><strong>Location:</strong> Karanggeneng, Boyolali</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href="https://linktr.ee/galipatwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold-shimmer text-primary font-label-md text-[11px] tracking-wider uppercase font-bold rounded-full shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">hub</span>
              Linktree: linktr.ee/galipatwo
            </a>
          </div>
        </div>

        {/* Compact Address & Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-white/50 font-body space-y-1">
          <p>Jl. Prof. Soeharso Tegalmulyo Timur No.4, Karanggeneng, Boyolali, Jawa Tengah 57312</p>
          <p>&copy; 2026 Galipat Wedding Organizer Boyolali</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= 768px) */}
      <div className="hidden md:block max-w-container-max mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-flex items-center gap-3 group" aria-label="Galipat Wedding Organizer Boyolali">
              <img
                src="/images/logo.png"
                alt="Galipat Wedding Organizer Boyolali"
                className="h-12 w-12 rounded-full object-cover border border-white/20 shadow-md group-hover:scale-105 transition-transform"
                width={48}
                height={48}
              />
              <div className="flex flex-col text-left">
                <span className="font-display text-xl font-bold tracking-wider text-white group-hover:text-gold-shimmer transition-colors">
                  GALIPAT
                </span>
                <span className="font-label-md text-[9.5px] tracking-[0.22em] text-gold-shimmer uppercase font-semibold">
                  WEDDING ORGANIZER
                </span>
              </div>
            </a>
            <div className="flex items-center gap-2 text-gold-shimmer text-sm font-medium">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-white font-semibold">4,8</span>
              <span className="text-white/60">(76 Ulasan Google)</span>
            </div>
            <p className="font-body text-sm text-white/75 leading-relaxed max-w-sm font-light italic">
              &quot;Partner for your Wedding Party&quot; — Keanggunan abadi dan ketenangan batin pernikahan di Boyolali &amp; Solo Raya.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://linktr.ee/galipatwo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree Galipat WO"
              >
                <span className="material-symbols-outlined text-lg">hub</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="mailto:galipat.weddingorganizer@gmail.com"
                aria-label="Email Galipat Wedding Organizer"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://wa.me/6288902968424"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Galipat WO"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://maps.google.com/?q=Kantor+Galipat+Wedding+Organizer+Jl.+Prof.+Soeharso+Tegalmulyo+Timur+No.4+Karanggeneng+Boyolali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi Kantor Galipat Wedding Organizer"
              >
                <span className="material-symbols-outlined text-lg">location_on</span>
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
                  Tentang Galipat
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
                  href="https://linktr.ee/galipatwo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree Resmi
                </a>
              </li>
              <li>
                <a
                  className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5"
                  href="https://wa.me/6288902968424?text=Halo%20Admin%20Galipat%20WO%2C%20saya%20ingin%20konsultasi%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WA Admin
                </a>
              </li>
            </ul>
          </div>

          {/* 4 Official Channels Column (Kantor & Kontak) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Kantor &amp; Kontak Resmi
            </h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">
              <strong className="text-white font-medium block">Kantor Galipat Wedding Organizer</strong>
              Jl. Prof. Soeharso Tegalmulyo Timur No.4, Karanggeneng, Boyolali, Jawa Tengah 57312
              <span className="block mt-1 text-xs text-white/50">Melayani: Boyolali, Solo, Karanganyar, Klaten, Sragen, Sukoharjo, &amp; Yogyakarta.</span>
            </p>
            <div className="space-y-2.5 pt-1 text-sm font-body">
              <a
                href="https://wa.me/6288902968424?text=Halo%20Admin%20Galipat%20Wedding%20Organizer%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">chat</span>
                <span><strong>WA Admin:</strong> 0889-0296-8424</span>
              </a>
              <a
                href="https://linktr.ee/galipatwo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">person_pin</span>
                <span><strong>CEO / Owner Consultation:</strong> via Linktree</span>
              </a>
              <a
                href="https://maps.google.com/?q=Kantor+Galipat+Wedding+Organizer+Jl.+Prof.+Soeharso+Tegalmulyo+Timur+No.4+Karanggeneng+Boyolali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">location_on</span>
                <span><strong>Location (Google Maps):</strong> Buka Petunjuk Arah</span>
              </a>
              <a
                href="mailto:galipat.weddingorganizer@gmail.com"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">mail</span>
                <span><strong>Email:</strong> galipat.weddingorganizer@gmail.com</span>
              </a>
              <a
                href="https://linktr.ee/galipatwo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">hub</span>
                <span><strong>Linktree:</strong> linktr.ee/galipatwo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-body">
          <p>&copy; 2026 Galipat Wedding Organizer Boyolali. Hak Cipta Dilindungi.</p>
          <p>Rating 4,8 ⭐ (76 Ulasan Google) &bull; Partner for your Wedding Party</p>
        </div>
      </div>
    </footer>
  );
}
