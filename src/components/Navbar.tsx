'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Paket & Layanan', href: '/paket' },
    { name: 'Kalkulator Biaya', href: '/wedding-calculator' },
    { name: 'Galeri Inspirasi', href: '/galeri' },
    { name: 'Tips & Panduan', href: '/tips' },
    { name: 'Tentang Kami', href: '/tentang' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* DESKTOP NAVBAR (>= 1024px) */}
      <nav
        id="desktopNav"
        aria-label="Navigasi Desktop"
        className={`hidden lg:block w-full transition-all duration-300 border-b shadow-md ${
          scrolled
            ? 'bg-[#001438]/98 backdrop-blur-md border-[#efcf58]/30 py-2.5 shadow-xl'
            : 'bg-[#001438]/90 backdrop-blur-md border-[#efcf58]/20 py-3.5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo - Official Diamor Lockup with Guaranteed Margin */}
          <a
            href="/"
            className="flex items-center flex-shrink-0 mr-8 xl:mr-12 focus:outline-none group"
            aria-label="Diamor Wedding & Event Organizer Ponorogo - Beranda"
          >
            <img
              src="/images/diamor-navbar-logo.png"
              alt="Diamor Wedding & Event Organizer"
              className="h-9 xl:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              width={186}
              height={42}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-3.5 xl:gap-6 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body text-[12px] xl:text-[13px] tracking-wider uppercase transition-all py-1.5 whitespace-nowrap font-medium ${
                    isActive
                      ? 'text-gold-shimmer font-bold border-b-2 border-gold-shimmer'
                      : 'text-white/85 hover:text-gold-shimmer'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[40px] px-5 xl:px-6 bg-gold-shimmer hover:bg-secondary text-[#002268] hover:text-white font-label-md text-xs tracking-widest uppercase transition-colors rounded-sm font-bold shadow-md ml-2 xl:ml-4 whitespace-nowrap flex-shrink-0"
            >
              KONSULTASI
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE & TABLET NAVBAR (< 1024px) */}
      <div className="lg:hidden px-3 pt-2">
        <nav
          id="mobileNav"
          className="bg-[#001438]/95 backdrop-blur-md border border-[#efcf58]/25 px-3.5 py-2 rounded-full flex items-center justify-between shadow-lg"
          aria-label="Navigasi Utama Mobile"
        >
          {/* Logo Mobile */}
          <a href="/" className="flex items-center gap-2" aria-label="Diamor Wedding & Event Organizer Ponorogo">
            <img
              src="/images/diamor-navbar-logo.png"
              alt="Diamor Organizer"
              className="h-7 sm:h-8 w-auto object-contain drop-shadow"
              width={180}
              height={32}
            />
          </a>

          {/* Action & Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[36px] px-3.5 bg-gold-shimmer text-[#002268] font-label-md text-[11px] tracking-wider uppercase rounded-full font-bold shadow-sm"
            >
              KONSUL
            </a>
            <button
              className="p-2 text-white hover:text-gold-shimmer focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup Navigasi' : 'Buka Navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl text-gold-shimmer">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-1.5 bg-[#001438] border border-[#efcf58]/20 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between min-h-[44px] px-4 py-2.5 text-sm rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-gold-shimmer font-semibold border-l-2 border-gold-shimmer'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="material-symbols-outlined text-base text-gold-shimmer/70">
                    chevron_right
                  </span>
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[46px] w-full bg-gold-shimmer text-[#002268] font-label-md text-xs tracking-widest uppercase rounded-xl font-bold shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WA 1: 0821-3256-0310
              </a>
              <a
                href="https://wa.me/6283142141017?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[42px] w-full bg-white/10 text-white font-label-md text-xs tracking-widest uppercase rounded-xl font-medium hover:bg-white/15"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WA 2: 0831-4214-1017
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
