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
          <div className='lg:w-[276px] lg:h-14 bg-transparent flex flex-col justify-between item-center  lg:flex lg:-mt-13'>
            <div className='lg:w-[276px] lg-[36px] bg-transparent flex lg:justify-center '>
              <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%]'>Create an account </h2>
           </div>
           <div className='lg:w-[147px] lg:h-[19.69px] bg-transparent lg:mt-2 flex lg:justify-center item-center mx-auto '>
            <h2 className='lg:text-[16.77px] lg:font-medium lg:leading-[100%]'>Enter Your Details</h2>
           </div>
          </div>
          
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
  <div className="flex flex-col lg:w-[384.26px]">
    <label className="mb-2">Business Name</label>
    <input
      type="text"
      name="business_name"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
      required
    />
  </div>

  {/* First Name & Last Name */}

  {/* Business Name 2 */}
  <div className="flex flex-row lg:justify-between lg:space-x-4">
    <div className="flex flex-col lg:w-[161px]">
      <label className="mb-2">First Name</label>
      <input
        type="text"
        name="first_name"
        className="lg:w-[161px] lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
    <div className="flex flex-col lg:w-[161px]">
      <label className="mb-2">Last Name</label>
      <input
        type="text"
        name="last_name"
        className="lg:w-[161px] lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
  </div>

  {/* Email & Phone */}
  <div className="flex flex-row lg:justify-between lg:space-x-4">
    <div className="flex flex-col lg:w-[161px]">
      <label className="mb-2">Email Address</label>
      <input
        type="email"
        name="email"
        className="lg:w-[161px] lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
    <div className="flex flex-col lg:w-[161px]">
      <label className="mb-2">Phone Number</label>
      <input
        type="text"
        name="phone"
        className="lg:w-[161px] lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
        required
      />
    </div>
  </div>
  {/* Business Name 3 */}
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
    Must contain at least 8 characters, a special character, and a number
  </p>
</div>

  <div className="flex flex-col lg:w-[384.26px]">
    <label className="mb-2">Password</label>
    <input
      type="text"
      name="business_name_4"
      className="lg:w-[384.26px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
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

















// import React from 'react'
// import Goggle from '@/app/src/img/Google.png'
// import Apple from '@/app/src/img/Apple.png'
// import Study from '@/app/src/img/Study.png'
// import Image from 'next/image'

// const Page = () => {
//   return (
//     <section className="w-full max-w-full mx-auto
//       lg:h-[1000px] lg:bg-green-500 lg:flex lg:flex-col lg:justify-center lg:items-center">
//       {/* Left box */}
//       <div className='lg:w-full max-w-full lg:flex bg-red-300 lg:h-[1000px]'>
//         <div className="lg:w-full max-w-full lg:h-[1000px] lg:bg-[#F6FDFF] lg:px-12 lg:flex lg:items-center lg:justify-center ">
//              {/* <div className='lg:w-[194px] lg:h-[51px] lg:bg-amber-600 lg:mx-auto lg:mb-4 lg:flex lg:items-center lg:justify-center'>
//         <h2 className='lg:text-[40px] lg:font-medium  lg:text-[#a2abb1] lg:flex lg:items-center lg:justify-center'>AbroadEx</h2></div> */}
//          <div className="lg:w-full max-w-full lg:h-[890px] lg:bg-[#ffffff] lg:p-16 flex-col lg:flex lg:items-center">
//           {/* Create Account Starts */}
//           <div className='lg:w-[276px] lg:h-14 bg-transparent flex flex-col justify-between item-center  lg:flex lg:-mt-13'>
//             <div className='lg:w-[276px] lg-[36px] bg-transparent flex lg:justify-center '>
//               <h2 className='lg:text-[28.66px] lg:font-medium lg:leading-[100%]'>Create an account </h2>
//            </div>
//            <div className='lg:w-[147px] lg:h-[19.69px] bg-transparent lg:mt-2 flex lg:justify-center item-center mx-auto '>
//             <h2 className='lg:text-[16.77px] lg:font-medium lg:leading-[100%]'>Enter Your Details</h2>
//            </div>
//           </div>
//           {/* Create Account Ends*/}
//   {/* <div className='lg:w-[340px] lg:h-14 lg:bg-green-600 flex flex-row justify-between items-center lg:flex lg:mt-2.5'>  
//             <input
//           type="text"
//           name="last_name"
//           placeholder="Student"
//           className='lg:w-[158px] lg:h-[38px] lg:bg-[#FFFFFF] lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
//           required
//         />

//             <input
//           type="text"
//           name="last_name"
//           placeholder="Consultant"
//           className='lg:w-[158px] lg:h-[38px] lg:bg-[#FFFFFF] lg:outline-none lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
//           required
//         />
  
//           </div> */}
          
//           {/* Student and Consultant Starts */}
//           <div className="w-[340px] h-14 bg-transparent flex justify-between items-center mt-2.5">

//   {/* Student */}
//   <label className="relative w-[158px] h-[38px]">
//     <input type="radio" name="role" className="hidden peer" />

//     <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-[#0079C6]">
//       Student

