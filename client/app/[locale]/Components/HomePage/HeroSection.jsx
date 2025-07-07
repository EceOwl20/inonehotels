'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('heroSection');

  const hotels = [
    {
      name: 'Inone Mucho Selection',
      image: '/Genel/InoneMuchoSelection.jpg',
      url: 'https://inonehotel.com/',
      descriptionKey: 'muchoDescription'
    },
    {
      name: 'Inone Bitez',
      image: '/Genel/InOneBitez.webp',
      url: '/inone-bitez',
      descriptionKey: 'bitezDescription'
    }
  ];

  return (
    <section className="w-full py-4 sm:py-8 lg:py-16">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {hotels.map((hotel, index) => (
            <Link 
              key={index} 
              href={hotel.url} 
              className="relative group overflow-hidden block shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              {/* Image Container */}
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 sm:p-6 lg:p-8">
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-8px] w-full max-w-md">
                    {/* Hotel Name */}
                    <h2 className="font-cormorant font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 drop-shadow-2xl tracking-wide">
                      {hotel.name}
                    </h2>
                    
                    {/* Description */}
                    <p className="font-jost font-light text-sm sm:text-base md:text-lg text-white/90 mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg leading-relaxed px-2">
                      {t(hotel.descriptionKey)}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-jost font-medium inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base tracking-wide rounded">
                        {t('discover')}
                        <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}