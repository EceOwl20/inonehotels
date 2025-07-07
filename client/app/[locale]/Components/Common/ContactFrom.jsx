'use client';
import { useTranslations } from 'next-intl';
import { FiPhone, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import LetUsCallYou from "@/public/HomePage/letscallyou1.png"

export default function ContactUs() {
  const t = useTranslations('Contact');

  return (
    <section className="flex flex-col w-full items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden my-6 sm:my-8 lg:my-12">
      
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-9/12 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full transform scale-150 translate-x-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Sol taraf - Contact Info */}
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            {/* Ana başlık */}
            <h2 className="font-cormorant font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 tracking-wide">
              {t('title')}
            </h2>
            
            {/* Açıklama */}
            <p className="font-jost font-normal text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t('description')}
            </p>

            {/* Contact Info Container */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start">
                <div className="flex items-center mb-2 sm:mb-0">
                  <FiPhone className="text-orange-500 mr-2 sm:mr-3 text-base sm:text-lg" />
                  <div className="text-center sm:text-left">
                    <div className="font-jost font-medium text-xs sm:text-sm text-gray-500 mb-1">
                      {t('callCenter')}
                    </div>
                    <a 
                      href="tel:+902523194048"
                      className="font-jost font-semibold text-base sm:text-lg text-gray-800 hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      +90 252 319 40 48
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start">
                <div className="flex items-center mb-2 sm:mb-0">
                  <FiMail className="text-orange-500 mr-2 sm:mr-3 text-base sm:text-lg" />
                  <div className="text-center sm:text-left">
                    <div className="font-jost font-medium text-xs sm:text-sm text-gray-500 mb-1">
                      {t('callCenterEmail')}
                    </div>
                    <a 
                      href="mailto:callcenter@inonehotel.com"
                      className="font-jost font-semibold text-sm sm:text-base md:text-lg text-gray-800 hover:text-orange-500 transition-colors cursor-pointer break-all sm:break-normal"
                    >
                      callcenter@inonehotel.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="font-cormorant font-bold inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#E17F65] text-white duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all tracking-wide text-sm sm:text-base">
                {t('button')}
              </button>
            </div>
          </div>

          {/* Sağ taraf - Image Section */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
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