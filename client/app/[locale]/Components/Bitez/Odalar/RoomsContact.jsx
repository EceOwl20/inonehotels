'use client';
import { useTranslations } from 'next-intl';

export default function RoomsContact() {
  const t = useTranslations('bitezRooms');

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-light tracking-wide mb-6">
          {t('contactTitle')}
        </h2>
        <div className="w-20 h-px bg-white/30 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('contactDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <span className="text-lg">+90 252 319 40 48</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✉️</span>
            <span className="text-lg">callcenter@inonehotel.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}