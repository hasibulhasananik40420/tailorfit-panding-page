/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../ui/Logo";
import Container from "./Container";
import { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";

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
     
        <div className={`!z-50 w-full transition-all duration-300 ease-in-out ${isFixed ? 'bg-white fixed top-0 ' : ''}`}>
        <div className={`max-w-[1920px] mx-auto  flex justify-between items-center px-4 h-[12vh] w-full`}>
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-[48px]">
          
          <Link
            href={"/"}
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            আমাদের সম্পর্কে
          </Link>

          <Link
            href={"/"}
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            প্রাইস প্লান
          </Link>

          <Link
            href={"/"}
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            আপকামিং
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={"https://my.tailorfitapp.com/login"}
            className="bg-secondaryLightColor px-6 py-3 text-secondaryColor text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md"
          >
            <FaUserAlt className="size-6" />
            <p>মাই একাউন্ট</p>
          </Link>

          <Link
            href={"https://my.tailorfitapp.com/sign-up"}
            className="bg-secondaryColor text-white px-6 py-3 text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md"
          >
            একাউন্ট খুলুন
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
