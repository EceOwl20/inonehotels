'use client';
import { useTranslations } from 'next-intl';
import ReservationWidget from '@/app/[locale]/Components/HomePage/ReservationWidget';

export default function RoomReservation({ roomType }) {
  const t = useTranslations(`${roomType}Detail`);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900 mb-6">
          {t('makeReservation')}
        </h2>
        <div className="w-20 h-px bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 mb-8">
          {t('reservationDescription')}
        </p>
        
        <ReservationWidget />
      </div>
    </section>
  );
}