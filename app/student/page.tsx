"use client"
import React from 'react'
import Goggle from '@/app/src/img/Google.png'
import Apple from '@/app/src/img/Apple.png'
import Study from '@/app/src/img/Study.png'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../nav/page'
import { useRouter } from "next/navigation";


const Page = () => {
const router = useRouter();
  return (
    
     <>
      <div className="lg:hidden">
  <Nav />
</div>
    {/* // <section className="w-full bg-yellow-400 px-4 sm:px-2 lg:px-0"> */}
    <section className="lg:w-full max-w-full mx-auto lg:border-0 border-b-[#F6FDFF]
      lg:h-[1000px] lg:bg-green-500 lg:flex lg:mt-0 mt-2 lg:flex-col lg:justify-center lg:items-center
      w-full h-[800px] bg-white lg:px-0 px-4 items-center sm:px-2">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex lg:bg-red-300 lg:h-[1000px] h-[400px] '>
        <div className="lg:w-full max-w-full lg:h-[1000px] h-[300px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center ">
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-full max-w-full lg:h-[890px] h-[300px]  lg:bg-[#ffffff] lg:p-16 flex-col lg:flex lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 lg:bg-transparent flex flex-col lg:justify-between item-center lg:flex lg:-mt-13
          w-[279px] h-[43px] justify-left justify-between'>
            <div className='lg:w-[276px] lg-[36px] bg-transparent flex lg:justify-center '>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] text-[20px] font-medium leading-[100%]'>Create an account </h2>
           </div>
           <div className='lg:w-[147px] lg:h-[19.69px] bg-transparent lg:mt-2 flex lg:justify-center item-center lg:mx-auto '>
            <h2 className='lg:text-[16.77px] lg:font-medium lg:leading-[100%] sm:text-[#565656] 
            text-[13.41px] font-medium leading-[100%]'>Enter Your Details</h2>
           </div>
          </div>       
          {/* Student and Consultant Starts */}
          <div className="lg:w-[340px] lg:h-14 mx-auto w-full h-[43px] flex justify-between items-center mt-5 lg:mt-2.5">

  {/* Student */}


  <label className="relative lg:w-[158px] lg:h-[38px] w-[148px] h-[38px] bg-transparent">
    <input type="radio" name="role" className="hidden peer" />

    <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-[#0079C6]
    ">
      Student

      {/* Circle */}
       <span
    className="absolute right-4 w-4 h-4 rounded-full border border-gray-400
      transition-all duration-200
      peer-checked:border-[#0079C6]
      peer-checked:bg-[#0079C6]"
  />
    </div>
  </label>

  {/* Consultant */}
 {/* <Link href="/sign"> */}
 <label className="relative lg:w-[158px] lg:h-[38px] w-[148px] h-[38px] bg-transparent cursor-pointer flex items-center">
  <input
    type="checkbox"
    className="peer hidden"
    onChange={() => router.push("/sign")}
  />

  <div className="w-full h-full bg-white border rounded-md  border-[#DDE2E4]
      flex items-center px-4 justify-between
      peer-checked:border-[#0079C6] peer-checked:text-[#0079C6]">

    <span>Consultant</span>
  </div>

  <span
    className="absolute right-4 w-4 h-4 rounded-full border border-gray-400
      peer-checked:bg-[#0079C6]
      peer-checked:border-[#0079C6]"
  />
</label>




</div>
          {/* Student and Consultant Ends */}

           {/* Form Starts */}
           <form className="lg:mt-5 lg:space-y-4 text-label">
  {/* First Name & Last Name */}
  <div className="flex flex-row justify-between lg:space-x-4 lg:mt-0 mt-3 bg-transparent ">
    <div className="flex flex-col lg:w-[255px] w-[166px]">
      <label className="lg:mb-2 mb-1">First Name</label>
      <input
        type="text"
        name="first_name"
        className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md 
        lg:border lg:border-[#AAB2CC] lg:outline-none h-[37px] px-3 text-sm border border-[#AAB2CC] rounded-sm"
        required
      />
    </div>
    <div className="flex flex-col lg:w-[255px] w-[166px]">
      <label className="lg:mb-2 mb-1">Last Name</label>
      <input
        type="text"
        name="last_name"
       className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md 
        lg:border lg:border-[#AAB2CC] lg:outline-none h-[37px] px-3 text-sm border border-[#AAB2CC] rounded-sm"
        required
      />
    </div>
  </div>


  {/* Email & Phone */}
  <div className="flex flex-row justify-between lg:space-x-4 lg:mt-0 mt-3 bg-transparent">
    <div className="flex flex-col lg:w-[255px] w-[166px]">
      <label className="lg:mb-2 mb-1">Email Address</label>
      <input
        type="email"
        name="email"
       className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md 
        lg:border lg:border-[#AAB2CC] lg:outline-none h-[37px] px-3 text-sm border border-[#AAB2CC] rounded-sm"
        required
      />
    </div>
     <div className="flex flex-col lg:w-[255px] w-[166px]">
      <label className="lg:mb-2 mb-1">Phone Number</label>
      <input
        type="text"
        name="phone"
       className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md 
        lg:border lg:border-[#AAB2CC] lg:outline-none h-[37px] px-3 text-sm border border-[#AAB2CC] rounded-sm"
        required
      />
    </div>
  </div>

  {/* Business Name 3 */}
{/* Second-to-last Business Name → Password */}
<div className="flex flex-col">
  <label className="lg:mb-2 mb-1 lg:mt-0 mt-3">Password</label>
  <input
    type="password"
    name="password"
   className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border 
      lg:border-[#AAB2CC] lg:outline-none w-full h-[37px] rounded-md text-sm border border-[#AAB2CC]"
      required
    />
  <p className="text-xs text-gray-500 mt-1 lg:text-[11.74px] lg:font-medium">
    Must contain at least 8 characters, a special character, and a number
  </p>
</div>

  {/* Business Name 4 */}
  <div className="flex flex-col">
    <label className="lg:mb-2 mb-1 lg:mt-0 mt-3">Confirm Password</label>
    <input
      type="text"
      name="business_name_4"
       className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border 
      lg:border-[#AAB2CC] lg:outline-none w-full h-[37px] rounded-md text-sm border border-[#AAB2CC]"
      required
    />
     <p className="text-xs text-gray-500 mt-1 lg:text-[11.74px] lg:font-medium">
    
    <label className="flex items-center gap-2">
  <input type="checkbox" className="form-checkbox h-4 w-4">
</input>
  <span >I agree to the <span className='text-[#0079C6]'>Terms & Condition</span> and <span className='text-[#0079C6]'>Privacy Policy</span></span>
</label>
  </p>
  </div>

  {/* Submit button */}
  {/* <div className="flex justify-center lg:mt-6 lg:w-full lg:h-[40px] w-full h-[38px] bg-red-transparent lg:mb-5 mb-1 mt-3"> */}
    <Link href='/verifyemail'>
    <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-full lg:mb-5 mb-1 mt-3 lg:h-[40px] w-full h-[38px] lg:rounded-md lg:text-[20.12px] font-medium
      rounded-md text-[20.12px]"
    >
      Sign Up
    </button>
    </Link>
  {/* </div> */}
  
  <div className='lg:w-[531.93px] lg:bg-transparent lg:h-3.5 lg:mt-0 mt-2 flex flex-row justify-between text-center items-center 
  w-full h-3.5 '>
    <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD] w-[91.44px] h-px bg-[#C0C3CD]'>

    </div>

    <div className='lg:w-[120.4px] lg:h-[13.3px] lg:bg-transparent flex text-center items-center justify-center
    w-[120.1px] h-[15px]'>
      <h2 className="text-gray-500 lg:text-[12.6px] lg:font-medium lg:text-center lg:items-center lg:justify-center">Or sign up with</h2>
    </div>
   
     <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD] w-[91.44px] h-px bg-[#C0C3CD]'>

    </div>


  </div>

  <div className="lg:w-[531.93px] lg:h-10 lg:mx-0 lg:mt-0 lg:px-3 text-sm flex justify-between items-center lg:bg-transparent
  w-[300px] h-[37px] mt-3 mx-auto">

     <div className="lg:w-[137.1px] lg:h-[31px] lg:px-8 text-sm rounded-md bg-transaparent border
     flex justify-between items-center w-[87px] h-[29px] px-2.5 border-[#AAB2CC] outline-none">
      <div className="relative w-[13px] h-[9.4px] flex justify-between items-center bg-transparent ">
         <Image
      src={Goggle}
      alt="Profile Image"
      fill
     className="object-fill w-[13px] h-[9.4px] justify-between items-center" 
    />
    </div>
     <h2> Google</h2>
    </div>

    <div className="lg:w-[137.1px]  lg:h-[31px] lg:px-8 text-sm rounded-md bg-transaparent border
     flex justify-between items-center w-[87px] h-[29px] px-3.5 border-[#AAB2CC] outline-none">
         <div className="relative w-[13px] h-[9.4px] flex justify-between items-center bg-transparent ">
         <Image
      src={Apple}
      alt="Profile Image"
      fill
     className="object-fill w-[13px] h-[9.4px] justify-between items-center" 
    />
    </div>
     <h2>Apple</h2>
    </div>
  </div>

  <Link href="/login">
  <div className='mx-auto lg:bg-transparent lg:w-[531.93px] h-6 lg:mt-0 mt-4 flex items-center justify-center '>
    <h2 className=''>Already have an account? <span className='text-[#0079C6]'>Sign In</span></h2>
  </div>
  </Link>
</form> 
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="hidden lg:w-full max-w-full lg:h-[1000px] lg:bg-[#ffffff] lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#ffffff] lg:rounded-md">
       <Image
      src={Study}
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
