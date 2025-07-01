'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BitezRooms() {
  const t = useTranslations('inoneBitez');

  const rooms = [
    {
      image: '/rooms/deluxe-room.jpg',
      titleKey: 'room1Title',
      descriptionKey: 'room1Description',
      alt: 'Deluxe Room'
    },
    {
      image: '/rooms/suite.jpg',
      titleKey: 'room2Title',
      descriptionKey: 'room2Description',
      alt: 'Suite'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-6">
            {t('roomsTitle')}
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('roomsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <div key={index} className="group">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-medium mb-3">{t(room.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t(room.descriptionKey)}</p>
              <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                {t('learnMore')} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}