export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  price: string;
  priceRaw: number;
  shortDesc: string;
  longDesc: string;
  image: string;
  venueIncluded: boolean;
  cateringIncluded: boolean;
  features: string[];
  tiers?: { name: string; pax: string; price: string }[];
}

export const packagesData: PackageItem[] = [
  {
    id: 'permata',
    slug: 'paket-permata',
    name: 'Paket Permata',
    price: 'Mulai Rp 51.500.000',
    priceRaw: 51500000,
    shortDesc: 'Paket populer dengan benefit lengkap untuk acara modern dan adat Jawa terorganisir.',
    longDesc: 'Paket Permata dirancang khusus bagi calon pengantin yang mendambakan kepraktisan dan kesempurnaan koordinasi hari-H. Kami memastikan seluruh alur acara berjalan presisi, santun, dan menenangkan kedua keluarga besar.',
    image: '/images/siraman-ceremony.png',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Master Rundown Menit ke Menit & Technical Meeting H-30',
      '10 Kru Lapangan Berseragam Khusus & Radio Komunikasi',
      'Penyusunan Moodboard Visual & Palet Warna Tematik',
      'Pendampingan Fitting Busana & Gladi Resik Lengkap',
      'Koordinasi Seluruh Vendor (Katering, Dekorasi, Dokumentasi, MC)',
      'Pengawalan Protokol Akad Nikah & Resepsi'
    ],
    tiers: [
      { name: 'Tier 1 - Silver', pax: 'Hingga 400 Tamu', price: 'Rp 51.500.000' },
      { name: 'Tier 2 - Gold', pax: '400 - 800 Tamu', price: 'Rp 58.000.000' },
      { name: 'Tier 3 - Platinum', pax: '800 - 1.200 Tamu', price: 'Rp 65.000.000' }
    ]
  },
  {
    id: 'zamrud',
    slug: 'paket-zamrud',
    name: 'Paket Zamrud',
    badge: 'Terpopuler',
    price: 'Mulai Rp 76.750.000',
    priceRaw: 76750000,
    shortDesc: 'Pilihan premium dengan layanan lengkap, tersedia 3 tier. Catering lezat sudah termasuk dalam harga.',
    longDesc: 'Paket Zamrud merupakan pilihan terfavorit di Boyolali dan Solo Raya. Menggabungkan pengawalan wedding organizer profesional dengan paket hidangan katering istimewa nusantara/tradisional yang dijamin memuaskan selera seluruh tamu undangan.',
    image: '/images/ballroom-candid.png',
    venueIncluded: false,
    cateringIncluded: true,
    features: [
      'Catering Prasmanan & Aneka Gubukan 500 Pax Pilihan',
      'Dekorasi Pelaminan Gebyok Ukir / Modern Elegan Eksklusif',
      '12 Kru WO Profesional & Personal Bride Assistant Khusus',
      'Master Rundown & Technical Meeting Menyeluruh',
      'Rias & Tata Busana Pengantin Lengkap dengan Paes Ageng/Solo Basahan',
      'Dokumentasi Foto & Cinematic Video Highlight',
      'Sound System, Lighting Panggung, & MC Protokol'
    ],
    tiers: [
      { name: 'Tier 1 - Emerald 500', pax: '500 Pax Catering', price: 'Rp 76.750.000' },
      { name: 'Tier 2 - Emerald 800', pax: '800 Pax Catering', price: 'Rp 92.500.000' },
      { name: 'Tier 3 - Emerald 1000', pax: '1.000 Pax Catering', price: 'Rp 108.000.000' }
    ]
  },
  {
    id: 'mutiara',
    slug: 'paket-mutiara',
    name: 'Paket Mutiara',
    price: 'Mulai Rp 93.000.000',
    priceRaw: 93000000,
    shortDesc: 'Paket all-in dengan pilihan venue indoor/outdoor, tersedia 3 tier. Venue dan catering sudah termasuk.',
    longDesc: 'Paket Mutiara adalah solusi all-in tanpa beban. Termasuk venue ballroom ternama atau pendopo joglo prestisius di Boyolali & Solo Raya, katering berlimpah, dekorasi tematik mewah, dan tim MANTU yang menjaga setiap detik perayaan keluarga Anda.',
    image: '/images/joglo-pendopo.jpg',
    venueIncluded: true,
    cateringIncluded: true,
    features: [
      'Venue Pilihan (Ballroom Hotel / Pendopo Ageng Siswodipuran)',
      'Catering Lengkap 600 - 1.000 Pax dengan 5 Macam Gubukan',
      'Dekorasi Mewah Full Florist, Gate Masuk, & Photo Booth',
      '15 Kru WO Lengkap Berseragam Resmi',
      'Gamelan Live Sakral / Band Akustik Entertainment',
      'Dokumentasi Foto, Cinematic Video Drone, & Album Cetak Mewah',
      'Perijinan, Protokol Tamu VVIP, & Keamanan Terpadu'
    ],
    tiers: [
      { name: 'Tier 1 - Pearl Ballroom 600', pax: 'Venue + 600 Pax', price: 'Rp 93.000.000' },
      { name: 'Tier 2 - Pearl Grand 800', pax: 'Venue + 800 Pax', price: 'Rp 115.000.000' },
      { name: 'Tier 3 - Royal Mutiara 1000', pax: 'Venue + 1.000 Pax', price: 'Rp 138.000.000' }
    ]
  },
  {
    id: 'lamaran',
    slug: 'paket-lamaran',
    name: 'Paket Lamaran',
    price: 'Rp 28.000.000',
    priceRaw: 28000000,
    shortDesc: 'Pendampingan acara lamaran agar rapi, hangat, dan berkesan bagi kedua keluarga besar.',
    longDesc: 'Momen awal pertemuan dua keluarga disiapkan dengan khidmat dan tertata santun. Mulai dari penataan seserahan, dekorasi backdrop bunga segar, susunan acara pasrah panampi, hingga dokumentasi momen manis.',
    image: '/images/wedding-artifacts.jpg',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Dekorasi Backdrop Lamaran Estetik & Bunga Segar',
      'Sound System & MC Profesional Khusus Acara Lamaran',
      '4 Kru WO Pengatur Jalannya Pertemuan Keluarga',
      'Penataan Baki Seserahan & Kotak Mahar',
      'Dokumentasi Foto Acara & Teaser Video Singkat'
    ]
  },
  {
    id: 'siraman',
    slug: 'paket-siraman',
    name: 'Paket Siraman & Midodareni',
    price: 'Rp 28.500.000',
    priceRaw: 28500000,
    shortDesc: 'Rangkaian prosesi adat siraman dengan sentuhan modern dan uba rampe lengkap.',
    longDesc: 'Upacara penyucian lahir batin calon pengantin dalam tradisi luhur Jawa. Kami menyediakan seluruh perlengkapan sesaji, kendi kuningan, ronce melati wangi, dan pemandu adat bersertifikasi yang mengarahkan prosesi dengan sakral.',
    image: '/images/siraman-ceremony.png',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Pemandu Upacara Adat Jawa Senior & Pranatacara',
      'Uba Rampe Lengkap (Gentong Kuningan, Ronce Melati, Air 7 Sumber Bunga)',
      'Dekorasi Area Siraman Estetik & Panggung Duduk',
      'Dokumentasi Khidmat Foto & Video Tradisi',
      'Penyusunan Jadwal & Pendampingan Sungkeman Orang Tua'
    ]
  },
  {
    id: 'intimate',
    slug: 'paket-intimate',
    name: 'Paket Intimate Joglo',
    price: 'Rp 65.000.000',
    priceRaw: 65000000,
    shortDesc: 'Konsep intimate wedding yang hangat untuk tamu terbatas (catering 300 pax termasuk).',
    longDesc: 'Dikhususkan bagi pasangan yang menginginkan perayaan akrab bersama keluarga dan sahabat terdekat dalam nuansa pendopo joglo klasik Boyolali yang tenteram.',
    image: '/images/hero-portrait.png',
    venueIncluded: false,
    cateringIncluded: true,
    features: [
      'Catering Pilihan Lezat untuk 300 Pax Undangan',
      'Dekorasi Intimate Estetik Modern / Rustic Joglo',
      '8 Kru WO Siaga Penuh',
      'MC Protokol & Hiburan Musik Akustik',
      'Dokumentasi Lengkap Album Kolase & Video Highlight'
    ]
  }
];
