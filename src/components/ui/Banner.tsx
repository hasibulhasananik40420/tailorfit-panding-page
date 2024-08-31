import Image from "next/image"
import Navbar from "../shared/Navbar"
import banner from '@/assets/banner (2).png'
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="banner-bg h-[100vh]">
        <Navbar/>

        <div className="max-w-[1920px] mx-auto 2xl:pt-[100px] pt-[50px] px-4 md:px-6 lg:px-0">
        <div className="lg:flex items-center relative w-[100%]">
             <div className="lg:w-[570px] w-full 2xl:ml-[250px] lg:ml-20 ml-0 pt-[80px] lg:pt-0">
                 <h1 className="text-accentColor md:text-[70px] text-[45px] font-Noto-Sans-Bengali font-black 2xl:leading-[91px] lg:leading-[86px] leading-[60px]">আপনার টেইলার
                 শপের জন্য সম্পূর্ণ ডিজিটাল সমাধান</h1>

                  <button className="bg-btnColor text-white md:text-[24px] text-[20px] font-Noto-Sans-Bengali font-medium rounded-md flex items-center justify-center gap-5 px-9 py-5 md:mt-[56px] mt-10">
                    <p> ফ্রিতে ব্যবহার করুন</p>
                    <IoIosArrowForward className="size-6" />

                  </button>
             </div>

              <div className="flex justify-end ml-auto absolute right-0 2xl:max-w-[917px] 2xl:max-h-[600px] max-w-[600px] max-h-[550px] mt-10 lg:mt-0">
                 <Image className="w-full h-auto" src={banner} alt="banner image"/>
              </div>
         </div>
        </div>

        
    </div>
  )
}

export default Banner