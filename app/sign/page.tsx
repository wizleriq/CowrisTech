import React from 'react'

const Page = () => {
  return (
    <section className="w-full max-w-full mx-auto
      lg:h-[915px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex bg-red-300 lg:h-[820px]'>
        <div className="lg:w-full max-w-full lg:h-[820px] lg:bg-[#b4e5f3] lg:px-12 ">
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-full max-w-full lg:h-[755px] lg:bg-[#3394af] lg:p-16 flex-col lg:flex lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 lg:bg-amber-600 flex flex-col justify-between item-center  lg:flex lg:-mt-13'>
            <div className='lg:w-[276px] lg-[36px] lg:bg-green-400 flex lg:justify-center '>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%]'>Create an account </h2>
           </div>
           <div className='lg:w-[147px] lg:h-[19.69px] lg:bg-red-200 flex lg:justify-center item-center mx-auto '>
            <h2 className='lg:text-[16.77px] lg:font-medium lg:leading-[100%]'>Enter Your Details</h2>
           </div>
          </div>
          {/* Create Account Ends*/}
  {/* <div className='lg:w-[340px] lg:h-14 lg:bg-green-600 flex flex-row justify-between items-center lg:flex lg:mt-2.5'>  
            <input
          type="text"
          name="last_name"
          placeholder="Student"
          className='lg:w-[158px] lg:h-[38px] lg:bg-[#FFFFFF] lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
          required
        />

            <input
          type="text"
          name="last_name"
          placeholder="Consultant"
          className='lg:w-[158px] lg:h-[38px] lg:bg-[#FFFFFF] lg:outline-none lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
          required
        />
  
          </div> */}
          <div className="w-[340px] h-14 bg-green-600 flex justify-between items-center mt-2.5">

  {/* Student */}
  <label className="relative w-[158px] h-[38px]">
    <input type="radio" name="role" className="hidden peer" />

    <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-green-600">
      Student

      {/* Circle */}
      <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-12 peer-checked:border-green-600">
        <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
      </span>
    </div>
  </label>

  {/* Consultant */}
  <label className="relative w-[158px] h-[38px]">
    <input type="radio" name="role" className="hidden peer" />

    <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-green-600">
      Consultant

        {/* Circle */}
      <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-7 peer-checked:border-green-600">
        <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
      </span>
    </div>
  </label>

</div>

        
        </div>
        <div>

        </div>
      </div>

      {/* Right box */}
      <div className="lg:w-full max-w-full lg:h-[755px] lg:bg-[#3c7dbd] lg:flex lg:justify-center lg:items-center">
      
      </div>
      </div>
      

    </section>
  )
}

export default Page








// import React from 'react'

// const page = () => {
//   return (
//         // <section className="w-full lg:h-[585px] max-w-[1440px] lg:bg-green-500 lg:flex lg:flex-row lg:justify-center lg:items-center">
//            <section className="lg:w-full lg:h-[585px] max-w-[2000px] lg:bg-green-500 lg:flex lg:flex-row lg:justify-center lg:items-center">

//            <div className='lg:w-[690px] lg:h-[585px] lg:bg-[#FFFFFF] lg:p-16'>

//             </div>
//           <div className='lg:w-[710px] lg:h-[585px] lg:bg-[#F8FAFC] lg:flex lg:justify-center lg:items-center '>
//             </div>
//     </section>
    
//   )
// }

// export default page

// width: 959;
// height: 1024;
// angle: 0 deg;
// opacity: 0.48;
