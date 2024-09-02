"use client"
import Image from "next/image"
import faq1 from '@/assets/faq (2).png'
import faq2 from '@/assets/imagecut.png'
import faq3 from '@/assets/Dashboard 1.png'
import faq4 from '@/assets/banner (2).png'
import faq5 from '@/assets/Upcoming Features.png'
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi"

interface AccordionItem {
    title: string;
    content: string;
  }

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const images = [faq1, faq2, faq3, faq4, faq5];

  const accordionItems: AccordionItem[] = [
    { title: 'টেইলারফিট কী', content: 'টেইলারফিট হলো একটি সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সল্যুশন, যা বিশেষভাবে দর্জি দোকানের জন্য ডিজাইন করা হয়েছে। এটি আপনার ব্যবসার কার্যক্রম সহজতর করে, কাস্টমার অর্ডারগুলো পরিচালনা করে, প্রোগ্রেস ট্র্যাক করে এবং সামগ্রিক ব্যবসার দক্ষতা বৃদ্ধি করে।' },

    { title: 'টেইলারফিট আমার দর্জি দোকানের জন্য কীভাবে উপকারি হতে পারে?', content: 'টেইলারফিটের মাধ্যমে আপনি এক জায়গায় কাস্টমার ডিটেইলস, অর্ডার এবং মাপ সংরক্ষণ করতে পারেন। এটি ভুলের সংখ্যা কমায়, সময় সাশ্রয় করে এবং আপনার ব্যবসার পারফরম্যান্স সম্পর্কে মূল্যবান তথ্য সরবরাহ করে। ফলে আপনি আপনার ব্যবসার বৃদ্ধি এবং কাস্টমারদের জন্য অসাধারণ সেবা প্রদানের উপর মনোনিবেশ করতে পারেন।' },


    { title: 'টেইলারফিট ছোট দর্জি দোকানের জন্য উপযুক্ত কি?', content: 'হ্যাঁ, টেইলারফিট একটি নমনীয় এবং স্কেলযোগ্য সমাধান যা ছোট থেকে বড় সকল দর্জি দোকানের জন্য উপযুক্ত। আপনার দোকান যতই ছোট বা বড় হোক না কেন, টেইলারফিট আপনার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টমাইজ করা যেতে পারে।' },

    { title: 'আমি কি আমার মোবাইল ডিভাইসে টেইলারফিট ব্যবহার করতে পারি?', content: 'হ্যাঁ, টেইলারফিট মোবাইল রেসপনসিভ, যার মানে আপনি যেকোনো ডিভাইস থেকে এটি ব্যবহার করতে পারবেন, যার মধ্যে স্মার্টফোন এবং ট্যাবলেটও অন্তর্ভুক্ত। এটি আপনাকে যেকোনো সময়, যেকোনো জায়গা থেকে আপনার ব্যবসা পরিচালনা করতে সাহায্য করবে।' },

    { title: 'আমি কি মেজারমেন্ট এবং স্টাইলের নাম কাস্টমাইজ করতে পারবো?', content: 'হ্যাঁ, আপনি মেজারমেন্ট এবং স্টাইলের নাম কাস্টমাইজ করতে পারবেন।' },
    
  ];










  return (
       <div className="bg-white">
           
          <div className="max-w-[1290px] mx-auto px-4 md:px-6 lg:px-4 2xl:px-0">
          <h1 className="text-center text-primaryColor md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold">  আমাদের সম্পর্কে সাধারণ জিজ্ঞাসা</h1>
          <div className=" w-[100%] lg:flex gap-6 md:mt-[60px] mt-10">
         
         <div className="lg:w-[50%] w-full">
            <div className="flex flex-col gap-6">
           
       {accordionItems.map((item, index) => (
       <div key={index} className={`border-[1px] border-primaryBorder rounded-md hover:bg-[#F0E8F1] group ${
        openIndex === index ? 'bg-faqColor' : ''
      }`}>
       <div
         className={`md:px-6 md:py-4 px-4 py-3 flex justify-between items-center cursor-pointer ${
          openIndex === index ? 'border-b-[1px] border-b-primaryBorder' : ''
        }`}
         onClick={() => handleToggle(index)}
       >
         <h2 className={`text-primaryColor md:text-[18px] text-[16px] font-Noto-Sans-Bengali font-bold leading-7 group-hover:text-[#651A71] ${
        openIndex === index ? 'text-secondaryColor' : ''
       }`}>
           {item.title}
         </h2>
        

                   {openIndex === index ? (
                      <FiMinus className="size-6 text-primaryColor transition-transform duration-300 group-hover:text-[#651A71]" />
                    ) : (
                      <FiPlus className="size-6 text-primaryColor transition-transform duration-300 group-hover:text-[#651A71]" />
                    )}
           </div>
        <div
         className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
           openIndex === index ? 'max-h-[500px]' : 'max-h-0'
         }`}
       >
         
         <div className="md:px-6 md:py-4 px-4 py-3">
           <p className="md:text-[18px] text-[14px] text-primaryColor font-Noto-Sans-Bengali font-medium leading-8">{item.content}</p>
         </div>
       </div>
     </div>
   ))}
            </div>
         </div>

          <div className="lg:w-[50%] w-full max-h-[564.323px] mt-[40px] lg:mt-0">
              <Image className="w-full h-auto object-contain rounded-md" src={openIndex !== null ? images[openIndex] : faq1} alt="faq image"/>
          </div>
     </div>
          </div>
    </div>
  )
}

export default FaqSection