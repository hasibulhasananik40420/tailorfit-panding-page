"use client"
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Testimonial = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-white'>
        <div className='max-w-[1290px] mx-auto w-[100%] px-4 md:px-6 lg:px-4 2xl:px-0 mt-[60px]'>

            <h1 className='text-center text-primaryColor md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold'>ব্যবহারকারীর আস্থাই আমাদের অর্জন</h1>

             <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[30px] md:mt-[60px] mt-10'>
            
              
             
       <div
       className={`w-[100%] rounded md:flex justify-between items-center min-h-[384px] ${
        showVideo ? '' : "bg-[url('/images/Mask1.png')] bg-cover bg-center bg-no-repeat pt-[60px] md:pt-[0px] lg:pt-0 lg:px-[50px] md:px-[100px] px-4"
      }`}
       >
      {showVideo ? (
        <div className="w-full h-[384px]">
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
      ) : (
        <>
          <div className="md:w-[70%] w-[100%]">
            <div className="relative">
              <FaQuoteLeft className="absolute top-0 lg:left-0 -md:left-6 -left-1 text-[#F00C89] md:text-[24px] text-[16px]" />
              <h1 className="text-[#661B72] lg:text-[20px] text-[16px] font-Noto-Sans-Bengali font-bold leading-8 text-center">
                এই সফটওয়্যারটি আমাদের টেইলরিং ব্যবসার জন্য একটি গেম-চেঞ্জার হয়েছে। অর্ডার ম্যানেজমেন্ট থেকে শুরু করে গ্রাহকদের মাপ সংরক্ষণ সবকিছুই এত সহজ হয়েছে।
              </h1>
              <FaQuoteRight className="absolute bottom-0 lg:right-20 right-0 text-[#F00C89] text-[14px]" />
            </div>
            <button className="bg-secondaryBtnColor lg:px-[30px] lg:py-[22px] px-5 py-3 rounded-[10px] flex items-center justify-center mx-auto gap-2 text-white lg:text-[20px] text-[14px] font-Noto-Sans-Bengali leading-8 md:mt-[30px] mt-6">
              <p className="font-normal">দর্জি বাড়ি</p>
              <p>|</p>
              <p className="font-semibold">ওমর আলী</p>
            </button>
          </div>

          <div onClick={() => setShowVideo(true)} className="cursor-pointer">
            <svg
              className="md:w-[90px] md:h-[90px] w-16 h-16 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 90"
              fill="none"
            >
              <g filter="url(#filter0_b_1612_25413)">
                <circle cx="45" cy="45" r="45" fill="#F00C89" fillOpacity="0.2" />
              </g>
              <circle cx="45" cy="45" r="36" fill="#F00C89" />
              <path
                d="M55.5108 47.7525L39.0906 58.4634C38.0783 59.1248 36.7862 59.1783 35.7252 58.6044C34.6619 58.0306 34 56.9194 34 55.7134V34.2866C34 33.0806 34.6619 31.9694 35.7252 31.3956C36.7862 30.8217 38.0783 30.8752 39.0906 31.5366L55.5108 42.2475C56.4403 42.8554 57 43.8912 57 45C57 46.1088 56.4403 47.1446 55.5108 47.7525Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_1612_25413"
                  x="-6"
                  y="-6"
                  width="102"
                  height="102"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1612_25413" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1612_25413" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>



               



               </div>



             

               
         

        </div>
    </div>
  )
}

export default Testimonial