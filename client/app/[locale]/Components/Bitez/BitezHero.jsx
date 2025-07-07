'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ReservationWidget from '@/app/[locale]/Components/HomePage/ReservationWidget';

export default function BitezHero() {
  const t = useTranslations('inoneBitez');

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/bitezvideo.mp4" type="video/mp4" />
        <source src="/videos/bitezvideo.webm" type="video/webm" />
      </video>
      
      {/* Fallback Image (video yüklenemezse) */}
      <Image
        src="/Genel/InOneBitez.webp"
        alt="Inone Bitez"
        fill
        className="object-cover z-0"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <h1 className="font-cormorant font-light text-5xl sm:text-6xl lg:text-7xl tracking-wider mb-6 drop-shadow-2xl">
          INONE BITEZ
        </h1>
        <div className="w-24 h-px bg-white/60 mb-6"></div>
        <p className="font-jost font-light text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg opacity-90">
          {t('heroSubtitle')}
        </p>
      </div>
    </section>
  );
}