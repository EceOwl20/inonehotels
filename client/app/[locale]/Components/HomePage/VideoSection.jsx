import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-[850px] sm:h-[700px] md:h-[900px] lg:h-[1100px] xl:h-[1200px] overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/homepage/Video/HomePageVideo.mp4" type="video/mp4" />
        <source src="/homepage/Video/HomePageVideo.mp4" type="video/webm" />
      </video>
      
      {/* Overlay (opsiyonel - istersen kaldırabilirsin) */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </section>
  );
};

export default VideoSection;