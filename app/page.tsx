import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Promotion from "@/components/sections/Promotion";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Hero/>
        <Promotion/>
        <Menu/>
        <AboutUs/>
      </> 
  );
}
