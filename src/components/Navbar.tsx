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
        className={`hidden lg:block w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 py-2.5 shadow-md'
            : 'bg-[#001438]/90 backdrop-blur-md border-[#efcf58]/20 py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo - Automatically adapts between light logo (navy) on white bg and white logo on dark bg */}
          <a
            href="/"
            className="flex items-center flex-shrink-0 mr-8 xl:mr-12 focus:outline-none group"
            aria-label="Diamor Wedding & Event Organizer Ponorogo - Beranda"
          >
            <img
              src={scrolled ? '/images/diamor-navbar-logo-light.png' : '/images/diamor-navbar-logo.png'}
              alt="Diamor Wedding & Event Organizer"
              className="h-9 xl:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
                      ? scrolled
                        ? 'text-[#002268] font-bold border-b-2 border-gold-shimmer'
                        : 'text-gold-shimmer font-bold border-b-2 border-gold-shimmer'
                      : scrolled
                        ? 'text-[#001438]/90 hover:text-secondary hover:font-semibold'
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
          className={`px-3.5 py-2 rounded-full flex items-center justify-between shadow-lg transition-all duration-300 border ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-md'
              : 'bg-[#001438]/95 backdrop-blur-md border-[#efcf58]/25'
          }`}
          aria-label="Navigasi Utama Mobile"
        >
          {/* Logo Mobile */}
          <a href="/" className="flex items-center gap-2" aria-label="Diamor Wedding & Event Organizer Ponorogo">
            <img
              src={scrolled ? '/images/diamor-navbar-logo-light.png' : '/images/diamor-navbar-logo.png'}
              alt="Diamor Organizer"
              className="h-7 sm:h-8 w-auto object-contain"
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
              className={`p-2 focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-[#001438] hover:text-secondary' : 'text-white hover:text-gold-shimmer'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup Navigasi' : 'Buka Navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`material-symbols-outlined text-2xl ${scrolled ? 'text-[#001438]' : 'text-gold-shimmer'}`}>
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className={`mt-1.5 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 border ${
              scrolled
                ? 'bg-white border-slate-200/90 text-[#001438]'
                : 'bg-[#001438] border-[#efcf58]/20 text-white'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between min-h-[44px] px-4 py-2.5 text-sm rounded-xl font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? 'bg-slate-100 text-[#002268] font-bold border-l-4 border-gold-shimmer'
                        : 'bg-white/10 text-gold-shimmer font-semibold border-l-2 border-gold-shimmer'
                      : scrolled
                        ? 'text-[#001438]/85 hover:text-[#002268] hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`material-symbols-outlined text-base ${
                      scrolled ? 'text-slate-400' : 'text-gold-shimmer/70'
                    }`}
                  >
                    chevron_right
                  </span>
                </a>
              );
            })}
            <div className={`pt-3 mt-2 border-t flex flex-col gap-2 ${scrolled ? 'border-slate-200' : 'border-white/10'}`}>
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
                className={`flex items-center justify-center gap-2 min-h-[42px] w-full font-label-md text-xs tracking-widest uppercase rounded-xl font-medium transition-colors ${
                  scrolled
                    ? 'bg-slate-100 text-[#001438] hover:bg-slate-200'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
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
