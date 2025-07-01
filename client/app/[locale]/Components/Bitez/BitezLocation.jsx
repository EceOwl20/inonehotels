'use client';
import { useTranslations } from 'next-intl';

export default function BitezLocation() {
  const t = useTranslations('inoneBitez');

  return (
    <section className="py-20 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-wide mb-6">
              {t('locationTitle')}
            </h2>
            <div className="w-16 h-px bg-white/30 mb-8"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('locationDescription')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-400 mr-3">📍</span>
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-3">📞</span>
                <span>+90 252 319 40 48</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-3">✉️</span>
                <span>callcenter@inonehotel.com</span>
              </div>
            </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">🗺️ Harita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}