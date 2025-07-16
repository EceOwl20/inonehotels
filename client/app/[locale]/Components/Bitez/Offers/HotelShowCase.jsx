'use client'
import React from 'react'
import { useTranslations } from 'next-intl';

const HotelShowCase = () => {
  const t = useTranslations('offersHero.hotel');
  
  return (
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
        {/* Images */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center w-full max-w-6xl'>
            <div className='flex justify-center items-center'>
                <img 
                    src="/bitez/Offers/INONEmuchoselectıonhotel.png" 
                    alt="Hotel Room" 
                    className="w-full sm:w-[450px] h-12 object-contain rounded-lg max-w-full"
                />
            </div>
            <div className='flex justify-center items-center'>
                <img 
                    src="/bitez/Offers/Vector3.png" 
                    alt="Hotel Lobby" 
                    className="w-full sm:w-[850px] h-1 object-contain rounded-lg max-w-full"
                />
            </div>
        </div>
        
        {/* Content Section */}
        <div className='flex flex-col lg:flex-row gap-8 items-center mt-8 max-w-6xl w-full'>
            <div className='flex-shrink-0 w-full lg:w-auto'>
                <img 
                    src="/bitez/General/Genel2.jpg" 
                    alt="Hotel Description" 
                    className="w-full lg:w-[700px] h-[200px] sm:h-[250px] lg:h-[300px] object-cover "
                />
            </div>
            <div className='flex flex-col space-y-4 w-full lg:w-auto'>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center lg:text-left">
                  {t('title')}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  {t('description1')}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  {t('description2')}
                </p>
            </div>
        </div>
    </div>
  )
}

export default HotelShowCase