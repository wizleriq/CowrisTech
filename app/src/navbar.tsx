"use client"
import React, { useState } from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    console.log("Menu clicked. Before toggle:", isOpen);
    setIsOpen(!isOpen)
  }

  return (
    <section className='relative lg:w-[1090px] lg:h-[93px] lg:bg-transparent lg:px-3.5 flex lg:items-center lg:mt-3.5 lg:justify-between
      bg-transparent w-full h-12 px-6 py-2 justify-between items-center'
    >
      {/* LOGO */}
      <div className='lg:w-32 lg:h-[29px] lg:bg-transparent lg:flex justify-center items-center lg:text-[#0079C6] 
        text-[#0079C6] w-full '
      >
        <h2 className='font-inria lg:font-semibold lg-text-[24px] lg:leading-[100%] text-[20px]'>
          CowrisJapa
        </h2>
      </div>
      {/* MOBILE MENU BUTTON */}
      <div className="flex items-center gap-2 lg:hidden">
        <Menu 
        size={25}
        className="transition-all duration-300 cursor-pointer"
        onClick={toggle}
        />
         {isOpen && (
          <div className="absolute top-1 left-0 w-full bg-green-500 shadow-lg rounded p-2 z-20">
      <ul>
        <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="/">Home</a></li>
        <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#hire">Our Service</a></li>
        <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#faqs">FAQs</a></li>
        <li className="py-2 px-4 my-1 hover:bg-[#DCF4FD]"><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  )}
</div>
      {/* DESKTOP NAV */}
      <main className='lg:w-[500px] lg:h-[21px] lg:bg-transparent lg:flex justify-between items-center lg:text-[#0079C6] hidden'>
        <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Consultants</h2>
        <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Students</h2>
        <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>Pay Tution</h2>
        <h2 className='font-inria lg:font-semibold lg:text-[17.27px]'>GIC Program</h2>
      </main>

      <main className='lg:w-[235px] lg:h-9 lg:bg-transparent lg:flex justify-between items-center hidden'>
        <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-white'>
          <h2 className='font-inria lg:font-normal lg:text-[18.16px] text-[#0079C6]'>Login</h2>
        </div>

        <div className='lg:w-[110px] lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center lg:items-center lg:bg-[#0079C6]'>
          <h2 className='font-inria lg:font-normal lg:text-[18.16px] text-white'>Register</h2>
        </div>
      </main>

    </section>
  )
}

export default Navbar






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