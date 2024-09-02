'use client'
import dashboard1 from '@/assets/Dashboard 1.png'
import Image from 'next/image'
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import styles from '@/components/styles/Pulse.module.css'
const HowToUse = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div className='bg-white md:py-[100px] py-16'>
        <div className='max-w-[1290px] mx-auto w-[100%] px-4 md:px-6 lg:px-4 2xl:px-0 relative'>

             <h1 className='text-center text-primaryColor md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold'>আমাদের সফটওয়্যার কিভাবে ব্যবহার করবেন?</h1>
               
               <div className='bg-[#F0E8F1] lg:pt-[30px] lg:pl-[30px] pt-5 pl-5 md:mt-[60px] mt-10' style={{borderRadius:'60px 0px 0px 0px'}}>
                  <div className='bg-[#651A71] lg:pl-[88px] lg:pt-[88px] pt-10 pl-10' style={{borderRadius:'35px 0px 35px 0px'}}>

                    
                  <div className='bg-black'>
                 <Image className='w-full h-auto object-contain opacity-40' src={dashboard1} alt='dashboard1' />
                  </div>
                 
                      
                  </div>
               </div>


                <div className='flex flex-col md:gap-10 gap-5 justify-center items-center absolute inset-0 lg:top-[30%] top-[50%]'>
                 
            <div onClick={openModal} className='relative flex justify-center items-center cursor-pointer'>
           
           

       <div className={`relative flex justify-center items-center cursor-pointer ${styles.pulse} `}>
      <div className="bg-secondaryColor md:w-20 md:h-20 w-12 h-12 rounded-full text-white flex justify-center items-center z-10">
        <FaPlay className="md:text-4xl text-xl text-white" />
      </div>
      </div>

           
               


          </div>

          {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md max-w-[630px] max-h-[500px] w-full relative">
           
          <IoMdClose  onClick={closeModal} className='absolute top-2 right-2 text-primaryColor size-6 cursor-pointer' />

           
             <div className="w-full h-[304px]">
          {/* YouTube Video Embed */}
            <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/doSNwHhs7Xg?si=amXhBBcrK8uwaQeF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>


        </div>
          </div>
        </div>
      )}

      <div>
      <h1 className='text-white md:text-[56px] text-[20px] font-Noto-Sans-Bengali font-bold'>ভিডিও তে বিস্তারিত দেখুন </h1>
      </div>
            </div>
        </div>

           
    </div>
  )
}

export default HowToUse