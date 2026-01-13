import React from 'react'
import Message from '@/app/src/img/Message.png'
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
     lg:justify-center lg:items-center w-[393px] h-[720px] flex flex-col justify-center bg-white lg:px-0 px-4 items-center sm:px-2">

       <div className="lg:hidden w-[167PX] max-w-full h-[121px]  flex justify-center 
       items-center mx-auto">
         <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#F6FDFF] lg:rounded-md">
       <Image
      src={Message}
      alt="Profile Image"
      className="object-contain lg:w-full lg:h-[539px] lg:justify-between lg:items-center"   /* or object-contain */
    />
      </div>
      </div>

      {/* Left box */}
      <div className='w-full max-w-full flex lg:h-[900px]'>
         <div className="w-full max-w-full lg:h-[900px] lg:bg-[#ffffff] lg:px-0 lg:flex lg:items-center 
         lg:justify-center h-[500px] bg-[#ffffff] px-0 items-center sm:px-2">
         <div className="lg:w-[520px] max-w-full lg:h-[500px] lg:bg-[#ffffff] lg:shadow-lg lg:p-16 flex-col lg:flex justify-center lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[420px] lg:h-14 lg:bg-transparent lg:mx-0 mx-auto flex-col justify-center lg:items-start items-center self-start flex lg:-mt-13
          w-full h-[68px] '>
              <h2 className='lg:text-[28.66px]  lg:leading-[100%] lg:text-left font-extrabold text-[20px] leading-[100%]'>Verify Email Address</h2>
            <h2 className='lg:text-[14px] lg:font-medium lg:leading-[100%] lg:left mt-2 font-medium text-[13px] text-center leading-[100%]'>Enter the 6-digit code we sent to mypersonalemail@gmail.com.</h2>
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
             <div className='lg:flex hidden lg:flex-col lg:justify-between  lg:w-[400px] lg:h-[50px]'>
              <h2>Didn’t receive the code? Check your spam folder or</h2> 
              <h2 className='text-[#0079C6]'>tap to resend</h2>

            </div>        
            </div>
              <Link href="/verifyphone">
     <button
      type="submit"
      className=" text-white bg-[#565656] lg:w-[400px] lg:h-[40px]  lg:mt-0 mt-6 border border-[#0079C6] 
      lg:rounded-md lg:text-[20.12px] font-medium w-full h-[38px] rounded-md text-[20.12px]"
    >
        <h2 className='text-[#ffffff] text-[18px]'>Submit Code</h2>
    </button>
    </Link>

     <div className='lg:hidden flex flex-col justify-between lg:mt-0 lg:text-left lg:w-[400px] lg:h-[50px] w-[268px] h-[48px]
     mx-auto mt-4 text-center'>
              <h2>Didn’t receive the code? Check your spam folder or <span className='text-[#0079C6]'>tap to resend</span></h2> 
              

            </div> 
           </div>
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="hidden lg:w-full max-w-full lg:h-[900px] lg:bg-[#F6FDFF] lg:flex lg:justify-center lg:items-center">
         <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#F6FDFF] lg:rounded-md">
       <Image
      src={Message}
      alt="Profile Image"
      className="object-contain lg:w-full lg:h-[539px] lg:justify-between lg:items-center"   /* or object-contain */
    />
      </div>
      </div>
      </div>
      

    </section>
    </>
  )
}

export default Page
