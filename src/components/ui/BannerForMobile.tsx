import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import banner from '@/assets/banner (2).png'

const BannerForMobile = () => {
  return (
    <div className="banner-bg">
         <div className="px-4 pt-[120px] ">
             <div>
             <h1 className="text-accentColor md:text-[80px] text-[40px] font-Noto-Sans-Bengali font-black md:leading-[106px] leading-[60px]">আপনার টেইলার
                 শপের জন্য সম্পূর্ণ ডিজিটাল সমাধান</h1>

                  <button className="bg-btnColor text-white md:text-[24px] text-[18px] font-Noto-Sans-Bengali font-medium rounded-md flex items-center justify-center gap-5 px-6 md:px-9 md:py-5 py-4 md:mt-[56px] mt-10">
                    <p> ফ্রিতে ব্যবহার করুন</p>
                    <IoIosArrowForward className="md:size-6 size-5" />

                  </button>
             </div>

             <div className="mt-10">
                 <Image className="w-full h-auto" src={banner} alt="banner image"/>
              </div>
         </div>
    </div>
  )
}

export default BannerForMobile