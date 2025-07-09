'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const t = useTranslations('Gallery');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Gallery categories
  const categories = [
    { id: 'all', labelKey: 'all' },
    { id: 'rooms', labelKey: 'rooms' },
    { id: 'restaurant', labelKey: 'restaurant' },
    { id: 'general', labelKey: 'general' }
  ];

  // Gallery images
  const galleryImages = [
    // Deluxe Room images (ID: 1-7)
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

    // Suite Room images (ID: 8-20)
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

    // Restaurant images (ID: 21-106)
    {
      id: 21,
      src: '/bitez/Restaurant/genel1.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 31,
      src: '/bitez/Restaurant/genel2.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 32,
      src: '/bitez/Restaurant/genel3.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 33,
      src: '/bitez/Restaurant/genel4.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 34,
      src: '/bitez/Restaurant/genel5.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 35,
      src: '/bitez/Restaurant/genel6.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 36,
      src: '/bitez/Restaurant/genel7.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 37,
      src: '/bitez/Restaurant/genel8.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 38,
      src: '/bitez/Restaurant/genel9.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 39,
      src: '/bitez/Restaurant/genel10.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 41,
      src: '/bitez/Restaurant/genel12.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 42,
      src: '/bitez/Restaurant/genel13.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 43,
      src: '/bitez/Restaurant/genel14.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 44,
      src: '/bitez/Restaurant/genel15.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 45,
      src: '/bitez/Restaurant/genel16.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 46,
      src: '/bitez/Restaurant/genel17.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 47,
      src: '/bitez/Restaurant/genel18.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 48,
      src: '/bitez/Restaurant/genel19.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 49,
      src: '/bitez/Restaurant/genel20.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 50,
      src: '/bitez/Restaurant/genel23.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 51,
      src: '/bitez/Restaurant/genel24.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 52,
      src: '/bitez/Restaurant/genel21.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 53,
      src: '/bitez/Restaurant/genel22.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 54,
      src: '/bitez/Restaurant/genel25.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 55,
      src: '/bitez/Restaurant/genel26.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 56,
      src: '/bitez/Restaurant/genel27.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 57,
      src: '/bitez/Restaurant/genel28.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 58,
      src: '/bitez/Restaurant/genel29.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 59,
      src: '/bitez/Restaurant/genel30.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 60,
      src: '/bitez/Restaurant/genel31.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 61,
      src: '/bitez/Restaurant/genel32.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 62,
      src: '/bitez/Restaurant/genel33.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 63,
      src: '/bitez/Restaurant/genel34.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 64,
      src: '/bitez/Restaurant/genel35.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 65,
      src: '/bitez/Restaurant/genel36.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 66,
      src: '/bitez/Restaurant/genel37.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 67,
      src: '/bitez/Restaurant/genel38.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 68,
      src: '/bitez/Restaurant/genel39.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 69,
      src: '/bitez/Restaurant/genel40.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 70,
      src: '/bitez/Restaurant/genel41.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 71,
      src: '/bitez/Restaurant/genel42.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 72,
      src: '/bitez/Restaurant/genel43.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 73,
      src: '/bitez/Restaurant/genel44.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 74,
      src: '/bitez/Restaurant/genel45.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 75,
      src: '/bitez/Restaurant/genel46.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 76,
      src: '/bitez/Restaurant/genel47.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 77,
      src: '/bitez/Restaurant/genel48.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 78,
      src: '/bitez/Restaurant/genel49.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 79,
      src: '/bitez/Restaurant/genel50.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 80,
      src: '/bitez/Restaurant/genel51.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 81,
      src: '/bitez/Restaurant/genel52.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 82,
      src: '/bitez/Restaurant/genel53.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 83,
      src: '/bitez/Restaurant/genel54.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 84,
      src: '/bitez/Restaurant/genel55.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 85,
      src: '/bitez/Restaurant/genel56.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 86,
      src: '/bitez/Restaurant/genel57.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 87,
      src: '/bitez/Restaurant/genel58.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 88,
      src: '/bitez/Restaurant/genel59.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 89,
      src: '/bitez/Restaurant/genel60.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 90,
      src: '/bitez/Restaurant/genel61.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 91,
      src: '/bitez/Restaurant/genel62.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 92,
      src: '/bitez/Restaurant/genel63.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 93,
      src: '/bitez/Restaurant/genel64.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 94,
      src: '/bitez/Restaurant/genel65.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 95,
      src: '/bitez/Restaurant/genel66.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 96,
      src: '/bitez/Restaurant/genel67.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 97,
      src: '/bitez/Restaurant/genel68.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 98,
      src: '/bitez/Restaurant/genel69.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 99,
      src: '/bitez/Restaurant/genel70.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 100,
      src: '/bitez/Restaurant/genel71.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 101,
      src: '/bitez/Restaurant/genel72.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 102,
      src: '/bitez/Restaurant/genel73.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 103,
      src: '/bitez/Restaurant/genel74.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 104,
      src: '/bitez/Restaurant/genel75.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 105,
      src: '/bitez/Restaurant/genel76.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },
    {
      id: 106,
      src: '/bitez/Restaurant/genel77.jpg',
      alt: 'Restaurant',
      category: 'restaurant',
      titleKey: 'restaurant1Title'
    },

    // General images (ID: 22-30)
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

  // Filtered images
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-white -mt-20 md:-mt-24">
      
      {/* Hero Section */}
      <section className="relative h-60 sm:h-80 md:h-96 lg:h-[500px] xl:h-[650px] bg-gradient-to-r bg-cover bg-center bg-no-repeat from-gray-900 to-gray-700"
        style={{ backgroundImage: "url('/bitez/General/Genel2.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <p className="font-jost text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-jost font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 sm:group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                    <span className="font-jost text-xs sm:text-sm font-medium text-gray-900">
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
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] sm:max-h-[85vh] mx-auto flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={90}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 mx-auto max-w-md">
                <h3 className="font-cormorant text-base sm:text-lg md:text-xl text-white truncate">
                  {t(selectedImage.titleKey)}
                </h3>
                {filteredImages.length > 1 && (
                  <p className="font-jost text-xs sm:text-sm text-white/80 mt-1">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile swipe indicators */}
            {isMobile && filteredImages.length > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-xs">
                    ← Swipe →
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Touch/Swipe Functionality for Mobile */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-40 pointer-events-none"
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const startX = touch.clientX;
            
            const handleTouchMove = (e) => {
              const touch = e.touches[0];
              const deltaX = touch.clientX - startX;
              
              if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                  prevImage();
                } else {
                  nextImage();
                }
                document.removeEventListener('touchmove', handleTouchMove);
              }
            };
            
            document.addEventListener('touchmove', handleTouchMove, { passive: true });
            
            setTimeout(() => {
              document.removeEventListener('touchmove', handleTouchMove);
            }, 300);
          }}
        />
      )}
    </div>
  );
}