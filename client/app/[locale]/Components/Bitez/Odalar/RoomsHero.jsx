'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Oda11 from "@/public/bitez/Odalar/Suite/Oda11.webp"

export default function RoomsHero() {
  const t = useTranslations('bitezRooms');

  return (
    <section className="relative h-[70vh] flex items-center justify-end overflow-hidden  -mt-32">
      <div className="absolute inset-0">
        <Image
          src={Oda11}
          alt="Rooms"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* White gradient from right */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/20 to-transparent z-5"></div>
      
      <div className="relative z-10 text-center text-black px-8 mr-16">
        <h1 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-5xl tracking-[0.3em] mb-8">
          {t('pageTitle')}
        </h1>
        <div className="w-32 h-px bg-white/60 mx-auto mb-8"></div>
        <p className="font-jost font-light text-base sm:text-lg lg:text-xl max-w-md mx-auto leading-relaxed">
          {t('pageDescription')}
        </p>
      </div>
    </section>
  );
}