//       {/* Circle */}
//       <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-12 peer-checked:border-[#0079C6]">
//         <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
//       </span>
//     </div>
//   </label>

//   {/* Consultant */}
//   <label className="relative w-[158px] h-[38px]">
//     <input type="radio" name="role" className="hidden peer" />

//     <div className="w-full h-full bg-white border border-[#DDE2E4] rounded-md flex items-center px-4 cursor-pointer peer-checked:border-[#0079C6]">
//       Consultant

//         {/* Circle */}
//       <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-7 peer-checked:border-[#0079C6]">
//         <span className="w-2 h-2 rounded-full bg-green-600 hidden peer-checked:block"></span>
//       </span>
//     </div>
//   </label>

// </div>
 
//           {/* Student and Consultant Ends */}

//            {/* Form Starts */}
//            <form className="lg:mt-5 lg:space-y-4 text-label">

//   {/* Business Name */}
//   <div className="flex flex-col">
//     <label className="mb-2">Business Name</label>
//     <input
//       type="text"
//       name="business_name"
//       className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//       required
//     />
//   </div>

//   {/* First Name & Last Name */}
//   <div className="flex flex-row lg:justify-between lg:space-x-4">
//     <div className="flex flex-col w-[255px]">
//       <label className="mb-2">First Name</label>
//       <input
//         type="text"
//         name="first_name"
//         className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//         required
//       />
//     </div>
//     <div className="flex flex-col w-[255px]">
//       <label className="mb-2">Last Name</label>
//       <input
//         type="text"
//         name="last_name"
//         className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//         required
//       />
//     </div>
//   </div>

//   {/* Business Name 2 */}
//   <div className="flex flex-col">
//     <label className="mb-2">Business Name</label>
//     <input
//       type="text"
//       name="business_name_2"
//       className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//       required
//     />
//   </div>

//   {/* Email & Phone */}
//   <div className="flex flex-row lg:justify-between lg:space-x-4">
//     <div className="flex flex-col w-[255px]">
//       <label className="mb-2">Email Address</label>
//       <input
//         type="email"
//         name="email"
//         className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//         required
//       />
//     </div>
//     <div className="flex flex-col w-[255px]">
//       <label className="mb-2">Phone Number</label>
//       <input
//         type="text"
//         name="phone"
//         className="w-full lg:h-[38px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//         required
//       />
//     </div>
//   </div>

//   {/* Business Name 3 */}
// {/* Second-to-last Business Name → Password */}
// <div className="flex flex-col">
//   <label className="mb-1">Password</label>
//   <input
//     type="password"
//     name="password"
//     className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//     placeholder="Enter your password"
//     required
//   />
//   <p className="text-xs text-gray-500 mt-1 lg:text-[11.74px] lg:font-medium">
//     Must contain at least 8 characters, a special character, and a number
//   </p>
// </div>


//   {/* Business Name 4 */}
//   <div className="flex flex-col">
//     <label className="mb-2">Business Name</label>
//     <input
//       type="text"
//       name="business_name_4"
//       className="lg:w-[531.93px] lg:h-[40px] lg:px-3 lg:text-sm lg:rounded-md lg:border lg:border-[#AAB2CC] lg:outline-none"
//       required
//     />
//      <p className="text-xs text-gray-500 mt-1 lg:text-[11.74px] lg:font-medium">
    
//     <label className="flex items-center gap-2">
//   <input type="checkbox" className="form-checkbox h-4 w-4">
// </input>
//   <span >I agree to the <span className='text-[#0079C6]'>Terms & Condition</span> and <span className='text-[#0079C6]'>Privacy Policy</span></span>
// </label>
//   </p>
//   </div>

//   {/* Submit button */}
//   <div className="flex justify-center lg:mt-6">
//     <button
//       type="submit"
//       className="bg-[#0079C6] text-white lg:w-[389px] lg:h-[40px] lg:rounded-md lg:text-[20.12px] font-medium"
//     >
//       Sign Up
//     </button>
//   </div>
  

//   <div className='lg:w-[531.93px]  lg:bg-transparent lg:h-3.5 lg:flex lg:flex-row lg:justify-between lg:text-center lg:items-center'>
//     <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

//     </div>

//     <div className='lg:w-[120.4px] lg:h-[13.3px] lg:bg-transparentlg:flex lg:text-center lg:items-center lg:justify-center'>
//       <h2 className="text-gray-500 lg:text-[12.6px] lg:font-medium lg:text-center lg:items-center lg:justify-center">Or sign up with</h2>
//     </div>
   
//      <div className='lg:w-[170px]  lg:h-px lg:bg-[#C0C3CD]'>

//     </div>


//   </div>

