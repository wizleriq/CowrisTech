"use client";
import React from "react";
import { Menu, BellIcon } from "lucide-react";
import Image from "next/image";
import unsplash from "../src/img/unsplash.png"

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ isSidebarOpen, toggleSidebar }: NavbarProps) => {
  return (
    <nav className="w-full h-16 flex items-center justify-between sm:px-4 lg:px-4 xl:px-6 2xl:px-6

      bg-[#F6FDFF] border-b border-gray-200">
      <button onClick={toggleSidebar}
      className="p-2 rounded hover:bg-gray-200 transition"
      aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? (
            <Menu size={24} />
        ) : (
            <Menu size={24} />
        )}
      </button>
      <div className="sm:w-20 sm:h-[50px] lg:w-20 lg:h-[50px] xl:w-20 xl:h-[50px] 2xl:w-[100px] 2xl:h-[50px]
      flex justify-between items-center">
        <BellIcon  className="lg:w-8 lg:h-[30px] xl:w-8 xl:h-[31px] 2xl:w-10 2xl:h-[35px] "/>
      <div className="relative lg:w-8 lg:h-[35px] xl:w-8 xl:h-[35px] 2xl:w-10 2xl:h-[38.9px]  flex justify-between
       items-center h-8  rounded-full">
  <Image
    src={unsplash}
    alt="Profile Image"
    // fill
    className="object-contain lg:w-10 lg:h-[38.9px] xl:w-10 xl:h-[38.9px] 2xl:w-10 2xl:h-[38.9px]"
  />
</div> 
      </div>
      
      {/* <h1 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h1> */}

     
    </nav>
  );
};

export default Navbar;
