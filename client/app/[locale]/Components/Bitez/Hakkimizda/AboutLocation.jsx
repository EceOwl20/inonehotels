'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutLocation() {
  const t = useTranslations('aboutUs');

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Location Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about/bitez-location.jpg"
              alt="Bitez Location"
              fill
              className="object-cover"
            />
          </div>

          {/* Location Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
                {t('locationTitle')}
              </h2>
              <div className="w-20 h-px bg-gray-300 mb-8"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('locationDescription1')}
            </p>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('locationDescription2')}
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏖️</span>
                <span className="text-gray-700">{t('beachDistance')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏛️</span>
                <span className="text-gray-700">{t('cityDistance')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✈️</span>
                <span className="text-gray-700">{t('airportDistance')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}