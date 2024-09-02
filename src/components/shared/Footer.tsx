import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import logo from '@/assets/footerlogo.svg'
import Image from "next/image";
import ssl from '@/assets/ssl.png'
import brak from '@/assets/brak.png'
import bikas from '@/assets/bkash 1.png'
import opai from '@/assets/opai.png'
import rocket from '@/assets/rocket 1.png'
import visa from '@/assets/visa.png'
import mastercard from '@/assets/mastercard.png'
import ddbl from '@/assets/ddbl.png'
import unionpay from '@/assets/unionpay.png'
import toppay from '@/assets/toppay.png'
import dmoney from '@/assets/dmoney.png'



const Footer = () => {
  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className="max-w-[1290px] mx-auto 2xl:pt-[120px] md:pt-[80px] pt-10 px-4 md:px-6 lg:px-4 2xl:px-0">

      
         <div className="lg:flex gap-10 w-full">


         <div className="md:w-[410px] w-full">
               <Image className="w-[280px] h-[60px] object-contain" src={logo} alt="footer logo"/>
               <h1 className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal leading-[30px] mt-6">অর্ডার গ্রহণ থেকে শুরু করে গ্রাহকদের মাপ সঠিকভাবে সংরক্ষণ, সময়মতো ডেলিভারি করা, এবং প্রতিটি ধাপে উচ্চ মান বজায় রাখা—মাথায় রেখেই আমরা তৈরি করেছি আমাদের টেইলর ম্যানেজমেন্ট সফটওয়্যার।</h1>

               
            </div>

            <div className="mt-8 lg:mt-0 md:w-[200px] w-full">
               <h1 className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">কোম্পানি </h1>

               <div className="flex flex-col gap-4 mt-6">
                 <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">গ্যালারি</p>
                 <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">টিউটোরিয়াল </p>
                 <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">ক্যারিয়ার</p>
                 
                  <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">প্রাইভেসী পলিসি </p>
                  
                   <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">টার্মস এন্ড কন্ডিশনস  </p>
               </div>
               </div>



              <div className="md:w-[350px] w-full mt-8 lg:mt-0">
                 <h1 className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">যোগাযোগ</h1>

                  <div className="flex flex-col gap-4 mt-6">
                  <div className="flex  gap-3">
                      <SlLocationPin className="text-primaryColor size-6"/>

                         <div>
                         <h4 className="text-[20px] text-primaryColor font-Noto-Sans-Bengali font-medium leading-[28px]">ঠিকানা </h4>
                         <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[30px]">রোড #6, ব্লক-কেএ, মনসুরাবাদ </p>


                         </div>
                      </div>


                      <div className="flex gap-3 ">
                      <HiOutlinePhone className="text-primaryColor size-6"/>

                        <div>
                        <h4 className="text-[20px] text-primaryColor font-Noto-Sans-Bengali font-medium leading-[28px]">হেল্প লাইন  </h4>
                        <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200 hover:underline">+880 1754 613805</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                      <MdOutlineMail className="text-primaryColor size-6"/>

                       <div>
                       <h4 className="text-[20px] text-primaryColor font-Noto-Sans-Bengali font-medium leading-[28px]">ইমেইল </h4>
                       <p className="text-[18px] text-primaryColor font-Poppins font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">hello@tailorfit.co</p>
                       </div>
                      </div> 
                      
                      
                  </div>
              </div>






              <div className="mt-8 lg:mt-0 md:w-[320px] w-full">
               <h1 className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-bold leading-7">নিউজলেটার </h1>

               <div className="flex flex-col gap-4 mt-6">
                 <p className="text-[18px] text-primaryColor font-Noto-Sans-Bengali font-normal leading-[26px] hover:text-secondaryColor hover:cursor-pointer duration-200">টেইলরফিট এর সকল আপডেট পেতে ইমেইল দিন </p>

                 <div className="flex items-start w-full">
                   <input className="bg-white rounded-l-md rounded-r-0 border-[1px] border-primaryBorder text-primaryColor text-[18px] font-Noto-Sans-Bengali font-normal h-[60px] pl-4 outline-0" type="email" placeholder="ইমেইল.." />
                   <button className="w-[60px] h-[60px] bg-secondaryColor flex justify-center items-center" style={{borderRadius:'0px 6px 6px 0px'}}>
                   <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
<path d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   </button>
                 </div>




                 <div className="flex items-center gap-4 mt-2">
                   <a href="https://www.facebook.com/profile.php?id=61564187517285" target="_blank">
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <FaFacebookF className=" size-6" />

                   </div>
                   </a>
                   
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <IoLogoInstagram className=" size-6" />

                   </div>
                   
                   <a href="https://www.youtube.com/@Tailorfitapp" target="_blank">
                   <div className="w-12 h-12 rounded-full border-[1px] flex justify-center items-center text-primaryColor hover:border-secondaryColor hover:text-secondaryColor duration-300 cursor-pointer">
                   <FaYoutube className=" size-6" />

                   </div>
                   </a>
                </div>




                
               </div>
               </div>






              
         </div>


          {/* <div className="md:mt-[60px] mt-10 bg-white rounded-[12px] lg:h-[200px] h-full">
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
          </div> */}

        </div>

      <div className="bg-white border-t-[1px] border-t-primaryBorder py-4 md:mt-[60px] mt-10">
       
           <div className="max-w-[1290px] mx-auto px-4 md:px-6 lg:px-4 2xl:px-0 lg:flex justify-between items-center">
              <div>
              <p className=" text-primaryColor md:text-[16px] text-[14px] font-Noto-Sans-Bengali font-normal">কপিরাইট © টেইলরফিট লিমিটেড | সর্বস্বত্ব সংরক্ষিত - ২০২৪</p>

              </div>

              <div className="flex flex-wrap items-center gap-4 mt-5 lg:mt-0">
              <Image className=" cursor-pointer" src={ssl} alt="ssl payment"/>
               <div className="h-[20px] w-[1px] bg-[#E5E5E5]"></div>
              <Image className=" cursor-pointer" src={brak} alt="brak payment"/>
              <Image className=" cursor-pointer" src={opai} alt="opai payment"/>
              <Image className=" cursor-pointer" src={rocket} alt="rocket payment"/>
              <Image className=" cursor-pointer" src={visa} alt="visa payment"/>
              <Image className=" cursor-pointer" src={mastercard} alt="mastercard payment"/>
              <Image className=" cursor-pointer" src={ddbl} alt="ddbl payment"/>
              <Image className=" cursor-pointer" src={unionpay} alt="unionpay payment"/>
              <Image className=" cursor-pointer" src={toppay} alt="toppay payment"/>
              <Image className=" cursor-pointer" src={dmoney} alt="dmoney payment"/>
              </div>
           </div>

      </div>
    </div>
  )
}

export default Footer