
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import masking from "@/assets/masking.png"

const OurPackage = () => {
  return (
    <div className="bg-[#F0E8F1] md:py-[100px] py-16 my-16 md:my-[100px]">
     
         <div className="max-w-[1290px] mx-auto px-4 md:px-6 lg:px-4 2xl:px-0">
         <h1 className="text-center text-primaryColor md:text-[56px] text-[30px] font-Noto-Sans-Bengali font-bold">  আমাদের সহজলভ্য প্যাকেজ সমূহ</h1>
         <div className=" w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]  md:mt-[60px] mt-10">
           
       

          {/* card 1 */}
          <div className="bg-white w-full px-[25px] py-[30px] rounded-md">
             
          
           
            <h1 className="text-primaryColor text-center text-[20px] font-Noto-Sans-Bengali font-bold">
              ফ্রি ট্রায়াল
            </h1>

              <div className="bg-[#FEDCEE] rounded-md flex flex-col justify-center items-center py-5 mt-5">
                   <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold">100 অর্ডার পর্যন্ত</h1>
                    <p className="text-secondaryColor text-[20px] font-Poppins font-normal">৳0 (১ মাস)</p>
              </div>
            

           

            <div className="flex flex-col gap-[23px] mt-[30px]">
              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  50টি অর্ডার ক্রিয়েশন
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  কাস্টমার ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  গ্রুপ অর্ডারস
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  অ্যাডভান্সড ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  প্রায়োরিটি সাপোর্ট
                </p>
              </div>
            </div>

            <button className="mt-[30px] w-full bg-primaryBtnColor py-[14px] text-[18px] text-secondaryColor font-Noto-Sans-Bengali font-medium rounded-md hover:bg-btnColor hover:text-white duration-300">
              বিনামূল্যে শুরু করুন
            </button>


          </div>


             {/* card 2 */}
          <div className="bg-white w-full px-[25px] py-[30px] rounded-md">
             
          
           
            <h1 className="text-primaryColor text-center text-[20px] font-Noto-Sans-Bengali font-bold">
            প্রাথমিক
            </h1>

              <div className="bg-[#FEDCEE] rounded-md flex flex-col justify-center items-center py-5 mt-5">
                   <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold">100 অর্ডার পর্যন্ত</h1>
                    <p className="text-secondaryColor text-[20px] font-Poppins font-normal">৳৫০০ (প্রতি মাস)</p>
              </div>
            

           

            <div className="flex flex-col gap-[23px] mt-[30px]">
              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  50টি অর্ডার ক্রিয়েশন
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  কাস্টমার ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  গ্রুপ অর্ডারস
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  অ্যাডভান্সড ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  প্রায়োরিটি সাপোর্ট
                </p>
              </div>
            </div>

            <button className="mt-[30px] w-full bg-btnColor py-[14px] text-[18px] text-white font-Noto-Sans-Bengali font-medium rounded-md">
            শুরু করুন
            </button>


          </div>

         {/* card 3 */}
          <div className="relative bg-white w-full px-[25px] py-[30px] rounded-md">
             
             
         

           <Image className="object-contain absolute left-0 top-0" src={masking} alt='masking'/>
           
            <h1 className="text-primaryColor text-center text-[20px] font-Noto-Sans-Bengali font-bold">
            প্রিমিয়াম
            </h1>

              <div className="bg-btnColor rounded-md flex flex-col justify-center items-center py-5 mt-5">
                   <h1 className="text-white text-[24px] font-Poppins font-semibold">৫০০০ অর্ডার পর্যন্ত</h1>
                    <p className="text-white text-[20px] font-Poppins font-normal">৳১৫০০ (প্রতি মাস)</p>
              </div>
            

           

            <div className="flex flex-col gap-[23px] mt-[30px]">
              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  50টি অর্ডার ক্রিয়েশন
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  কাস্টমার ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  গ্রুপ অর্ডারস
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  অ্যাডভান্সড ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  প্রায়োরিটি সাপোর্ট
                </p>
              </div>
            </div>

            <button className="mt-[30px] w-full bg-primaryBtnColor py-[14px] text-[18px] text-secondaryColor font-Noto-Sans-Bengali font-medium rounded-md hover:bg-btnColor hover:text-white duration-300">
            শুরু করুন
            </button>


          </div>


           {/* card 4 */}
          <div className="bg-white w-full px-[25px] py-[30px] rounded-md">
             
          
           
            <h1 className="text-primaryColor text-center text-[20px] font-Noto-Sans-Bengali font-bold">
            এন্টারপ্রাইজ
            </h1>

              <div className="bg-[#FEDCEE] rounded-md flex flex-col justify-center items-center py-5 mt-5">
                   <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold">আনলিমিটেড</h1>
                    <p className="text-secondaryColor text-[20px] font-Poppins font-normal">৳৬০,০০০ (লাইফটাইম)</p>
              </div>
            

           

            <div className="flex flex-col gap-[23px] mt-[30px]">
              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  50টি অর্ডার ক্রিয়েশন
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  কাস্টমার ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  গ্রুপ অর্ডারস
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  অ্যাডভান্সড ম্যানেজমেন্ট
                </p>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmark className="size-6 text-primaryColor" />
                <p className="text-primaryColor text-[16px] font-Poppins font-normal">
                  প্রায়োরিটি সাপোর্ট
                </p>
              </div>
            </div>

            <button className="mt-[30px] w-full bg-primaryBtnColor py-[14px] text-[18px] text-secondaryColor font-Noto-Sans-Bengali font-medium rounded-md hover:bg-btnColor hover:text-white duration-300">
            শুরু করুন
            </button>


          </div>



        

        </div>
      </div>
         </div>
   
  );
};

export default OurPackage;
