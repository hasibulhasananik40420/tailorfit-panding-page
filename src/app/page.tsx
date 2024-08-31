import Footer from '@/components/shared/Footer'
import Banner from '@/components/ui/Banner'
import FaqSection from '@/components/ui/FaqSection'
import OurPackage from '@/components/ui/OurPackage'
import Testimonial from '@/components/ui/Testimonial'
import OurFutueres from '@/components/ui/OurFutueres'
import Contact from '@/components/ui/Contact'
import React from 'react'
import TrustUs from '@/components/ui/TrustUs'
import HowToUse from '@/components/ui/HowToUse'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <TrustUs/>
      <HowToUse/>
     
      <OurFutueres/>
       {/* <Testimonial/> */}
       <OurPackage/>
       <Contact/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default HomePage