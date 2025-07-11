import React from 'react'

const OurPlatforms = () => {
  return (
    <div className="py-8 md:py-16 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
        Platform Ortaklarımız
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/airbnb.webp" alt="Airbnb" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/booking-logo.webp" alt="Booking.com" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/expedia.webp" alt="Expedia" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/hotelscom.webp" alt="Hotels.com" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.ostrovok.ru" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/ostrovok.webp" alt="Ostrovok" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/skyscanner.4e3e8a1d.svg" alt="Skyscanner" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
        <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="/Logolar/tripadvisor-logo.webp" alt="TripAdvisor" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain" />
        </a>
      </div>
    </div>
  )
}

export default OurPlatforms