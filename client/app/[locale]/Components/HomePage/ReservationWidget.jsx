'use client';
import { useState } from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';

export default function ReservationWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults, children });
    // Rezervasyon işlemleri burada yapılabilir
  };

  return (
    <div className="w-full flex justify-center my-7 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-7xl"
      >
        <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          
          {/* Check-in */}
          <div className="flex flex-col w-full lg:flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              CHECK-IN
            </label>
            <div className="relative w-full">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center pr-10"
                required
              />
              <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col w-full lg:flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              CHECK-OUT
            </label>
            <div className="relative w-full">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center pr-10"
                required
              />
              <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Misafir Sayısı */}
          <div className="flex flex-col w-full lg:flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              YETİŞKİNLER
            </label>
            <div className="relative w-full">
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center appearance-none pr-10"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <UserIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Çocuk Sayısı */}
          <div className="flex flex-col w-full lg:flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              ÇOCUKLAR
            </label>
            <div className="relative w-full">
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center appearance-none pr-10"
              >
                {[0,1,2,3,4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <UserIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Rezervasyon Butonu */}
          <div className="flex flex-col w-full lg:flex-1 lg:mt-7">
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              REZERVASYON
              <span className="text-lg">🛎️</span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}