'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaPhone, FaComments } from 'react-icons/fa';
import zil from "@/app/[locale]/Components/Header/Icons/Zil.png";

export default function MobileBookNowButton() {
  const t = useTranslations('MobileBookButton');

  const handleBookNow = () => {
    // Rezervasyon sitesine yönlendir
    window.open('https://inonebitez.rezervasyonal.com/', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+902523194048', '_self');
  };

  const handleChat = () => {
    // WhatsApp ya da chat linkini buraya ekleyebilirsiniz
    window.open('https://wa.me/902523194048', '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] p-4">
      <div className="flex justify-center items-center gap-4">
        {/* Telefon Icon */}
        <button
          type="button"
          onClick={handleCall}
          className="bg-white hover:bg-gray-100 scale-x-[-1] p-3 transition-all duration-200 hover:shadow-xl cursor-pointer rounded-full border border-gray-200"
        >
          <FaPhone className="w-5 h-5" />
        </button>

        {/* Book Now Butonu */}
        <button
          type="button"
          onClick={handleBookNow}
          className="font-jost font-bold bg-[#DEAF85] text-white hover:bg-gray-100  px-8 py-3 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide cursor-pointer border border-gray-200"
        >
          {t('bookNow')}
          <Image 
            src={zil} 
            alt={t('bookNow')} 
            width={16} 
            height={16}
            className="object-contain"
          />
        </button>

        {/* Chat Icon */}
        <button
          type="button"
          onClick={handleChat}
          className="bg-white hover:bg-gray-100 p-3 transition-all duration-200 hover:shadow-xl cursor-pointer rounded-full border border-gray-200"
        >
          <FaComments className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}