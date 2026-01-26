"use client"
import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

// import Navbar from "./src/navbar";
// import HomePage from "./src/homePage";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <section
      className="
        relative z-50
        lg:w-[980px] lg:bg-transparent xl:bg-transparent lg:h-[93px]  lg:px-1 xl:px-3.5 flex lg:items-center lg:mt-3.5 lg:justify-between
        bg-white w-full h-12 px-6 py-2 justify-between items-center xl:w-[1265px] 2xl:w-[1550px] 
      "
    >
      {/* LOGO */}
      <div
        className="
          lg:w-32 lg:h-[29px] lg:bg-transparent lg:flex justify-center items-center lg:text-[#0079C6] 
          text-[#0079C6] w-full
        "
      >
        <Link href="/">
        <h2 className="font-inria font-semibold lg-text-[24px] lg:pr-0 sm:pr-[100px] lg:leading-[100%] text-[22px] 2xl:text-[24px]">
          CowrisJapa
        </h2>
        </Link>
      </div>
      {/* MOBILE: MENU BUTTON */}
      <div className="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#0079C6]"
        >
          {isOpen ? (
            <X size={25} className="transition-all duration-300 cursor-pointer" />
          ) : (
            <Menu size={25} className="transition-all duration-300 cursor-pointer" />
          )}
        </button>
      </div>

      {/* DESKTOP NAV LINKS */}
      <main className="xl:w-[550px] lg:w-[450px] lg:h-[21px] lg:bg-transparent lg:flex justify-between 2xl:text-[21px] items-center lg:text-[#0079C6] hidden">
        {["Consultants", "Students", "Pay Tution", "GIC Program"].map(item => (
          <h2
            key={item}
            className="
              font-inria lg:font-semibold lg:text-[17.27px] 2xl:text-[21px]
              transition-all duration-200 
              hover:text-[#005b94] hover:underline underline-offset-4
            "
          >
            {item}
          </h2>
        ))}
      </main>

      {/* DESKTOP AUTH BUTTONS */}
      <main className="lg:w-[235px] lg:h-9 lg:bg-transparent lg:flex justify-between items-center hidden ">
        <Link href="/login">
        <div
          className="
            lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-white
            transition-all duration-200 hover:bg-[#E6F4FF] hover:shadow-sm
          "
        >
          <h2 className="font-inria lg:font-normal lg:text-[18.16px] text-[#0079C6] 2xl:text-[21px]">Login</h2>
        </div>
        </Link>

        <Link href="/sign">
        <div
          className="
            lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-[#0079C6]
            transition-all duration-200 hover:bg-[#0062a0] hover:shadow-sm
          "
        >
          <h2 className="font-inria lg:font-normal lg:text-[18.16px] text-white 2xl:text-[21px]">Register</h2>
        </div>
        </Link>
      </main>

      {/* MOBILE: SLIDE-IN MENU + OVERLAY */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMenu}
      >
        {/* Dim background */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sliding panel */}
        <nav
          className={`
            absolute top-0 right-0 h-100 w-full bg-white shadow-lg
            p-4 pt-6 mt-0
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={e => e.stopPropagation()}
        >
          {/* Close icon inside panel */}
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#0079C6]"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-2 font-semibold text-[17.27px] -mt-5 leading-[100%] text-[#C0C3CD]">
            {[
              { label: "Home", href: "/" },
              { label: "Consultants", href: "#hire" },
              { label: "Students", href: "#faqs" },
              { label: "Pay Tution", href: "#contact" },
              { label: "GIC Programs", href: "#contact" },
            ].map(link => (
              <li
                key={link.label}
                className="
                  group
                  py-2 px-3 rounded-md
                  transition-all duration-150
                  hover:bg-[#0079C6]
                  active:bg-[#005b94]
                  active:scale-[0.98]
                  select-none
                "
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    block
                    text-[15px]
                    text-[#0079C6]
                    transform
                    transition-all duration-150
                    group-hover:text-white
                    group-hover:translate-x-1
                    group-active:text-white
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between items-center mx-auto  bg-ed-500 w-84 h-24 mt-5">
            <Link href="/login"><button className="w-[335px] h-[35.79px] bg-transparent rounded-sm font-semibold text-[#0079C6]  border border-[#0079C6] ">Login</button>
            </Link>
          <Link href="/sign"><button className="w-[335px] h-[35.79px] font-semibol bg-[#0079C6] text-white rounded-sm">Register</button></Link>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar







// "use client"
// import React, { useState } from 'react'
// import { Menu } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () => {
//     console.log("Menu clicked. Before toggle:", isOpen);
//     setIsOpen(!isOpen)
//   }

//   return (
//     <section className='relative lg:w-[1090px] lg:h-[93px] lg:bg-transparent lg:px-3.5 flex lg:items-center lg:mt-3.5 lg:justify-between
//       bg-white w-full h-12 px-6 py-2 justify-between items-center'
//     >
//       {/* LOGO */}
//       <div className='lg:w-32 lg:h-[29px] lg:bg-transparent lg:flex justify-center items-center lg:text-[#0079C6] 
//         text-[#0079C6] w-full '
//       >
//         <h2 className='font-inria lg:font-semibold lg-text-[24px] lg:leading-[100%] text-[20px]'>
//           CowrisJapa
//         </h2>
//       </div>
//       {/* MOBILE MENU BUTTON */}
//       <div className="flex items-center gap-2 lg:hidden">
//         <Menu 
//         size={25}
//         className="transition-all duration-300 cursor-pointer"
//         onClick={toggle}
//         />
//          {isOpen && (
//           <div className="absolute top-1 left-0 w-full bg-green-500 shadow-lg rounded p-2 z-20">
//       <ul>
//         <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="/">Home</a></li>
//         <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#hire">Our Service</a></li>
//         <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#faqs">FAQs</a></li>
//         <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#contact">Contact Us</a></li>
//       </ul>
//     </div>
//   )}
// </div>
//       {/* DESKTOP NAV */}
//       <main className='lg:w-[500px] lg:h-[21px] lg:bg-transparent lg:flex justify-between items-center lg:text-[#0079C6] hidden'>
//         <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Consultants</h2>
//         <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Students</h2>
//         <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Pay Tution</h2>
//         <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>GIC Program</h2>
//       </main>

//       <main className='lg:w-[235px] lg:h-9 lg:bg-transparent lg:flex justify-between items-center hidden'>
//         <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-white'>
//           <h2 className='font-inria lg:font-normal lg:text-[18.16px] text-[#0079C6]'>Login</h2>
//         </div>

//         <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-[#0079C6]'>
//           <h2 className='font-inria lg:font-normal lg:text-[18.16px] text-white'>Register</h2>
//         </div>
//       </main>

//     </section>
//   )
// }

// export default Navbar






// "use client"
// import React from 'react'
// import { Menu } from 'lucide-react'
// import { useState } from 'react'

// const navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () =>{
//     setIsOpen(!isOpen)
//   }
  
//   return (
//     <section className='lg:w-[1090px] lg:h-[93px] lg:bg-transparent lg:px-3.5 flex lg:items-center lg:mt-3.5 lg:justify-between
//     bg-transparent w-full h-12 px-6 py-2 justify-between items-center'>
//         <div className='lg:w-32 lg:h-[29px] lg:bg-transparent lg:flex justify-center items-center lg:text-[#0079C6] 
//         text-[#0079C6] w-full '>
//             <h2 className='font-inria lg:font-semibold font lg-text-[24px] lg:leading-[100%] text-[20px]'>CowrisJapa</h2>
//         </div>
//     <div className="items-center gap-2 lg:hidden">
//   <Menu 
//     size={25}
//     className='transition-all duration-300 cursor-pointer'
//     onClick={toggle}
//   />

//   {isOpen && (
//     <div className="absolute top-[59px] left-0 w-[430px] h-[250px] bg-white shadow-lg rounded p-2 z-20">
//       <ul>
//         <a href="/"><li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]">Home</li></a>
//         <a href="#hire"><li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]">Our Service</li></a>
//         <a href="#faqs"><li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]">FAQs</li></a>
//         <a href="#contact"><li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]">Contact Us</li></a>
//       </ul>
//     </div>
//   )}
// </div>
// <main className='lg:w-[500px] lg:h-[21px] lg:bg-transparent lg:flex justify-between items-center lg:text-[#0079C6] hidden'>
//            <div className='lg:w-[104px] lg:h-[21px] lg:bg-transparent lg:flex justify-center items-center'>
//             <h2 className='font-inria lg:font-semibold lg:text-[17.27px lg:leading-[100%]'>
//               Consultants
//             </h2>
//         </div>
//         <div className='lg:w-[78.81px] lg:h-[21px] lg:bg-transparent lg:flex justify-center items-center'>
//  <h2 className='font-inria lg:font-semibold lg:text-[17.27px lg:leading-[100%]'>
//               Students
//             </h2>
//         </div>
//         <h2 className='font-inria lg:font-semibold lg:text-[17.27px lg:leading-[100%]'>
//               Pay Tution
//             </h2>
//           <h2 className='font-inria lg:font-semibold lg:text-[17.27px lg:leading-[100%]'>
//               GIC Program
//             </h2>

//         </main>
      
//          <main className='lg:w-[235px] lg:h-9 lg:bg-transparent lg:flex justify-between items-center hidden'>
//           <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-white'>
//             <h2 className='font-inria lg:font-normal lg:text-[18.16px] lg:leading-[100%] lg:tracking-normal lg:text-[#0079C6] '>
//               Login 
//             </h2>

//           </div>
//            <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-[#0079C6]'>
//             <h2 className='font-inria lg:font-normal lg:text-[18.16px] lg:leading-[100%] lg:tracking-normal lg:text-white '>
//               Register
//             </h2>

//           </div>
//         </main>
//     </section>
//   )
// }

// export default navbar