'use client';
import { useTranslations } from 'next-intl';

export default function FeaturedSection() {
  const t = useTranslations('Featured');

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        
        {/* Main Title */}
        <h1 className="font-cormorant font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          {t('title')}
        </h1>
        
        {/* Decorative Line */}
        <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-px bg-gray-300 mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"></div>
        
        {/* Description */}
        <p className="font-jost font-light text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
          {t('description')}
        </p>
        
      </div>
    </section>
  );
}