'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function RoomDetailHero({ roomType, heroImages }) {
  const t = useTranslations(`${roomType}Detail`);
  
  

  return (
    <section className="relative h-screen w-full overflow-hidden mt-[80px]">
      
      
      {/* White gradient from right */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/60 to-transparent z-20"></div>
  
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-end text-right text-black z-25 px-8 pr-16">
        <h1 className="font-cormorant font-light text-5xl sm:text-6xl lg:text-7xl tracking-wide mb-6 drop-shadow-2xl">
          {t(roomType)}
        </h1>
        <p className="font-jost font-light text-lg sm:text-xl lg:text-2xl max-w-md leading-relaxed drop-shadow-lg opacity-90">
          {t('heroDescription')}
        </p>
      </div>
    </section>
  );
}