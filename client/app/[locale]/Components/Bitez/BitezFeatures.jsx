'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BitezFeatures() {
  const t = useTranslations('inoneBitez');

  const features = [
    {
      image: '/features/beach.jpg',
      titleKey: 'feature1Title',
      descriptionKey: 'feature1Description',
      alt: 'Private Beach'
    },
    {
      image: '/features/dining.jpg',
      titleKey: 'feature2Title',
      descriptionKey: 'feature2Description',
      alt: 'Fine Dining'
    },
    {
      image: '/features/spa.jpg',
      titleKey: 'feature3Title',
      descriptionKey: 'feature3Description',
      alt: 'Spa & Wellness'
    },
    {
      image: '/features/activities.jpg',
      titleKey: 'feature4Title',
      descriptionKey: 'feature4Description',
      alt: 'Activities'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-6">
            {t('experienceTitle')}
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">{t(feature.titleKey)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}