'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6282132560310?text=Halo%20Diamor%20Wedding%20%26%20Event%20Organizer%20Ponorogo%2C%20saya%20ingin%20konsultasi%20acara"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 wa-pulse-btn"
      aria-label="Konsultasi WhatsApp Diamor Organizer"
    >
      <span className="material-symbols-outlined text-2xl">chat</span>
    </a>
  );
}
