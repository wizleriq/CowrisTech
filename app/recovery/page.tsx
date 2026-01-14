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
        <section className="lg:w-full max-w-full mx-auto lg:h-[900px] lg:bg-green-500 lg:flex lg:flex-col
     lg:justify-center lg:items-center w-[393px] h-[720px] flex flex-col bg-white lg:px-0 px-4 items-center sm:px-2">
      {/* Left box */}
      <div className='w-full max-w-full flex bg-red-300 lg:h-[900px]'>
          <div className="w-full max-w-full lg:h-[900px] lg:bg-[#ffffff] lg:px-0 lg:flex lg:items-center 
         lg:justify-center h-[500px] bg-[#ffffff] px-0 items-center sm:px-2">
        {/* <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center "> */}
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] shadow-[0_12px_25px_rgba(0,0,0,0.2)] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-[520px] max-w-full lg:h-[500px] lg:bg-[#ffffff] lg:shadow-lg lg:p-16 flex-col lg:flex justify-center lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[420px] lg:h-14 lg:bg-transparent lg:mx-0 mx-auto flex-col justify-center lg:items-start items-center self-start flex lg:-mt-13
          w-full h-[68px] '>
              <h2 className='lg:text-[28.66px]  lg:leading-[100%] lg:text-left font-extrabold text-[20px] leading-[100%]'>Recover Account</h2>
            <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] lg:left mt-2 font-medium text-[13px] text-center leading-[100%]'>Enter your email to get started</h2>
          </div>

          

           {/* Form Starts */}
           <div className='lg:flex lg:flex-col lg:justify-between lg:w-[400px] lg:h-[229px] lg:mt-5 mt-4'>
            <div className='lg:w-[400px] lg:h-[145px] flex-col lg:flex justify-between'>               
                <p className='lg:mb-0 mb-2'>Verification Code</p>
            <div className='flex flex-row justify-between lg:w-[400px] lg:h-[50px] w-full h-[50px]'>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>
</div>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>

</div>
<div className='lg:w-[63px] lg:h-[50px] border shadow-md border-[#C0C3CD] rounded-sm
w-[45px] h-[50px]'>

</div>
            </div>
             <div className='flex lg:flex-col lg:justify-between  lg:w-[400px] lg:h-[50px]  w-[268px] h-[48px]
     mx-auto mt-4 text-center'>
              <h2>Didn’t receive the code? Check your spam folder or <span className='text-[#0079C6]'>tap to resend</span></h2> 
            </div>        
            </div>
              <Link href="/create">
    <button
      type="submit"
      className=" text-white bg-[#565656] lg:w-[400px] lg:h-[40px]  lg:mt-0 mt-6 border lg:border-[#0079C6] 
      lg:rounded-md lg:text-[20.12px] font-medium w-full h-[38px] rounded-md text-[20.12px]"
    >
        <h2 className='text-[#ffffff] text-[18px]'>Submit Code</h2>
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
      <div className="hidden lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:flex lg:justify-center lg:items-center">
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
