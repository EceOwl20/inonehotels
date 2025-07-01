'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ReservationWidget from '@/app/[locale]/Components/HomePage/ReservationWidget';

export default function BitezHero() {
  const t = useTranslations('inoneBitez');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/bitez-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback Image */}
      <Image
        src="/Genel/InOneBitez.webp"
        alt="Inone Bitez"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-wider mb-6 drop-shadow-2xl">
          INONE BITEZ
        </h1>
        <div className="w-24 h-px bg-white/60 mb-6"></div>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-3xl mx-auto drop-shadow-lg opacity-90">
          {t('heroSubtitle')}
        </p>
      </div>

      {/* Reservation Widget */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-20">
        <ReservationWidget />
      </div>
    </section>
  );
}