//   <div className="lg:w-[531.93px] lg:h-10 lg:px-3 lg:text-sm lg:flex lg:justify-between lg:items-center lg:bg-transparent">
//      <div className="lg:w-[137.1px] lg:h-[31px] lg:px-8 lg:text-sm lg:rounded-md lg:bg-transaparent lg:border
//      lg:flex lg:justify-between lg:items-center lg:border-[#AAB2CC] lg:outline-none">
//          <div className="relative lg:w-[13px] lg:flex lg:justify-between lg:items-center lg:bg-transparent lg:h-[9.4px]">
//          <Image
//       src={Goggle}
//       alt="Profile Image"
//       fill
//       className="object-fill lg:w-[13px] lg:h-[9.4px] lg:justify-between lg:items-center"   /* or object-contain */
//     />
//     </div>
//      <h2> Google</h2>
//     </div>
//     <div className="lg:w-[137.1px] lg:h-[31px] lg:px-8 lg:text-sm lg:rounded-md lg:bg-transaparent lg:border
//      lg:flex lg:justify-between lg:items-center lg:border-[#AAB2CC] lg:outline-none">
//          <div className="relative lg:w-[13px] lg:flex lg:justify-between lg:items-center lg:bg-transparent lg:h-[9.4px]">
//          <Image
//       src={Apple}
//       alt="Profile Image"
//       fill
//       className="object-fill lg:w-[13px] lg:h-[9.4px] lg:justify-between lg:items-center"   /* or object-contain */
//     />
//     </div>
//      <h2>Apple</h2>
//     </div>
//   </div>

//   <div className='lg-mx-auto lg:bg-transparent lg:w-[531.93px] lg:flex lg:items-center lg:justify-center lg:h-6'>
//     <h2 className=''>Already have an account? <span className='text-[#0079C6]'>Sign In</span></h2>
//   </div>

// </form>

// {/* <form className="space-y-3 lg:outline-none lg:mt-5">
//   <label>Business Name</label>
//          <input
//           type="email"
//           name="email"
       
//           className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
//           required
//         />
//    <div className='lg:flex lg:h-10 lg:w-[531.93px] lg:mt-2.5 lg:flex-row lg:justify-between lg:mx-auto lg:items-center lg:bg-transparent'>
  
//   <div className='flex flex-col lg:bg-transparent'>
//      <label>First Name</label>
//   <input
//           type="text"
//           name="last_name"
//           className='lg:w-[255.22px] lg:h-[38px] lg:bg-transparent lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border lg:border-[#AAB2CC]'
//           required
//         />
//     </div>
   
//         <div className='flex flex-col'>
//      <label>Last Name</label>
//   <input
//           type="text"
//           name="last_name"
//           className='lg:w-[255.22px] lg:h-[38px]  lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#AAB2CC]'
//           required
//         />
//     </div>
        
//         </div>
//   <div className="flex flex-col lg:mt-5">
//         <label className=''>Business Name</label>
//         <input
//   type="password"
//   name="password"
//   className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
//   required/>
//   </div>

//          <div className='lg:flex lg:h-10 lg:w-[531.93px] lg:mt-2.5 lg:mb-2.5 lg:flex-row lg:justify-between lg:mx-auto lg:items-center lg:bg-transparent'>
  
//   <div className='flex flex-col lg:bg-transparent'>
//      <label>Email Address</label>
//   <input
//           type="text"
//           name="last_name"
//           className='lg:w-[255.22px] lg:h-[38px] lg:bg-transparent lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border lg:border-[#AAB2CC]'
//           required
//         />
//     </div>
   
//         <div className='flex flex-col'>
//      <label>Phone Number</label>
//   <input
//           type="text"
//           name="last_name"
//           className='lg:w-[255.22px] lg:h-[38px]  lg:outline-none  lg:justify-center lg:items-center lg:text-left lg:px-5 lg:rounded-md lg:border-[1px] lg:border-[#AAB2CC]'
//           required
//         />
//     </div>
        
//         </div>
// <div className="flex flex-col lg:mt-6">
//         <label className=''>Business Name</label>
//         <input
//   type="password"
//   name="password"
//   className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
//   required/>
//   </div>

//   <div className="flex flex-col lg:mt-2.5">
//         <label className=''>Business Name</label>
//         <input
//   type="password"
//   name="password"
//   className="lg:w-[531.93px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border lg:border-[#AAB2CC] pl-3"
//   required/>
//   </div>
//         <div className='lg:w-[389px] lg:-[40px] lg:flex lg:mx-auto lg:flex-row lg:justify-between lg:items-center'>
//            <button type="submit" className="bg-[#FF8600] text-white px-4 py-2 lg:w-[389px] lg:h-[40px] lg:font-normal lg:text-[14px]
//             lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4] pl-3">
//           Create account
//         </button>

//         </div>
      
//       </form> */}
//  {/*Form Ends */}
        
//         </div>
//         <div>

//         </div>
//       </div>

//       {/* Right box */}
//       <div className="lg:w-full max-w-full lg:h-[1000px] lg:bg-[#ffffff] lg:flex lg:justify-center lg:items-center">
//       <div className="lg:w-[442px] lg:h-[539px] max-w-full lg:bg-[#ffffff] lg:rounded-md">
//        <Image
//       src={Study}
//       alt="Profile Image"
//       className="object-filllg lg:w-[442px] lg:h-[539px] lg:justify-between lg:items-center"   /* or object-contain */
//     />

//       </div>
//       </div>
//       </div>
      

//     </section>
//   )
// }

// export default Page
