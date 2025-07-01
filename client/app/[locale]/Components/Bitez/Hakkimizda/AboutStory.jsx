'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutStory() {
  const t = useTranslations('aboutUs');

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
                {t('storyTitle')}
              </h2>
              <div className="w-20 h-px bg-gray-300 mb-8"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('storyDescription1')}
            </p>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('storyDescription2')}
            </p>
            
            <div className="pt-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">{t('establishedYear')}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t('established')}</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">{t('roomCount')}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t('rooms')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about/hotel-story.jpg"
              alt="Inone Bitez Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}