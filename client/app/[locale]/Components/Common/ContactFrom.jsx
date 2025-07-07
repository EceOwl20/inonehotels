'use client';
import { useTranslations } from 'next-intl';
import { FiPhone, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import LetUsCallYou from "@/public/HomePage/letscallyou1.png"

export default function ContactUs() {
  const t = useTranslations('Contact');

  return (
    <section className="flex flex-row w-full items-center justify-center py-16 sm:py-20 lg:py-24 relative overflow-hidden my-12 -mt-24">
      
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-9/12 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full rounded-full transform scale-150 translate-x-1/3"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max-w-7xl → max-w-6xl */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"> {/* gap-12 lg:gap-16 → gap-6 lg:gap-8 */}
          
          {/* Sol taraf - Contact Info */}
          <div className="max-w-lg">
            {/* Ana başlık - Cormorant Garamond ile zarif */}
            <h2 className="font-cormorant font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 tracking-wide">
              {t('title')}
            </h2>
            
            {/* Açıklama - Jost ile okunabilir */}
            <p className="font-jost font-normal text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Phone */}
            <div className="mb-6">
              <div className="font-jost font-medium text-sm text-gray-500 mb-2">
                {t('callCenter')}
              </div>
              <div className="flex items-center">
                <FiPhone className="text-orange-500 mr-3 text-lg" />
                <span className="font-jost font-semibold text-lg text-gray-800">+90 252 319 40 48</span>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="font-jost font-medium text-sm text-gray-500 mb-2">
                {t('callCenterEmail')}
              </div>
              <div className="flex items-center">
                <FiMail className="text-orange-500 mr-3 text-lg" />
                <span className="font-jost font-semibold text-lg text-gray-800">callcenter@inonehotel.com</span>
              </div>
            </div>

            {/* CTA Button - Cormorant ile şık buton */}
            <button className="font-cormorant font-bold inline-flex items-center px-8 py-4 bg-orange-400 text-white rounded-xs duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform tracking-wide text-base">
              {t('button')}
            </button>
          </div>

          {/* Sağ taraf - Image Section */}
          <div className="lg:pl-4"> {/* lg:pl-8 → lg:pl-4 */}
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]"> {/* Yükseklik biraz azaltıldı */}
              <Image
                src={LetUsCallYou}
                alt="Let us call you"
                fill
                className="object-contain opacity-5 scale-x-[-1]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}