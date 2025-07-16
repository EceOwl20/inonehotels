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
    <div className='flex flex-col py-12 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      {/* Title at the top */}
      <div className='text-center mb-12'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
          {t('title') || 'HEMEN UÇAK BİLETİNİZİ AYIRTIN'}
        </h2>
      </div>

      {/* Airlines Grid with Side Image */}
      <div className='w-full max-w-7xl mx-auto mb-8'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20'>
          {/* Left side - Airlines logos */}
          <div className='flex flex-col space-y-6 items-center'>
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

          {/* Right side - Additional image */}
          <div className='flex-shrink-0'>
            <img 
              src='/bitez/Offers/Vector5.png' 
              alt='Uçak İllüstrasyonu'
              className='w-80 h-64 sm:w-96 sm:h-72 object-contain'
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Placeholder if image fails to load */}
            <div className='hidden w-80 h-64 sm:w-96 sm:h-72 flex items-center justify-center'>
              <div className='text-center text-gray-600'>
                <svg className='w-16 h-16 mx-auto mb-2 text-blue-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <p className='text-sm'>Uçak Resmi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className='text-center max-w-4xl mx-auto'>
        <p className='text-base sm:text-lg text-gray-600 mb-4'>
          {t('subtitle') || 'Güvenilir havayolu partnerleri ile en uygun fiyatlarla uçak bileti rezervasyonu yapın.'}
        </p>
        <p className='text-sm text-gray-500 leading-relaxed'>
          {t('bottomText') || 'Tüm rezervasyon işlemlerinizi güvenle yapabilir, size en uygun uçuş seçeneklerini bulabilirsiniz. Anlık fiyat güncellemeleri ve kolay rezervasyon sistemi ile seyahat planlarınızı kolayca gerçekleştirin.'}
        </p>
      </div>
    </div>
  )
}

export default OffersPlane