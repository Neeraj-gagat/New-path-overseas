import { Aboutus } from "@/components/Aboutus";
import { AppBar } from "@/components/Appbar";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Ourservices } from "@/components/Our-services";

export default function Home() {
  return ( 
    <div className="bg-white">
      <AppBar />
      <div className="md:mt-22">
      <Hero/>
      <Aboutus/>
      <Ourservices/>
      <Contact/>
      </div>
  </div>
   );
}
