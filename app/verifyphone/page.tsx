import React from 'react'
import Cyber from '@/app/src/img/Cyber.png'
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
          <div className='lg:w-[420px] lg:h-14 bg-transparent flex-col justify-center items-start self-start lg:flex lg:-mt-13'>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%] lg:text-left'>Verify Phone Number</h2>
            <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] text-left mt-2'>Enter the 6-digit code we sent to +23481 680 3456</h2>
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
              <h2>Didn’t receive the code?</h2> 
              <h2 className='text-[#0079C6]'>tap to resend</h2>

            </div>        
            </div>
              <Link href="/create">
     <button
      type="submit"
      className=" text-white bg-[#565656] lg:w-[400px] lg:h-[40px] border border-[#0079C6] lg:rounded-md lg:text-[20.12px] font-medium"
    >
        <h2 className='text-[#ffffff] text-[18px]'>Submit Code</h2>
    </button>
    </Link>
           </div>        
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:flex lg:justify-center lg:items-center">
         <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#F6FDFF] lg:rounded-md">
       <Image
      src={Cyber}
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
