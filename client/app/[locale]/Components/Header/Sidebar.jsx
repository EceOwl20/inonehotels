'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Sidebar({ isOpen, onClose }) {
  const t = useTranslations('Sidebar');

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="p-4 text-gray-600" onClick={onClose}>
          ✖️
        </button>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/">{t('home')}</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/about">{t('about')}</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}