'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6288902968424?text=Halo%20Galipat%20Wedding%20Organizer%20Boyolali%2C%20saya%20ingin%20konsultasi%20pernikahan"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-2xl transition-colors wa-pulse-btn"
      aria-label="Konsultasi WhatsApp Cepat"
    >
      <span className="material-symbols-outlined text-2xl">chat</span>
    </a>
  );
}
