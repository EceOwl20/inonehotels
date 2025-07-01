import RoomsHero from '@/app/[locale]/Components/Bitez/Odalar/RoomsHero';
import RoomsList from '@/app/[locale]/Components/Bitez/Odalar/RoomsList';
import RoomsServices from '@/app/[locale]/Components/Bitez/Odalar/RoomsServices';
import RoomsContact from '@/app/[locale]/Components/Bitez/Odalar/RoomsContact';

export default function BitezRoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      <RoomsHero />
      <RoomsList />
      <RoomsServices />
      <RoomsContact />
    </div>
  );
}