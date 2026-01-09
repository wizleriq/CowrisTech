import React from 'react'
import Goggle from '@/app/src/img/Google.png'
import Apple from '@/app/src/img/Apple.png'
import Study from '@/app/src/img/Study.png'
import Image from 'next/image'

const Page = () => {
  return (
    <section className="w-full max-w-full mx-auto
      lg:h-[1000px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex bg-red-300 lg:h-[1000px]'>
        <div className="lg:w-full max-w-full lg:h-[1000px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center ">
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-[471px] max-w-full lg:h-[890px] lg:bg-[#ffffff] lg:p-16 flex-col lg:flex lg:items-center">
            {/* width: 471;
height: 556.93115234375;
top: 106px;
left: 100px;
angle: 0 deg;
opacity: 1; */}

          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 bg-green-400 flex-col justify-center items-center  lg:flex lg:-mt-13'>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] lg:text-center'>Sign In</h2>
            <h2 className='lg:text-[12px] lg:font-medium lg:leading-[100%] text-center mt-2'>Welcome back! Please enter your details</h2>
          </div>

          {/* Student and Consultant Ends */}

           {/* Form Starts */}
           <form className="lg:mt-5 lg:space-y-4 text-label">

  {/* Business Name */}
  <div className="flex flex-col lg:w-[384.26px]">
    <label className="mb-2">Email</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      required
    />
  </div>
{/* Second-to-last Business Name → Password */}


  {/* Business Name 4 */}
  <div className="flex flex-col">
  <label className="mb-1">Password</label>
  <input
    type="password"
    name="password"
    className="lg:w-[384.26px] lg:h-10 lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
    placeholder="Enter your password"
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
  <div className="flex justify-center lg:mt-6  lg:w-[384px] lg:h-[40px]">
    <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-[384px] lg:h-[40px] lg:rounded-md lg:text-[20.12px] font-medium"
    >
      Sign Up
    </button>
  </div>
  

  <div className='lg:w-[384px]  lg:bg-transparent lg:h-3.5 lg:flex lg:flex-row lg:justify-between lg:text-center lg:items-center'>
    <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

    </div>

    <div className='lg:w-[120.4px] lg:h-[13.3px] lg:bg-transparentlg:flex lg:text-center lg:items-center lg:justify-center'>
      <h2 className="text-gray-500 lg:text-[12.6px] lg:font-medium lg:text-center lg:items-center lg:justify-center">Or sign up with</h2>
    </div>
   
     <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

    </div>


  </div>
  <div className="lg:w-[384px] lg:h-10 lg:px-3 lg:text-sm lg:flex lg:justify-between lg:items-center lg:bg-transparent">
     <div className="lg:w-[137.1px] lg:h-[31px] lg:px-8 lg:text-sm lg:rounded-md lg:bg-transaparent lg:border
     lg:flex lg:justify-between lg:items-center lg:border-[#AAB2CC] lg:outline-none">
         <div className="relative lg:w-[13px] lg:flex lg:justify-between lg:items-center lg:bg-transparent lg:h-[9.4px]">
         <Image
      src={Goggle}
      alt="Profile Image"
      fill
      className="object-fill lg:w-[13px] lg:h-[9.4px] lg:justify-between lg:items-center"   /* or object-contain */
    />
    </div>
     <h2> Google</h2>
    </div>
    <div className="lg:w-[137.1px] lg:h-[31px] lg:px-8 lg:text-sm lg:rounded-md lg:bg-transaparent lg:border
     lg:flex lg:justify-between lg:items-center lg:border-[#AAB2CC] lg:outline-none">
         <div className="relative lg:w-[13px] lg:flex lg:justify-between lg:items-center lg:bg-transparent lg:h-[9.4px]">
         <Image
      src={Apple}
      alt="Profile Image"
      fill
      className="object-fill lg:w-[13px] lg:h-[9.4px] lg:justify-between lg:items-center"   /* or object-contain */
    />
    </div>
     <h2>Apple</h2>
    </div>
  </div>

  <div className='lg-mx-auto lg:bg-transparent lg:w-[384px] lg:flex lg:items-center lg:justify-center lg:h-6'>
    <h2 className=''>Already have an account? <span className='text-[#0079C6]'>Sign In</span></h2>
  </div>



 

</form>

        
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="lg:w-full max-w-full lg:h-[1000px] lg:bg-[#ffffff] lg:flex lg:justify-center lg:items-center">
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
  )
}

export default Page
