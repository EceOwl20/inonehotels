'use client';
import { useTranslations } from 'next-intl';

export default function RoomServices({ roomType }) {
  const t = useTranslations(`${roomType}Detail`);

  const services = [
    { icon: '🏖️', key: 'beachService' },
    { icon: '🍽️', key: 'roomService' },
    { icon: '🧖‍♀️', key: 'conciergeService' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900 mb-6">
            {t('includedServices')}
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
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