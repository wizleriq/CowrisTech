"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/page";
import Navbar from "../dashboardnav/page";
import Image from "next/image";
import ren from "../src/img/Ren.png"


const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
  <div className="relative flex h-screen lg:h-[1504px]">

    {/* DESKTOP SIDEBAR */}
    <div
      className={`hidden lg:flex sm:flex text-white transition-all duration-300
        ${isSidebarOpen ? "w-64" : "w-20"}
      `}
    >
      <Sidebar isCollapsed={!isSidebarOpen} />
    </div>

    {/* MOBILE DROPDOWN SIDEBAR */}
    <div
      className={`lg:hidden sm:hidden absolute top-16 left-0 w-full z-50
        bg-red-300 text-white transition-all duration-300 overflow-hidden
        ${isSidebarOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <Sidebar isCollapsed={false} />
    </div>

    {/* DASHBOARD AREA */}
    <div className="flex flex-col flex-1 bg-[#F6FDFF]">

      {/* NAVBAR */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* CONTENT */}
       <main className=" w-full h-[2400px] sm:w-full sm:h-[2000px] lg:w-[1020px] lg:h-[2000px] xl:w-full xl:h-[2000px] bg-red-200 2xl:w-full lg:flex lg:flex-col xl:flex xl:flex-col 
         2xl:flex 2xl:flex-col flex flex-col sm:pt-1 lg:pt-1 lg:p-0 sm:p-0 p-3">
         {/* <main className="flex-1 p-4"> */}
           <div className="bg-linear-to-r lg:h-[150px] flex justify-between  from-[#169EF4] to-[#0B6EAD] p-2 sm:p-4 lg:p-4.5 xl:p-6 2xl:p-6  shadow">
            <div className="lg:w-[700px] lg:h-[100px] flex flex-col justify-between">
 <h1 className="text-[17px] sm:text-[21.3px] lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold mb-4 capitalize">Refer friends and family and get amazing rewards</h1>
             <div className="flex justify-center items-center text-center bg-white rounded-sm w-[120px] sm:w-[130px] lg:w-[130px] xl:w-[130px] 2xl:w-[130px] 
             h-10 sm:h-[50px] lg:h-[50px] xl:h-10 2xl:h-20px bg:red-500">
              <h2 className="text-[#0079C6]  font-bold text-[17.27px] leading-1 tracking-normal sm:font-bold sm:text-[20.27px] sm:leading-1 sm:tracking-normal lg:font-bold lg:text-[20.27px] lg:leading-1 lg:tracking-normal
              xl:text-[20.27px] xl:leading-1 xl:tracking-normal 2xl:text-[20.27px] 2xl:leading-1 2xl:tracking-normal">Learn More</h2>
             </div>
            </div>

            <Image src={ren}  alt="ren" className=" hidden sm:flex  lg:flex sm:object-cover sm:w-[230px] sm:h-[150px] sm:-mt-2  lg:object-cover lg:w-[230px] lg:h-[150px] lg:-mt-4 xl:object-cover xl:w-[230px] xl:h-[150px] xl:-mt-6 
            2xl:object-cover 2xl:lg:w-[230px] 2xl:lg:h-[150px] 2xl:lg:-mt-6"/>    
         </div>
         <div className="w-full h-[700px] bg-green-200 p-6 sm:w-full sm:h-[300px] sm:bg-green-200 sm:p-6 lg:w-full lg:h-[300px] lg:bg-green-200 lg:p-6
         xl:h-[300px] xl:w-full xl:bg-green-200 xl:p-6  2xl:h-[300px] 2xl:w-full 2xl:bg-green-200 2xl:p-6" >
        {/* Three DIVs starts here... */}
        <div>

        </div>

        <div>
          
        </div>

        <div>
          
        </div>
        {/* Three DIVs ends here */}
         </div>
       </main>
      {/* <main className="flex-1 p-4">
        <div className="bg-gradient-to-r from-[#169EF4] to-[#0B6EAD] p-6 shadow">
          <h1 className="text-2xl font-bold mb-4 capitalize">
            Refer friends and family and get amazing rewards
          </h1>
          <p>Your dashboard content goes here...</p>
        </div>
      </main> */}

    </div>
  </div>
);


  // return (
  //   <div className="flex h-screen lg:h-[1504px] xl:h-[1504px] 2xl:h-[1504px]">

  //     {/* SIDEBAR */}
  //     <div
  //       className={ `sm:flex lg:flex xl:flex 2xl:flex hidden text-white transition-all duration-300 ${
  //         isSidebarOpen ? "w-64" : "w-20"
  //       }`}
  //     >
  //       <Sidebar isCollapsed={!isSidebarOpen} />
  //     </div>

      

  //     {/* DASHBOARD AREA (navbar + content) */}
  //     {/* <div className="flex flex-col flex-1 bg-gray-100"> */}
  //     <div className="sm:w-full lg:w-[1053px] xl:w-full 2xl:w-full lg:flex lg:flex-col xl:flex xl:flex-col 
  //     2xl:flex 2xl:flex-col flex flex-col  bg-[#F6FDFF]">

  //       {/* NAVBAR (only dashboard width) */}
  //       <Navbar
  //         isSidebarOpen={isSidebarOpen}
  //         toggleSidebar={toggleSidebar}
  //       />

  //       {/* DASHBOARD CONTENT */}
  //        <main className="lg:w-[1020px] lg:w-full 2xl:w-full lg:flex lg:flex-col xl:flex xl:flex-col 
  //     2xl:flex 2xl:flex-col flex flex-col">
  //       {/* <main className="flex-1 p-4"> */}
  //         <div className="bg-gradient-to-r from-[#169EF4] to-[#0B6EAD] p-6 shadow">
  //           <h1 className="text-2xl font-bold mb-4 capitalize">Refer friends and family and get amazing rewards</h1>
  //           <p>Your dashboard content goes here...</p>
  //         </div>
  //       </main>

  //     </div>
  //   </div>
  // );
};

export default Page;



// "use client";
// import React, { useState } from "react";
// import Sidebar from "../sidebar/page";


// const Page = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen lg:h-[1504px]">
//       {/* Sidebar */}
//       <div
//         className={`bg-red-300 text-white transition-all duration-300 ${
//           isSidebarOpen ? "w-64" : "w-20"
//         //   isCollapsed ? "w-20" : "w-64"
//         }`}
//       >
//         <Sidebar isCollapsed={!isSidebarOpen} />
//       </div>

//       {/* Main dashboard */}
//       <div className="flex-1 lg:bg-[#e18a08] sm:bg-[#F6FDFF]  bg-gray-100 p-4">
       
//         <button
//           onClick={toggleSidebar}
//           className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           {isSidebarOpen ? "Collapse" : "Expand"} Sidebar
//         </button>

        
//         <div className="bg-white p-6 rounded shadow">
//           <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//           <p>Your dashboard content goes here...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


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