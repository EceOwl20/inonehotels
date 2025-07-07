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
    <div className='flex flex-col w-full items-center justify-center text-5xl py-20 bg-white mt-8'>
      <h2 className='font-cormorant font-light text-gray-900 mb-16'>{t('title')}</h2>
      
      <div className='flex flex-row gap-16 items-center justify-center mt-12 text-3xl'>
        <div className='flex flex-col items-center text-center'>
          <RiVipDiamondFill className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('ageRestriction')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <TiWiFi className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('strongWifi')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <TbGiftFilled className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('welcomeGift')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <FaPaw className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('petFriendly')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <FaUmbrellaBeach className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('beachfront')}</span>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <GiWashingMachine className='w-10 h-10 mb-4 text-gray-400 opacity-60' />
          <span className='font-jost font-medium text-lg text-gray-700'>{t('dailyCleaning')}</span>
        </div>
      </div>
    </div>
  )
}

export default BitezFeatures