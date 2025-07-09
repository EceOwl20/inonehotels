'use client';
import { Phone } from 'lucide-react';

export default function PhoneCallButton() {
  const handlePhoneCall = () => {
    // Telefon numarasını buraya ekleyin
    window.location.href = 'tel:+905551234567';
  };

  return (
    // Desktop ve Tablet'ta görünür, Mobile'da gizli
    <div className='hidden md:block fixed bottom-6 left-6 z-50'>
      <button
        onClick={handlePhoneCall}
        className="bg-white hover:bg-gray-100 text-black p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Telefon ile ara"
      >
        <Phone className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
}