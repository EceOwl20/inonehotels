'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function RoomsList() {
  const t = useTranslations('bitezRooms');

  const rooms = [
    {
      id: 1,
      nameKey: 'deluxeRoom',
      image: '/rooms/deluxe-room.jpg',
      size: '35',
      capacity: '2-3',
      viewKey: 'seaView'
    },
    {
      id: 2,
      nameKey: 'suiteRoom',
      image: '/rooms/suite-room.jpg', 
      size: '55',
      capacity: '3-4',
      viewKey: 'seaView'
    }
  ];
  

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-32">
          {rooms.map((room, index) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Room Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={room.image}
                    alt={t(room.nameKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Room Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-light text-gray-900">{room.size}</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide">m²</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-gray-900">{room.capacity}</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide">{t('guests')}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-900 font-medium">{t(room.viewKey)}</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide">{t('view')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-6">
                    {t(room.nameKey)}
                  </h2>
                  <div className="w-20 h-px bg-gray-300 mb-8"></div>
                </div>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {t(`${room.nameKey}Description`)}
                </p>

                {/* Room Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">{t('amenities')}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span className="text-sm">{t(`${room.nameKey}Feature${num}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 rounded-lg">
                    {t('viewDetails')}
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium tracking-wide hover:border-gray-400 transition-colors duration-300 rounded-lg">
                    {t('bookNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}