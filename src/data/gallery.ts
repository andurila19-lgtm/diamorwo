export interface GalleryItem {
  id: string;
  title: string;
  category: 'Adat Jawa' | 'Modern Ballroom' | 'Intimate Joglo' | 'Detail & Ritual';
  venue: string;
  couple: string;
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pawiwahan Ageng Solo Basahan',
    category: 'Adat Jawa',
    venue: 'Ndalem Ageng Boyolali',
    couple: 'Gendhis & Raden Arya',
    image: '/images/hero-portrait.png'
  },
  {
    id: 'g2',
    title: 'Grand Ballroom Reception',
    category: 'Modern Ballroom',
    venue: 'The Heritage Convention Hall',
    couple: 'Anindya & Bagas Prasetyo',
    image: '/images/ballroom-candid.png'
  },
  {
    id: 'g3',
    title: 'Intimate Pendopo Joglo Wedding',
    category: 'Intimate Joglo',
    venue: 'Pendopo Siswodipuran Boyolali',
    couple: 'Sekar & Pradana',
    image: '/images/joglo-pendopo.jpg'
  },
  {
    id: 'g4',
    title: 'Upacara Siraman Bunga Setaman',
    category: 'Detail & Ritual',
    venue: 'Kediaman Keluarga Selo',
    couple: 'Prosesi Siraman Mempelai',
    image: '/images/siraman-ceremony.png'
  },
  {
    id: 'g5',
    title: 'Uba Rampe Mahkota Cunduk Mentul',
    category: 'Detail & Ritual',
    venue: 'Galipat Heritage Gallery',
    couple: 'Koleksi Perhiasan Sepuh Emas',
    image: '/images/wedding-artifacts.jpg'
  },
  {
    id: 'g6',
    title: 'Tim Galipat Wedding Organizer',
    category: 'Adat Jawa',
    venue: 'Grand Pelaminan Boyolali',
    couple: 'Galipat Professional Crew',
    image: '/images/mantu-team-hero.jpg'
  },
  {
    id: 'g7',
    title: 'Resepsi Hangat & Penuh Tawa',
    category: 'Modern Ballroom',
    venue: 'Boyolali Town Hall',
    couple: 'Anggito & Wulan',
    image: '/images/ballroom-candid.png'
  },
  {
    id: 'g8',
    title: 'Pernikahan Klasik Lereng Merbabu',
    category: 'Intimate Joglo',
    venue: 'Villa Pendopo Selo Boyolali',
    couple: 'dr. Rarasati & Dimas',
    image: '/images/joglo-pendopo.jpg'
  }
];
