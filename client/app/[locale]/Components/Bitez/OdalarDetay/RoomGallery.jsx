'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function RoomGallery({ roomType, images }) {
  const t = useTranslations(`${roomType}Detail`);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Image */}
        <div className="mb-6">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={images[selectedImage]}
              alt={`${t(roomType)} ${selectedImage + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-20 sm:h-24 rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-gray-900' : 'opacity-70 hover:opacity-100'
              } transition-all duration-300`}
            >
              <Image
                src={image}
                alt={`${t(roomType)} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}