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
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] shadow-[0_12px_25px_rgba(0,0,0,0.2)] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-[520px] max-w-full lg:h-[500px] lg:bg-[#ffffff] shadow-lg lg:p-16 flex-col lg:flex justify-center lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 bg-transparent flex-col justify-center items-start self-start lg:flex lg:-mt-13'>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] lg:text-left'>Recover Account</h2>
            <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] text-left mt-2'>Enter your email to get started.</h2>
          </div>

          

           {/* Form Starts */}
           <div className='lg:flex lg:flex-col lg:justify-between lg:w-[400px] lg:h-[229px] lg:mt-5'>
            <div className='lg:w-[400px] lg:h-[145px] flex-col lg:flex justify-between'>
               

                <p>Verification Code</p>
            <div className='lg:flex lg:flex-row lg:justify-between lg:w-[400px] lg:h-[50px]'>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border lg:shadow-md border-[#C0C3CD] rounded-sm'>

</div>


            </div>
             <div className='lg:flex lg:flex-col lg:justify-between  lg:w-[400px] lg:h-[50px]'>
              <h2>Didn’t receive the code? Check your spam folder or</h2> 
              <h2 className='text-[#0079C6]'>tap to resend</h2>

            </div>        
            </div>
              <Link href="/create">
     <button
      type="submit"
      className=" text-white lg:w-[400px] lg:h-[40px] border border-[#0079C6] lg:rounded-md lg:text-[20.12px] font-medium"
    >
        <h2 className='text-[#0079C6] text-[18px]'>Submit Code</h2>
    </button>
    </Link>
           </div>
           {/* <form className="lg:mt-5 lg:space-y-4 text-label">

  <div className="flex flex-col lg:w-[384.26px]">
    <label className="mb-2">Email address</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="flex flex-col justify-between lg:mt-6  lg:w-[384px]  lg:h-[90px]">
    <button
      type="submit"
      className="bg-[#0079C6] text-white lg:w-[384px] lg:h-[40px] lg:rounded-md lg:text-[20.12px] font-medium"
    >
    <h2 className='text-[18px]'>Continue</h2>
     
    </button>
    <Link href="/login">
     <button
      type="submit"
      className=" text-white lg:w-[384px] lg:h-[40px] border border-[#0079C6] lg:rounded-md lg:text-[20.12px] font-medium"
    >
        <h2 className='text-[#0079C6] text-[18px]'>Sign In Instead</h2>
    </button>
    </Link>
  </div>
</form> */}

        
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
