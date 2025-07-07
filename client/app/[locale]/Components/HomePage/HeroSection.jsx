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
    <section className="w-full py-3 sm:py-12 lg:py-16">
      <div className="max-w-full mx-auto px-1 sm:px-2 lg:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
          {hotels.map((hotel, index) => (
            <Link 
              key={index} 
              href={hotel.url} 
              className="relative group overflow-hidden block shadow-xl"
            >
              {/* Image Container */}
              <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8">
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-10px] mt-[612]">
                    {/* Hotel Name - Cormorant Garamond için şık başlık */}
                    <h2 className="font-cormorant font-semibold text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3 drop-shadow-2xl tracking-wide">
                      {hotel.name}
                    </h2>
                    
                    {/* Description - Jost için okunabilir metin */}
                    <p className="font-jost font-light text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-sm mx-auto drop-shadow-lg leading-relaxed">
                      {t(hotel.descriptionKey)}
                    </p>
                    
                    {/* CTA Button - Jost medium için net buton */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-jost font-medium inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30  text-white hover:bg-white/20 transition-all duration-300 text-sm tracking-wide">
                        {t('discover')}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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