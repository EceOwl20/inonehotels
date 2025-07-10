'use client';
import { useState, useEffect } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import Connexease from '../Connexease/Connexease';

export default function LiveChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLiveWorking, setIsLiveWorking] = useState(false);

  // Connexease API'den chat durumunu kontrol et
  useEffect(() => {
    const checkChatStatus = async () => {
      try {
        const response = await fetch(
          "https://livechat.connexease.com/api/is-company-online/28b8be8e-72e5-4876-b8da-1be2f5d1a3ed"
        );
        const data = await response.json();
        setIsLiveWorking(data.working);
      } catch (error) {
        console.error('Chat durumu kontrol edilemedi:', error);
        setIsLiveWorking(false);
      }
    };

    checkChatStatus();
  }, []);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    
    // Chat açılırken body scroll'unu engelle (mobil için)
    if (!isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Component unmount olduğunda body scroll'unu geri yükle
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Connexease Script'ini yükle (görünmez) */}
      <Connexease />
      
      {/* Chat Button - Sağ Alt Köşe */}
      <div className="fixed bottom-6 right-6 z-[9998]">
        <button
          onClick={handleChatToggle}
          className="bg-white  text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative"
          aria-label="Live Chat"
        >
          {/* Online/Offline Indicator */}
          {isLiveWorking && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          )}
          
          {/* Icon */}
          <FaComments className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:items-end md:justify-end p-4 md:p-6">
          
          {/* Overlay (sadece mobil) */}
          <div 
            className="absolute inset-0 bg-black/50 md:hidden"
            onClick={handleChatClose}
          ></div>
          
          {/* Chat Container */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] md:w-[400px] md:h-[600px] md:max-h-[calc(100vh-100px)] overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white text-black">
              <div className="flex items-center gap-2">
                <FaComments className="w-5 h-5" />
                <span className="font-semibold">Live Chat</span>
                {isLiveWorking && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <button
                onClick={handleChatClose}
                className="text-white hover:text-gray-200 transition-colors p-1"
                aria-label="Close chat"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            {/* Chat Content */}
            <div className="w-full h-[calc(100%-64px)]">
              <iframe
                src={`https://livechat.connexease.com/${isLiveWorking ? 'embed' : 'form'}/28b8be8e-72e5-4876-b8da-1be2f5d1a3ed`}
                className="w-full h-full border-0"
                frameBorder="0"
                referrerPolicy="unsafe-url"
                title="Live Chat"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}