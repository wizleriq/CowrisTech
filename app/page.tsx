import Image from "next/image";
import Navbar from "./src/navbar";
import HomePage from "./src/homePage";

export default function Home() {
  return (
    // <div className="flex flex-col lg:w-full  lg:h-[1963px] w-full justify-start items-center  bg-transpareny">
    <div className="flex flex-col lg:w-full lg:h-[1963px] w-full justify-start items-center bg-transparent">
      <Navbar />
      <HomePage />
      {/* <main className="flex lg:h-[1500px] lg:w-[800px]  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
       <h2>Wisdom  Ndata N</h2>
      

       min-h-screen
      </main> */}
    </div>
  );
}
