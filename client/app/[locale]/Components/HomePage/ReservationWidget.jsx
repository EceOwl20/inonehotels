'use client';
import { useState } from 'react';
import { UserIcon } from 'lucide-react';
import Image from 'next/image';
import Calendar from "./Icons/calender.svg";
import zil from "./Icons/Vector3.png";

export default function ReservationWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);

  const handleBookNow = () => {
    // Rezervasyon sitesine yönlendir
    window.open('https://inonebitez.rezervasyonal.com/', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults });
    // Seçilen bilgilerle beraber rezervasyon sitesine yönlendir
    handleBookNow();
  };

  return (
    <div className='hidden md:flex flex-row bg-[#D9D9D9] w-full h-24 items-center justify-center px-4'>
      <form onSubmit={handleSubmit} className='flex flex-row w-full max-w-xl bg-white h-16 items-center justify-center'>
        
        {/* CHECK IN */}
        <div className='flex flex-col w-1/4 px-4 h-full justify-center border-r border-gray-200'>
          <div className="relative">
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="Check In"
              onFocus={(e) => {
                e.target.type = 'date';
                e.target.focus();
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = 'text';
                }
              }}
              className="font-jost font-medium w-full text-sm focus:outline-none bg-transparent placeholder:text-gray-500"
            />
            <Image 
              src={Calendar} 
              alt="Calendar" 
              width={14} 
              height={14}
              className="absolute right-0 top-2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* CHECK OUT */}
        <div className='flex flex-col w-1/4 px-4 h-full justify-center border-r border-gray-200'>
          <div className="relative">
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="Check Out"
              onFocus={(e) => {
                e.target.type = 'date';
                e.target.focus();
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = 'text';
                }
              }}
              className="font-jost font-medium w-full text-sm focus:outline-none bg-transparent placeholder:text-gray-500"
            />
            <Image 
              src={Calendar} 
              alt="Calendar" 
              width={14} 
              height={14}
              className="absolute right-0 top-2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* ADULT */}
        <div className='flex flex-col w-1/4 px-4 h-full justify-center border-r border-gray-200'>
          <div className="relative">
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="font-jost font-medium w-full text-sm appearance-none focus:outline-none bg-transparent"
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <UserIcon className="absolute right-0 top-2 h-3 w-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* BOOK NOW */}
        <div className='flex w-2/4 px-4 h-full items-center justify-center'>
          <button
            type="button"
            onClick={handleBookNow}
            className="font-jost font-bold hover:bg-gray-800 text-black px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide hover:text-white cursor-pointer"
          >
            BOOK NOW
            <Image 
              src={zil} 
              alt="Book" 
              width={16} 
              height={16}
              className="object-contain"
            />
          </button>
        </div>

      </form>
    </div>
  );
}