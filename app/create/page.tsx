import React from 'react'
import Password from '@/app/src/img/Password.png'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <section className="w-full max-w-full mx-auto
      lg:h-[900px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex bg-red-300 lg:h-[900px]'>
         <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#ffffff] lg:px-0 lg:flex lg:items-center lg:justify-center ">
        {/* <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center "> */}
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
        <div className="lg:w-[520px] max-w-full lg:h-[400px] lg:bg-[#ffffff] shadow-md lg:p-16 flex flex-col justify-center items-center">
  
  {/* Create Account Starts */}
  <div className="lg:w-[300px] flex flex-col justify-center items-center text-center mb-6 self-start">
    <h2 className="lg:text-[28.66px] lg:font-medium leading-[100%]">
      Create New Password
    </h2>
    <h2 className="lg:text-[14px] lg:font-medium mt-2">
      Set a new password to secure your account.
    </h2>
  </div>

  {/* Form Starts */}
  <form className="flex flex-col items-center lg:space-y-4">

    {/* Password */}
    <div className="flex flex-col lg:w-[384.26px] text-left">
      <label className="mb-2">Password</label>
      <input
        type="password"
        className="lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        placeholder="Enter Password"
        required
      />
    </div>

    {/* Confirm Password */}
    <div className="flex flex-col lg:w-[384.26px] text-left">
      <label className="mb-2">Confirm Password</label>
      <input
        type="password"
        className="lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        placeholder="Confirm Password"
        required
      />
    </div>

    {/* Submit button */}
    <div className="flex justify-center lg:mt-6 lg:w-[384px]">
      <Link href="/login">
        <button
          type="submit"
          className="lg:w-[384px] lg:h-[40px] border border-[#0079C6] lg:rounded-md"
        >
          <h2 className="text-[#0079C6] text-[18px] font-medium">
            Set new password
          </h2>
        </button>
      </Link>
    </div>

  </form>
</div>

        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:flex lg:justify-center lg:items-center">
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
  )
}

export default Page
