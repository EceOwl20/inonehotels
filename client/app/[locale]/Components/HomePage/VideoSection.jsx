import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full -mt-24 h-[850px] sm:h-[700px] md:h-[900px] lg:h-[1100px] xl:h-[1200px] overflow-hidden pt-[80px]">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Homepage/Video/HomePageVideo.mp4" type="video/mp4" />
        <source src="/Homepage/Video/HomePageVideo.mp4" type="video/webm" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* İsteğe bağlı metin içeriği */}
      {/* 
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-cormorant font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4 drop-shadow-2xl tracking-wide">
          Lüks Deneyimin Adresi
        </h1>
        <p className="font-jost font-light text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
          Unutulmaz anılar oluşturmak için tasarlanmış otellerimizde konforun ve zarafetin buluştuğu eşsiz bir deneyim yaşayın.
        </p>
        <button className="font-jost font-semibold mt-8 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/20 transition-all duration-300 tracking-wide">
          Keşfet
        </button>
      </div>
      */}
    </section>
  );
};

export default VideoSection;