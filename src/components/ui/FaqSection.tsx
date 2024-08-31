"use client"
import Image from "next/image"
import faq from '@/assets/faq (2).png'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface AccordionItem {
    title: string;
    content: string;
  }

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const accordionItems: AccordionItem[] = [
    { title: 'টেইলার ম্যানেজমেন্ট সফটওয়্যার কী?', content: 'টেইলার ম্যানেজমেন্ট সফটওয়্যার হলো একটি বিশেষ ধরনের সফটওয়্যার সিস্টেম যা টেইলার এবং গার্মেন্টস ব্যবসার মালিকদের জন্য ডিজাইন করা হয়েছে। এই সফটওয়্যার ব্যবহার করে টেইলাররা তাদের দৈনন্দিন কাজকর্ম যেমন অর্ডার নেওয়া, মাপ নেওয়া, ডিজাইন নির্বাচন করা, কাপড় ব্যবস্থাপনা, পেমেন্ট ট্র্যাকিং, এবং গ্রাহক ব্যবস্থাপনা ইত্যাদি খুব সহজে এবং কার্যকরভাবে পরিচালনা করতে পারেন।' },

    { title: 'কীভাবে টেইলার ম্যানেজমেন্ট সফটওয়্যার ব্যবহার শুরু করতে পারি?', content: 'টেইলার ম্যানেজমেন্ট সফটওয়্যার ব্যবহার শুরু করতে, প্রথমে একটি উপযুক্ত সফটওয়্যার নির্বাচন করুন এবং সেটি আপনার ডিভাইসে ইনস্টল করুন। সফটওয়্যার চালু করার পর রেজিস্ট্রেশন করে অ্যাকাউন্ট তৈরি করুন এবং ব্যবসার প্রয়োজনীয় তথ্য ইনপুট করুন, যেমন গ্রাহকের মাপ, ডিজাইন, এবং স্টক তথ্য। এরপর সফটওয়্যার ব্যবহারের জন্য নির্দেশিকা বা টিউটোরিয়াল দেখে প্রশিক্ষণ নিন। প্রয়োজন হলে, সফটওয়্যারটি আপনার ব্যবসার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টমাইজ করুন। এখন আপনি সফটওয়্যার ব্যবহার করে অর্ডার ম্যানেজমেন্ট, পেমেন্ট ট্র্যাকিং, এবং অন্যান্য কার্যকলাপ সহজেই পরিচালনা করতে পারবেন।' },


    { title: 'সফটওয়্যারটি কী ধরনের রিপোর্ট তৈরি করতে সক্ষম?', content: 'টেইলার ম্যানেজমেন্ট সফটওয়্যার বিভিন্ন ধরনের রিপোর্ট তৈরি করতে সক্ষম, যা ব্যবসার কার্যক্রম সহজতর করে। সাধারণত, এটি অর্ডার রিপোর্ট তৈরি করে, যা সম্পন্ন হওয়া এবং চলমান অর্ডারগুলোর বিস্তারিত তথ্য প্রদান করে। এছাড়াও, সফটওয়্যারটি গ্রাহকের মাপ ও ডিজাইন পছন্দের রিপোর্ট তৈরি করতে পারে, যা ভবিষ্যতে ব্যবহার করা যায়। স্টক ইনভেন্টরি রিপোর্টের মাধ্যমে কাপড় ও অন্যান্য উপকরণের মজুত অবস্থা জানা যায়। পাশাপাশি, পেমেন্ট রিপোর্ট প্রাপ্ত এবং বকেয়া পেমেন্টের তথ্য প্রদান করে, যা আর্থিক পরিচালনায় সাহায্য করে।' },

    { title: 'এই সফটওয়্যারটি কি বিভিন্ন ভাষায় পাওয়া যায়?', content: 'হ্যাঁ, অনেক টেইলার ম্যানেজমেন্ট সফটওয়্যার বিভিন্ন ভাষায় উপলব্ধ থাকে। এই সফটওয়্যারগুলি আন্তর্জাতিক বাজারে ব্যবহারকারীদের সুবিধার্থে একাধিক ভাষার সমর্থন প্রদান করে। সাধারণত ইংরেজি, বাংলা, হিন্দি, স্প্যানিশ, ফরাসি, এবং অন্যান্য স্থানীয় ভাষার বিকল্প থাকতে পারে। এটি ব্যবহারকারীদের ভাষাগত সুবিধা নিশ্চিত করে এবং সফটওয়্যারটির ব্যবহার আরও সহজ করে তোলে। তবে, ভাষার উপলব্ধতা সফটওয়্যারটির প্রকার এবং প্রস্তুতকারকের উপর নির্ভর করে।' },

    { title: 'টেইলার ম্যানেজমেন্ট সফটওয়্যারের আপডেটগুলি কীভাবে পাওয়া যায়?', content: 'টেইলার ম্যানেজমেন্ট সফটওয়্যারের আপডেটগুলি সাধারণত বিভিন্ন উপায়ে পাওয়া যায়। সফটওয়্যারটির ইন্টারফেসে একটি ইন-বিল্ট আপডেট ফিচার থাকে, যা নতুন সংস্করণগুলি সহজেই ডাউনলোড এবং ইনস্টল করতে সাহায্য করে। এছাড়াও, সফটওয়্যার প্রস্তুতকারকরা প্রায়ই ইমেইল বিজ্ঞপ্তির মাধ্যমে আপডেটের তথ্য পাঠায়। অফিসিয়াল ওয়েবসাইটে আপডেটের বিস্তারিত এবং ডাউনলোড লিংকও পাওয়া যায়। সোশ্যাল মিডিয়া পেজ এবং ব্যবহারকারী ফোরামগুলোতেও নতুন আপডেট সম্পর্কে তথ্য প্রকাশিত হয়, যা ব্যবহারকারীদের আপডেটেড থাকার সহায়ক।' },
    
  ];










  return (
    <div className="bg-white md:py-[100px] py-16">
           
          <div className="max-w-[1290px] mx-auto px-4 md:px-6 lg:px-4 2xl:px-0">
          <h1 className="text-center text-primaryColor md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold">  আমাদের সম্পর্কে সাধারণ জিজ্ঞাসা</h1>
          <div className=" w-[100%] lg:flex gap-6 md:mt-[60px] mt-10">
         
         <div className="lg:w-[50%] w-full">
            <div className="flex flex-col gap-6">
           
       {accordionItems.map((item, index) => (
       <div key={index} className="border-[1px] border-primaryBorder rounded-md">
       <div
         className="md:p-6 p-4 flex justify-between items-center cursor-pointer"
         onClick={() => handleToggle(index)}
       >
         <h2 className="text-primaryColor text-[16px] font-Noto-Sans-Bengali font-medium leading-7">
           {item.title}
         </h2>
         <IoIosArrowDown
           className={`size-6 text-primaryColor transition-transform duration-300 ${
             openIndex === index ? 'transform rotate-180' : ''
           }`}
         />
       </div>
       <div
         className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
           openIndex === index ? 'max-h-[500px]' : 'max-h-0'
         }`}
       >
         {/* Dynamic Accordion Content */}
         <div className="md:p-6 p-4">
           <p className="text-[14px] text-primaryColor font-Noto-Sans-Bengali font-normal">{item.content}</p>
         </div>
       </div>
     </div>
   ))}
            </div>
         </div>

          <div className="lg:w-[50%] w-full max-h-[564.323px] mt-[40px] lg:mt-0">
              <Image className="w-full h-auto object-contain rounded-md" src={faq} alt="faq image"/>
          </div>
     </div>
          </div>
    </div>
  )
}

export default FaqSection