'use client';
import { useTranslations } from 'next-intl';

export default function RoomDetails({ roomType, features, amenities }) {
  const t = useTranslations(`${roomType}Detail`);

  const handleBookNow = () => {
    // Rezervasyon sitesine yönlendir
    window.open('https://inonebitez.rezervasyonal.com/', '_blank');
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Room Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
              {t('roomDetails')}
            </h2>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 sm:p-0">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{feature.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-600">{t(feature.labelKey)}</div>
                    <div className="font-medium text-sm sm:text-base text-gray-900 truncate">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Room Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
              {t('roomDescription')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={handleBookNow}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 rounded-lg text-sm sm:text-base"
              >
                {t('bookNow')}
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium tracking-wide hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 rounded-lg text-sm sm:text-base">
                {t('virtualTour')}
              </button>
            </div>
          </div>

          {/* Amenities */}
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
              {t('amenities')}
            </h3>
            
            {/* Amenities List */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 max-h-96 overflow-y-auto">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{t(amenity)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}