import Footer from '@/components/shared/Footer'
import Banner from '@/components/ui/Banner'
import FaqSection from '@/components/ui/FaqSection'
import OurPackage from '@/components/ui/OurPackage'
import Testimonial from '@/components/ui/Testimonial'
import OurFutueres from '@/components/ui/OurFutueres'
import React from 'react'
import HowToUse from '@/components/ui/HowToUse'
import TrustUs from '@/components/ui/TrustUs'
import Navbar from '@/components/shared/Navbar'
import OurMainFutures from '@/components/ui/OurMainFutures'
import ScrollToTop from '@/components/ui/ScrollToTop'

const HomePage = () => {
  return (
    <div>
      <div className='banner-bg'>
      <Navbar/>
      <Banner/>
      </div>
      <TrustUs/>
      <HowToUse/>
       <OurMainFutures/>
       <Testimonial/>
       <OurPackage/>
       <FaqSection/>
      <OurFutueres/>
     
      
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default HomePage