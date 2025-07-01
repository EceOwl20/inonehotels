'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutUsHero() {
  const t = useTranslations('aboutUs');

  return (
    <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about/about-hero.jpg"
          alt="Inone Bitez"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[0.3em] mb-8">
          {t('pageTitle')}
        </h1>
        <div className="w-32 h-px bg-white/60 mx-auto mb-8"></div>
        <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
          {t('heroDescription')}
        </p>
      </div>
    </section>
  );
}