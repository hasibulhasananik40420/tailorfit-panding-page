import Image from "next/image";
import dasgboard from '@/assets/dashboard (2).png'
const Contact = () => {
  return (
    <div className="max-w-[1290px] mx-auto">
       <div className="bg-[#651A71] mx-4 md:mx-6 lg:mx-4 2xl:mx-0 rounded-[12px] 2xl:p-10 p-6">
      <div className="w-[100%] lg:flex gap-[50px] items-center">
        <div className="lg:w-[55%] w-full bg-inputColor h-full rounded-[16px]">
          
               <Image className="w-full h-auto object-contain pl-[60px] pt-[60px]" src={dasgboard} alt="contact image"/>
          
        </div>

        <div className="lg:w-[45%] w-full lg:mt-0 mt-10">
          <h1 className="text-white md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold leading-normal">
            আপডেট পেতে আমাদের সাথে থাকুন{" "}
          </h1>

          <p className="mt-4 md:text-[20px] text-[16px] text-white font-Noto-Sans-Bengali font-normal leading-8">
            আপডেট এবং নতুন তথ্য সম্পর্কে সর্বশেষ জানার জন্য আমাদের সাথে থাকুন।
          </p>

          <div className="flex items-center space-x-2 bg-inputColor md:p-3 p-2 rounded-[16px] mt-[48px]">
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="flex-1 bg-transparent md:text-[20px] text-[14px] md:pl-6 pl-4 border-none outline-none text-inputTextColor font-Noto-Sans-Bengali font-normal"
            />
            <button className="bg-btnColor text-white md:text-[20px] text-[14px] md:py-[14px] md:px-9 px-4 py-2 font-Noto-Sans-Bengali font-medium rounded-[8px]">
              আমাকে জানান
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
