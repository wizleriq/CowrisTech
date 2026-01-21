import React from 'react'
import Goggle from '@/app/src/img/Google.png'
import Apple from '@/app/src/img/Apple.png'
import Study from '@/app/src/img/Study.png'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../nav/page'

const Page = () => {
  return (
     <>
      <div className="lg:hidden">
  <Nav />
  </div>
    <section className="w-full max-w-full mx-auto
      lg:h-[900px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center
     h-[600px] flex justify-center bg-white lg:px-0 px-4 items-center sm:px-2">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex lg:h-[900px] h-[500px]'>
        <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:px-0 lg:flex flex-col lg:items-center lg:justify-center ">
          <h2 className='lg:font-medium lg:text-[40px] lg:leading-[100%] text-[#0079C6] my-4'>AbroadEx</h2>
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-[471px] max-w-full lg:h-[500px] lg:bg-[#ffffff] lg:p-16 flex-col lg:flex lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 flex-col justify-center items-center lg:flex lg:-mt-13
          w-full h-12 flex'>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] lg:text-center lg:mt-0 lg:mb-0 -mb-1 mt-2  font-medium text-[20px] leading-[100%]'>Sign In</h2>
            <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] text-center mt-2 text-[#565656]'>Welcome back! Please enter your details</h2>
          </div>
          {/* Student and Consultant Ends */}

           {/* Form Starts */}
           <form className="lg:mt-5 lg:space-y-4 text-label">
  {/* Business Name */}
  <div className="flex flex-col lg:w-[384.26px]">
    <label className="lg:mb-2 mb-1 lg:mt-0 mt-3">Email</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border 
      lg:border-[#AAB2CC] lg:outline-none w-full h-[37px] rounded-md text-sm border border-[#AAB2CC]"
      required
    />
  </div>
{/* Second-to-last Business Name → Password */}


  {/* Business Name 4 */}
  <div className="flex flex-col">
  <label className="lg:mb-2 mb-1 lg:mt-0 mt-3">Password</label>
  <input
    type="password"
    name="password"
    className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border 
      lg:border-[#AAB2CC] lg:outline-none w-full h-[37px] rounded-md text-sm border border-[#AAB2CC]"
      required
    />
  <div className="text-xs text-gray-500 mt-1 lg:text-[11.74px] lg:font-medium">
    
    <label className="flex  justify-between items-center gap-2">
      <div className='flex justify-between lg:w-[100px]'>
         <input type="checkbox" className="form-checkbox h-4 w-4">
</input>

  <span className='lg:ml-0 ml-1'>Remember me</span>
      </div>
      <Link href='/password'>
   <span className='text-[#0079C6]'>Forgot password?</span>
   </Link>
</label>
  </div>
</div>

  {/* Submit button */}
  <div className="flex justify-center lg:mt-6  lg:w-[384px] lg:h-[40px]">
    {/* <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-[384px] lg:h-[40px] lg:rounded-md lg:text-[20.12px] font-medium"
    > */}
     <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-full lg:mb-5 mb-1 mt-3 lg:h-[40px] w-full h-[38px] lg:rounded-md lg:text-[20.12px] font-medium
      rounded-md text-[20.12px]"
    >
      Sign In
    </button>
  </div>

  <div className='hidden lg:w-[384px]  lg:bg-transparent lg:h-3.5 lg:flex lg:flex-row lg:justify-between lg:text-center lg:items-center'>
    <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

    </div>

    <div className='lg:w-[120.4px] lg:h-[13.3px] lg:bg-transparentlg:flex lg:text-center lg:items-center lg:justify-center'>
      <h2 className="text-gray-500 lg:text-[12.6px] lg:font-medium lg:text-center lg:items-center lg:justify-center">Or sign up with</h2>
    </div>
   
     <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

    </div>


  </div>
 {/* Small Screen */}
   <div className='lg:hidden w-full bg-transparent h-3.5 flex flex-row justify-between text-center items-center'>
    <div className='w-[240px] h-px bg-[#C0C3CD]'>

    </div>

    <div className='w-[120.4px] h-[13.3px] bg-transparent flex text-center items-center justify-center'>
      <h2 className="text-gray-500 text-[12.6px] font-medium text-center items-center justify-center">Or</h2>
    </div>
   
     <div className='w-[240px] h-px bg-[#C0C3CD]'>

    </div>


  </div>
  {/* Small Screen Ends */}
  
  <div className="lg:w-[384px] lg:h-10 lg:px-0 text-sm flex justify-between items-center bg-transparent
  w-full h-[37px] mt-3 mx-auto bg-transparent">
     <div className="lg:w-[170.1px] lg:h-[31px] lg:px-4 text-sm rounded-md bg-transaparent border
     flex justify-between items-center border-[#AAB2CC] w-[150px] h-[31px] lg:outline-none bg-transparent px-3
     ">
     <div className="relative w-[13px] h-[9.4px] flex justify-between items-center bg-transparent ">
         <Image
      src={Goggle}
      alt="Profile Image"
      fill
     className="object-fill w-[13px] h-[9.4px] justify-between items-center" 
    />
    </div>
     <h2 className='lg:text-[12.97px] text-[11.64px]'>Sign in with Google</h2>
    </div>
   <div className="lg:w-[170.1px] lg:h-[31px] lg:px-4 text-sm rounded-md bg-transaparent border
     flex justify-between items-center border-[#AAB2CC] w-[150px] h-[31px] lg:outline-none bg-transparent px-3
     ">
          <div className="relative w-[13px] h-[9.4px] flex justify-between items-center bg-transparent ">
         <Image
      src={Apple}
      alt="Profile Image"
      fill
     className="object-fill w-[13px] h-[9.4px] justify-between items-center" 
    />
    </div>
    <h2 className='lg:text-[12.97px] text-[11.64px]'>Sign in with Apple</h2>
    </div>
  </div>

   <Link href="/sign">
  <div className='mx-auto lg:bg-transparent w-full lg:mt-0 mt-4  flex items-center justify-center h-6'>
    <h2 className='text-[12.6px]'>Already have an account? <span className='text-[#0079C6]'>Sign Up</span></h2>
  </div>
  </Link>

   <div className='lg:hidden mx-auto w-full lg:mt-0 mt-4  flex items-center justify-center h-6'>
    <h2 className='text-[12.6px]'>Experiencing an issue? Contact support<span className='text-[#0079C6]'>Sign Up</span></h2>
  </div>
</form>     
        </div>
        <div>
        </div>
      </div>

      {/* Right box */}
      <div className="hidden lg:w-full max-w-full lg:h-[900px] lg:bg-[#ffffff] lg:flex lg:justify-center lg:items-center">
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
