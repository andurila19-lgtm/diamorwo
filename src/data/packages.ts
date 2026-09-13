export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  price: string;
  priceRaw?: number;
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
    id: 'wedding-day',
    slug: 'wedding-day-coordination',
    name: 'Wedding Day Coordination',
    badge: 'Paling Populer',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Pendampingan intensif hari-H untuk memastikan seluruh susunan acara berjalan tertib, khidmat, dan tanpa rasa cemas.',
    longDesc: 'Layanan koordinasi profesional hari-H untuk calon pengantin yang telah menyiapkan vendor sendiri namun membutuhkan tim ahli untuk mengorkestrasi jalannya acara. Tim Diamor memastikan master rundown berjalan tepat waktu, vendor tersinkronisasi, dan keluarga dapat menikmati hari bahagia dengan tenang.',
    image: '/images/ballroom-candid.png',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Penyusunan Master Rundown menit per menit & Technical Meeting Final',
      'Tim Lapangan Profesional Diamor Organizer & Radio Komunikasi',
      'Personal Assistant khusus untuk mendampingi calon pengantin',
      'Koordinasi terpadu seluruh vendor (katering, dekorasi, dokumentasi, MC, MUA)',
      'Pengawalan protokol akad nikah, temu panggih/prosesi adat, & resepsi',
      'Manajemen alur tamu, VIP, dan penyerahan souvenir'
    ],
    tiers: [
      { name: 'Intimate Scale', pax: 'Hingga 300 Tamu', price: 'Konsultasi Tim' },
      { name: 'Medium Scale', pax: '300 - 800 Tamu', price: 'Konsultasi Tim' },
      { name: 'Grand Scale', pax: '800+ Tamu', price: 'Konsultasi Tim' }
    ]
  },
  {
    id: 'full-planning',
    slug: 'full-wedding-planning',
    name: 'Full Wedding Planning & Organizing',
    badge: 'All-In Planning',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Pendampingan menyeluruh dari tahap konsep awal, kurasi vendor, penyusunan anggaran, hingga eksekusi sempurna hari-H.',
    longDesc: 'Solusi lengkap bagi calon mempelai dan keluarga yang menginginkan proses persiapan pernikahan tanpa stres. Dimulai dari perancangan moodboard tematik, penyesuaian anggaran, negosiasi dan pendampingan vendor, gladi resik, hingga pengawalan hari-H dengan standar keanggunan tinggi khas Diamor.',
    image: '/images/hero-portrait.png',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Konsultasi intensif konsep pernikahan (Modern, Tradisional, atau Perpaduan)',
      'Penyusunan simulasi anggaran transparan sesuai preferensi keluarga',
      'Pendampingan pemilihan dan komunikasi vendor terpercaya',
      'Penyusunan timeline berkala & reminder tahapan persiapan',
      'Pendampingan fitting busana pengantin & food tasting',
      'Gladi resik prosesi akad nikah dan resepsi',
      'Pengawalan penuh hari-H oleh tim Diamor Organizer'
    ],
    tiers: [
      { name: 'Exclusive Tier', pax: 'Skala Fleksibel', price: 'Hubungi Kami' },
      { name: 'Prestige Tier', pax: 'Skala Menengah - Besar', price: 'Hubungi Kami' },
      { name: 'Royal Tier', pax: 'Skala Akbar / Multi-Hari', price: 'Hubungi Kami' }
    ]
  },
  {
    id: 'intimate-wedding',
    slug: 'intimate-wedding',
    name: 'Intimate Wedding Ceremony',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Perayaan pernikahan hangat, intim, dan personal untuk keluarga serta sahabat terdekat dalam suasana khidmat.',
    longDesc: 'Dikhususkan bagi pasangan yang mendambakan momen pernikahan yang hangat, mendalam, dan bermakna bersama lingkaran terdekat. Tim Diamor mengemas setiap detail estetika dan alur acara agar setiap interaksi terasa berkesan, elegan, dan penuh rasa syukur.',
    image: '/images/joglo-pendopo.jpg',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Konsep acara intimate yang hangat dan interaktif',
      'Penyusunan susunan acara khusus keluarga & kerabat dekat',
      'Koordinasi sound, pencahayaan, dan tata tempat duduk tamu',
      'Tim WO siaga mendampingi seluruh prosesi',
      'Pengawalan momen foto bersama dan jamuan santai'
    ]
  },
  {
    id: 'prosesi-adat',
    slug: 'prosesi-adat-siraman',
    name: 'Paket Prosesi Adat & Siraman',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Pengawalan upacara tradisi siraman, midodareni, dan sungkeman dengan tata krama adat Jawa yang luhur.',
    longDesc: 'Rangkaian upacara penyucian dan permohonan restu orang tua dalam tradisi luhur Jawa. Tim Diamor siap mengoordinasikan kelengkapan uba rampe, pemandu adat, pranatacara, dan jalannya prosesi agar memancarkan aura sakral nan menyentuh kalbu.',
    image: '/images/siraman-ceremony.png',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Koordinasi tata laksana upacara siraman, sungkeman, atau midodareni',
      'Penyusunan urutan doa dan prosesi bersama pranata adat / sesepuh',
      'Pemanduan keluarga inti dan para sesepuh yang memberi restu',
      'Dokumentasi prosesi sakral yang tertata rapi tanpa kepanikan'
    ]
  },
  {
    id: 'lamaran-engagement',
    slug: 'lamaran-engagement',
    name: 'Lamaran & Engagement Organizer',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Pengorganisasian acara lamaran dan seserahan yang tertata rapi, hangat, dan berkesan bagi kedua keluarga besar.',
    longDesc: 'Pertemuan resmi awal antara dua keluarga besar disiapkan dengan santun dan berbobot. Mulai dari penataan seserahan, rundown pasrah panampi, sambutan perwakilan keluarga, hingga prosesi penyematan cincin.',
    image: '/images/wedding-artifacts.jpg',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Master rundown acara lamaran & panduan sambutan keluarga',
      'Pemanduan susunan prosesi pasrah panampi dan tukar cincin',
      'Pengaturan display seserahan dan hantaran keluarga',
      'Tim koordinator lapangan agar acara berlangsung tepat waktu'
    ]
  },
  {
    id: 'event-organizer',
    slug: 'event-organizer-services',
    name: 'Event Organizer (Corporate & Private Event)',
    badge: 'Event Service',
    price: 'Konsultasi Penawaran',
    shortDesc: 'Layanan manajemen acara profesional untuk gathering, perayaan anniversary, seminar, atau private party di Ponorogo and beyond.',
    longDesc: 'Selain pernikahan, Diamor berpengalaman mengelola beragam acara spesial dengan presisi tinggi. Dari temu kangen, acara korporat, pesta ulang tahun/anniversary keluarga, hingga peresmian usaha, kami hadir memastikan setiap detik acara berjalan tertata dan berkelas.',
    image: '/images/mantu-team-hero.jpg',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Penyusunan alur konsep dan tema acara kreatif',
      'Manajemen panggung, susunan pengisi acara, dan MC profesional',
      'Koordinasi teknis perlengkapan sound system, multimedia, & lighting',
      'Tim pelaksana lapangan yang sigap dan responsif',
      'Pengelolaan registrasi dan kenyamanan para tamu undangan'
    ]
  }
];
