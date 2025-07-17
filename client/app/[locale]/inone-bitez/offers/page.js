import React from 'react'
import OffersHero from '../../Components/Bitez/Offers/OffersHero'
import HotelShowCase from '../../Components/Bitez/Offers/HotelShowCase'
import ContactUs from '../../Components/Common/ContactFrom'
import OurPlatforms from '../../Components/HomePage/OurPlatforms'
import OffersPlane from '../../Components/Bitez/Offers/OffersPlane'
import ReservationWidget from '../../Components/HomePage/ReservationWidget'

const page = () => {
  return (
    <div>
        <OffersHero />
        <HotelShowCase />
        <div className='mt-12'>
        <ReservationWidget />
        </div>
        <OffersPlane />
        <ContactUs />
        <OurPlatforms />4
    </div>
  )
}

export default page