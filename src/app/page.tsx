import Image from "next/image";
import Navbar from "./navbar/page";

import { useRouter } from "next/router";
import Footer from "./footer/page";
import LandingPage from "./landingPage/page";
import RegisterForm from "./register/page";

export default function Home() {
  return (
    <div className='flex flex-col bg-white min-h-screen' > 
      <Navbar />
      <LandingPage />
      <div className='md:mt-[110px]'> <Footer /></div>
      
      {/* <RandomUser />   */}
    </div>


  );
}