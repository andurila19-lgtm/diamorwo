export interface TipItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const tipsData: TipItem[] = [
  {
    id: 't1',
    slug: 'panduan-memilih-paes-ageng-solo-putri',
    title: 'Mengenal Perbedaan Paes Ageng Yogyakarta dan Solo Putri untuk Hari Bahagia Anda',
    category: 'Tradisi & Adat',
    date: '14 Agustus 2025',
    readTime: '4 menit baca',
    excerpt: 'Memahami makna filosofis di balik cengkeh, godheg, dan cunduk mentul agar riasan pengantin memancarkan aura sakral nan anggun.',
    image: '/images/hero-portrait.png',
    content: [
      'Pernikahan adat Jawa kaya akan simbolisme luhur. Paes yang dilukis di dahi calon pengantin bukan sekadar estetika riasan, melainkan doa suci bagi ketentraman rumah tangga.',
      'Paes Solo Putri menonjolkan bentuk daun sirih melengkung halus dengan warna hitam pekat yang melambangkan kelembutan hati dan keteguhan budi pekerti.',
      'Sementara Paes Ageng Yogyakarta memiliki tatahan prada emas di tepian paes, memancarkan aura keagungan keraton yang megah dan berwibawa.',
      'Tim Diamor selalu mendampingi calon pengantin dalam berdiskusi dengan perias paes senior agar riasan selaras dengan tema acara, busana, dan kenyamanan mempelai.'
    ]
  },
  {
    id: 't2',
    slug: 'tips-menghitung-porsi-catering-pernikahan',
    title: 'Cara Tepat Menghitung Porsi Catering Agar Tamu Terlayani Maksimal Tanpa Pemborosan',
    category: 'Anggaran & Katering',
    date: '28 Juli 2025',
    readTime: '5 menit baca',
    excerpt: 'Rumus proporsional rasio prasmanan dan gubukan yang efektif untuk perayaan pernikahan di wilayah Ponorogo and beyond.',
    image: '/images/ballroom-candid.png',
    content: [
      'Kecukupan hidangan adalah prioritas utama untuk menghormati para tamu yang hadir. Menghitung porsi katering memerlukan rumus rasio yang teruji.',
      'Rumus umum: Jika mengundang 500 undangan (asumsi 1.000 orang hadir bersama pasangan), rasio ideal adalah 60% menu prasmanan (600 porsi) dan total gubukan sebanyak 4–5 kali lipat jumlah undangan (2.000–2.500 porsi gubukan aneka variasi).',
      'Pilihlah vendor katering yang menjaga rasa, higienitas, serta memiliki tim perapihan meja yang cepat dan cekatan.',
      'Diamor Organizer memastikan koordinasi teknis katering berjalan tepat waktu, mengawasi flow penyajian, dan mengantisipasi antrean tamu secara sigap.'
    ]
  },
  {
    id: 't3',
    slug: 'tahapan-persiapan-pernikahan-h-min-6-bulan',
    title: 'Checklist Terstruktur Persiapan Pernikahan dari H-6 Bulan Hingga Hari-H',
    category: 'Manajemen Waktu',
    date: '10 Juni 2025',
    readTime: '6 menit baca',
    excerpt: 'Panduan bertahap mengunci tanggal impian, pemilihan vendor, technical meeting, dan gladi resik bersama Diamor Organizer.',
    image: '/images/wedding-artifacts.jpg',
    content: [
      'Mempersiapkan pernikahan yang tenang dan berkesan membutuhkan timeline yang terarah tanpa tergesa-gesa.',
      'H-6 Bulan: Kunci tanggal acara, tentukan konsep utama, dan tunjuk wedding organizer terpercaya Anda.',
      'H-3 Bulan: Finalisasi kurasi dekorasi, katering, foto-video, serta busana pengantin dan keluarga besar.',
      'H-1 Bulan: Technical Meeting bersama seluruh vendor untuk sinkronisasi master rundown dan pembagian peran keluarga.',
      'H-1 Minggu: Gladi resik prosesi akad nikah dan panggih bersama pemandu adat dan orang tua agar semua pihak siap menyambut hari bahagia dengan hati tenang.'
    ]
  }
];
