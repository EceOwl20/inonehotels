import React from 'react'
import { useTranslations } from 'next-intl';
import { RiVipDiamondFill } from "react-icons/ri";
import { TiWiFi } from "react-icons/ti";
import { TbGiftFilled } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";

const BitezFeatures = () => {
  const t = useTranslations('bitezFeatures');

  return (
    <div className='flex flex-col w-full items-center justify-center text-3xl sm:text-4xl lg:text-5xl py-12 sm:py-16 lg:py-20 bg-white mt-6 sm:mt-8 px-4'>
      <h2 className='font-cormorant font-light text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center'>{t('title')}</h2>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center justify-center mt-6 sm:mt-8 lg:mt-12 text-xl sm:text-2xl lg:text-3xl max-w-6xl'>
        <div className='flex flex-col items-center text-center'>
          <RiVipDiamondFill className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('ageRestriction')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <TiWiFi className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('strongWifi')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <TbGiftFilled className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('welcomeGift')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <FaPaw className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('petFriendly')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <FaUmbrellaBeach className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('beachfront')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <GiWashingMachine className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-3 sm:mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-sm sm:text-base lg:text-lg text-gray-700 leading-tight'>{t('dailyCleaning')}</span>
        </div>
      </div>
    </div>
  )
}

export default BitezFeatures