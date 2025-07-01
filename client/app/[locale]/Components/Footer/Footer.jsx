'use client';

import React from 'react';
import Image from 'next/image';
import cizgi from '@/public/Footer/Vector12.svg';
import yatay from "@/public/Footer/Rectangle474.png"
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="w-full text-black px-4 py-6">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo - Mobile */}
          <div className="flex justify-center w-full">
            <Image src="/Logo/InoneLogo.png" alt="Inone Logo" width={150} height={40} />
          </div>

          {/* Links - Mobile */}
          <div className="flex flex-col items-center space-y-3 w-full">
            <div className="flex flex-col items-center space-y-2">
              <a href="#" className="hover:underline text-sm font-light text-center">{t('aboutUs')}</a>
              <a href="#" className="hover:underline text-sm font-light text-center">{t('contactUs')}</a>
              <a href="#" className="hover:underline text-sm font-light text-center">{t('gallery')}</a>
            </div>
            
            {/* Ayırıcı çizgi */}
            <div className="w-12 h-px bg-gray-300 mx-auto"></div>
            
            <div className="flex flex-col items-center space-y-2">
              <a href="#" className="hover:underline text-sm font-light text-center">{t('cookiePolicy')}</a>
              <a href="#" className="hover:underline text-sm font-light text-center">{t('privacyPolicy')}</a>
            </div>
          </div>

          {/* Contact Info - Mobile */}
          <div className="flex flex-col items-center space-y-3 w-full">
            <div className="flex items-center justify-center gap-2">
              <FiPhone size={14} />
              <span className="text-sm font-light">{t('phone')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FiMail size={14} />
              <span className="text-sm font-light">{t('email')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FiMapPin size={14} />
              <span className="text-sm font-light">{t('address')}</span>
            </div>
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center w-full">
            <div className="flex items-center space-x-4">
              <FaFacebook size={20} />
              <FaInstagram size={20} />
              <FaYoutube size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-4 flex-wrap">

          {/* Logo - Desktop */}
          <div className="flex flex-col min-w-[120px] mt-[-40px]">
            <Image src="/Logo/InoneLogo.png" alt="Inone Logo" width={150} height={40} />
          </div>

          {/* İnce ayırıcı */}
          <Image src={cizgi} alt="ayırıcı" className="h-[60px] w-[2px]" />

          {/* Links 1 - Desktop */}
          <div className="flex flex-col space-y-1 min-w-[120px]">
            <a href="#" className="hover:underline text-sm font-light">{t('aboutUs')}</a>
            <a href="#" className="hover:underline text-sm font-light">{t('contactUs')}</a>
            <a href="#" className="hover:underline text-sm font-light">{t('gallery')}</a>
          </div>

          <Image src={cizgi} alt="ayırıcı" className="h-[60px] w-[2px]" />

          {/* Links 2 - Desktop */}
          <div className="flex flex-col space-y-1 min-w-[120px]">
            <a href="#" className="hover:underline text-sm font-light">{t('cookiePolicy')}</a>
            <a href="#" className="hover:underline text-sm font-light">{t('privacyPolicy')}</a>
          </div>

          <Image src={cizgi} alt="ayırıcı" className="h-[60px] w-[2px]" />

          {/* Contact Info - Desktop */}
          <div className="flex flex-col space-y-1 min-w-[120px]">
            <div className="flex items-center gap-1">
              <FiPhone size={14} />
              <span className="text-sm font-light">{t('phone')}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiMail size={14} />
              <span className="text-sm font-light">{t('email')}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin size={14} />
              <span className="text-sm font-light">{t('address')}</span>
            </div>
          </div>

          <Image src={cizgi} alt="ayırıcı" className="h-[60px] w-[2px]" />

          {/* Social Icons - Desktop */}
          <div className="flex flex-col min-w-[120px] mt-2 space-y-1">
            <div className="flex flex-row items-center space-x-3">
              <FaFacebook size={18} />
              <FaInstagram size={18} />
              <FaYoutube size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Alt kısım - Her iki layout için */}
      <div className="flex flex-col w-full mt-6">
        <Image
          src={yatay}
          alt="footer alt çizgi"
          className="w-full h-4"
        />
        <div className="text-center">
          <Link
            href="https://dgtlface.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs mt-2 block underline hover:text-blue-600 transition font-light"
          >
            Powered by © DGTLFACE
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;