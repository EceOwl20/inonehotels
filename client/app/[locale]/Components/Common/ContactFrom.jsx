'use client';
import { useTranslations } from 'next-intl';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function ContactUs() {
  const t = useTranslations('Contact');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden my-12">
      
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-gray-900 rounded-full transform scale-150 translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sol taraf - Contact Info */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Phone */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2 font-medium">
                {t('callCenter')}
              </div>
              <div className="flex items-center">
                <FiPhone className="text-orange-500 mr-3 text-lg" />
                <span className="text-lg text-gray-800 font-medium">+90 252 319 40 48</span>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2 font-medium">
                {t('callCenterEmail')}
              </div>
              <div className="flex items-center">
                <FiMail className="text-orange-500 mr-3 text-lg" />
                <span className="text-lg text-gray-800 font-medium">callcenter@inonehotel.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              {t('button')}
            </button>
          </div>

          {/* Sağ taraf - Location Section */}
          <div className="lg:pl-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('locationTitle')}
              </h3>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                {t('locationDescription')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}