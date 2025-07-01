'use client';
import { useTranslations } from 'next-intl';

export default function FeaturedSection() {
  const t = useTranslations('Featured');

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.3em] text-gray-800 mb-8 sm:mb-12 lg:mb-16">
          {t('title')}
        </h1>
        
        {/* Decorative Line */}
        <div className="w-24 sm:w-32 h-px bg-gray-300 mx-auto mb-8 sm:mb-12 lg:mb-16"></div>
        
        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
          {t('description')}
        </p>
        
      </div>
    </section>
  );
}