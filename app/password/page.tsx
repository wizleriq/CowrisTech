import React from 'react'
import Password from '@/app/src/img/Password.png'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../nav/page'


const Page = () => {
  return (
       <>
      <div className="lg:hidden">
  <Nav />
  </div>
    <section className="lg:w-full max-w-full mx-auto
      lg:h-[900px] xl:h-[900px] lg:bg-transparent lg:flex lg:flex-col lg:justify-center lg:items-center 
      w-[393px] h-[720px] flex flex-col  lg:px-0 px-4 sm:px-12 sm:flex sm:justify-center
     sm:items-center sm:bg-[#F6FDFF]  sm:h-[1345px] sm:w-[1000px]">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex lg:h-[900px] h-[500px]'>
         <div className="lg:w-full max-w-full lg:h-[1366px]  sm:w-[700px] lg:p-0 sm:p-8 sm:shadow-md sm:h-[400px] sm:bg-white xl:h-[900px] lg:bg-[#F6FDFF]  xl:bg-[#ffffff] lg:px-0 lg:flex lg:items-center lg:justify-center ">
        {/* <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center "> */}
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-[520px] max-w-full lg:h-[500px] lg:bg-[#ffffff] lg:shadow-md lg:p-16 flex-col lg:flex justify-center lg:items-center">
          {/* Create Account Starts */}
          {/* <div className='lg:w-[276px] lg:h-14 bg-transparent flex-col justify-center items-start self-start lg:flex lg:-mt-13'> */}
           <div className='lg:w-[276px] lg:h-14 flex-col justify-center items-center lg:flex lg:-mt-13
          w-full h-12 flex mt-2'>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] lg:text-left text-left lg:mt-0 lg:mb-0 -mb-1 mt-2  font-medium text-[20px] leading-[100%]'>Recover Account</h2>
             <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] text-center mt-2 text-[#565656]'>Enter your email to get started</h2>
          </div>
          {/* Student and Consultant Ends */}
           {/* Form Starts */}
           <form className="lg:mt-5 lg:space-y-4 text-label">

  {/* Business Name */}
  <div className="flex flex-col lg:w-[384.26px] text-left">
    <label className="lg:mb-2 mb-1 lg:mt-0 mt-3">Email address</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none
      w-full h-[37px] rounded-md  px-1.5 text-sm border border-[#AAB2CC]"
      placeholder="Enter your email"
      required
    />
  </div>
{/* Second-to-last Business Name → Password */}

  {/* Submit button */}
  <div className="flex flex-col justify-between lg:mt-6  lg:w-[384px]  lg:h-[90px]">
    <Link href="/recovery">
    <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-[384px] lg:h-[40px] text-[20.12px] lg:mb-5 lg:mt-3 mb-1 mt-6 w-full h-[38px] rounded-md lg:text-[20.12px] font-medium
      "
    >
    <h2 className='text-[18px]'>Continue</h2>
    </button>
    </Link>
    <Link href="/login">
     <button
      type="submit"
      className=" text-white lg:w-[384px] lg:h-[40px] border border-[#0079C6] lg:rounded-md lg:text-[20.12px] lg:mb-5 lg:mt-3 mb-1 mt-6 w-full h-[38px] rounded-md text-[20.12px] font-medium"
    >
        <h2 className='text-[#0079C6] text-[18px]'>Sign In Instead</h2>
    </button>
    </Link>
  </div>
   <div className='lg:hidden flex flex-col justify-between lg:mt-0 lg:text-left lg:w-[400px] lg:h-[50px] w-[268px] h-[48px]
     mx-auto mt-4 text-center'>
              <h2>Didn’t receive the code? Check your spam folder or <span className='text-[#0079C6]'>tap to resend</span></h2> 
              

            </div> 
</form>
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="hidden lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] xl:flex lg:justify-center lg:items-center">
         <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#F6FDFF] lg:rounded-md">
       <Image
      src={Password}
      alt="Profile Image"
      className="object-filllg lg:w-[442px] lg:h-[539px] lg:justify-between lg:items-center"   /* or object-contain */
    />
      </div>
      </div>
      </div>
      

    </section>
    </>
  )
}

export default Page
