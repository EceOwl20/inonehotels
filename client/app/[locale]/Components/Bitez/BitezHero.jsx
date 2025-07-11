'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function BitezHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src="/videos/bitezvideo.mp4" type="video/mp4" />
        <source src="/videos/bitezvideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback Image (video yüklenemezse veya hata varsa) */}
      {(!videoLoaded || videoError) && (
        <Image
          src="/Genel/InOneBitez.webp"
          alt="Inone Bitez"
          fill
          className="object-cover z-0"
          priority
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Debug info - geliştirme sırasında */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/50 text-white p-2 text-sm z-50">
          Video Loaded: {videoLoaded ? 'Yes' : 'No'}<br/>
          Video Error: {videoError ? 'Yes' : 'No'}
        </div>
      )}
    </section>
  );
}