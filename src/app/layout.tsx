import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import FontProvider from "@/lib/Providers/FontProvider";


export const metadata: Metadata = {
  title: "TailorFit",
  description: "TailorFit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body className="">
        <Providers>
          <FontProvider>
        {children}
        </FontProvider>
        </Providers>
        
        </body>
       
    </html>
  );
}
