import { Section } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className='lg:hidden lg:w-full lg:px-0 sm:fit h-10 flex justify-between items-center p-4 sm:px-12'>
        <div
        className="
          w-full lg:h-[29px] lg:bg-transparent flex justify-between items-center lg:text-[#0079C6] 
          text-[#0079C6] 
        "
      ><Link href='/'>
        <h2 className="font-inria font-semibold Leading-[100%] text-[22px]">
          CowrisJapa
        </h2>
        </Link>
      </div>

      {/* <div className='w-[71px] h-[25px] p-2 bg-[#0079C6] rounded-sm flex justify-center items-center text-center'> 
       <h1 className='justify-center items-center text-center text-white'>Login</h1>
      </div> */}

    </section>
  )
}

export default page