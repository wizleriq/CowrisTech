"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/page";


const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen lg:h-[1504px]">
      {/* Sidebar */}
      <div
        className={`bg-red-300 text-white transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        //   isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <Sidebar isCollapsed={!isSidebarOpen} />
      </div>

      {/* Main dashboard */}
      <div className="flex-1 lg:bg-[#F6FDFF] sm:bg-[#F6FDFF]  bg-gray-100 p-4">
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isSidebarOpen ? "Collapse" : "Expand"} Sidebar
        </button>

        {/* Dashboard content */}
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Your dashboard content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Page;


// import React from 'react'

// const page = () => {
//   return (
//     <div>
//           <div className="lg:flex flex">
//      <div className="lg:w-[298px]  bg-red-200 lg:h-[1024px] lg:gap-[24px] lg:border-t-[0px] lg-border-r-[0.5px]
//       sm:border-b-[0px] sm:border-l-[0px] hidden md:block lg:block ">
// {/* <Sidebar /> */}
// </div>
// </div>

// page</div>
//   )
// }

// export default page