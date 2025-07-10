'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaPhone, FaComments } from 'react-icons/fa';
import zil from "@/app/[locale]/Components/Header/Icons/Zil.png";
import Connexease from '../Connexease/Connexease';

export default function MobileBookNowButton() {
  const t = useTranslations('MobileBookButton');

  // Connexease script'ini yükle
  useEffect(() => {
    // Component mount olduğunda Connexease'i initialize et
  }, []);

  const handleBookNow = () => {
    // Rezervasyon sitesine yönlendir
    window.open('https://inonemuchoselectionhotel.rezervasyonal.com/', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+902523194048', '_self');
  };

  const handleChat = () => {
    // Connexease LiveChat'ini aç
    if (typeof window !== 'undefined' && window.LiveChat) {
      try {
        // LiveChat widget'ini aç
        if (window.LiveChat.open) {
          window.LiveChat.open();
        } else if (window.LiveChat.show) {
          window.LiveChat.show();
        } else if (window.LiveChat.toggle) {
          window.LiveChat.toggle();
        } else {
          // LiveChat objesi varsa ama methodlar yoksa, widget'i manuel tetikle
          const chatWidget = document.querySelector('[data-livechat]') || 
                            document.querySelector('.livechat-widget') ||
                            document.querySelector('#livechat-widget');
          if (chatWidget) {
            chatWidget.click();
          } else {
            // Son çare: chat iframe'ini oluştur
            openConnexeaseChat();
          }
        }
      } catch (error) {
        console.error('LiveChat açılırken hata:', error);
        openConnexeaseChat();
      }
    } else {
      // LiveChat henüz yüklenmemişse, direkte Connexease'i aç
      openConnexeaseChat();
    }
  };

  const openConnexeaseChat = () => {
    // Connexease chat'ini direkte aç
    const chatUrl = 'https://livechat.connexease.com/embed/28b8be8e-72e5-4876-b8da-1be2f5d1a3ed';
    
    // Modal/iframe oluştur
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;
    
    const iframe = document.createElement('iframe');
    iframe.src = chatUrl;
    iframe.style.cssText = `
      width: 100%;
      height: 600px;
      max-width: 400px;
      border: none;
      border-radius: 10px;
      background: white;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      border: none;
      background: white;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      z-index: 10001;
    `;
    
    closeBtn.onclick = () => {
      document.body.removeChild(modal);
      document.body.style.overflow = 'unset';
    };
    
    modal.appendChild(iframe);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Modal dışına tıklanınca kapat
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    };
  };

  return (
    <>
      {/* Connexease Script'ini yükle (görünmez) */}
      <Connexease />
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] p-4">
        <div className="flex justify-center items-center gap-4">
          {/* Telefon Icon */}
          <button
            type="button"
            onClick={handleCall}
            className="bg-white hover:bg-gray-100 scale-x-[-1] p-3 transition-all duration-200 hover:shadow-xl cursor-pointer rounded-full border border-gray-200"
          >
            <FaPhone className="w-5 h-5" />
          </button>

          {/* Book Now Butonu */}
          <button
            type="button"
            onClick={handleBookNow}
            className="font-jost font-bold bg-[#DEAF85] text-white hover:bg-gray-100 px-8 py-3 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl text-sm uppercase tracking-wide cursor-pointer border border-gray-200"
          >
            {t('bookNow')}
            <Image 
              src={zil} 
              alt={t('bookNow')} 
              width={16} 
              height={16}
              className="object-contain"
            />
          </button>

          {/* Chat Icon - Manuel */}
          <button
            type="button"
            onClick={handleChat}
            className="bg-white hover:bg-gray-100 p-3 transition-all duration-200 hover:shadow-xl cursor-pointer rounded-full border border-gray-200"
          >
            <FaComments className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}