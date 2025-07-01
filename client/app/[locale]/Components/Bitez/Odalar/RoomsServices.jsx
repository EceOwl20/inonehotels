'use client';
import { useTranslations } from 'next-intl';

export default function RoomsServices() {
  const t = useTranslations('bitezRooms');

  const services = [
    { icon: '🏖️', key: 'beachService' },
    { icon: '🍽️', key: 'roomService' },
    { icon: '🧹', key: 'housekeeping' },
    { icon: '🛁', key: 'spaService' }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-6">
            {t('servicesTitle')}
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">{t(`${service.key}Title`)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(`${service.key}Description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}