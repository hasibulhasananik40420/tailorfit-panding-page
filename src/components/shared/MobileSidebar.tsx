'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import logo from '@/assets/logo.svg'
import { Link as ScrollLink } from 'react-scroll';



const MobileSidebar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
  
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          setIsMenuVisible(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
 

        const handleMenuClick = () => {
            setIsMenuVisible(!isMenuVisible);
          };



  return (
    <div className={` z-50 w-full  fixed top-0`}>
    <div className="flex justify-between items-center h-[12vh] px-4 bg-white">
       <div>
          <Image className="object-contain w-[160px] h-auto cursor-pointer" src={logo} alt="logo svg"/>
       </div>
        <div>
           <CiMenuBurger onClick={handleMenuClick} className="size-6 text-black hover:text-secondaryColor cursor-pointer"/>
        </div>
    </div>

    {isMenuVisible && (
  
      <div className="">
         <div ref={sidebarRef} className="fixed top-0 right-0 h-screen w-[80%] z-50 p-4 text-white backdrop-blur-xl bg-white/70 shadow-navShadow2">
        <span className="flex justify-between items-center">
        <Image className="object-contain w-[160px] h-auto" src={logo} alt="logo svg"/>
        <VscChromeClose onClick={handleMenuClick} className="size-6 text-red-500 cursor-pointer"/>
         </span>

           <div className="mt-10 flex flex-col gap-5">
             

         

           <ScrollLink 
               to="testmonial"  
                  spy={true}
                  smooth={true}
                  duration={1000}>
          <div
           onClick={handleMenuClick}
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
            onClick={handleMenuClick}
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
          onClick={handleMenuClick}
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
           onClick={handleMenuClick}
            className="text-primaryColor text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor cursor-pointer"
          >
            কিভাবে ব্যবহার করে
          </div>
          </ScrollLink>
         
        
          
        
          <Link
            href={"/"}
            className="bg-secondaryColor px-6 py-3 text-white text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md hover:bg-btnColor hover:text-white duration-300"
          >
            <FaUserAlt className="size-6" />
            <p>মাই একাউন্ট</p>
          </Link>

          <Link
            href={"/"}
            className="bg-secondaryColor text-white px-6 py-3 text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md hover:bg-btnColor hover:text-white duration-300"
          >
            একাউন্ট খুলুন
          </Link>
      



         </div>
    </div>
      </div>
  )}
</div>
  )
}

export default MobileSidebar