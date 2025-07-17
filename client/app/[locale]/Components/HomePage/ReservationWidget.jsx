'use client';
import { useState, useRef } from 'react';
import { UserIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Calendar from "./Icons/calender.svg";
import zil from "./Icons/Vector3.png";

export default function ReservationWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const t = useTranslations('reservationWidget');
  
  // Input referansları
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const checkInTabletRef = useRef(null);
  const checkOutTabletRef = useRef(null);

  const handleBookNow = () => {
    // Rezervasyon sitesine yönlendir
    window.open('https://inonemuchoselectionhotel.rezervasyonal.com/mcho.html?language=tr', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults });
    // Seçilen bilgilerle beraber rezervasyon sitesine yönlendir
    handleBookNow();
  };

  const handleCalendarClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.type = 'date';
      inputRef.current.focus();
      inputRef.current.showPicker(); // Bu satır takvimi direkt açar
    }
  };

  return (
    <div className="hidden md:block">
      {/* Desktop Version - Original Design */}
      <div className='hidden lg:flex flex-row bg-[#D9D9D9] w-full h-24 items-center justify-center px-4'>
        <div className="w-full flex justify-center">
          <form onSubmit={handleSubmit} className='flex flex-row w-fit max-w-4xl h-16 items-center justify-center gap-6'>
            
            {/* CHECK IN */}
            <div className='flex flex-col w-40 px-4 h-full justify-center'>
              <div className="relative">
                <input
                  ref={checkInRef}
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder={t('checkIn')}
                  onFocus={(e) => {
                    e.target.type = 'date';
                    e.target.focus();
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = 'text';
                    }
                  }}
                  className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black pr-10 text-center"
                />
                <Image 
                  src={Calendar} 
                  alt="Calendar" 
                  width={24} 
                  height={24}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                  onClick={() => handleCalendarClick(checkInRef)}
                />
              </div>
            </div>

            {/* CHECK OUT */}
            <div className='flex flex-col w-40 px-4 h-full justify-center'>
              <div className="relative">
                <input
                  ref={checkOutRef}
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder={t('checkOut')}
                  onFocus={(e) => {
                    e.target.type = 'date';
                    e.target.focus();
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = 'text';
                    }
                  }}
                  className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black pr-10 text-center"
                />
                <Image 
                  src={Calendar} 
                  alt="Calendar" 
                  width={24} 
                  height={24}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                  onClick={() => handleCalendarClick(checkOutRef)}
                />
              </div>
            </div>

            {/* ADULT */}
            <div className='flex flex-col w-24 px-4 h-full justify-center'>
              <div className="relative">
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="font-jost font-bold w-full text-sm appearance-none focus:outline-none bg-transparent text-black pr-8 text-center"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <UserIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* BOOK NOW */}
            <div className='flex flex-1 px-4 h-full items-center justify-center'>
              <button
                type="button"
                onClick={handleBookNow}
                className="font-jost font-bold hover:bg-gray-800 text-black px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide hover:text-white cursor-pointer"
              >
                {t('bookNow')}
                <Image 
                  src={zil} 
                  alt="Book" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tablet Version */}
      <div className='flex md:flex lg:hidden bg-[#D9D9D9] w-full py-4 px-4'>
        <div className="w-full flex justify-center">
          <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-2xl rounded-lg overflow-hidden gap-3'>
            
            {/* First Row - Dates */}
            <div className='flex flex-row h-14 gap-3'>
              {/* CHECK IN */}
              <div className='flex flex-col flex-1 px-4 h-full justify-center'>
                <div className="relative">
                  <input
                    ref={checkInTabletRef}
                    type="text"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    placeholder={t('checkIn')}
                    onFocus={(e) => {
                      e.target.type = 'date';
                      e.target.focus();
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = 'text';
                      }
                    }}
                    className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black pr-7 text-center"
                  />
                  <Image 
                    src={Calendar} 
                    alt="Calendar" 
                    width={18} 
                    height={18}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    onClick={() => handleCalendarClick(checkInTabletRef)}
                  />
                </div>
              </div>

              {/* CHECK OUT */}
              <div className='flex flex-col flex-1 px-4 h-full justify-center'>
                <div className="relative">
                  <input
                    ref={checkOutTabletRef}
                    type="text"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    placeholder={t('checkOut')}
                    onFocus={(e) => {
                      e.target.type = 'date';
                      e.target.focus();
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = 'text';
                    }
                    }}
                    className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black pr-7 text-center"
                  />
                  <Image 
                    src={Calendar} 
                    alt="Calendar" 
                    width={18} 
                    height={18}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    onClick={() => handleCalendarClick(checkOutTabletRef)}
                  />
                </div>
              </div>
            </div>

            {/* Second Row - Adults & Book */}
            <div className='flex flex-row h-14 gap-3'>
              {/* ADULT */}
              <div className='flex flex-col flex-1 px-4 h-full justify-center'>
                <div className="relative">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="font-jost font-bold w-full text-sm appearance-none focus:outline-none bg-transparent text-black pr-6 text-center"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>
                        {num} {t('adult', {count: num})}
                      </option>
                    ))}
                  </select>
                  <UserIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* BOOK NOW */}
              <div className='flex flex-1 px-4 h-full items-center justify-center'>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="font-jost font-bold hover:bg-gray-800 text-black px-4 py-2 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide hover:text-white cursor-pointer rounded"
                >
                  {t('bookNow')}
                  <Image 
                    src={zil} 
                    alt="Book" 
                    width={18} 
                    height={18}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}