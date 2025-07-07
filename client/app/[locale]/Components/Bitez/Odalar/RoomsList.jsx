'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import dOda1 from "@/public/bitez/Odalar/Deluxe/Oda3.webp"
import Oda1 from "@/public/bitez/Odalar/Suite/Oda11.webp"

export default function RoomsList() {
  const t = useTranslations('bitezRooms');
  const router = useRouter();

  const rooms = [
    {
      id: 1,
      nameKey: 'deluxeRoom',
      roomType: 'deluxe',
      image: dOda1,
      size: '35',
      capacity: '2-3'
    },
    {
      id: 2,
      nameKey: 'suiteRoom',
      roomType: 'suite',
      image: Oda1, 
      size: '55',
      capacity: '3-4'
    }
  ];

  // Room type'a göre detail sayfa URL'leri
  const getRoomDetailUrl = (roomType) => {
    switch (roomType.toLowerCase()) {
      case 'deluxe':
        return '/inone-bitez/odalar/deluxeroom';
      case 'suite':
        return '/inone-bitez/odalar/suitroom';
      default:
        return '/rooms';
    }
  };

  // Rezervasyon sayfasına yönlendirme
  const handleBookNow = (roomType) => {
    router.push(`/reservation?roomType=${roomType}`);
  };

  // Oda detay sayfasına yönlendirme
  const handleViewDetails = (roomType) => {
    router.push(getRoomDetailUrl(roomType));
  };
  

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-32">
          {rooms.map((room, index) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Room Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                     onClick={() => handleViewDetails(room.roomType)}>
                  <Image
                    src={room.image}
                    alt={t(room.nameKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="font-jost text-gray-900 font-medium">{t('clickToView')}</span>
                    </div>
                  </div>
                  
                  {/* Room Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-jost font-light text-2xl text-gray-900">{room.size}</div>
                          <div className="font-jost text-xs text-gray-600 uppercase tracking-wide">m²</div>
                        </div>
                        <div>
                          <div className="font-jost font-light text-2xl text-gray-900">{room.capacity}</div>
                          <div className="font-jost text-xs text-gray-600 uppercase tracking-wide">{t('guests')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h2 className="font-cormorant font-light text-4xl sm:text-5xl lg:text-6xl tracking-wide text-gray-900 mb-6">
                    {t(room.nameKey)}
                  </h2>
                  <div className="w-20 h-px bg-gray-300 mb-8"></div>
                </div>

                <p className="font-jost text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {t(`${room.nameKey}Description`)}
                </p>

                {/* Room Features */}
                <div className="space-y-4">
                  <h3 className="font-jost text-xl font-medium text-gray-900">{t('amenities')}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span className="font-jost text-sm">{t(`${room.nameKey}Feature${num}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button 
                    onClick={() => handleViewDetails(room.roomType)}
                    className="font-jost px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 rounded-lg transform hover:scale-105 hover:shadow-lg"
                  >
                    {t('viewDetails')}
                  </button>
                  <button 
                    onClick={() => handleBookNow(room.roomType)}
                    className="font-jost px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium tracking-wide hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 rounded-lg transform hover:scale-105"
                  >
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