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
    title: 'Pawiwahan Ageng Adat Tradisional',
    category: 'Adat Jawa',
    venue: 'Ponorogo and Beyond',
    couple: 'Inspirasi Adat Tradisional',
    image: '/images/hero-portrait.png'
  },
  {
    id: 'g2',
    title: 'Grand Ballroom Elegance Reception',
    category: 'Modern Ballroom',
    venue: 'Ballroom Ponorogo & Sekitarnya',
    couple: 'Inspirasi Modern Elegance',
    image: '/images/ballroom-candid.png'
  },
  {
    id: 'g3',
    title: 'Intimate Pendopo & Garden Wedding',
    category: 'Intimate Joglo',
    venue: 'Pendopo & Garden Venue',
    couple: 'Inspirasi Intimate Event',
    image: '/images/joglo-pendopo.jpg'
  },
  {
    id: 'g4',
    title: 'Upacara Siraman & Sungkeman',
    category: 'Detail & Ritual',
    venue: 'Kediaman Mempelai',
    couple: 'Prosesi Adat Penuh Khidmat',
    image: '/images/siraman-ceremony.png'
  },
  {
    id: 'g5',
    title: 'Detail Uba Rampe & Sentuhan Kemewahan',
    category: 'Detail & Ritual',
    venue: 'Diamor Portfolio Gallery',
    couple: 'Elegance in Every Detail',
    image: '/images/wedding-artifacts.jpg'
  },
  {
    id: 'g6',
    title: 'Tim Lapangan Diamor Organizer',
    category: 'Adat Jawa',
    venue: 'Venue Acara Ponorogo',
    couple: 'Dedikasi Tim Profesional',
    image: '/images/mantu-team-hero.jpg'
  },
  {
    id: 'g7',
    title: 'Resepsi Hangat & Penuh Kebahagiaan',
    category: 'Modern Ballroom',
    venue: 'Convention Hall Ponorogo',
    couple: 'Momen Berkesan & Hangat',
    image: '/images/ballroom-candid.png'
  },
  {
    id: 'g8',
    title: 'Nuansa Asri & Khidmat',
    category: 'Intimate Joglo',
    venue: 'Venue Terpilih Jawa Timur',
    couple: 'Inspirasi Perayaan Khidmat',
    image: '/images/joglo-pendopo.jpg'
  }
];
