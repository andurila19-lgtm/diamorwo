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
    date: '14 Agustus 2024',
    readTime: '4 menit baca',
    excerpt: 'Memahami makna filosofis di balik cengkeh, godheg, dan cunduk mentul agar riasan pengantin memancarkan aura sakral.',
    image: '/images/hero-portrait.png',
    content: [
      'Pernikahan adat Jawa kaya akan simbolisme luhur. Paes yang dilukis di dahi calon pengantin bukan sekadar estetika riasan, melainkan doa suci bagi ketentraman rumah tangga.',
      'Paes Solo Putri menonjolkan bentuk daun sirih melengkung halus dengan warna hitam pekat yang melambangkan kelembutan hati dan keteguhan iman.',
      'Sementara Paes Ageng Yogyakarta memiliki tatahan prada emas di tepian paes, memancarkan aura keagungan keraton yang megah.',
      'Tim MANTU selalu mendampingi calon pengantin dalam berkonsultasi dengan perias paes senior agar riasan selaras dengan postur tubuh dan busana yang dipilih.'
    ]
  },
  {
    id: 't2',
    slug: 'tips-menghitung-porsi-catering-pernikahan',
    title: 'Cara Tepat Menghitung Porsi Catering Agar Tidak Kurang Tanpa Membengkakkan Budget',
    category: 'Anggaran & Katering',
    date: '28 Juli 2024',
    readTime: '5 menit baca',
    excerpt: 'Rumus realistis rasio prasmanan dan gubukan berdasarkan kebiasaan tamu di wilayah Boyolali dan Solo Raya.',
    image: '/images/ballroom-candid.png',
    content: [
      'Kekurangan makanan adalah kekhawatiran nomor satu bagi orang tua mempelai. Menghitung porsi katering memerlukan rumus rasio yang teruji.',
      'Rumus umum: Jika mengundang 500 undangan (1.000 orang), rasio ideal adalah 60% menu prasmanan (600 porsi) dan total gubukan sebanyak 4-5 kali lipat jumlah undangan (2.000–2.500 porsi gubukan).',
      'Pilihlah vendor katering yang terbiasa menangani *flow management* tamu agar refill makanan berjalan lancar tanpa antrean panjang.',
      'MANTU memastikan tim floor coordinator katering siaga memantau kapasitas hidangan di setiap meja buffet secara real-time.'
    ]
  },
  {
    id: 't3',
    slug: 'tahapan-persiapan-pernikahan-h-min-6-bulan',
    title: 'Checklist Lengkap Persiapan Pernikahan dari H-6 Bulan Hingga Hari-H',
    category: 'Manajemen Waktu',
    date: '10 Juni 2024',
    readTime: '6 menit baca',
    excerpt: 'Jadwal terstruktur mengunci venue favorit, fitting busana, technical meeting, dan gladi resik.',
    image: '/images/wedding-artifacts.jpg',
    content: [
      'Mempersiapkan pernikahan tanpa kepanikan membutuhkan timeline yang disiplin.',
      'H-6 Bulan: Kunci tanggal, kunci venue, dan tentukan wedding organizer utama Anda.',
      'H-3 Bulan: Selesaikan kurasi dekorasi, fotografer, katering, dan lakukan food tasting bersama keluarga besar.',
      'H-1 Bulan: Laksanakan Technical Meeting bersama seluruh vendor untuk sinkronisasi master rundown.',
      'H-1 Minggu: Gladi resik prosesi akad nikah dan panggih bersama pemandu adat dan orang tua.'
    ]
  }
];
