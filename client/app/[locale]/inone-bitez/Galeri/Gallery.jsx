'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const t = useTranslations('Gallery');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Galeri kategorileri
  const categories = [
    { id: 'all', labelKey: 'all' },
    { id: 'rooms', labelKey: 'rooms' },
    { id: 'restaurant', labelKey: 'restaurant' },
    { id: 'general', labelKey: 'general' }
  ];

  // Galeri resimleri (örnek)
  // Galeri resimleri - Düzeltilmiş versiyon
const galleryImages = [
  // Deluxe Room resimleri (ID: 1-7)
  {
    id: 1,
    src: '/bitez/Odalar/Deluxe/Oda1.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 2,
    src: '/bitez/Odalar/Deluxe/Oda2.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 3,
    src: '/bitez/Odalar/Deluxe/Oda3.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 4,
    src: '/bitez/Odalar/Deluxe/Oda4.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 5,
    src: '/bitez/Odalar/Deluxe/Oda5.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 6,
    src: '/bitez/Odalar/Deluxe/Oda6.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },
  {
    id: 7,
    src: '/bitez/Odalar/Deluxe/Oda7.webp',
    alt: 'Deluxe Room',
    category: 'rooms',
    titleKey: 'room1Title'
  },

  // Suite Room resimleri (ID: 8-18)
  {
    id: 8,
    src: '/bitez/Odalar/Suite/Oda1.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 9,
    src: '/bitez/Odalar/Suite/Oda2.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 10,
    src: '/bitez/Odalar/Suite/Oda3.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 11,
    src: '/bitez/Odalar/Suite/Oda4.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 12,
    src: '/bitez/Odalar/Suite/Oda5.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 13,
    src: '/bitez/Odalar/Suite/Oda6.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 14,
    src: '/bitez/Odalar/Suite/Oda7.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 15,
    src: '/bitez/Odalar/Suite/Oda8.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 16,
    src: '/bitez/Odalar/Suite/Oda9.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 17,
    src: '/bitez/Odalar/Suite/Oda10.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 18,
    src: '/bitez/Odalar/Suite/Oda11.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 19,
    src: '/bitez/Odalar/Suite/Oda12.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },
  {
    id: 20,
    src: '/bitez/Odalar/Suite/Oda13.webp',
    alt: 'Suite Room',
    category: 'rooms',
    titleKey: 'room2Title'
  },

  // Restaurant resimleri (ID: 19)
  {
    id: 21,
    src: '/gallery/restaurant1.jpg',
    alt: 'Restaurant',
    category: 'restaurant',
    titleKey: 'restaurant1Title'
  },

  {
    id: 22,
    src: '/bitez/General/Genel1.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 23,
    src: '/bitez/General/Genel2.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 24,
    src: '/bitez/General/Genel3.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 25,
    src: '/bitez/General/Genel4.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 26,
    src: '/bitez/General/Genel5.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 27,
    src: '/bitez/General/Genel6.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 28,
    src: '/bitez/General/Genel7.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 29,
    src: '/bitez/General/Genel8.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
  {
    id: 30,
    src: '/bitez/General/Genel9.jpg',
    alt: 'Hotel Exterior',
    category: 'general',
    titleKey: 'general1Title'
  },
];

  // Filtrelenmiş resimler
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Lightbox navigation
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-white mb-4">
              {t('title')}
            </h1>
            <p className="font-jost text-base sm:text-lg text-white/90 max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-jost font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-jost text-sm font-medium text-gray-900">
                      {t('viewImage')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <h3 className="font-cormorant text-lg sm:text-xl text-white">
                  {t(selectedImage.titleKey)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}