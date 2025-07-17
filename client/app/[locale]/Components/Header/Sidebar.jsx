'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/Logo/InoneLogoDark.png";
import LocaleSwitcher from './LocaleSwitcher';

export default function Sidebar({ isOpen, onClose }) {
  const t = useTranslations('Sidebar');
  const pathname = usePathname();

  // Sayfa türünü belirle
  const getPageType = () => {
    if (pathname.includes('/inone-bitez')) return 'bitez';
    if (pathname.includes('/inone-mucho')) return 'mucho';
    if (pathname.includes('/odalar') || pathname.includes('/rooms')) return 'rooms';
    if (pathname.includes('/sustainability')) return 'sustainability';
    if (pathname.includes('/contact')) return 'contact';
    return 'home';
  };

  const pageType = getPageType();

  // Sayfa türüne göre menü içeriği
  const getMenuItems = () => {
    if (pathname.includes('/inone-bitez')) {
      return [
        { href: '/inone-bitez', labelKey: 'bitezHome', isActive: pathname === '/inone-bitez' },
        { href: '/inone-bitez/odalar', labelKey: 'bitezRooms', isActive: pathname.includes('/inone-bitez/odalar') },
        { href: '/inone-bitez/offers', labelKey: 'bitezOffers', isActive: pathname.includes('/offers') },
        { href: '/inone-bitez/Galeri', labelKey: 'bitezGallery', isActive: pathname.includes('/galeri') },
        { href: '/inone-bitez/hakkimizda', labelKey: 'bitezAbout', isActive: pathname.includes('/hakkimizda') },
        { href: '/', labelKey: 'backToMain', isBack: true }
      ];
    }
    
    if (pathname.includes('/inone-mucho')) {
      return [
        { href: '/inone-mucho', labelKey: 'muchoHome', isActive: pathname === '/inone-mucho' },
        { href: '/inone-mucho/odalar', labelKey: 'muchoRooms', isActive: pathname.includes('/inone-mucho/odalar') },
        { href: '/inone-mucho/offers', labelKey: 'muchoOffers', isActive: pathname.includes('/offers') },
        { href: '/inone-mucho/galeri', labelKey: 'muchoGallery', isActive: pathname.includes('/galeri') },
        { href: '/inone-mucho/hakkimizda', labelKey: 'muchoAbout', isActive: pathname.includes('/hakkimizda') },
        { href: '/', labelKey: 'backToMain', isBack: true }
      ];
    }

    // Ana sayfa ve diğer genel sayfalar
    return [
      { href: '/', labelKey: 'home', isActive: pathname === '/' },
      { href: '/inone-bitez', labelKey: 'bitezHotel', isActive: false },
      { href: '/inone-mucho', labelKey: 'muchoHotel', isActive: false },
      { href: '/sustainability', labelKey: 'sustainability', isActive: pathname.includes('/sustainability') },
      { href: '/contact', labelKey: 'contact', isActive: pathname.includes('/contact') }
    ];
  };

  const menuItems = getMenuItems();

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 font-jost ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Üst Header Bölümü */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* Sol - Kapatma Butonu */}
          <button 
            className="text-gray-600 hover:text-gray-800 text-xl font-medium transition-colors" 
            onClick={onClose}
          >
            ✖️
          </button>

          {/* Orta - Logo */}
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

        {/* Page Context Header */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          <h3 className="font-jost font-semibold text-sm text-gray-700 uppercase tracking-wide">
            {pathname.includes('/inone-bitez') && t('bitezNavigation')}
            {pathname.includes('/inone-mucho') && t('muchoNavigation')}
            {!pathname.includes('/inone-bitez') && !pathname.includes('/inone-mucho') && t('mainNavigation')}
          </h3>
        </div>

        {/* Dynamic Menu */}
        <nav className="mt-2">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={`px-4 py-3 hover:bg-gray-100 border-b border-gray-50 ${item.isActive ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}>
                <Link 
                  href={item.href} 
                  className={`font-medium transition-colors block flex items-center ${
                    item.isActive 
                      ? 'text-blue-600 font-semibold' 
                      : item.isBack 
                        ? 'text-gray-500 hover:text-gray-700' 
                        : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={onClose}
                >
                  {item.isBack && (
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  )}
                  {item.isActive && !item.isBack && (
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Current Page Indicator */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center text-xs text-gray-600">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="truncate">{pathname}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}