'use client';
import { useTranslations } from 'next-intl';

export default function RoomDetailHero({ roomType }) {
  const t = useTranslations(`${roomType}Detail`);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <span>{t('home')}</span> / <span>{t('rooms')}</span> / <span className="text-gray-900">{t(roomType)}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
              {t(roomType)}
            </h1>
            <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}