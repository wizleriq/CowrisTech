import { Home, User, Settings } from "lucide-react";

const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const menuItems = [
    { icon: <Home />, label: "Home" },
    { icon: <User />, label: "Users" },
    { icon: <Settings />, label: "Settings" },
  ];

  return (
    <div
      className={`hidden lg:h-[1504px] xl:h-[1504px] 2xl:h-[1504px] sm:flex sm:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 
      2xl:flex 2xl:flex-col bg-white text-[#C0C3CD] p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="mb-8 flex items-center justify-center">
        {/* <Link href='/'>
        <h2 className="font-inria font-semibold Leading-[100%] text-[22px]">
          CowrisJapa
        </h2>
        </Link> */}
        <span className={`className="font-inria font-semibold Leading-[100%] text-[22px] text-[#0079C6] ${isCollapsed ? "opacity-0" : "opacity-100"}`}>CowrisJapa</span>
      </div>

      <nav className="flex-1 flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer">
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;








// import React from "react";


// const Sidebar = ({ isCollapsed }) => {
//   // Sidebar items (just names)
//   const menuItems = ["Home", "Users", "Analytics", "Settings"];

//   return (
//     <div
//       className={`h-full flex flex-col bg-gray-800 text-white p-4 transition-all duration-300 ${
//         isCollapsed ? "w-20" : "w-72"
//       }`}
// //       width: 256.1552734375;
// // height: 1503.9974365234375;
// // top: 1.83px;
// // angle: 0 deg;
// // opacity: 1;
// // border-right-width: 0.91px;

//     >
//       {/* Logo / Brand */}
//       <div className="mb-8 flex items-center justify-center">
//         <span
//           className={`text-xl font-bold transition-all duration-300 ${
//             isCollapsed ? "opacity-0 w-0" : "opacity-100"
//           }`}
//         >
//           MyApp
//         </span>
//       </div>

//       {/* Menu items */}
//       <nav className="flex-1 flex flex-col gap-3">
//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             className="p-3 hover:bg-gray-700 rounded cursor-pointer transition-colors text-center"
//           >
//             {item}
//           </div>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="mt-auto text-center text-sm text-gray-400">
//         {isCollapsed ? "©" : "© 2026 MyApp"}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
