/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../ui/Logo";
import { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import SwitchTab from "./SwitchTab";
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 200;
    const scrolled = window.scrollY;

    if (scrolled > scrollThreshold && !isFixed) {
      setIsFixed(true);
    } else if (scrolled <= scrollThreshold && isFixed) {
      setIsFixed(false);
    }

   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);


  return (
     <div className={`w-full`}>
       <div className="lg:block hidden">
     
        <div className={`!z-50 w-full transition-all duration-300 ease-in-out ${isFixed ? 'bg-white fixed top-0 shadow-navShadow' : ''}`}>
        <div className={`max-w-[1920px] mx-auto  flex justify-between items-center px-4 h-[12vh] w-full`}>
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-[38px] 2xl:gap-[48px]">
          
        <ScrollLink 
               to="testmonial"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor cursor-pointer"
          >
           প্রশংসাপত্র
          </div>
          </ScrollLink>



           
          {/* <ScrollLink 
               to="tutorial"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor cursor-pointer"
          >
           টিউটোরিয়াল
          </div>

          </ScrollLink> */}


          <ScrollLink 
               to="pricing-plan"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
          
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor cursor-pointer"
          >
            প্রাইস প্লান
          </div>
          </ScrollLink>

          

          <ScrollLink 
               to="how-to-use"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
           <div
         
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor cursor-pointer"
          >
            কিভাবে ব্যবহার করে
          </div>
          </ScrollLink>



        </div>

        <div className="flex items-center gap-5">
         
          <SwitchTab/>

          <Link
            href={"https://my.tailorfitapp.com/sign-up"}
            className="bg-secondaryColor text-white px-6 py-3 text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md hover:bg-btnColor duration-300"
          >
            একাউন্ট খুলুন
          </Link>

             <Link
            href={"https://my.tailorfitapp.com/login"}
            className="bg-secondaryLightColor w-12 h-12 rounded-md flex justify-center items-center text-secondaryColor"
          >
            <FaUserAlt className="size-6" />
            
          </Link>
          
        </div>
      </div>
        </div>


    
       </div>

       <div className=' lg:hidden block'>
         <MobileSidebar/>
       </div>
     </div>
  );
};

export default Navbar;
