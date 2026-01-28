import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["400", "700"], // you can include 300, 400, 700 depending on what you need
});

export const metadata: Metadata = {
  title: "Cowris App",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     {/* <body className={`${inriaSerif.variable} antialiased`} > */}
     <body className={`${inriaSerif.className} antialiased`}>
     
        {children}
      </body>
    </html>
  );
}


//  <html lang="en">
//       <body className={inter.className}>
//         {/* <Navbar /> */}
//         <div className="lg:flex flex">
//           <div className="lg:w-[298px] lg:h-[1024px] lg:gap-[24px] lg:border-t-[0px] lg-border-r-[0.5px] lg:border-b-[0px] lg:border-l-[0px] hidden md:block lg:block ">
// <Sidebar />