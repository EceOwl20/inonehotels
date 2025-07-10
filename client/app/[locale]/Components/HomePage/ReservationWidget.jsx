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
    window.open('https://inonemuchoselectionhotel.rezervasyonal.com/', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults });
    // Seçilen bilgilerle beraber rezervasyon sitesine yönlendir
    handleBookNow();
  };

  return (
    <>
      {/* Desktop Version - Original Design */}
      <div className='hidden lg:flex flex-row bg-[#D9D9D9] w-full h-24 items-center justify-center px-4'>
        <form onSubmit={handleSubmit} className='flex flex-row w-6/12 max-w-4xl h-16 items-center justify-center gap-6'>
          
          {/* CHECK IN */}
          <div className='flex flex-col flex-1 px-4 h-full justify-center'>
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
                className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
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
          <div className='flex flex-col flex-1 px-4 h-full justify-center'>
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
                className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
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
          <div className='flex flex-col flex-1 px-4 h-full justify-center'>
            <div className="relative">
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="font-jost font-bold w-full text-sm appearance-none focus:outline-none bg-transparent text-black"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <UserIcon className="absolute right-0 top-2 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* BOOK NOW */}
          <div className='flex flex-1 px-4 h-full items-center justify-center'>
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

      {/* Tablet Version */}
      <div className='hidden md:flex lg:hidden bg-[#D9D9D9] w-full py-4 px-4'>
        <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-2xl mx-auto rounded-lg overflow-hidden gap-3'>
          
          {/* First Row - Dates */}
          <div className='flex flex-row h-14 gap-3'>
            {/* CHECK IN */}
            <div className='flex flex-col flex-1 px-4 h-full justify-center'>
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
                  className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
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
            <div className='flex flex-col flex-1 px-4 h-full justify-center'>
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
                  className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
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
          </div>

          {/* Second Row - Adults & Book */}
          <div className='flex flex-row h-14 gap-3'>
            {/* ADULT */}
            <div className='flex flex-col flex-1 px-4 h-full justify-center'>
              <div className="relative">
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="font-jost font-bold w-full text-sm appearance-none focus:outline-none bg-transparent text-black"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <UserIcon className="absolute right-0 top-2 h-3 w-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* BOOK NOW */}
            <div className='flex flex-1 px-4 h-full items-center justify-center'>
              <button
                type="button"
                onClick={handleBookNow}
                className="font-jost font-bold hover:bg-gray-800 text-black px-4 py-2 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide hover:text-white cursor-pointer rounded"
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
          </div>
        </form>
      </div>

      {/* Mobile Version */}
      <div className='flex md:hidden bg-[#D9D9D9] w-full py-4 px-4'>
        <form onSubmit={handleSubmit} className='flex flex-col w-full rounded-lg overflow-hidden gap-4'>
          
          {/* Check In */}
          <div className='flex flex-col px-4 py-3'>
            <label className="font-jost font-bold text-xs text-black mb-1">CHECK IN</label>
            <div className="relative">
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="Select date"
                onFocus={(e) => {
                  e.target.type = 'date';
                  e.target.focus();
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = 'text';
                  }
                }}
                className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
              />
              <Image 
                src={Calendar} 
                alt="Calendar" 
                width={16} 
                height={16}
                className="absolute right-0 top-1 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className='flex flex-col px-4 py-3'>
            <label className="font-jost font-bold text-xs text-black mb-1">CHECK OUT</label>
            <div className="relative">
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="Select date"
                onFocus={(e) => {
                  e.target.type = 'date';
                  e.target.focus();
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = 'text';
                  }
                }}
                className="font-jost font-bold w-full text-sm focus:outline-none bg-transparent placeholder:text-black text-black"
              />
              <Image 
                src={Calendar} 
                alt="Calendar" 
                width={16} 
                height={16}
                className="absolute right-0 top-1 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Adults */}
          <div className='flex flex-col px-4 py-3'>
            <label className="font-jost font-bold text-xs text-black mb-1">GUESTS</label>
            <div className="relative">
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="font-jost font-bold w-full text-sm appearance-none focus:outline-none bg-transparent text-black"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                ))}
              </select>
              <UserIcon className="absolute right-0 top-1 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Book Now Button */}
          <div className='flex px-4 py-4'>
            <button
              type="button"
              onClick={handleBookNow}
              className="font-jost font-bold bg-[#D9D9D9] hover:bg-gray-400 text-black w-full py-3 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide cursor-pointer rounded"
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
    </>
  );
}