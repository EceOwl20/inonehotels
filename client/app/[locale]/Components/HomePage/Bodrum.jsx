'use client';
import React from 'react';
import Image from 'next/image';
import ReservationWidget from './ReservationWidget';

const Bodrum = () => {
  return (
    <div className="w-full">
      {/* Text Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-cormorant font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">
            BODRUM / MUĞLA
          </h3>
          <p className="font-jost text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Berrak koyları, tarihi dokusuyla Türkiye'nin ve hatta dünyanın sayılı tatil beldelerinden olan Bodrum'un güzelliklerini keşfedin.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] -my-36 overflow-hidden mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Genel/bodrum.png')`,
          }}
        >
        </div>
      </section>
      
    </div>
  );
};

export default Bodrum;