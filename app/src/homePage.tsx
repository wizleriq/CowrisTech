

import React from 'react'
import Image from 'next/image'
import Travel from '@/app/src/img/Travel.jpg'
import Youngman from '@/app/src/img/Youngman.png'
import Girl from '@/app/src/img/Girl.png'
import Nigeria from "@/app/src/img/Nigeria.png"
import Canada from "@/app/src/img/Canada.png"
import Secure from "@/app/src/img/Secure.png"
import Guy from "@/app/src/img/Guy.png"
import Lady from "@/app/src/img/Lady.png"
import Four from "@/app/src/img/Four.png"
import cards from '@/app/src/data/CardData'
import Good from '@/app/src/img/Good.png'
import works from "@/app/src/data/WorkData"
import C from "@/app/src/img/C.png"
import Vector from "@/app/src/img/Vector.png"
import selects from '@/app/src/data/SelectData'

const HomePage = () => {
  return (
    <section className="relative w-full h-[3568px] lg:mx-auto lg:h-[3200px] flex flex-col items-center lg:px-0 xl:px-3 px-3 sm:px-2 lg:bg-transparent bg-[#F4FBFF]
   xl:w-[1260px] 2xl:w-[1500px] lg:w-[970px] md:bg-red-500 sm:bg-green-400">

      {/* Hero Section */}
      <main
        className="relative w-full h-[178px]  lg:w-[970px]  lg:h-[470px] xl:w-[1230px] xl:h-[470px] 2xl:w-[1520px] 2xl:h-[470px] flex lg:justify-between lg:items-center"
        style={{
          backgroundImage: `url(${Travel.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:block hidden absolute inset-0 bg-white/90"></div>
        <div className="lg:hidden block absolute inset-0 bg-[#F4FBFF]/90"></div>

        {/* Left Panel */}
        <main className="relative z-10 w-[250px] h-[70.59px] lg:w-[592px] lg:h-[322px] flex flex-col px-4 pt-1.5 lg:px-2 lg:pt-0">
          <div className='w-[205px] h-[70px] lg:w-[550px] lg:h-[110px]'>
            <h2 className='text-[15.27px] leading-5 font-semibold text-[#0079C6] lg:text-[35px] lg:leading-11 '>
              Your All-In One Platform for Study, Work and Settlement In Canada
            </h2>
          </div>
          <div className='w-[205px] mt-1 h-10 lg:w-[430px] lg:mt-10 2xl:w-[550px]'>
            <h2 className='text-[12px] leading-[17px] font-normal lg:text-[17.27px] 2xl:text-[21px] lg:leading-[23px] lg:font-normal text-[#0079C6]'>
              Applying for study, work or permanent residency? We help you handle the most important steps -- all in one secure ecosystem.
            </h2>
          </div>
          <div className='flex items-center mt-1 lg:mt-14'>
            <div className='w-[74px] h-[23.6px] flex justify-center items-center bg-[#0079C6] rounded-[3px] lg:w-36 lg:h-9 lg:bg-[#0079C6] lg:border lg:border-[#0079C6]'>
              <button className='text-white font-normal text-[11.02px] 2xl:text-[21px] leading-4 lg:text-[18.16px] lg:leading-[100%]'>
                Get Started
              </button>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <div className="absolute z-10 lg:block hidden -top-[30px] lg:top-[-30px] -right-3 lg:right-10 w-[170px] sm:w-[200px] md:w-[280px] lg:w-[520px] lg:h-[500px]">
          <div className="relative w-full h-[260.82px] lg:h-full">
            <Image src={Youngman} alt="Profile Image" fill className="object-cover" />
          </div>
        </div>

        <div className="absolute z-10 lg:hidden block -top-[89px] -right-3 w-[200px] sm:w-[250px] md:w-[320px] lg:w-[430px] lg:h-[900px]">
          <div className="w-full h-[260.82px] aspect-[3/7]">
            <Image src={Girl} alt="Profile Image" fill className="object-contain" />
          </div>
        </div>
      </main>

      {/* Cards Section */}
      <main className='flex flex-col justify-between items-center mt-4 w-[340px] h-[892px]  lg:h-[220px] xl:h-[240px] lg:flex-row lg:justify-between lg:items-center lg:mt-11
      lg:w-[970px]  xl:w-[1208px] 2xl:w-[1500px]'>
        {cards.map((card) => (
          <div key={card.id} className="2xl:w-[340px] 2xl:h-[235px] w-[340px] h-[199px] p-5 border border-[#9BD9F280] rounded-[5px] flex flex-col justify-between bg-white lg:w-[236px] lg:h-[209px] lg:shadow-lg lg:border lg:rounded-[5px] lg:flex-col lg:justify-between lg:p-5">
            <div className='w-[60.27px] h-[60.27px] lg:w-[48.3px] lg:h-[48.3px]'>
              <img src={card.image} alt={card.heading} />
            </div>
            <div className='mt-3.5 2xl:w-[300px] w-[270px] h-4 lg:w-[200px] lg:h-8 lg:-mt-4 2xl:mb-3 2xl:mt-[0.5px]'>
              <h2 className='text-[#0079C6] text-[13px] lg:text-[13px] 2xl:leading-5 2xl:text-[21px] font-semibold lg:leading-[15px]'>{card.heading}</h2>
            </div>
            <div className='mt-2 w-[278px] h-[53.83px] lg:w-[200px] 2xl:w-60 lg:h-[41px] lg:-mt-3'>
              <h2 className='text-[11px] leading-[15px] lg:text-[10.5px] 2xl:text-[15px] lg:leading-3.5 2xl:leading-3.5 font-normal text-black'>{card.text}</h2>
            </div>
            <div className='flex justify-between items-center mt-1 w-[63px] 2xl:w-[90px] h-[19px] lg:w-20 lg:h-[15px]'>
              <div className='w-[60px] h-[19px] lg:w-[55px] 2xl:w-[120px] lg:h-[15px]'>
                <h3 className='text-[#0079C6] text-[11px] font-light 2xl:text-[15px]'>{card.subtext}</h3>
              </div>
              <div className='w-[11.2px] h-[11.2px] lg:w-[30px] lg:h-[9px] flex justify-center items-center 2xl:mt-[9px]'>
                <img src={card.symbol} alt={card.heading} />
              </div>
            </div>
          </div>
        ))}
      </main>

           <main className='lg:h-[890px] lg:flex lg:flex-col lg:justify-between lg:mt-8 mt-8 lg:bg-transparent bg-transparent lg:p-0 w-[340px] h-[1600px] flex flex-col lg:w-[960px] xl:w-[1208px]  xl:h-[800px] 2xl:w-[1500px] 2xl:h-[800px]  '>
        <div className='lg:w-[970px] lg:h-[430px] lg:flex lg:justify-between lg:flex-row lg:p-6 lg:items-center rounded-[3px] w-full h-[415px] p-5 flex flex-col justify-between
        lg:bg-[#0079C6] bg-[#0079C6] xl:w-[1208px]  xl:h-[550px] 2xl:w-[1500px] 2xl:h-[650px] '>
          <div className='lg:w-[520px] lg:h-80 lg:bg-transparent lg:flex lg:flex-col lg:justify-between bg-transparent h-[470px]'>
            <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[140px] h-8 bg-transparent'>
              <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-white font-medium
              text-[18px] leading-[31.69px] items-center text-white 2xl:text-[21px]' >Why Choose Us?</h2>
            </div>
            <div className="lg:w-[520px] lg:bg-transparent">
              {selects.map((select) => (
                <div
                  key={select.id}
                  className="lg:w-[520px] lg:h-16 lg:bg-transparent lg:text-white lg:flex lg:items-start lg:gap-3 lg:py-0 lg:px-2
                  lg:mt-0 mt-3 w-full h-full bg-transparent text-white flex items-start gap-2 py-0 px-2 2xl:mb-1.5"
                >
                  <img
                    src={select.image}
                    className="lg:w-3.5 lg:h-3.5 lg:mt-1 w-3 h-3 mt-1.5 2xl:mt-1.5 filter invert brightness-0"
                    alt="aeroplane"
                  />
                  <div className="lg:flex lg:flex-col lg:leading-tight flex flex-col ">
                    <h2 className="lg:font-semibold lg:text-[16px] font-medium text-[15px] 2xl:text-[21px]">{select.heading}</h2>
                    <h3 className="lg:text-[14px] lg:font-normal text-[13px] font-normal lg;leading-[100%] 
                    xl:leading-[15px] 2xl:leading-5 2xl:text-[17px]">{select.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:w-[385px] lg:p-6 hidden lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex lg:flex-col lg:items-center
              lg:bg-[#FFFFFF]'>
            <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]'>
              <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
                <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex
                 lg:items-center lg:justify-between'>
                  <h2 className=' 2xl:text-[17px]'>You Send</h2>
                  <h2 className=' 2xl:text-[17px]'>Amount</h2>
                </div>
                <div>
                  <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
             lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
                  <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:transparent lg:absolute xl:top-[900.5px] 
                 lg:top-[905px] lg:right-15 xl:right-22 2xl:right-16 2xl:top-[902px] '>
                    
                    <Image
                      src={Nigeria}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className=""
                    />
                    <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>NGN</h2>

                  </div>

                </div>
              </div>

              <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
                <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                  <h2 className=' 2xl:text-[17px]'>Recipient Gets</h2>
                  <h2 className=' 2xl:text-[17px]'>Amount</h2>
                </div>
                <div>
                  <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
             lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
                  {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
                    <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute  
                  xl:right-22 2xl:right-16 xl:top-[1006.5px] 2xl:top-[1006.5px] lg:top-[1012px] lg:right-15'>
                    <Image
                      src={Canada}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className=""
                    />
                    <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>CAD</h2>
                  </div>
                </div>
              </div>
              <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end justify-end lg:mt-1px'>
                <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%] 2xl:text-[17px]'>1 CAD=1,250.00NGN</h2>
              </div>

            </div>
            <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4  lg:mr-1 xl:mr-2 lg:flex lg:justify-center lg:items-center
               lg:rounded-[3px] lg:self-end 2xl:self-end 2xl:mr-3 lg:bg-[#0079C6]'>
              <h2 className='lg:font-medium lg:text-[21px] lg:leading-[100%]  2xl:text-[21px] lg:text-white '>Get Started</h2>
            </div>
          </div>
        </div>
        { /* small screen starts */ } 
        <div className='lg:w-[385px] lg:hidden flex lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex-col lg:items-center
            bg-[#FFFFFF] lg:mt-0 lg:pb-0 pb-4  mt-8 w-[340px] h-[290.5px] rounded-sm border shadow-md border-[#9BD9F280] flex-col items-center'>
            <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]
          w-[278px] h-[187.9px] flex flex-col justify-between mt-10 text-[#000000] bg-white'>
              <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent
              w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
                <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex
                 lg:items-center lg:justify-between lg:py-0 py-2 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
                 items-center justify-between'>
                  <h2 className=''>You Send</h2>
                  <h2>Amount</h2>
                </div>
                <div>
                  <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
             lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
             border-[#0079C6] border-[1.33px] relative focus:outline-none' />
                  <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[869.5px] lg:right-40
                  w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent absolute top-[1620.5px] right-17'>
                    <Image
                      src={Nigeria}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className=""
                    />
                    <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>NGN</h2>

                  </div>

                </div>
              </div>

              <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent
               w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
                <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center 
                lg:justify-between  lg:py-0 py-2.5 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
                 items-center justify-between'>
                  <h2>Recipient Gets</h2>
                  <h2>Amount</h2>
                </div>
                <div>
                  <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
             lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
             border-[#0079C6] border-[1.33px] relative focus:outline-none' />
                  {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
                    <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[988.5px] lg:right-40
                     w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent offset absolute top-[1726px] right-17'>
                    <Image
                      src={Canada}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className=""
                    />
                    <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>CAD</h2>
                  </div>
                </div>
              </div>
              <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end lg:justify-end
              w-[133px] h-[15.35px] -mt-8 mr-1 flex items-center
               rounded-[3px] self-end bg-transparent'>
                <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%]
                font-normal text-[13.55px] leading-[100%] text-[#000000]'>1 CAD=1,250.00NGN</h2>
              </div>

            </div>
            <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4 lg:mr-8.5 lg:flex lg:justify-center lg:items-center
               lg:rounded-[3px] lg:self-end lg:bg-[#0079C6] lg:p-0 p-3 w-[100px] h-8 mt-4 mr-8.5 flex justify-center items-center
               rounded-[3px] self-end bg-[#0079C6]  '>
              <h2 className='lg:font-medium lg:text-[22.74px] lg:leading-[100%] text-white
              font-medium text-[14px] leading-[100%]'>Get Started</h2>
            </div>
          </div>
          { /* small screen ends */ } 

        <div className='lg:w-[970px]  lg:bg-tranparent lg:h-[430px] xl:h-[490px] lg:mt-0 xl:mt-10  lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-10
        w-full h-[840px] mt-8  bg-transparent flex flex-col justify-between items-center xl:w-[1208px]  2xl:w-[1500px]'>
<div className="lg:w-[310px] lg:h-[297px] bg-transparent flex flex-col gap-4 ">
  {/* Top row */}
  <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
    <Image
      src={Lady}
      width={152}
      height={145}
      alt="Profile Image"
      className="object-contain"
    />
    <Image
      src={Four}
      width={152}
      height={145}
      alt="Profile Image"
      className="object-contain"
    />
  </div>

  {/* Bottom row */}
  <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
    <Image
      src={Secure}
      width={152}
      height={145}
      alt="Profile Image"
      className="object-contain"
    />
    <Image
      src={Guy}
      width={152}
      height={145}
      alt="Profile Image"
    />
  </div>
</div>

{/* How does it work starts */}
 <div className='lg:w-[600px] lg:h-[390px] 2xl:h-[400px] lg:bg-transparent lg:flex  lg:mt-15 lg:p-3 lg:flex-col lg:justify-between mt-8 w-full h-[700px] bg-transparent
 
 '>
            <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[154px] h-[31px] bg-transparent text-[#0079C6]'>
              <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-[#0079C6]
              font-semibold text-[21px] leading-[31.69px] items-center text-[#0079C6] 2xl:text-[21px] '>How It Works</h2>
            </div>

            <div className='lg:w-[600px] lg:h-16 lg:bg-transparent lg:-mt-3 mt-2'>
              <h2 className='lg:font-semibold lg:text-[14px] lg:leading-[20.69px] lg:items-center lg:text-[#0079C6]
              font-normal text-[14px] leading-[20.69px] items-center text-[#0079C6] 2xl:text-[17px]'>
                Paying your tuition or GIC from Nigeria to Canada doesn’t have to be complicated.Our platform was built to make international 
                education payments fast, secure, and fully transparent — with a process so simple that anyone can 
                complete it in minutes
              </h2>
            </div>

 <div className="lg:w-[640px] lg:h-[250px] lg:text-[#0079C6] lg:bg-transparent lg:mb-0 lg:mt-0 2xl:mt-2 mt-4 w-full h-full bg-transparent ">
  <div className='lg:w-[465px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between flex w-full lg:mb-0 mb-2 gap-3 bg-transparent justify-between '>
     <Image
                      src={Vector}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 mt-1"
                    />
                    <h2 className='lg:font-normal lg:text-[14px] text-[14px] text-[#0079C6]  2xl:leading-[18px] 2xl:text-[17px]'><span className='lg:font-semibold lg:text-[15px]
                    font-semibold text-[14px] 2xl:leading-[18px] 2xl:text-[17px]'>Register & Complete KYC</span>— Create an account and verify your identity.</h2>
  </div>
 
 <div className='lg:w-[288px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
 flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
     <Image
                      src={Vector}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:mt-0 lg:items-center lg:text-[#0079C6]
                      w-5 h-5 mt-2"
                    />
                    <h2 className='lg:font-normal lg:text-[14px]  2xl:leading-[18px] 2xl:text-[17px]'><span className='lg:font-semibold lg:text-[15px]
                    font-semibold text-[14px]2xl:leading-[18px] 2xl:text-[17px]'>
                      Choose Payment Type</span>— Tuition or GIC.</h2>
  </div> 
  <div className='lg:w-[630px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
  flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
     <Image
                      src={Vector}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center lg:-mt-5 w-5 h-5 -mt-10"
                    />
                    <h2 className='lg:font-normal lg:text-[14px]  2xl:leading-[18px] 2xl:text-[17px]'><span className='lg:font-semibold lg:text-[15px>'>
                      Enter Payment Details </span>— Select institution/bank, input amount in CAD, and view NGN equivalent.
                      </h2>
                      
  </div>
  <div className='lg:w-[492px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
  flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
     <Image
                      src={Vector}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
                    />
                    <h2 className='lg:font-normal lg:text-[14px]  2xl:leading-[18px] 2xl:text-[17px]'><span className='lg:font-semibold lg:text-[15px>'>
                      Lock Your Rate & Pay Locally</span>— Accept the rate and transfer funds in Naira.</h2>            
  </div>
  <div className='lg:w-[507px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
  flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
     <Image
                      src={Vector}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
                    />
                    <h2 className='lg:font-normal lg:text-[14px]  2xl:leading-[18px] 2xl:text-[17px]'><span className='lg:font-semibold lg:text-[15px>'>
                       Track Your Payment </span>— Get notified once the school or bank confirms receipt.</h2>            
  </div>
 
          </div>
</div>
{/* How does it ends */}
</div>
</main>

{/* Contact Section Starts */ }
<main className='lg:w-[1047px] lg:h-[339px] lg:bg-[#0079C63D] lg:flex lg:flex-col lg:items-center lg:justify-between
lg:mb-0 lg:p-8 rounded-[5px] bg-[#0079C63D] lg:mt-2 xl:mt-20 w-screen h-[840px] mt-4 flex flex-col justify-between items-center 2xl:text-[17px] xl:w-[1265px] xl:h-[380px] 2xl:w-[1580px] 2xl:h-[400px] '>
    <div className='lg:w-[970px]  xl:w-[1260px] 2xl:w-[1500px] lg:h-[180px]  lg:bg-transparent lg:flex lg:justify-between lg-p-0 xl:p-6  h-full bg-transparent'>
<div className='lg:w-[228px] lg:h-[88px] lg:bg-transparent lg:mb-0 mb-8 bg-transparent w-[280px] h-[90px] flex flex-col justify-between'>
 <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
  <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px] 2xl:text-[17px]'>
    About Us
    </h2>
    </div>
     <div className='lg:w-[228px] lg:h-[63px] lg:bg-transparent lg:mt-2'>
      <h2 className='lg:font-normal lg:text-[13px] lg:leading-5 font-normal text-[14px] 2xl:text-[16px] leading-5'>We simplify cross-border tuition and GIC payments for international students and parents in Nigeria.</h2>
    </div> 
 </div>

 <div className='lg:w-[134px] lg:h-[174px] 2xl:text-[17px] lg:bg-transparent mb-8 bg-transparent w-[280px] h-[150px] flex flex-col justify-between'>
 <div className='lg:w-[100px] lg:h-5 lg:bg-transparent'>
  <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px] 2xl:text-[17px]'>
    Quick Links
    </h2>
    </div>
    <div className='lg:font-normal lg:text-[13px] 2xl:w-[238px] lg:mt-1.5 lf:flex lg:flex-col'>
     <ul className="list-disc lg:ml-5 lg:space-y-1 font-normal lg:px-0 px-5 text-[14px] 2xl:text-[16px] leading-5">
    <li>Home</li>
    <li>How It Works</li>
    <li>Why Choose Us</li>
    <li>FAQs</li>
    <li>Blog / Resources</li>
    <li>Contact Us</li>
  </ul>
    </div>
</div>

 <div className='lg:w-[210px] lg:h-[174px] 2xl:w-[238px]  lg:bg-transparent mb-8 bg-transparentw-[280px] h-[120px] '>
 <div className='lg:w-[120px] 2xl:w-[160px]  2xl:mb-7 lg:h-5 lg:bg-transparent'>
  <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px] 2xl:text-[17px]'>
    Support & Contact
    </h2>
    <h2 className='lg:font-normal lg:text-[13px] lg:mb-4 2xl:text-[16px]'>
    Need Help?
    </h2>
    </div>
    <div className='lg:font-normal lg:text-[13px] lg:mt-5 lg:flex lg:flex-col 2xl:text-[16px]'>
    <h2>📧 operations@cowristech.com</h2>
    <h2>📞 +234 000 000 0000</h2>
    <h2>⏰ Mon–Fri, 9am–6pm (WAT)</h2>
    </div>
</div>

 <div className='lg:w-[170px] lg:h-[125px]  lg:bg-transparent mb-8 bg-transparent w-[280px] h-[110px] flex flex-col justify-between'>
 <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
  <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px] 2xl:text-[17px]'>
    Legal
    </h2>
    </div>
    <div className='lg:font-normal lg:text-[13px] 2xl:w-[238px] lg:mt-1.5 lg:flex lg:flex-col font-normal text-[14px] leading-5'>
     <ul className="list-disc lg:px-0 px-5 lg:ml-5 lg:space-y-1 2xl:text-[16px]">
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
    <li>Compliance & Security</li>
    <li>Refund Policy</li>
  </ul>
    </div>
</div>
<div className='lg:w-[228px] lg:h-[136px] lg:bg-transparent mb-8 bg-transparent h-[120px] '>
 <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
  <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px] 2xl:text-[17px]'>
    Social
    </h2>
    </div>
    <div className='lg:font-normal lg:text-[13px] 2xl:text-[16px] lg:mt-1.5 lg:flex lg:flex-col'>
    <h2>Stay Connected, Follow us for updates Facebook </h2>
    <h2>Instagram</h2>
    <h2>LinkedIn</h2>
    <h2>X (Twitter)</h2>
    </div>
</div>
{/* Small Screen */ }
<div className='w-full lg:h-10  lg:bg-transparent lg:mb-[60px] lg:hidden block'>
 <div className="lg:h-px h-px bg-[#0079C63D]  w-full lg xl:w-[1300px] 2xl:w-[1500px]"></div>
 <div className='lg:w-[151px] w-[156px] lg:p-0 px-0 py-4 bg-transparent flex justify-between items-center'>
 <Image
                      src={C}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
                    />
  <h2 className='lg:flex lg:items-center'>2025  CowrisWaka</h2>
 </div>
 
  </div>
  {/* Small Screen Ends */ }
  </div> 
  <div className='w-full lg:h-10 lg:w-[970px] xl:w-[1230px] 2xl:w-[1500px] lg:bg-transparent lg:mb-[60px] hidden lg:flex lg:flex-col lg:justify-between lg:p-0'>
 <div className="lg:h-px bg-[#0079C63D] w-full"></div>
 <div className='lg:w-[151px] 2xl:w-[160px] h-9 bg-transparent flex justify-between items-center'>
 <Image
                      src={C}
                      width={27.9}
                      height={27.9}
                      alt="Profile Image"
                      className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
                    />
  <h2 className='lg:flex lg:items-center 2xl-text-[17px]'>2025  CowrisWaka</h2>
 </div>
 
  </div>
 
</main>
{/* Contact Section Ends */ }
</section>
  )
}

export default HomePage










// Second Code (lg, xl, 2xl only)
// import React from 'react'
// import Image from 'next/image'
// import Travel from '@/app/src/img/Travel.jpg'
// import Youngman from '@/app/src/img/Youngman.png'
// import Girl from '@/app/src/img/Girl.png'
// import Nigeria from "@/app/src/img/Nigeria.png"
// import Canada from "@/app/src/img/Canada.png"
// import Secure from "@/app/src/img/Secure.png"
// import Guy from "@/app/src/img/Guy.png"
// import Lady from "@/app/src/img/Lady.png"
// import Four from "@/app/src/img/Four.png"
// import cards from '@/app/src/data/CardData'
// import Good from '@/app/src/img/Good.png'
// import works from "@/app/src/data/WorkData"
// import C from "@/app/src/img/C.png"
// import Vector from "@/app/src/img/Vector.png"
// import selects from '@/app/src/data/SelectData'

// const HomePage = () => {
//   return (
//     <section className="relative w-full h-[3568px] lg:mx-auto lg:h-[3200px] flex flex-col items-center px-3 sm:px-2 lg:bg-transparent bg-[#F4FBFF]
//    xl:w-[1260px] 2xl:w-[1500px] md:w-full ">

//       {/* Hero Section */}
//       <main
//         className="relative w-full h-[178px] lg:w-[1090px] lg:h-[470px] xl:w-[1230px] xl:h-[470px] 2xl:w-[1500px] 2xl:h-[470px] flex lg:justify-between lg:items-center"
//         style={{
//           backgroundImage: `url(${Travel.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="lg:block hidden absolute inset-0 bg-white/90"></div>
//         <div className="lg:hidden block absolute inset-0 bg-[#F4FBFF]/90"></div>

//         {/* Left Panel */}
//         <main className="relative z-10 w-[250px] h-[70.59px] lg:w-[592px] lg:h-[322px] flex flex-col px-4 pt-1.5 lg:px-2 lg:pt-0">
//           <div className='w-[205px] h-[70px] lg:w-[550px] lg:h-[110px]'>
//             <h2 className='text-[15.27px] leading-5 font-semibold text-[#0079C6] lg:text-[35px] lg:leading-11 '>
//               Your All-In One Platform for Study, Work and Settlement In Canada
//             </h2>
//           </div>
//           <div className='w-[205px] mt-1 h-10 lg:w-[430px] lg:mt-10 2xl:w-[550px]'>
//             <h2 className='text-[12px] leading-[17px] font-normal lg:text-[17.27px] 2xl:text-[21px] lg:leading-[23px] lg:font-normal text-[#0079C6]'>
//               Applying for study, work or permanent residency? We help you handle the most important steps -- all in one secure ecosystem.
//             </h2>
//           </div>
//           <div className='flex items-center mt-1 lg:mt-14'>
//             <div className='w-[74px] h-[23.6px] flex justify-center items-center bg-[#0079C6] rounded-[3px] lg:w-36 lg:h-9 lg:bg-[#0079C6] lg:border lg:border-[#0079C6]'>
//               <button className='text-white font-normal text-[11.02px] 2xl:text-[21px] leading-4 lg:text-[18.16px] lg:leading-[100%]'>
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </main>

//         {/* Right Panel */}
//         <div className="absolute z-10 lg:block hidden -top-[30px] lg:top-[-30px] -right-3 lg:right-10 w-[170px] sm:w-[200px] md:w-[280px] lg:w-[520px] lg:h-[500px]">
//           <div className="relative w-full h-[260.82px] lg:h-full">
//             <Image src={Youngman} alt="Profile Image" fill className="object-cover" />
//           </div>
//         </div>

//         <div className="absolute z-10 lg:hidden block -top-[89px] -right-3 w-[200px] sm:w-[250px] md:w-[320px] lg:w-[430px] lg:h-[900px]">
//           <div className="w-full h-[260.82px] aspect-[3/7]">
//             <Image src={Girl} alt="Profile Image" fill className="object-contain" />
//           </div>
//         </div>
//       </main>

//       {/* Cards Section */}
//       <main className='flex flex-col justify-between items-center mt-4 w-[340px] h-[892px] lg:w-[1090px] lg:h-[209px] lg:flex-row lg:justify-between lg:items-center lg:mt-11
//       xl:w-[1208px]  2xl:w-[1500px]'>
//         {cards.map((card) => (
//           <div key={card.id} className="2xl:w-[340px] w-[340px] h-[199px] p-5 border border-[#9BD9F280] rounded-[5px] flex flex-col justify-between bg-white lg:w-[236px] lg:h-[209px] lg:shadow-lg lg:border lg:rounded-[5px] lg:flex-col lg:justify-between lg:p-5">
//             <div className='w-[60.27px] h-[60.27px] lg:w-[48.3px] lg:h-[48.3px]'>
//               <img src={card.image} alt={card.heading} />
//             </div>
//             <div className='mt-3.5 2xl:w-[300px] w-[270px] h-4 lg:w-[200px] lg:h-8 lg:-mt-4'>
//               <h2 className='text-[#0079C6] text-[13px] lg:text-[13px] 2xl:text-[21px] font-semibold lg:leading-[15px]'>{card.heading}</h2>
//             </div>
//             <div className='mt-2 w-[278px] h-[53.83px] lg:w-[200px] lg:h-[41px] lg:-mt-3'>
//               <h2 className='text-[11px] leading-[15px] lg:text-[10.5px] lg:leading-3.5 font-normal text-black'>{card.text}</h2>
//             </div>
//             <div className='flex justify-between items-center mt-1 w-[63px] h-[19px] lg:w-20 lg:h-[15px]'>
//               <div className='w-[60px] h-[19px] lg:w-[55px] lg:h-[15px]'>
//                 <h3 className='text-[#0079C6] text-[11px] font-light'>{card.subtext}</h3>
//               </div>
//               <div className='w-[11.2px] h-[11.2px] lg:w-[30px] lg:h-[9px] flex justify-center items-center'>
//                 <img src={card.symbol} alt={card.heading} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//            <main className='lg:w-[1090px] lg:h-[980px] lg:flex lg:flex-col 
//       lg:justify-between lg:mt-8 mt-8 lg:bg-transparent bg-transparent lg:p-0 w-[340px] h-[1600px] flex flex-col  xl:w-[1208px]  xl:h-[800px] 2xl:w-[1500px] 2xl:h-[800px]  '>
//         <div className='lg:w-[1090px] lg:h-[430px] lg:flex lg:justify-between lg:flex-row lg:p-6 lg:items-center rounded-[3px] w-full h-[415px] p-5 flex flex-col justify-between
//         lg:bg-[#0079C6] bg-[#0079C6] xl:w-[1208px]  xl:h-[550px] 2xl:w-[1500px] 2xl:h-[650px] '>
//           <div className='lg:w-[559px] lg:h-80 lg:bg-transparent  lg:flex lg:flex-col lg:justify-between bg-transparent h-[470px]'>
//             <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[140px] h-8 bg-transparent'>
//               <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-white font-medium
//               text-[18px] leading-[31.69px] items-center text-white'>Why Choose Us?</h2>
//             </div>
//             <div className="lg:w-[559px] lg:bg-transparent">
//               {selects.map((select) => (
//                 <div
//                   key={select.id}
//                   className="lg:w-[559px] lg:h-16 lg:bg-transparent lg:text-white lg:flex lg:items-start lg:gap-3 lg:py-0 lg:px-2
//                   lg:mt-0 mt-3 w-full h-full bg-transparent text-white flex items-start gap-2 py-0 px-2"
//                 >
//                   <img
//                     src={select.image}
//                     className="lg:w-3.5 lg:h-3.5 lg:mt-1 w-3 h-3 mt-1.5 filter invert brightness-0"
//                     alt="aeroplane"
//                   />
//                   <div className="lg:flex lg:flex-col lg:leading-tight flex flex-col">
//                     <h2 className="lg:font-semibold lg:text-[16px] font-medium text-[15px]">{select.heading}</h2>
//                     <h3 className="lg:text-[14px] lg:font-normal text-[13px] font-normal lg;leading-[100%] 
//                     xl:leading-[15px] 2xl:leading-5">{select.text}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='lg:w-[385px] lg:p-6 hidden lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex lg:flex-col lg:items-center
//               lg:bg-[#FFFFFF]'>
//             <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]'>
//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
//                   <h2>You Send</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
//                   <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:transparent lg:absolute lg:top-[869px] 
//                   lg:right-40 xl:right-22 2xl:right-16'>
                    
//                     <Image
//                       src={Nigeria}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>NGN</h2>

//                   </div>

//                 </div>
//               </div>

//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
//                   <h2>Recipient Gets</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
//                   {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
//                     <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[988.5px] 
//                     lg:right-40 xl:right-22 2xl:right-16 xl:top-[976.5px] 2xl:top-[976.5px]  '>
//                     <Image
//                       src={Canada}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>CAD</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end justify-end'>
//                 <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%]'>1 CAD=1,250.00NGN</h2>
//               </div>

//             </div>
//             <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4 lg:mr-8.5 lg:flex lg:justify-center lg:items-center
//                lg:rounded-[3px] lg:self-end lg:bg-[#0079C6]'>
//               <h2 className='lg:font-medium lg:text-[22.74px] lg:leading-[100%]  lg:text-white '>Get Started</h2>
//             </div>
//           </div>
//         </div>
//         { /* small screen starts */ } 
//         <div className='lg:w-[385px] lg:hidden flex lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex-col lg:items-center
//             bg-[#FFFFFF] lg:mt-0 lg:pb-0 pb-4  mt-8 w-[340px] h-[290.5px] rounded-sm border shadow-md border-[#9BD9F280] flex-col items-center'>
//             <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]
//           w-[278px] h-[187.9px] flex flex-col justify-between mt-10 text-[#000000] bg-white'>
//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent
//               w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex
//                  lg:items-center lg:justify-between lg:py-0 py-2 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
//                  items-center justify-between'>
//                   <h2 className=''>You Send</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
//              border-[#0079C6] border-[1.33px] relative focus:outline-none' />
//                   <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[869.5px] lg:right-40
//                   w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent absolute top-[1620.5px] right-17'>
//                     <Image
//                       src={Nigeria}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>NGN</h2>

//                   </div>

//                 </div>
//               </div>

//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent
//                w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center 
//                 lg:justify-between  lg:py-0 py-2.5 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
//                  items-center justify-between'>
//                   <h2>Recipient Gets</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
//              border-[#0079C6] border-[1.33px] relative focus:outline-none' />
//                   {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
//                     <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[988.5px] lg:right-40
//                      w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent offset absolute top-[1726px] right-17'>
//                     <Image
//                       src={Canada}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>CAD</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end lg:justify-end
//               w-[133px] h-[15.35px] -mt-8 mr-1 flex items-center
//                rounded-[3px] self-end bg-transparent'>
//                 <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%]
//                 font-normal text-[13.55px] leading-[100%] text-[#000000]'>1 CAD=1,250.00NGN</h2>
//               </div>

//             </div>
//             <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4 lg:mr-8.5 lg:flex lg:justify-center lg:items-center
//                lg:rounded-[3px] lg:self-end lg:bg-[#0079C6] lg:p-0 p-3 w-[100px] h-8 mt-4 mr-8.5 flex justify-center items-center
//                rounded-[3px] self-end bg-[#0079C6]  '>
//               <h2 className='lg:font-medium lg:text-[22.74px] lg:leading-[100%] text-white
//               font-medium text-[14px] leading-[100%]'>Get Started</h2>
//             </div>
//           </div>
//           { /* small screen ends */ } 

//         <div className='lg:w-[1090px] lg:h-[490px] lg:mt-10  lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-10
//         w-full h-[840px] mt-8  bg-transparent flex flex-col justify-between items-center xl:w-[1208px]  2xl:w-[1500px]'>
// <div className="lg:w-[310px] lg:h-[297px] bg-transparent flex flex-col gap-4 ">
//   {/* Top row */}
//   <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
//     <Image
//       src={Lady}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//     <Image
//       src={Four}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//   </div>

//   {/* Bottom row */}
//   <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
//     <Image
//       src={Secure}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//     <Image
//       src={Guy}
//       width={152}
//       height={145}
//       alt="Profile Image"
//     />
//   </div>
// </div>

// {/* How does it work starts */}
//  <div className='lg:w-[700px] lg:h-[390px] lg:bg-transparent lg:flex  lg:mt-15 lg:p-3 lg:flex-col lg:justify-between mt-8 w-full h-[700px] bg-transparent
 
//  '>
//             <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[154px] h-[31px] bg-transparent text-[#0079C6]'>
//               <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-[#0079C6]
//               font-semibold text-[22px] leading-[31.69px] items-center text-[#0079C6]'>How It Works</h2>
//             </div>

//             <div className='lg:w-[680px] lg:h-16 lg:bg-transparent lg:-mt-3 mt-2'>
//               <h2 className='lg:font-semibold lg:text-[14px] lg:leading-[20.69px] lg:items-center lg:text-[#0079C6]
//               font-normal text-[14px] leading-[20.69px] items-center text-[#0079C6]'>
//                 Paying your tuition or GIC from Nigeria to Canada doesn’t have to be complicated.Our platform was built to make international 
//                 education payments fast, secure, and fully transparent — with a process so simple that anyone can 
//                 complete it in minutes
//               </h2>
//             </div>

//  <div className="lg:w-[640px] lg:h-[250px] lg:text-[#0079C6] lg:bg-transparent lg:mb-0 lg:mt-0 mt-4 w-full h-full bg-transparent ">
//   <div className='lg:w-[465px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between flex w-full lg:mb-0 mb-2 gap-3 bg-transparent justify-between '>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 mt-1"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px] text-[14px] text-[#0079C6]'><span className='lg:font-semibold lg:text-[15px]
//                     font-semibold text-[14px]'>Register & Complete KYC</span>— Create an account and verify your identity.</h2>
//   </div>
 
//  <div className='lg:w-[288px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//  flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:mt-0 lg:items-center lg:text-[#0079C6]
//                       w-5 h-5 mt-2"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px]
//                     font-semibold text-[14px]'>
//                       Choose Payment Type</span>— Tuition or GIC.</h2>
//   </div> 
//   <div className='lg:w-[630px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center lg:-mt-5 w-5 h-5 -mt-10"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                       Enter Payment Details </span>— Select institution/bank, input amount in CAD, and view NGN equivalent.
//                       </h2>
                      
//   </div>
//   <div className='lg:w-[492px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                       Lock Your Rate & Pay Locally</span>— Accept the rate and transfer funds in Naira.</h2>            
//   </div>
//   <div className='lg:w-[507px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                        Track Your Payment </span>— Get notified once the school or bank confirms receipt.</h2>            
//   </div>
 
//           </div>
// </div>
// {/* How does it ends */}
// </div>
// </main>

// {/* Contact Section Starts */ }
// <main className='lg:w-full lg:h-[339px] lg:bg-[#0079C63D] lg:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-between
// lg:mb-0 lg:p-8 rounded-[5px] bg-[#0079C63D]  lg:mt-20 w-screen h-[840px] mt-4 flex flex-col justify-between items-center xl:w-[1265px] xl:h-[380px] 2xl:w-[1580px] 2xl:h-[400px] '>
//     <div className='lg:w-[1120px]  xl:w-[1260px] 2xl:w-[1500px] lg:h-[180px]  lg:bg-transparent lg:flex lg:justify-between lg:p-6  h-full bg-transparent'>
// <div className='lg:w-[228px] lg:h-[88px] lg:bg-transparent lg:mb-0 mb-8 bg-transparent w-[280px] h-[90px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     About Us
//     </h2>
//     </div>
//      <div className='lg:w-[228px] lg:h-[63px] lg:bg-transparent lg:mt-2'>
//       <h2 className='lg:font-normal lg:text-[13px] lg:leading-5 font-normal text-[14px] leading-5'>We simplify cross-border tuition and GIC payments for international students and parents in Nigeria.</h2>
//     </div> 
//  </div>

//  <div className='lg:w-[134px] lg:h-[174px]  lg:bg-transparent mb-8 bg-transparent w-[280px] h-[150px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5 lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Quick Links
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lf:flex lg:flex-col'>
//      <ul className="list-disc lg:ml-5 lg:space-y-1 font-normal lg:px-0 px-5 text-[14px] leading-5">
//     <li>Home</li>
//     <li>How It Works</li>
//     <li>Why Choose Us</li>
//     <li>FAQs</li>
//     <li>Blog / Resources</li>
//     <li>Contact Us</li>
//   </ul>
//     </div>
// </div>

//  <div className='lg:w-[210px] lg:h-[174px]  lg:bg-transparent-400 mb-8 bg-transparentw-[280px] h-[120px] '>
//  <div className='lg:w-[120px] lg:h-5 lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Support & Contact
//     </h2>
//     <h2 className='lg:font-normal lg:text-[13px] lg:mb-4'>
//     Need Help?
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-5 lg:flex lg:flex-col'>
//     <h2>📧 operations@cowristech.com</h2>
//     <h2>📞 +234 000 000 0000</h2>
//     <h2>⏰ Mon–Fri, 9am–6pm (WAT)</h2>
//     </div>
// </div>

//  <div className='lg:w-[170px] lg:h-[125px]  lg:bg-transparent mb-8 bg-transparent w-[280px] h-[110px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Legal
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lg:flex lg:flex-col font-normal text-[14px] leading-5'>
//      <ul className="list-disc lg:px-0 px-5 lg:ml-5 lg:space-y-1">
//     <li>Terms & Conditions</li>
//     <li>Privacy Policy</li>
//     <li>Compliance & Security</li>
//     <li>Refund Policy</li>
//   </ul>
//     </div>
// </div>
// <div className='lg:w-[228px] lg:h-[136px] lg:bg-transparent mb-8 bg-transparent h-[120px] '>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Social
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lg:flex lg:flex-col'>
//     <h2>Stay Connected, Follow us for updates Facebook </h2>
//     <h2>Instagram</h2>
//     <h2>LinkedIn</h2>
//     <h2>X (Twitter)</h2>
//     </div>
// </div>
// {/* Small Screen */ }
// <div className='w-full lg:h-10  lg:bg-transparent lg:mb-[60px] lg:hidden block'>
//  <div className="lg:h-px h-px bg-[#0079C63D]  w-full xl:w-[1300px] 2xl:w-[1500px]"></div>
//  <div className='lg:w-[151px] w-[156px] lg:p-0 px-0 py-4 bg-transparent flex justify-between items-center'>
//  <Image
//                       src={C}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
//                     />
//   <h2 className='lg:flex lg:items-center'>2025  CowrisWaka</h2>
//  </div>
 
//   </div>
//   {/* Small Screen Ends */ }
//   </div> 
//   <div className='w-full lg:h-10 lg:w-[1230px] xl:w-[1230px] 2xl:w-[1500px] lg:bg-transparent lg:mb-[60px] hidden lg:flex lg:flex-col lg:justify-between lg:p-0'>
//  <div className="lg:h-px bg-[#0079C63D] w-full"></div>
//  <div className='lg:w-[151px] h-9 bg-transparent flex justify-between items-center'>
//  <Image
//                       src={C}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
//                     />
//   <h2 className='lg:flex lg:items-center'>2025  CowrisWaka</h2>
//  </div>
 
//   </div>
 
// </main>
// {/* Contact Section Ends */ }
// </section>
//   )
// }

// export default HomePage















// First Code 
// import React from 'react'
// import Image from 'next/image'
// import Travel from '@/app/src/img/Travel.jpg'
// import  Youngman from '@/app/src/img/Youngman.png'
// import  Girl from '@/app/src/img/Girl.png'
// import Nigeria from "@/app/src/img/Nigeria.png"
// import Canada from "@/app/src/img/Canada.png"
// import Secure from "@/app/src/img/Secure.png"
// import Guy from "@/app/src/img/Guy.png"
// import Lady from "@/app/src/img/Lady.png"
// import Four from "@/app/src/img/Four.png"
// import cards from '@/app/src/data/CardData'
// import Good from '@/app/src/img/Good.png'
// import works from "@/app/src/data/WorkData"
// import C from "@/app/src/img/C.png"
// import Vector from "@/app/src/img/Vector.png"
// import selects from '@/app/src/data/SelectData'


// const HomePage = () => {
//   return (
//   //   <section className="relative lg:bg-white lg:w-full lg:h-[3200px] lg:px-0 lg:flex  flex-col lg:items-center flex
//   //  items-center bg-white-500 px-3
//   //   w-[428px] h-[6000px]">
//       <section className="relative lg:w-full w-full lg:h-[3200px]  h-[3568px] lg:bg-white bg-[#F4FBFF] flex flex-col px-3 items-center sm:px-2 lg:px-0">
//        <main
//         className="relative lg:w-[1090px] lg:h-[470px] lg:px-0 lg:flex lg:justify-between lg:items-center w-full h-[178px] "
//         style={{
//           backgroundImage: `url(${Travel.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Overlay to fade background image */}
//         <div className=" lg:block hidden absolute inset-0 bg-white/90 "></div>
//         <div className="lg:hidden block absolute inset-0 bg-[#F4FBFF]/90"></div>

//         {/* Left panel content */}
//         <main className="relative z-10 lg:w-[592px] lg:h-[322px] lg:flex lg:flex-col lg:p-2 lg:bg-transparent  lg:pt-0 pt-1.5 px-4
//         lg:orange-400 w-[250px] h-[70.59]">
//           <div className='lg:w-[550px] lg:h-[110px] lg:bg-transparent'>
//             <h2 className='lg:font-semibold lg:text-[35px] lg:leading-11 lg:text-[#0079C6] 
//             font-semibold text-[15.27px] text-[#0079C6] leading-5'>
//               Your All-In One Platform for Study, Work and Settlement In Canada
//             </h2>
//           </div>
//           <div className='lg:w-[430px] lg:h-10 lg:bg-transparent lg:mt-10 mt-1 w-[205px] bg-transparent'>
//             <h2 className='font-inria lg:font-normal lg:text-[17.27px] lg:text-[#0079C6] lg:leading-[23px] 
//             font-normal text-[12px] leading-[17px]'>
//               Applying for study, work or permanent residency? We help you handle the most important steps -- all in one secure ecosystem.
//             </h2>
//           </div>
//           <div className='lg:w-[200px] lg:bg-transparent lg:mt-14 flex items-center mt-1 '>
//             <div className='lg:w-36 lg:h-9 lg:border lg:rounded-[3px] lg:border-[#0079C6] lg:flex lg:justify-center 
//             lg:items-center lg:bg-[#0079C6] w-[74px] h-[23.6px] bg-[#0079C6] flex justify-center items-center rounded-[3px]'>
//               <button className='font-inria lg:font-normal lg:text-[18.16px] lg:leading-[100%] lg:tracking-normal lg:text-white
//                *:font-normal text-[11.02px] leading-4 text-white '>
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </main>

//         {/* Right panel */}
//         {/* <div className="absolute z-10  lg:-top-[354px] lg:right-10  -top-[82px] -right-3  w-[200px] sm:w-[250px] md:w-[320px] lg:w-[430px]">
//   <div className=" w-full h-[260.82px] aspect-[3/7]">  */}
//   <div className="absolute z-10  lg:block hidden
//   lg:top-[-30px] 
//   lg:right-10 
//   lg:h-[500px] 
//   lg:bg-transaparent
//   -top-[110px] 
//   -right-3  
//   w-[170px] sm:w-[200px] md:w-[280px] lg:w-[520px]"
// >
//   <div className="relative w-full lg:h-full h-[260.82px]">
//     <Image
//       src={Youngman}
//       alt="Profile Image"
//       fill
//       className="object-cover "   /* or object-contain */
//     />
//   </div>
// </div>

//   <div className="absolute z-10 lg:hidden block lg:top-[60px] lg:h-[900px] lg:right-10 lg:bg-amber-600 -top-[89px] -right-3  w-[200px] sm:w-[250px] md:w-[320px] lg:w-[430px]">
//   <div className=" w-full lg:h-full h-[260.82px] aspect-[3/7]"> 
//     <Image
//       src={Girl}
//       alt="Profile Image"
//       fill
//       className="object-contain"
//     />
//   </div>
// </div>
//       </main>

//       <main className='lg:w-[1090px] lg:h-[209px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-11 mt-4 bg-transparent
//       w-[340px] h-[892px] flex flex-col  justify-between items-center'>
//         {cards.map((card) => (
          
//           // <div key={card.id} className={`lg:w-[236px] lg:h-[209px] lg:shadow-lg lg:border lg:border-[#9BD9F280] lg:bg-white 
//           // lg:rounded-[5px] lg:flex lg:flex-col lg:justify-between lg:p-5 w-[340px] h-[199px] p-5 border-[#9BD9F280] bg-white
//           // rounded-[5px] flex flex-col justify-between
//           // ${card.id === 11 ? "block lg:hidden" : ""}
//           // ${card.id === 1 ? "hidden lg:block" : ""}
//           // `}>
// //           <div
// //   key={card.id}
// //   className={`
// //     // ${card.id === 11 ? "block lg:hidden" : ""}
// //     // ${card.id === 1 ? "hidden lg:block" : ""}
// //     lg:w-[236px] lg:h-[209px] lg:shadow-lg lg:border lg:border-[#9BD9F280] lg:bg-white 
// //     lg:rounded-[5px] lg:flex lg:flex-col lg:justify-between lg:p-5
// //     w-[340px] h-[199px] p-5 border-[#9BD9F280] bg-white rounded-[5px]
// //     flex flex-col justify-between
// //   `}
// // >
// <div
//   key={card.id}
//   className="
//     lg:w-[236px] lg:h-[209px] lg:shadow-lg border lg:bg-white 
//     lg:rounded-[5px] lg:flex lg:flex-col lg:justify-between lg:p-5
//     w-[340px] h-[199px] p-5 border-[#9BD9F280] bg-white rounded-[5px]
//     flex flex-col justify-between
//   "
// >           
// <div className='lg:w-[48.3px] lg:h-[48.3px] lg:bg-transparent w-[60.27px] h-[60.27px]'>
//               <img src={card.image} alt='aeroplane' />
//             </div>
//             <div className='lg:w-[200px] lg:h-8 lg:bg-transparent lg:flex lg:items-center lg:-mt-4 mt-3.5 w-[270px] h-4'>
//               <h2 className='lg:font-semibold lg:text-[13px] text-[#0079C6] lg:leading-[15px] '>
//                 {card.heading}
//               </h2>

//             </div>
//             <div className='lg:w-[200px] lg:h-[41px] lg:bg-transparent lg:-mt-3 mt-2 w-[278.08px] h-[53.83px] '>
//               <h2 className='lg:font-normal lg:text-[10.5px] lg:text-[#000000] lg:leading-3.5 font-normal text-[11px] leading-[15px]'>
//                 {card.text}
//               </h2>
//             </div>
//             <div className='lg:w-20 lg:h-[15px] bg-transparent lg:flex lg:justify-between items-center 
//             lg:items-center lg:mt-0 mt-1 w-[63px] h-[19px] flex justify-between'>
//               <div className='lg:w-[55px] lg:h-[15px] w-[60px] h-[19px] bg-transparent'>
//                 <h3 className='font-light text-[#0079C6] text-[11px] '>{card.subtext}</h3>
//               </div>
//               <div className='lg:w-[30px] lg:h-[9px]  w-[11.2px] h-[11.2px] bg-transparent flex justify-center items-center'>
//                 <img src={card.symbol} alt='aeroplane' className='' />
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       <main className='lg:w-[1090px] lg:h-[880px] lg:bg-transparent lg:flex lg:flex-col 
//       lg:justify-between lg:mt-8 mt-8 bg-transparent lg:p-0 w-[340px] h-[1600px] flex flex-col '>
//         <div className='lg:w-[1090px] lg:h-[430px] lg:flex lg:justify-between lg:flex-row lg:p-6 lg:items-center rounded-[3px] w-full h-[415px] p-5 flex flex-col justify-between
//         lg:bg-[#0079C6] bg-[#0079C6]'>
//           <div className='lg:w-[559px] lg:h-80 lg:bg-transparent  lg:flex lg:flex-col lg:justify-between bg-transparent h-[470px]'>
//             <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[140px] h-8 bg-transparent'>
//               <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-white font-medium
//               text-[18px] leading-[31.69px] items-center text-white'>Why Choose Us?</h2>
//             </div>
//             <div className="lg:w-[559px] lg:bg-transparent">
//               {selects.map((select) => (
//                 <div
//                   key={select.id}
//                   className="lg:w-[559px] lg:h-16 lg:bg-transparent lg:text-white lg:flex lg:items-start lg:gap-3 lg:py-0 lg:px-2
//                   lg:mt-0 mt-3 w-full h-full bg-transparent text-white flex items-start gap-2 py-0 px-2"
//                 >
//                   <img
//                     src={select.image}
//                     className="lg:w-3.5 lg:h-3.5 lg:mt-1 w-3 h-3 mt-1.5 filter invert brightness-0"
//                     alt="aeroplane"
//                   />
//                   <div className="lg:flex lg:flex-col lg:leading-tight flex flex-col">
//                     <h2 className="lg:font-semibold lg:text-[16px] font-medium text-[15px]">{select.heading}</h2>
//                     <h3 className="lg:text-[14px] lg:font-normal text-[13px] font-normal">{select.text}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='lg:w-[385px] lg:block hidden lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex lg:flex-col lg:items-center
//               lg:bg-[#FFFFFF]'>
//             <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]'>
//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
//                   <h2>You Send</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
//                   <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:transparent lg:absolute lg:top-[869px] lg:right-40'>
                    
//                     <Image
//                       src={Nigeria}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>NGN</h2>

//                   </div>

//                 </div>
//               </div>

//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
//                   <h2>Recipient Gets</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative focus:outline-none' />
//                   {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
//                     <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[988.5px] lg:right-40'>
//                     <Image
//                       src={Canada}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%]'>CAD</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end justify-end'>
//                 <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%]'>1 CAD=1,250.00NGN</h2>
//               </div>

//             </div>
//             <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4 lg:mr-8.5 lg:flex lg:justify-center lg:items-center
//                lg:rounded-[3px] lg:self-end lg:bg-[#0079C6]'>
//               <h2 className='lg:font-medium lg:text-[22.74px] lg:leading-[100%]  lg:text-white '>Get Started</h2>
//             </div>
//           </div>
//         </div>
//         { /* small screen starts */ } 
//         <div className='lg:w-[385px] lg:hidden block lg:h-[334px] lg:border lg:rounded-sm lg:border-[#0079C6] lg:flex lg:flex-col lg:items-center
//             bg-[#FFFFFF] lg:mt-0 lg:pb-0 pb-4  mt-8 w-[340px] h-[290.5px] rounded-sm border shadow-md border-[#9BD9F280] flex flex-col items-center'>
//             <div className='lg:w-[315px] lg:h-[213px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:mt-10 lg:text-[#000000]
//           w-[278px] h-[187.9px] flex flex-col justify-between mt-10 text-[#000000] bg-white'>
//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:flex lg:flex-col lg:justify-between lg:bg-transparent
//               w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex
//                  lg:items-center lg:justify-between lg:py-0 py-2 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
//                  items-center justify-between'>
//                   <h2 className=''>You Send</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
//              border-[#0079C6] border-[1.33px] relative focus:outline-none' />
//                   <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[869.5px] lg:right-40
//                   w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent absolute top-[1620.5px] right-17'>
//                     <Image
//                       src={Nigeria}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>NGN</h2>

//                   </div>

//                 </div>
//               </div>

//               <div className='lg:w-[314px] lg:h-[66.5px] lg:rounded-sm lg:mt-10 lg:flex lg:flex-col lg:justify-between lg:bg-transparent
//                w-[275px] h-[53.4px] rounded-sm flex flex-col justify-between bg-transparent'>
//                 <div className='lg:w-[314px] lg:h-[13.82px] lg:font-light lg:text-[15.36px] lg:leading-[100%] lg:bg-transparent lg:flex lg:items-center 
//                 lg:justify-between  lg:py-0 py-2.5 w-[275px] h-[12.1px] font-light text-[13.55px] leading-[100%] bg-transparent flex
//                  items-center justify-between'>
//                   <h2>Recipient Gets</h2>
//                   <h2>Amount</h2>
//                 </div>
//                 <div>
//                   <input type="text" className='lg:w-[314px] lg:h-[46.7px] lg:bg-transparent lg:rounded-sm
//              lg:border-[#0079C6] lg:border-[1.33px]  lg:relative w-[275px] h-[41.2px] bg-transparent rounded-sm
//              border-[#0079C6] border-[1.33px] relative focus:outline-none' />
//                   {/* <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[983.5px] lg:right-[65px]'> */}
//                     <div className='lg:w-20 lg:h-[34px] lg:flex lg:justify-around lg:items-center lg:bg-transparent lg:absolute lg:top-[988.5px] lg:right-40
//                      w-[77.9px] h-[30.4px] flex justify-around items-center bg-transparent offset absolute top-[1726px] right-17'>
//                     <Image
//                       src={Canada}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className=""
//                     />
//                     <h2 className='lg:font-semibold lg:text-[19.46px] lg:leading-[100%] font-semibold'>CAD</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className='lg:w-[315.5px] lg:h-[17.4px] lg:bg-transparent lg:flex lg:items-end lg:justify-end
//               w-[133px] h-[15.35px] -mt-8 mr-1 flex items-center
//                rounded-[3px] self-end bg-transparent'>
//                 <h2 className='lg:font-normal lg:text-[15.36px] lg:mr-2 lg:leading-[100%]
//                 font-normal text-[13.55px] leading-[100%] text-[#000000]'>1 CAD=1,250.00NGN</h2>
//               </div>

//             </div>
//             <div className='lg:w-[170px] lg:h-[48.1px] lg:mt-4 lg:mr-8.5 lg:flex lg:justify-center lg:items-center
//                lg:rounded-[3px] lg:self-end lg:bg-[#0079C6] lg:p-0 p-3 w-[100px] h-8 mt-4 mr-8.5 flex justify-center items-center
//                rounded-[3px] self-end bg-[#0079C6]  '>
//               <h2 className='lg:font-medium lg:text-[22.74px] lg:leading-[100%] text-white
//               font-medium text-[14px] leading-[100%]'>Get Started</h2>
//             </div>
//           </div>
//           { /* small screen ends */ } 

//         <div className='lg:w-[1090px] lg:h-[400px] lg:mt-10  lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:items-center 
//         w-full h-[840px] mt-8 bg-transparent flex flex-col justify-between items-center'>
//    {/* <div className='lg:w-[310px] lg:h-[297px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between
//    w-[310px] h-[540.9px] bg-transparent flex flex-col justify-between'>
//    <div className='lg:w-[310px] lg:h-[145px] lg:bg-transparent lg:flex lg:justify-between
//    w-full h-[145.6px] bg-transparent flex justify-between'>
//  <Image
//             src={Lady}
//             width={152}
//             height={145}
//             alt="Profile Image"
//             className="object-contain"
//           />
//             <Image
//             src={Four}
//             width={152}
//             height={145}
//             alt="Profile Image"
//             className="object-contain"
//           />
//     </div>
//  <div className='lg:w-[310px] lg:h-[145px] lg:bg-transparent lg:flex lg:justify-between
//  w-full h-[200px] bg-transparent flex justify-between'>
//           <Image
//             src={Secure}
//             width={152}
//             height={145}
//             alt="Profile Image"
//             className="object-contain"
//           />
//             <Image
//             src={Guy}
//             width={152}
//             height={203}
//             alt="Profile Image"
//             className="object-contain"
//             />  
//             </div>
// </div> */}

// <div className="lg:w-[310px] lg:h-[297px] bg-transparent flex flex-col gap-4">
//   {/* Top row */}
//   <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
//     <Image
//       src={Lady}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//     <Image
//       src={Four}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//   </div>

//   {/* Bottom row */}
//   <div className="lg:w-[310px] lg:h-[145px] w-full bg-transparent flex justify-between">
//     <Image
//       src={Secure}
//       width={152}
//       height={145}
//       alt="Profile Image"
//       className="object-contain"
//     />
//     <Image
//       src={Guy}
//       width={152}
//       height={145}
//       alt="Profile Image"
//     />
//   </div>
// </div>

// {/* How does it work starts */}
//  <div className='lg:w-[700px] lg:h-[390px] lg:bg-transparent lg:flex  lg:mt-15 lg:p-3 lg:flex-col lg:justify-between mt-8 w-full h-[700px] bg-transparent'>
//             <div className='lg:w-[181px] lg:h-8 lg:bg-transparent w-[154px] h-[31px] bg-transparent text-[#0079C6]'>
//               <h2 className='lg:font-semibold lg:text-[22px] lg:leading-[31.69px] lg:items-center lg:text-[#0079C6]
//               font-semibold text-[22px] leading-[31.69px] items-center text-[#0079C6]'>How It Works</h2>
//             </div>

//             <div className='lg:w-[680px] lg:h-16 lg:bg-transparent lg:-mt-3 mt-2'>
//               <h2 className='lg:font-semibold lg:text-[14px] lg:leading-[20.69px] lg:items-center lg:text-[#0079C6]
//               font-normal text-[14px] leading-[20.69px] items-center text-[#0079C6]'>
//                 Paying your tuition or GIC from Nigeria to Canada doesn’t have to be complicated.Our platform was built to make international 
//                 education payments fast, secure, and fully transparent — with a process so simple that anyone can 
//                 complete it in minutes
//               </h2>
//             </div>

//  <div className="lg:w-[640px] lg:h-[250px] lg:text-[#0079C6] lg:bg-transparent lg:mb-0 lg:mt-0 mt-4 w-full h-full bg-transparent ">
//   <div className='lg:w-[465px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between flex w-full lg:mb-0 mb-2 gap-3 bg-transparent justify-between '>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 mt-1"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px] text-[14px] text-[#0079C6]'><span className='lg:font-semibold lg:text-[15px]
//                     font-semibold text-[14px]'>Register & Complete KYC</span>— Create an account and verify your identity.</h2>
//   </div>
 
//  <div className='lg:w-[288px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//  flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:mt-0 lg:items-center lg:text-[#0079C6]
//                       w-5 h-5 mt-2"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px]
//                     font-semibold text-[14px]'>
//                       Choose Payment Type</span>— Tuition or GIC.</h2>
//   </div> 
//   <div className='lg:w-[630px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center lg:-mt-5 w-5 h-5 -mt-10"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                       Enter Payment Details </span>— Select institution/bank, input amount in CAD, and view NGN equivalent.
//                       </h2>
                      
//   </div>
//   <div className='lg:w-[492px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                       Lock Your Rate & Pay Locally</span>— Accept the rate and transfer funds in Naira.</h2>            
//   </div>
//   <div className='lg:w-[507px] lg:h-10 lg:bg-transparent lg:flex lg:justify-between items-center
//   flex w-full gap-3 bg-transparent text-[#0079C6] lg:mb-0 mb-2'>
//      <Image
//                       src={Vector}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-5 h-5 -mt-5.5"
//                     />
//                     <h2 className='lg:font-normal lg:text-[14px]'><span className='lg:font-semibold lg:text-[15px>'>
//                        Track Your Payment </span>— Get notified once the school or bank confirms receipt.</h2>            
//   </div>
 
//           </div>
// </div>
// {/* How does it ends */}
// </div>
// </main>

// {/* Contact Section Starts */ }
// <main className='lg:w-full lg:h-[339px] lg:bg-[#0079C63D] lg:flex lg:flex-col lg:items-center lg:justify-between lg:mt-20
// lg:mb-0 lg:p-8 rounded-[5px] bg-[#0079C63D] w-screen h-[840px] mt-4 flex flex-col justify-between items-center'>
//   {/* <div className='lg:w-[1020px] lg:h-[180px] lg:bg-yellow-400 lg:flex lg:justify-between'> */}
//     <div className='lg:w-[1120px] lg:h-[180px]  lg:bg-transparent lg:flex lg:justify-between lg:p-0 py-6
//      h-full bg-transparent'>
// <div className='lg:w-[228px] lg:h-[88px] lg:bg-transparent lg:mb-0 mb-8 bg-transparent w-[280px] h-[90px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     About Us
//     </h2>
//     </div>
//      <div className='lg:w-[228px] lg:h-[63px] lg:bg-transparent lg:mt-2'>
//       <h2 className='lg:font-normal lg:text-[13px] lg:leading-5 font-normal text-[14px] leading-5'>We simplify cross-border tuition and GIC payments for international students and parents in Nigeria.</h2>
//     </div> 
//  </div>

//  <div className='lg:w-[134px] lg:h-[174px]  lg:bg-transparent mb-8 bg-transparent w-[280px] h-[150px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5 lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Quick Links
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lf:flex lg:flex-col'>
//      <ul className="list-disc lg:ml-5 lg:space-y-1 font-normal lg:px-0 px-5 text-[14px] leading-5">
//     <li>Home</li>
//     <li>How It Works</li>
//     <li>Why Choose Us</li>
//     <li>FAQs</li>
//     <li>Blog / Resources</li>
//     <li>Contact Us</li>
//   </ul>
//     </div>
// </div>

//  <div className='lg:w-[210px] lg:h-[174px]  lg:bg-transparent-400 mb-8 bg-transparentw-[280px] h-[120px] '>
//  <div className='lg:w-[120px] lg:h-5 lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Support & Contact
//     </h2>
//     <h2 className='lg:font-normal lg:text-[13px] lg:mb-4'>
//     Need Help?
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-5 lg:flex lg:flex-col'>
//     <h2>📧 operations@cowristech.com</h2>
//     <h2>📞 +234 000 000 0000</h2>
//     <h2>⏰ Mon–Fri, 9am–6pm (WAT)</h2>
//     </div>
// </div>

//  <div className='lg:w-[170px] lg:h-[125px]  lg:bg-transparent mb-8 bg-transparent w-[280px] h-[110px] flex flex-col justify-between'>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Legal
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lg:flex lg:flex-col font-normal text-[14px] leading-5'>
//      <ul className="list-disc lg:px-0 px-5 lg:ml-5 lg:space-y-1">
//     <li>Terms & Conditions</li>
//     <li>Privacy Policy</li>
//     <li>Compliance & Security</li>
//     <li>Refund Policy</li>
//   </ul>
//     </div>
// </div>
// <div className='lg:w-[228px] lg:h-[136px] lg:bg-transparent mb-8 bg-transparent h-[120px] '>
//  <div className='lg:w-[100px] lg:h-5  lg:bg-transparent'>
//   <h2 className='lg:font-semibold lg:text-[14px] font-semibold text-[14px]'>
//     Social
//     </h2>
//     </div>
//     <div className='lg:font-normal lg:text-[13px] lg:mt-1.5 lg:flex lg:flex-col'>
//     <h2>Stay Connected, Follow us for updates Facebook </h2>
//     <h2>Instagram</h2>
//     <h2>LinkedIn</h2>
//     <h2>X (Twitter)</h2>
//     </div>
// </div>
// {/* Small Screen */ }
// <div className='w-full lg:h-10  lg:bg-transparent lg:mb-[60px] lg:hidden block'>
//  <div className="lg:h-px h-px bg-[#0079C63D]  w-full"></div>
//  <div className='lg:w-[151px] w-[156px] lg:p-0 px-0 py-4 bg-transparent flex justify-between items-center'>
//  <Image
//                       src={C}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
//                     />
//   <h2 className='lg:flex lg:items-center'>2025  CowrisWaka</h2>
//  </div>
 
//   </div>
//   {/* Small Screen Ends */ }
//   </div> 
//   <div className='w-full lg:h-10 lg:bg-transparent lg:mb-[60px] lg:block hidden'>
//  <div className="lg:h-px bg-[#0079C63D] w-full"></div>
//  <div className='lg:w-[151px] h-9 bg-transparent flex justify-between items-center'>
//  <Image
//                       src={C}
//                       width={27.9}
//                       height={27.9}
//                       alt="Profile Image"
//                       className="lg:w-[17px] lg:h-[13.48px] lg:object-fill lg:flex lg:items-center w-[18.5px] h-[18.5px] mt-0"
//                     />
//   <h2 className='lg:flex lg:items-center'>2025  CowrisWaka</h2>
//  </div>
 
//   </div>
 
// </main>
// {/* Contact Section Ends */ }
// </section>
//   )
// }

// export default HomePage

