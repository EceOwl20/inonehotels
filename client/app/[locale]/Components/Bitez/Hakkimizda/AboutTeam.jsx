'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutTeam() {
  const t = useTranslations('aboutUs');

  const teamMembers = [
    {
      name: 'Mehmet Özkan',
      titleKey: 'generalManagerTitle',
      image: '/team/general-manager.jpg'
    },
    {
      name: 'Ayşe Demir',
      titleKey: 'guestRelationsTitle',
      image: '/team/guest-relations.jpg'
    },
    {
      name: 'Ali Kaya',
      titleKey: 'chefTitle',
      image: '/team/head-chef.jpg'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-wide mb-6">
            {t('teamTitle')}
          </h2>
          <div className="w-20 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('teamDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-gray-400">{t(member.titleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}