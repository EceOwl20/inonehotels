'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Oda1 from "@/public/bitez/Odalar/Deluxe/Oda1.webp"
import Oda2 from "@/public/bitez/Odalar/Deluxe/Oda2.webp"
import Oda3 from "@/public/bitez/Odalar/Deluxe/Oda3.webp"
import Oda4 from "@/public/bitez/Odalar/Deluxe/Oda4.webp"
import Oda5 from "@/public/bitez/Odalar/Deluxe/Oda5.webp"
import Oda6 from "@/public/bitez/Odalar/Deluxe/Oda6.webp"
import Oda7 from "@/public/bitez/Odalar/Deluxe/Oda7.webp"

export default function RoomDetailHero({ roomType, heroImages = [] }) {
  const t = useTranslations(`${roomType}Detail`);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Default images for deluxe room type
  const deluxeImages = [Oda1, Oda2, Oda3, Oda4, Oda5, Oda6, Oda7];
  
  // Use provided heroImages or default deluxe images
  const imagesToUse = heroImages.length > 0 ? heroImages : deluxeImages;

  // Auto-play functionality
  useEffect(() => {
    if (imagesToUse.length === 0 || isFullscreen) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imagesToUse.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [imagesToUse.length, isFullscreen]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % imagesToUse.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + imagesToUse.length) % imagesToUse.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (imagesToUse.length === 0) {
    return (
      <section className="relative h-[50vh] w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-2xl mx-4 my-6 shadow-xl">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="font-cormorant font-light text-4xl text-gray-700 mb-4">
            {t(roomType)}
          </h1>
          <p className="font-jost text-gray-500 text-lg">No images available</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <div className="w-12 h-12 mx-auto">
              <div className="w-full h-full border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="font-jost text-gray-600 text-sm">Loading gallery...</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 my-6">
        <section className="relative h-[55vh] w-full overflow-hidden bg-black rounded-2xl shadow-2xl">
          {/* Main Gallery Image */}
          <div className="absolute inset-0">
            <Image
              src={imagesToUse[currentIndex]}
              alt={`${t(roomType)} - ${currentIndex + 1}`}
              fill
              className="object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
              priority
            />
          </div>
          
          {/* Enhanced Gallery Navigation */}
          <div className="absolute top-4 left-4 z-30">
            <div className="bg-white/15 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-medium tracking-wide">
                  {currentIndex + 1} / {imagesToUse.length}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 group"
          >
            <div className="bg-white/15 backdrop-blur-lg hover:bg-white/25 rounded-full p-3 transition-all duration-300 border border-white/20 shadow-lg group-hover:scale-110">
              <svg className="w-5 h-5 text-white transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 group"
          >
            <div className="bg-white/15 backdrop-blur-lg hover:bg-white/25 rounded-full p-3 transition-all duration-300 border border-white/20 shadow-lg group-hover:scale-110">
              <svg className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Enhanced Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 z-30 group"
          >
            <div className="bg-white/15 backdrop-blur-lg hover:bg-white/25 rounded-xl p-3 transition-all duration-300 border border-white/20 shadow-lg group-hover:scale-105">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </button>

          {/* Enhanced Thumbnail Strip */}
          <div className="absolute bottom-4 left-4 right-4 z-30">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 shadow-lg">
              <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
                {imagesToUse.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 relative transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-16 h-12 ring-2 ring-white scale-105 shadow-lg' 
                        : 'w-12 h-9 opacity-70 hover:opacity-90 hover:scale-105'
                    }`}
                  >
                    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-300"
                      />
                    </div>
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-20 left-4 right-4 z-30">
            <div className="bg-white/15 backdrop-blur-lg rounded-full h-0.5 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / imagesToUse.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Fullscreen Gallery Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-[9998] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsFullscreen(false);
            }
          }}
        >
          {/* Enhanced Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            className="absolute top-6 right-6 z-[9999] group bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-full p-4 transition-all duration-300 border border-white/30 group-hover:scale-110 group-hover:rotate-90"
          >
            <svg className="w-6 h-6 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full pointer-events-none">
            <Image
              src={imagesToUse[currentIndex]}
              alt={`${t(roomType)} - ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Enhanced Fullscreen Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 group"
          >
            <div className="bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-full p-4 transition-all duration-300 border border-white/30 group-hover:scale-110">
              <svg className="w-6 h-6 text-white transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 group"
          >
            <div className="bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-full p-4 transition-all duration-300 border border-white/30 group-hover:scale-110">
              <svg className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Enhanced Fullscreen Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-60">
            <div className="bg-black/50 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm font-medium tracking-wide">
                {currentIndex + 1} / {imagesToUse.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}