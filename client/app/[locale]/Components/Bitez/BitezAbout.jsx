'use client'
import React from 'react'
import { useTranslations } from 'next-intl';

const HotelShowCase = () => {
  const t = useTranslations('offersHero.hotel');
  
  return (
    <div className='flex flex-col items-center'>
        {/* Images */}
        <div className='flex flex-row gap-4 justify-center'>
            <div className='flex justify-center items-center'>
                <img 
                    src="/bitez/Offers/INONEmuchoselectıonhotel.png" 
                    alt="Hotel Room" 
                    className="w-[450px] h-12 object-contain rounded-lg max-w-full"
                />
            </div>
            <div className='flex justify-center items-center'>
                <img 
                    src="/bitez/Offers/Vector3.png" 
                    alt="Hotel Lobby" 
                    className="w-[850px] h-1 object-contain rounded-lg max-w-full"
                />
            </div>
        </div>
        
        {/* Content Section */}
        <div className='flex flex-row gap-8 items-center mt-8 max-w-6xl'>
            <div className='flex-shrink-0'>
                <img 
                    src="/bitez/Offers/hotel-image.jpg" 
                    alt="Hotel Description" 
                    className="w-96 h-64 object-cover rounded-lg"
                />
            </div>
            <div className='flex flex-col space-y-4'>
                <h2 className="text-3xl font-bold text-gray-800 font-cormorant">
                  {t('title')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-jost">
                  {t('description1')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-jost">
                  {t('description2')}
                </p>
            </div>
        </div>
    </div>
  )
}

export default HotelShowCase