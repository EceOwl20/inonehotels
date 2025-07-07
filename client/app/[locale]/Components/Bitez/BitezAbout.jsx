'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import bitez1 from "@/public/bitez/HompePage/bitez.jpg"
import sun from "@/public/bitez/HompePage/sun.png"
import kafa from "@/public/bitez/HompePage/kafa.png"

export default function BitezAbout() {
  const t = useTranslations('inoneBitez');

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            {/* Sun Background - Yazıların arkasında */}
            <div className="absolute -top-20 -left-20 w-80 h-80 opacity-100 z-0">
              <Image
                src={sun}
                alt="Sun"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-cormorant font-light text-4xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 mb-6">
                {t('aboutTitle')}
              </h2>
              <div className="w-16 h-px bg-gray-300 mb-8"></div>
            </div>
            
            <p className="font-jost text-lg text-gray-600 leading-relaxed relative z-10">
              {t('aboutDescription1')}
            </p>
            
            <p className="font-jost text-lg text-gray-600 leading-relaxed relative z-10">
              {t('aboutDescription2')}
            </p>
            
            <div className="pt-6 relative z-10">
              <button className="font-jost inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                {t('exploreButton')}
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
            {/* Kafa - Resmin sağ tarafında */}
            <div className="absolute -right-1 top-10 w-158 h-67 opacity-100 z-10">
              <Image
                src={kafa}
                alt="Kafa"
                fill
                className="object-contain"
              />
            </div>
            
            <Image
              src={bitez1}
              alt="Inone Bitez Hotel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}