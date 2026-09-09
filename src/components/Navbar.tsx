'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
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
    { name: 'Paket', href: '/paket' },
    { name: 'Wedding Show', href: '/wedding-show' },
    { name: 'Test Food', href: '/test-food' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Tips', href: '/tips' },
    { name: 'Tentang', href: '/tentang' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* DESKTOP NAVBAR (>= 1024px) */}
      <nav
        id="desktopNav"
        aria-label="Navigasi Desktop"
        className={`hidden lg:block w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#002820]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent border-b border-white/15 py-4'
        }`}
      >
        <div className="max-w-container-max mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2 py-0.5 focus:outline-none rounded drop-shadow"
            aria-label="MANTU Wedding Organizer - Beranda"
          >
            <img
              src="/images/logo-white.png"
              alt="MANTU Wedding Organizer"
              className="h-11 xl:h-12 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              width={165}
              height={48}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body text-sm tracking-wide transition-all py-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${
                    isActive
                      ? 'text-gold-shimmer font-semibold border-b-2 border-gold-shimmer'
                      : 'text-white/90 hover:text-gold-shimmer font-normal'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://wa.me/6288225322662?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] px-6 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-md"
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
          className="bg-[#00201a]/95 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-full flex items-center justify-between shadow-lg"
          aria-label="Navigasi Utama Mobile"
        >
          {/* Logo Mobile */}
          <a href="/" className="flex items-center" aria-label="Mantu Wedding Organizer Boyolali">
            <img
              src="/images/logo-white.png"
              alt="Mantu Wedding Organizer Boyolali"
              className="h-8 sm:h-9 w-auto object-contain"
              width={100}
              height={40}
            />
          </a>

          {/* Action & Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6288225322662?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[36px] px-3.5 bg-gold-shimmer text-primary font-label-md text-[11px] tracking-wider uppercase rounded-full font-bold shadow-sm"
            >
              KONSUL
            </a>
            <button
              className="p-2 text-white hover:text-gold-shimmer focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg transition-colors"
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
          <div className="mt-1.5 bg-[#00201a] border border-white/15 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
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
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="https://wa.me/6288225322662?text=Halo%20MANTU%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20paket%20pernikahan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[46px] w-full bg-gold-shimmer text-primary font-label-md text-xs tracking-widest uppercase rounded-xl font-bold shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                KONSULTASI VIA WHATSAPP
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
