import RoomDetailHero from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetailHero';
import RoomGallery from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomGallery';
import RoomDetails from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetails';
import RoomServices from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomServices';
import RoomReservation from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomReservation';

export default function SuiteRoomDetailPage() {
  const roomType = 'suiteRoom';
  
  const roomImages = [
    '/rooms/suite/suite-main.jpg',
    '/rooms/suite/suite-bedroom.jpg',
    '/rooms/suite/suite-living.jpg',
    '/rooms/suite/suite-bathroom.jpg',
    '/rooms/suite/suite-terrace.jpg',
    '/rooms/suite/suite-view.jpg'
  ];

  const roomFeatures = [
    { icon: '📐', labelKey: 'size', value: '55 m²' },
    { icon: '👥', labelKey: 'capacity', value: '3-4' },
    { icon: '🏖️', labelKey: 'view', value: 'seaView' },
    { icon: '🛏️', labelKey: 'bedType', value: 'kingBed' },
    { icon: '🛁', labelKey: 'bathroom', value: 'jacuzziBathroom' },
    { icon: '🏠', labelKey: 'layout', value: 'separateRooms' }
  ];

  const amenities = [
    'separateBedroom', 'livingRoom', 'privateBalcony', 'seaView', 'jacuzziBath', 
    'smartTV', 'soundSystem', 'minibar', 'safe', 'wifi', 'airConditioning', 
    'heating', 'bathrobes', 'hairdryer', 'toiletries', 'roomService', 
    'housekeeping', 'concierge', 'beachAccess', 'poolAccess', 'vipServices'
  ];

  return (
    <div className="min-h-screen bg-white">
      <RoomDetailHero roomType={roomType} />
      <RoomGallery roomType={roomType} images={roomImages} />
      <RoomDetails roomType={roomType} features={roomFeatures} amenities={amenities} />
      <RoomServices roomType={roomType} />
      <RoomReservation roomType={roomType} />
    </div>
  );
}