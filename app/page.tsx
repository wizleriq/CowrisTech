import Image from "next/image";
import Navbar from "./src/navbar";
import HomePage from "./src/homePage";

export default function Home() {
  return (
    // <div className="flex flex-col lg:w-full  lg:h-[1963px] w-full justify-start items-center  bg-transpareny">
    // <div className="flex flex-col lg:w-full lg:h-[1963px] w-full justify-start items-center sm:bg-[#F4FBFF] lg:bg-red-400 bg-transparent">
     <div className="flex flex-col lg:w-full  xl:w-screen xl:h-[2030px] 2xl:w-[1580px] 2xl:h-[2030px] lg:h-[1963px] w-full justify-start items-center sm:bg-[#F4FBFF] lg:bg-transparent bg-transparent">

      {/* xl:w-[1265px] xl:h-[380px] 2xl:w-[1580px] 2xl:h-[400px]  */}
      <Navbar />
      <HomePage />
      {/* <main className="flex lg:h-[1500px] lg:w-[800px]  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
       <h2>Wisdom  Ndata N</h2>
      

       min-h-screen
      </main> */}
    </div>
  );
}
