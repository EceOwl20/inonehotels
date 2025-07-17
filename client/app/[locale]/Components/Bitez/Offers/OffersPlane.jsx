'use client'
import React from 'react'
import { useTranslations } from 'next-intl';

const OffersPlane = () => {
  const t = useTranslations('offersHero.plane');
  
  const airlines = [
    {
      name: 'Pegasus',
      logo: '/bitez/Offers/pegasus.webp',
      alt: 'Pegasus Airlines'
    },
    {
      name: 'Turkish Airlines',
      logo: '/bitez/Offers/thy.webp',
      alt: 'Turkish Airlines'
    },
    {
      name: 'Corendon',
      logo: '/bitez/Offers/corendon.webp',
      alt: 'Corendon Airlines'
    },
    {
      name: 'Skyscanner',
      logo: '/bitez/Offers/skyscanner.webp',
      alt: 'Skyscanner'
    },
    {
      name: 'Aviasales',
      logo: '/bitez/Offers/aviasales.webp',
      alt: 'Aviasales'
    }
  ];

  return (
    <div className='flex flex-col mt-6 lg:mt-12 py-6 lg:py-12 px-4 sm:px-6 lg:px-8 -mb-24'>
      {/* Title - responsive positioning */}
      <div className='flex justify-center lg:justify-start lg:ml-48 mb-6 lg:mb-8'>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left'>
          {t('title') || 'HEMEN UÇAK BİLETİNİZİ AYIRTIN'}
        </h2>
      </div>

      {/* Airlines Grid with Conditional Plane */}
      <div className='w-full max-w-7xl mx-auto mb-8 relative'>
        {/* Airlines logos - responsive layout */}
        <div className='flex flex-col space-y-4 lg:space-y-6 items-center lg:items-start lg:ml-8 xl:ml-16 2xl:ml-2 relative z-10 mt-0 lg:mt-0'>
          
          {/* Mobile layout - single column */}
          <div className='flex flex-col space-y-3 lg:hidden w-full max-w-sm'>
            {airlines.map((airline, index) => (
              <div 
                key={index} 
                className='group cursor-pointer bg-white p-3 w-full min-h-[60px] flex items-center justify-center hover:shadow-md transition-all duration-300 rounded-lg shadow-sm'
              >
                <img 
                  src={airline.logo} 
                  alt={airline.alt}
                  className='max-w-full max-h-8 object-contain transition-all duration-300'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className='hidden text-gray-500 text-sm font-medium ml-4'>
                  {airline.name}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop layout - original grid */}
          <div className='hidden lg:flex flex-col space-y-6'>
            {/* First row - 2 airlines */}
            <div className='flex gap-6'>
              {airlines.slice(0, 2).map((airline, index) => (
                <div 
                  key={index} 
                  className='group cursor-pointer bg-white p-4 sm:p-6 w-full max-w-[200px] min-h-[80px] flex items-center justify-center hover:shadow-md transition-all duration-300 rounded-lg'
                >
                  <img 
                    src={airline.logo} 
                    alt={airline.alt}
                    className='max-w-full max-h-12 sm:max-h-16 object-contain transition-all duration-300'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className='hidden text-gray-500 text-sm font-medium ml-4'>
                    {airline.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - 2 airlines */}
            <div className='flex gap-6'>
              {airlines.slice(2, 4).map((airline, index) => (
                <div 
                  key={index + 2} 
                  className='group cursor-pointer bg-white p-4 sm:p-6 w-full max-w-[200px] min-h-[80px] flex items-center justify-center hover:shadow-md transition-all duration-300 rounded-lg'
                >
                  <img 
                    src={airline.logo} 
                    alt={airline.alt}
                    className='max-w-full max-h-12 sm:max-h-16 object-contain transition-all duration-300'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className='hidden text-gray-500 text-sm font-medium ml-4'>
                    {airline.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third row - 1 airline */}
            <div className='flex justify-center'>
              {airlines.slice(4, 5).map((airline, index) => (
                <div 
                  key={index + 4} 
                  className='group cursor-pointer bg-white p-4 sm:p-6 w-full max-w-[200px] min-h-[80px] flex items-center justify-center hover:shadow-md transition-all duration-300 rounded-lg'
                >
                  <img 
                    src={airline.logo} 
                    alt={airline.alt}
                    className='max-w-full max-h-12 sm:max-h-16 object-contain transition-all duration-300'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className='hidden text-gray-500 text-sm font-medium ml-4'>
                    {airline.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plane image - only visible on large screens */}
        <div className='absolute top-1/2 -translate-y-1/2 left-[700px] -mt-20 pointer-events-none hidden xl:block'>
          <img 
            src='/bitez/Offers/Vector5.png' 
            alt='Uçak İllüstrasyonu'
            className='w-[65rem] h-[52rem] object-contain opacity-90'
            style={{
              minWidth: '65rem',
              minHeight: '52rem',
              maxWidth: '65rem',
              maxHeight: '52rem'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Placeholder if image fails to load */}
          <div className='hidden w-[65rem] h-[52rem] flex items-center justify-center'>
            <div className='text-center text-gray-600'>
              <svg className='w-24 h-24 mx-auto mb-2 text-blue-400' fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <p className='text-lg'>Uçak Resmi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom content - responsive text */}
      <div className='text-center max-w-4xl mx-auto px-4'>
        <p className='text-sm sm:text-base lg:text-lg text-gray-600 mb-4'>
          {t('subtitle') || 'Güvenilir havayolu partnerleri ile en uygun fiyatlarla uçak bileti rezervasyonu yapın.'}
        </p>
        <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
          {t('bottomText') || 'Tüm rezervasyon işlemlerinizi güvenle yapabilir, size en uygun uçuş seçeneklerini bulabilirsiniz. Anlık fiyat güncellemeleri ve kolay rezervasyon sistemi ile seyahat planlarınızı kolayca gerçekleştirin.'}
        </p>
      </div>
    </div>
  )
}

export default OffersPlane