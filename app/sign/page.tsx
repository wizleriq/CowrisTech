import React from 'react'

const Page = () => {
  return (
    <section className="w-full max-w-full mx-auto
      lg:h-[915px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center">
      {/* Left box */}
      <div className='lg:w-full max-w-full lg:flex bg-red-300 lg:h-[820px]'>
        <div className="lg:w-full max-w-full lg:h-[820px] lg:bg-[#F6FDFF] lg:px-12 ">
             {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
        <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
         <div className="lg:w-full max-w-full lg:h-[755px] lg:bg-[#ffffff] lg:p-16 flex-col lg:flex lg:items-center">
          {/* Create Account Starts */}
          <div className='lg:w-[276px] lg:h-14 bg-transparent flex flex-col justify-between item-center  lg:flex lg:-mt-13'>
            <div className='lg:w-[276px] lg-[36px] bg-transparent flex lg:justify-center '>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%]'>Create an account </h2>
           </div>
           <div className='lg:w-[147px] lg:h-[19.69px] bg-transparent flex lg:justify-center item-center mx-auto '>
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
          
          {/* Student and Consultant Starts */}
          <div className="w-[340px] h-14 bg-transparent flex justify-between items-center mt-2.5">

  {/* Student */}
  <label className="relative w-[158px] h-[38px]">
    <input type="radio" name="role" className="hidden peer" />

    <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-[#0079C6]">
      Student

      {/* Circle */}
      <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-12 peer-checked:border-[#0079C6]">
        <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
      </span>
    </div>
  </label>

  {/* Consultant */}
  <label className="relative w-[158px] h-[38px]">
    <input type="radio" name="role" className="hidden peer" />

    <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-[#0079C6]">
      Consultant

        {/* Circle */}
      <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-7 peer-checked:border-[#0079C6]">
        <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
      </span>
    </div>
  </label>

</div>
 
          {/* Student and Consultant Ends */}

           {/* Form Starts */}
           <form className="lg:mt-5 lg:space-y-4 text-label">

  {/* Business Name */}
  <div className="flex flex-col">
    <label className="mb-2">Business Name</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      required
    />
  </div>

  {/* First Name & Last Name */}
  <div className="flex flex-row lg:justify-between lg:space-x-4">
    <div className="flex flex-col w-[255px]">
      <label className="mb-2">First Name</label>
      <input
        type="text"
        name="first_name"
        className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
    <div className="flex flex-col w-[255px]">
      <label className="mb-2">Last Name</label>
      <input
        type="text"
        name="last_name"
        className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
  </div>

  {/* Business Name 2 */}
  <div className="flex flex-col">
    <label className="mb-2">Business Name</label>
    <input
      type="text"
      name="business_name_2"
      className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      required
    />
  </div>

  {/* Email & Phone */}
  <div className="flex flex-row lg:justify-between lg:space-x-4">
    <div className="flex flex-col w-[255px]">
      <label className="mb-2">Email Address</label>
      <input
        type="email"
        name="email"
        className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
    <div className="flex flex-col w-[255px]">
      <label className="mb-2">Phone Number</label>
      <input
        type="text"
        name="phone"
        className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
  </div>

  {/* Business Name 3 */}
{/* Second-to-last Business Name → Password */}
<div className="flex flex-col">
  <label className="mb-1">Password</label>
  <input
    type="password"
    name="password"
    className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
    placeholder="Enter your password"
    required
  />
  <p className="text-xs text-gray-500 mt-1">
    Must contain at least 8 characters, a special character, and a number
  </p>
</div>


  {/* Business Name 4 */}
  <div className="flex flex-col">
    <label className="mb-2">Business Name</label>
    <input
      type="text"
      name="business_name_4"
      className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      required
    />
     <p className="text-xs text-gray-500 mt-1">
    I agree to the Terms & Condition and Privacy Policy
  </p>
  </div>

  {/* Submit button */}
  <div className="flex justify-center lg:mt-6">
    <button
      type="submit"
      className="bg-[#FF8600] text-white lg:w-[389px] lg:h-[40px] lg:rounded-md lg:text font-medium"
    >
      Sign Up
    </button>
  </div>

</form>

{/* <form className="space-y-3 lg:outline-none lg:mt-5">
  <label>Business Name</label>
         <input
          type="email"
          name="email"
       
          className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
          required
        />
   <div className='lg:flex lg:h-10 lg:w-[531.93px] lg:mt-2.5 lg:flex-row lg:justify-between lg:mx-auto lg:items-center lg:bg-transparent'>
  
  <div className='flex flex-col lg:bg-transparent'>
     <label>First Name</label>
  <input
          type="text"
          name="last_name"
          className='lg:w-[255.22px] lg:h-[38px] lg:bg-transparent lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border lg:border-[#AAB2CC]'
          required
        />
    </div>
   
        <div className='flex flex-col'>
     <label>Last Name</label>
  <input
          type="text"
          name="last_name"
          className='lg:w-[255.22px] lg:h-[38px]  lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#AAB2CC]'
          required
        />
    </div>
        
        </div>
  <div className="flex flex-col lg:mt-5">
        <label className=''>Business Name</label>
        <input
  type="password"
  name="password"
  className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
  required/>
  </div>

         <div className='lg:flex lg:h-10 lg:w-[531.93px] lg:mt-2.5 lg:mb-2.5 lg:flex-row lg:justify-between lg:mx-auto lg:items-center lg:bg-transparent'>
  
  <div className='flex flex-col lg:bg-transparent'>
     <label>Email Address</label>
  <input
          type="text"
          name="last_name"
          className='lg:w-[255.22px] lg:h-[38px] lg:bg-transparent lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border lg:border-[#AAB2CC]'
          required
        />
    </div>
   
        <div className='flex flex-col'>
     <label>Phone Number</label>
  <input
          type="text"
          name="last_name"
          className='lg:w-[255.22px] lg:h-[38px]  lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#AAB2CC]'
          required
        />
    </div>
        
        </div>
<div className="flex flex-col lg:mt-6">
        <label className=''>Business Name</label>
        <input
  type="password"
  name="password"
  className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
  required/>
  </div>

  <div className="flex flex-col lg:mt-2.5">
        <label className=''>Business Name</label>
        <input
  type="password"
  name="password"
  className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
  required/>
  </div>
        <div className='lg:w-[389px] lg:-[40px] lg:flex lg:mx-auto lg:flex-row lg:justify-between lg:items-center'>
           <button type="submit" className="bg-[#FF8600] text-white px-4 py-2 lg:w-[389px] lg:h-[40px] lg:font-normal lg:text-[14px]
            lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4] pl-3">
          Create account
        </button>

        </div>
      
      </form> */}
 {/*Form Ends */}
        
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
