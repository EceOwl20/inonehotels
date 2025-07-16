'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const OffersHero = ({ language = '' }) => {
  const [activeTab, setActiveTab] = useState('genel')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Çeviri hook'unu doğru kullan
  const t = useTranslations('offersHero');
  
  // Galeri resimleri
  const galleryImages = {
    genel: [
      { id: 1, src: '/bitez/General/Genel1.jpg', alt: `${t('gallery.general')} 1` },
      { id: 2, src: '/bitez/General/Genel2.jpg', alt: `${t('gallery.general')} 2` },
      { id: 3, src: '/bitez/General/Genel3.jpg', alt: `${t('gallery.general')} 3` },
      { id: 4, src: '/bitez/General/Genel4.jpg', alt: `${t('gallery.general')} 4` },
      { id: 5, src: '/bitez/General/Genel5.jpg', alt: `${t('gallery.general')} 5` },
      { id: 6, src: '/bitez/General/Genel6.jpg', alt: `${t('gallery.general')} 6` },
      { id: 7, src: '/bitez/General/Genel7.jpg', alt: `${t('gallery.general')} 7` },
      { id: 8, src: '/bitez/General/Genel8.jpg', alt: `${t('gallery.general')} 8` },
      { id: 9, src: '/bitez/General/Genel9.jpg', alt: `${t('gallery.general')} 9` },
    ],
    restaurant: [
      { id: 1, src: '/bitez/Restaurant/Genel1.jpg', alt: `${t('gallery.restaurant')} 1` },
      { id: 2, src: '/bitez/Restaurant/Genel2.jpg', alt: `${t('gallery.restaurant')} 2` },
      { id: 3, src: '/bitez/Restaurant/Genel3.jpg', alt: `${t('gallery.restaurant')} 3` },
      { id: 4, src: '/bitez/Restaurant/Genel4.jpg', alt: `${t('gallery.restaurant')} 4` },
      { id: 5, src: '/bitez/Restaurant/Genel5.jpg', alt: `${t('gallery.restaurant')} 5` },
      { id: 6, src: '/bitez/Restaurant/Genel6.jpg', alt: `${t('gallery.restaurant')} 6` },
      { id: 7, src: '/bitez/Restaurant/Genel7.jpg', alt: `${t('gallery.restaurant')} 7` },
      { id: 8, src: '/bitez/Restaurant/Genel8.jpg', alt: `${t('gallery.restaurant')} 8` },
      { id: 9, src: '/bitez/Restaurant/Genel9.jpg', alt: `${t('gallery.restaurant')} 9` },
      { id: 10, src: '/bitez/Restaurant/Genel10.jpg', alt: `${t('gallery.restaurant')} 10` },
    ],
    odalar: [
      { id: 1, src: '/bitez/Odalar/Deluxe/Oda1.webp', alt: `${t('gallery.room')} 1` },
      { id: 2, src: '/bitez/Odalar/Deluxe/Oda2.webp', alt: `${t('gallery.room')} 2` },
      { id: 3, src: '/bitez/Odalar/Deluxe/Oda3.webp', alt: `${t('gallery.room')} 3` },
      { id: 4, src: '/bitez/Odalar/Deluxe/Oda4.webp', alt: `${t('gallery.room')} 4` },
      { id: 5, src: '/bitez/Odalar/Deluxe/Oda5.webp', alt: `${t('gallery.room')} 5` },
      { id: 6, src: '/bitez/Odalar/Deluxe/Oda6.webp', alt: `${t('gallery.room')} 6` },
      { id: 7, src: '/bitez/Odalar/Deluxe/Oda7.webp', alt: `${t('gallery.room')} 7` },
      { id: 8, src: '/bitez/Odalar/Suite/Oda1.webp', alt: `${t('gallery.room')} 8` },
      { id: 9, src: '/bitez/Odalar/Suite/Oda2.webp', alt: `${t('gallery.room')} 9` },
      { id: 10, src: '/bitez/Odalar/Suite/Oda3.webp', alt: `${t('gallery.room')} 10` },
    ]
  }

  const [selectedImage, setSelectedImage] = useState(galleryImages.genel[0])

  // Tab değiştiğinde ilk resmi seç
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSelectedImage(galleryImages[tab][0])
  }

  // Modal açma
  const openModal = () => {
    const currentImages = galleryImages[activeTab]
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id)
    setCurrentImageIndex(currentIndex)
    setIsModalOpen(true)
  }

  // Modal kapama
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Sonraki resim
  const nextImage = () => {
    const currentImages = galleryImages[activeTab]
    setCurrentImageIndex((prev) => 
      prev === currentImages.length - 1 ? 0 : prev + 1
    )
  }

  // Önceki resim
  const prevImage = () => {
    const currentImages = galleryImages[activeTab]
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    )
  }

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return
      
      if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isModalOpen])

  // Modal açıkken body scroll'u engelle
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <div className="flex w-full py-8 px-4">
      <div className="max-w-7xl w-full mx-auto">
        {/* Grid oranları değiştirildi: sol taraf daha geniş */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          
          {/* Sol Taraf - Galeri (4 kolon genişliği) */}
          <div className="flex flex-col lg:col-span-4">
            {/* Büyük Ana Resim */}
            <div 
              className="relative h-80 md:h-96 lg:h-[650px] w-full overflow-hidden cursor-pointer group"
              onClick={openModal}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                priority
              />
              {/* Büyütme ikonu */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tab Seçenekleri - Resimli */}
            <div className="flex justify-center lg:justify-start space-x-3 mt-4">
              <button
                onClick={() => handleTabChange('genel')}
                className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'genel'
                    ? 'ring-3 ring-gray-800 shadow-lg scale-105'
                    : 'hover:ring-2 hover:ring-gray-400'
                }`}
              >
                <div className="relative w-32 h-20 md:w-36 md:h-24">
                  <Image
                    src="/bitez/General/Genel1.jpg"
                    alt={t('tabs.genel')}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeTab === 'genel' 
                      ? 'bg-black/20' 
                      : 'bg-black/50 hover:bg-black/30'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold text-center">
                      {t('tabs.genel')}
                    </span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('restaurant')}
                className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'restaurant'
                    ? 'ring-3 ring-gray-800 shadow-lg scale-105'
                    : 'hover:ring-2 hover:ring-gray-400'
                }`}
              >
                <div className="relative w-32 h-20 md:w-36 md:h-24">
                  <Image
                    src="/bitez/Restaurant/Genel1.jpg"
                    alt={t('tabs.restaurant')}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeTab === 'restaurant' 
                      ? 'bg-black/20' 
                      : 'bg-black/50 hover:bg-black/30'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold text-center">
                      {t('tabs.restaurant')}
                    </span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('odalar')}
                className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'odalar'
                    ? 'ring-3 ring-gray-800 shadow-lg scale-105'
                    : 'hover:ring-2 hover:ring-gray-400'
                }`}
              >
                <div className="relative w-32 h-20 md:w-36 md:h-24">
                  <Image
                    src="/bitez/Odalar/Deluxe/Oda1.webp"
                    alt={t('tabs.odalar')}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeTab === 'odalar' 
                      ? 'bg-black/20' 
                      : 'bg-black/50 hover:bg-black/30'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold text-center">
                      {t('tabs.odalar')}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Sağ Taraf - Özel Fırsatlar */}
          <div className="flex flex-col lg:col-span-2">
            <div className="space-y-6">
              {/* Fırsat 1 */}
              <div className="group relative overflow-hidden transition-all duration-300">
                <div className="relative h-48 md:h-52 lg:h-[200px]">
                  <Image
                    src="/offers/offer-1.jpg"
                    alt={t('offers.earlyBooking.title')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">{t('offers.earlyBooking.title')}</h3>
                    <p className="text-sm opacity-90 mb-4">{t('offers.earlyBooking.description')}</p>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                      {t('offers.earlyBooking.button')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Fırsat 2 */}
              <div className="group relative overflow-hidden transition-all duration-300">
                <div className="relative h-48 md:h-52 lg:h-[200px]">
                  <Image
                    src="/offers/offer-2.jpg"
                    alt={t('offers.longStay.title')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">{t('offers.longStay.title')}</h3>
                    <p className="text-sm opacity-90 mb-4">{t('offers.longStay.description')}</p>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                      {t('offers.longStay.button')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Fırsat 3 */}
              <div className="group relative overflow-hidden transition-all duration-300">
                <div className="relative h-48 md:h-52 lg:h-[200px]">
                  <Image
                    src="/offers/offer-3.jpg"
                    alt={t('offers.honeymoon.title')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">{t('offers.honeymoon.title')}</h3>
                    <p className="text-sm opacity-90 mb-4">{t('offers.honeymoon.description')}</p>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                      {t('offers.honeymoon.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            {/* Kapatma butonu */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Sol ok */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Sağ ok */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Ana resim */}
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full mx-4">
              <Image
                src={galleryImages[activeTab][currentImageIndex].src}
                alt={galleryImages[activeTab][currentImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Resim sayacı */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {galleryImages[activeTab].length}
            </div>

            {/* Thumbnail navigasyon */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
              {galleryImages[activeTab].map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-12 flex-shrink-0 overflow-hidden rounded ${
                    index === currentImageIndex ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OffersHero