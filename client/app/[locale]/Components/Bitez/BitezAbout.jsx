'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BitezAbout() {
  const t = useTranslations('inoneBitez');

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
                {t('aboutTitle')}
              </h2>
              <div className="w-16 h-px bg-gray-300 mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutDescription1')}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutDescription2')}
            </p>
            
            <div className="pt-6">
              <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                {t('exploreButton')}
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/Genel/InOneBitez.webp"
              alt="Inone Bitez Hotel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}