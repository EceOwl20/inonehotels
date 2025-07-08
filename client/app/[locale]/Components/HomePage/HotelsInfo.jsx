'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HotelsInfo() {
  const t = useTranslations('HotelsInfo');

  const hotels = [
    {
      id: 'inoneMucho',
      name: 'Inone Mucho Selection',
      image: '/Genel/InoneMuchoSelection.jpg',
      locationKey: 'muchoLocation',
      descriptionKey: 'muchoDescription',
      featuresKey: 'muchoFeatures',
      url: 'https://inonehotel.com/',
      isExternal: true
    },
    {
      id: 'inoneBitez',
      name: 'Inone Bitez',
      image: '/Genel/InOneBitez.webp',
      locationKey: 'bitezLocation',
      descriptionKey: 'bitezDescription',
      featuresKey: 'bitezFeatures',
      url: '/inone-bitez',
      isExternal: false
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-cormorant font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 md:mb-6">
            {t('title')}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gray-300 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-jost text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('subtitle')}
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {hotels.map((hotel, index) => (
            <div key={hotel.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Hotel Image */}
              <div className={`relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Hotel Info */}
              <div className={`space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                
                {/* Hotel Name */}
                <h3 className="font-cormorant font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 text-center lg:text-left">
                  {hotel.name}
                </h3>

                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm md:text-base text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-jost font-medium">{t(hotel.locationKey)}</span>
                </div>

                {/* Description */}
                <p className="font-jost text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  {t(hotel.descriptionKey)}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-none">
                  {t(hotel.featuresKey).split(',').map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-xs sm:text-sm md:text-base text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-2"></div>
                      <span className="font-jost leading-tight">{feature.trim()}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                  {hotel.isExternal ? (
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gray-900 text-white font-jost font-medium hover:bg-gray-800 transition-colors duration-300 rounded-lg group text-xs sm:text-sm md:text-base"
                    >
                      {t('visitWebsite')}
                      <svg className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={hotel.url}
                      className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gray-900 text-white font-jost font-medium hover:bg-gray-800 transition-colors duration-300 rounded-lg group text-xs sm:text-sm md:text-base"
                    >
                      {t('exploreHotel')}
                      <svg className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}