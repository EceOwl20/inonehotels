'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import LocaleSwitcher from './LocaleSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/Logo/inone-logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Header');

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-transparent backdrop-blur-2xl absolute top-0 left-0 w-full z-50 h-[80px] ">
        
        {/* Mobile Layout (< md) */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Sol taraf - Mobile */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsOpen(true)} className="text-white text-xl">
              ☰
            </button>
            <LocaleSwitcher />
          </div>

          {/* Logo - Mobile (Orta) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image src={Logo} alt="Inone Logo" width={120} height={24} />
            </Link>
          </div>

          {/* Sağ taraf boş - Mobile (telefon ve rezervasyon gizli) */}
          <div className="w-16"></div>
        </div>

        {/* Desktop Layout (>= md) */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Sol taraf - Desktop */}
          <div className="flex items-center ml-12 gap-4">
            <button onClick={() => setIsOpen(true)} className="text-white text-xl">
              ☰
            </button>
            <LocaleSwitcher />
          </div>

          {/* Logo (orta) - Desktop */}
          <div className="flex justify-center ml-40">
            <Link href="/">
              <Image src={Logo} alt="Inone Logo" width={150} height={30} />
            </Link>
          </div>

          {/* Sağ taraf - Desktop */}
          <div className="flex items-center gap-4 mr-12 text-sm font-semibold text-white">
            <div className="flex items-center gap-1">
              <span>📞 +90 252 319 40 48</span>
            </div>
            <Link href="/reservation" className="flex items-center gap-1">
              {t('reservation')}
              <span>🛎️</span>
            </Link>
          </div>
        </div>

      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}