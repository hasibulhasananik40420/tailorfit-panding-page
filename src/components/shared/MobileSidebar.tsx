'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import logo from '@/assets/logo.svg'
const MobileSidebar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
  
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          setIsMenuVisible(false);
        }
      };
    
      useEffect(() => {
        // Add event listener for clicks outside of the sidebar
        document.addEventListener('mousedown', handleClickOutside);
    
        // Clean up event listener on component unmount
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
          <Image className="object-contain w-[160px] h-auto" src={logo} alt="logo svg"/>
       </div>
        <div>
           <CiMenuBurger onClick={handleMenuClick} className="size-6 text-black cursor-pointer"/>
        </div>
    </div>

    {isMenuVisible && (
  
    <div ref={sidebarRef} className="fixed top-0 right-0 h-screen w-[80%] z-50 bg-black p-4 text-white ">
        <span className="flex justify-between items-center">
        <Image className="object-contain w-[160px] h-auto" src={logo} alt="logo svg"/>
        <VscChromeClose onClick={handleMenuClick} className="size-6 text-red-500 cursor-pointer"/>
         </span>

           <div className="mt-10 flex flex-col gap-5">
             

         

           <Link
            href={"/"}
            className="text-white text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            আমাদের সম্পর্কে
          </Link>

          <Link
            href={"/"}
            className="text-white text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            প্রাইস প্লান
          </Link>

          <Link
            href={"/"}
            className="text-white text-[20px] font-Noto-Sans-Bengali font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-500 hover:after:w-full hover:text-secondaryColor"
          >
            আপকামিং
          </Link>
         
        
          
        
          <Link
            href={"/"}
            className="bg-secondaryColor px-6 py-3 text-white text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md"
          >
            <FaUserAlt className="size-6" />
            <p>মাই একাউন্ট</p>
          </Link>

          <Link
            href={"/"}
            className="bg-secondaryColor text-white px-6 py-3 text-[20px] font-Noto-Sans-Bengali font-medium flex items-center justify-center gap-2 rounded-md"
          >
            একাউন্ট খুলুন
          </Link>
      



         </div>
    </div>
  )}
</div>
  )
}

export default MobileSidebar