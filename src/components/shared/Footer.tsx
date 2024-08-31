import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import logo from '@/assets/footerlogo.svg'
import Image from "next/image";
import brak from '@/assets/brack.png'
import bikas from '@/assets/bkash 1.png'
import upay from '@/assets/images 1.png'
import rocket from '@/assets/rocket 1.png'


const Footer = () => {
  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className="max-w-[1290px] mx-auto 2xl:pt-[120px] md:pt-[80px] pt-10 px-4 md:px-6 lg:px-4 2xl:px-0">

      
         <div className="lg:flex lg:justify-between w-full">
         <div className="md:w-[530px] w-full">
               <Image className="w-[280px] h-[60px] object-contain" src={logo} alt="footer logo"/>
               <h1 className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal leading-[30px] mt-6">অর্ডার গ্রহণ থেকে শুরু করে গ্রাহকদের মাপ সঠিকভাবে সংরক্ষণ, সময়মতো ডেলিভারি করা, এবং প্রতিটি ধাপে উচ্চ মান বজায় রাখা—মাথায় রেখেই আমরা তৈরি করেছি আমাদের টেইলর ম্যানেজমেন্ট সফটওয়্যার।</h1>

                <div className="flex items-center gap-4 mt-6">
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <FaFacebookF className=" size-6" />

                   </div>
                   
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <IoLogoInstagram className=" size-6" />

                   </div>
                   
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <FaYoutube className=" size-6" />

                   </div>
                </div>
            </div>



              <div className="md:w-[350px] w-full mt-8 lg:mt-0">
                 <h1 className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">যোগাযোগ</h1>

                  <div className="flex flex-col gap-4 mt-6">
                      <div className="flex items-center gap-3 ">
                      <HiOutlinePhone className="text-primaryColor size-6"/>

                         <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200 hover:underline">+880 1754 613805</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                      <MdOutlineMail className="text-primaryColor size-6"/>

                         <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">support@tailorfit.co</p>
                      </div> 
                      
                      <div className="flex  gap-3">
                      <SlLocationPin className="text-primaryColor size-12"/>

                         <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px]">Road #6, Block-KA, Monsurabad R/A
                         Central Bus Terminal, Pabna-6600</p>
                      </div>
                  </div>
              </div>


               <div className="mt-8 lg:mt-0">
               <h1 className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">কোম্পানি </h1>

               <div className="flex flex-col gap-4 mt-6">
                 <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">আমাদের সম্পর্কে</p>
                 <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">প্রাইভেসী পলিসি </p>
                 <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">টার্মস এন্ড কন্ডিশনস</p>
               </div>
               </div>
         </div>


          <div className="md:mt-[60px] mt-10 bg-white rounded-[12px] lg:h-[200px] h-full">
             <div className="lg:flex items-center gap-[36px] justify-center px-4 pb-10 lg:pb-0 lg:px-0">
                 <div className="py-10 lg:py-0">
                    <h1 className="text-secondaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">পেমেন্ট গেটওয়ে</h1>
                 </div>
                  <div className="border-[1px] h-[200px] border-primaryBorder mx-5 lg:block hidden">

                  </div>
                  <div className="border-[1px] w-full h-[1px] border-primaryBorder lg:hidden block">

                  </div>

                   <div className="w-[292px] pt-10 lg:pt-0">
                      <Image className="w-full h-auto object-contain cursor-pointer" src={brak} alt="brac bank"/>
                   </div>
                   
                    <div className="w-[170px] pt-10 lg:pt-0">
                      <Image className="w-full h-auto object-contain cursor-pointer" src={bikas} alt="bikas payment"/>
                   </div>
                   
                    <div className="w-[182px] pt-10 lg:pt-0">
                      <Image className="w-full h-auto object-contain cursor-pointer" src={upay} alt="upay payment"/>
                   </div> 
                   <div className="w-[172px] pt-10 lg:pt-0">
                      <Image className="w-full h-auto object-contain cursor-pointer" src={rocket} alt="rocket payment"/>
                   </div>
             </div>
          </div>

        </div>

      <div className="bg-[#141824] py-4 md:mt-[60px] mt-10">
         <p className="text-center text-white md:text-[16px] text-[14px] font-Noto-Sans-Bengali font-normal">কপিরাইট © টেইলরফিট লিমিটেড | সর্বস্বত্ব সংরক্ষিত - ২০২৪</p>
      </div>
    </div>
  )
}

export default Footer