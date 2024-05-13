import Image from "next/image";
import Navbar from "./navbar/page";

import { useRouter } from "next/router";
import Footer from "./footer/page";
import LandingPage from "./landingPage/page";
import RegisterForm from "./register/page";

export default function Home() {
  return (
    <div> 
      <Navbar />
      <LandingPage />
      <Footer />
      
      {/* <RandomUser />   */}
    </div>


  );
}