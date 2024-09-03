"use client"

import { useState } from "react";

const SwitchTab = () => {
    const [isEnglish, setIsEnglish] = useState(false);

    const toggleLanguage = () => {
      setIsEnglish(!isEnglish);
    };
  return (
    <div className="flex items-center space-x-2">
    <span className={`text-[14px] font-Poppins font-normal ${isEnglish ? 'text-secondaryColor' : 'text-switchColor'}`}>ENG</span>
    <div
      className={`w-[43px] h-6 flex items-center bg-secondaryColor rounded-full p-1 cursor-pointer ${
        isEnglish ? '' : 'bg-secondaryColor'
      }`}
      onClick={toggleLanguage}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
          isEnglish ? '' : 'translate-x-4'
        }`}
      />
    </div>
    <span className={`text-[14px] font-Noto-Sans-Bengali font-normal ${isEnglish ? 'text-switchColor' : 'text-secondaryColor'}`}>বাংলা</span>
  </div>
  )
}

export default SwitchTab