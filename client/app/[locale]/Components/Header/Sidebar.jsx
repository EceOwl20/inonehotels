'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/Logo/InoneLogoDark.png"; // PNG dosyası
import LocaleSwitcher from './LocaleSwitcher';

export default function Sidebar({ isOpen, onClose }) {
  const t = useTranslations('Sidebar');

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 font-jost ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Üst Header Bölümü - Logo ve Dil Değiştirme */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* Sol - Kapatma Butonu */}
          <button 
            className="text-gray-600 hover:text-gray-800 text-xl font-medium transition-colors" 
            onClick={onClose}
          >
            ✖️
          </button>

          {/* Orta - Logo (PNG) */}
          <div className="flex-1 flex justify-center">
            <Link href="/" onClick={onClose}>
              <Image 
                src={Logo} 
                alt="Inone Logo" 
                width={120} 
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Sağ - Dil Değiştirme */}
          <div className="text-black [&>*]:text-black">
            <LocaleSwitcher />
          </div>
        </div>

        {/* Menü Bölümü */}
        <nav className="mt-3">
          <ul>
            <li className="px-4 py-3 hover:bg-gray-100 border-b border-gray-50">
              <Link 
                href="/" 
                className="font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                onClick={onClose}
              >
                {t('home')}
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 border-b border-gray-50">
              <Link 
                href="/hotels" 
                className="font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                onClick={onClose}
              >
                {t('hotels')}
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 border-b border-gray-50">
              <Link 
                href="/sustainability" 
                className="font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                onClick={onClose}
              >
                {t('sustainability')}
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 border-b border-gray-50">
              <Link 
                href="/contact" 
                className="font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                onClick={onClose}
              >
                {t('contact')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}