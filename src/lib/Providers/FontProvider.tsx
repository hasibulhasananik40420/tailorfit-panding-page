"use client";

import React, { useEffect, useState } from "react";
import i18n from "@/i18n/i18n";

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontClass, setFontClass] = useState("Poppins"); // Default font class

  useEffect(() => {
    // Set font class based on the current language
    const currentFontClass = i18n.language === "bn" ? "Noto-Sans-Bengali" : "Poppins";
    setFontClass(currentFontClass);

    // Listen to language changes to update font class
    const handleLanguageChange = (lng: string) => {
      const newFontClass = lng === "bn" ? "Noto-Sans-Bengali" : "Poppins";
      setFontClass(newFontClass);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return <div className={fontClass}>{children}</div>;
};

export default FontProvider;
