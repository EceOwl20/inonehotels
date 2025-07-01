'use client';
import { useTranslations } from 'next-intl';

export default function RoomDetails({ roomType, features, amenities }) {
  const t = useTranslations(`${roomType}Detail`);

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Room Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900 mb-8">
              {t('roomDetails')}
            </h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <div className="text-sm text-gray-600">{t(feature.labelKey)}</div>
                    <div className="font-medium text-gray-900">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('roomDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 rounded-lg">
                {t('bookNow')}
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium tracking-wide hover:border-gray-400 transition-colors duration-300 rounded-lg">
                {t('virtualTour')}
              </button>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-gray-900 mb-8">
              {t('amenities')}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">{t(amenity)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}