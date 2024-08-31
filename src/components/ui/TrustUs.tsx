import React from 'react'
import image1 from '@/assets/Mask group (1).png'
import image2 from '@/assets/Mask group (2).png'
import image3 from '@/assets/Mask group (3).png'
import image4 from '@/assets/Mask group (4).png'
import image5 from '@/assets/Raymond Group Logo Vector 1.png'
import Image from 'next/image'
import Marquee from "react-fast-marquee";


const TrustUs = () => {
  return (
    <div className='bg-[#651A71] py-12'>
        <div className='max-w-[1920px] mx-auto px-4 md:px-6 lg:px-4 2xl:px-0'>
           <div className=''>
               <h1 className='text-white md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold text-center'>যারা আমাদের উপর আস্থা রেখেছেন</h1>
               <Marquee speed={100} gradient={false}>
                <div className='flex justify-center items-center gap-[180px] mt-[20px]'>
                   <Image className=' object-contain' src={image2} alt='logo 1'/>
                    <Image className=' object-contain' src={image1} alt='logo 2'/>
                    
                    <Image className=' object-contain' src={image3} alt='logo 1'/>
                    <Image className=' object-contain' src={image4} alt='logo 1'/>
                    <Image className=' object-contain' src={image5} alt='logo 1'/>
                </div>
                </Marquee>
           </div>
        </div>
    </div>
  )
}

export default TrustUs