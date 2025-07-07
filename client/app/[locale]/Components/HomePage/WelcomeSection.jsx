'use client';
import { useTranslations } from 'next-intl';

export default function FeaturedSection() {
  const t = useTranslations('Featured');

  return (
    <section className="sm:py-24 -mt-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Main Title - Cormorant Garamond için zarif başlık */}
        <h1 className="font-cormorant font-light text-4xl sm:text-5xl lg:text-6xl  text-gray-800 mb-8 sm:mb-12 lg:mb-16">
          {t('title')}
        </h1>
        
        {/* Decorative Line */}
        <div className="w-24 sm:w-32 h-px bg-gray-300 mx-auto mb-8 sm:mb-12 lg:mb-16 -mt-12"></div>
        
        {/* Description - Jost için okunabilir açıklama */}
        <p className="font-jost -mt-12 font-light text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t('description')}
        </p>
        
      </div>
    </section>
  );
}