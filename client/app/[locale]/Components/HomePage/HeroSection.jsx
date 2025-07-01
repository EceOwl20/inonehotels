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
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="max-w-full mx-auto px-1 sm:px-2 lg:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
          {hotels.map((hotel, index) => (
            <Link 
              key={index} 
              href={hotel.url} 
              className="relative group overflow-hidden block rounded-2xl shadow-xl"
            >
              {/* Image Container */}
              <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8">
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-10px] mt-[612]">
                    {/* Hotel Name */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2 sm:mb-3 drop-shadow-2xl">
                      {hotel.name}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/90 font-light mb-4 sm:mb-6 max-w-sm mx-auto drop-shadow-lg">
                      {t(hotel.descriptionKey)}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 text-sm">
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