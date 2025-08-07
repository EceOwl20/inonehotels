'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { MapPin, Phone, Mail, Clock, AlertCircle, Calendar } from 'lucide-react'
import { FaYoutube, FaInstagram, FaFacebook, FaTripadvisor, FaGoogle } from 'react-icons/fa'

const ContactPage = () => {
  const t = useTranslations('contactPage')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-24 text-white py-32 min-h-[40vh] sm:min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bitez/Contact/iletisim.webp"
          alt="Contact Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-cormorant mr-0 sm:mr-10 lg:mr-20 mt-8 sm:mt-12 font-bold mb-4">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Subtitle and Button Section */}
      <section className="py-8 sm:py-16 bg-white mr-0 sm:mr-12 lg:mr-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm sm:text-base lg:text-[16px] font-jost mt-6 sm:mt-12 mb-4 text-center max-w-[90%] sm:max-w-[700px] px-4">
            {t('subtitle')}
          </p>
          <button className="bg-[#E17F65] text-white font-jost w-full sm:w-80 lg:w-96 max-w-[90%] mx-4 flex items-center justify-center h-12 rounded hover:bg-[#d16b50] transition-colors">
            {t('getInTouch')}
          </button>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-0 sm:mr-[250px] lg:mr-[500px] max-w-full sm:max-w-lg lg:max-w-xl mx-auto">
            
            {/* Otel Rezervasyon */}
            <a href="tel:+902523194048" className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-2 shadow-md flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-gray-800 mb-1">
                  {t('hotelReservation')}
                </h3>
                <span className="text-sm font-bold text-gray-900 break-all hover:text-[#E17F65] transition-colors">
                  +90 252 319 40 48
                </span>
              </div>
            </a>

            {/* Çağrı Merkezi Mail */}
            <a href="mailto:callcenter@inonehotel.com" className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-2 shadow-md flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-gray-800 mb-1">
                  {t('callCenterMail')}
                </h3>
                <span className="text-sm font-bold text-gray-900 break-all hover:text-[#E17F65] transition-colors">
                  callcenter@inonehotel.com
                </span>
              </div>
            </a>

            {/* Beach Rezervasyon */}
            <a href="tel:+905540194049" className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-2 shadow-md flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-gray-800 mb-1">
                  {t('beachReservation')}
                </h3>
                <span className="text-sm font-bold text-gray-900 break-all hover:text-[#E17F65] transition-colors">
                  +90 554 019 40 49
                </span>
              </div>
            </a>

            {/* Otel Mail */}
            <a href="mailto:info@inonehotel.com" className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-2 shadow-md flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-gray-800 mb-1">
                  {t('hotelMail')}
                </h3>
                <span className="text-sm font-bold text-gray-900 break-all hover:text-[#E17F65] transition-colors">
                  info@inonehotel.com
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Social Media and Location Section */}
      <section className="py-4 mt-4">
        <div className="container mx-auto px-4">
          {/* Social Media Icons */}
          <div className="flex gap-2 justify-center sm:mr-[300px] lg:mr-[650px] mx-auto max-w-fit">
            
            {/* YouTube */}
            <a href="https://youtube.com/@inonehotel" target="_blank" rel="noopener noreferrer" className="p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-red-500 transition-colors" />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/inonehotel" target="_blank" rel="noopener noreferrer" className="p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-pink-500 transition-colors" />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/inonehotel" target="_blank" rel="noopener noreferrer" className="p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-blue-500 transition-colors" />
            </a>

            {/* Google */}
            <a href="https://maps.google.com/inonehotel" target="_blank" rel="noopener noreferrer" className="p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaGoogle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-blue-600 transition-colors" />
            </a>

            {/* TripAdvisor */}
            <a href="https://tripadvisor.com/inonehotel" target="_blank" rel="noopener noreferrer" className="p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaTripadvisor className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-green-500 transition-colors" />
            </a>

          </div>
          
          {/* Location Section - Dual Maps */}
          <div className="flex flex-col items-center mt-8 sm:mt-12 mx-auto">
            {/* Location Icon */}
            <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mb-6" />
            
            {/* Maps Container */}
            <div className="w-full max-w-[95%] sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Inone Bitez Map */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Inone Bitez Hotel
                  </h3>
                  <p className="text-xs font-medium text-gray-600 mb-4 text-center px-2">
                    Bitez, Pomelan Cd. No:30, 48470 Bodrum/Muğla
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4358.193355153794!2d27.375747856379903!3d37.03697830845594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1753879738240!5m2!1str!2str&markers=color:red%7Clabel:B%7C37.036978,27.375748" 
                    width="100%"
                    height="300"
                    className="sm:h-[350px] lg:h-[400px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Inone Mucho Map */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Inone Mucho Selection Hotel
                  </h3>
                  <p className="text-xs font-medium text-gray-600 mb-4 text-center px-2">
                    Gümbet, Adnan Menderes Cd. No:48, 48400 Bodrum/Muğla
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5313.693877965186!2d27.399654628905935!3d37.02897390637651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6daf56064e07%3A0xdb5d4fd1cc0d4c1c!2sInone%20Mucho%20Selection%20Hotel!5e0!3m2!1str!2str!4v1754561070258!5m2!1str!2str" 
                    width="100%"
                    height="300"
                    className="sm:h-[350px] lg:h-[400px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage