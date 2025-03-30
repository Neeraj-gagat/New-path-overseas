"use client";
import { HTMLContent, HTMLContent2, HTMLContent3 } from "./ui/html-content";
import { TypewriterEffectSmooth, TypewriterEffectSmooth2 } from "./ui/typewriter-effect";

export const Aboutus = () => {
    const words = [
        {
          text: "Committed",
        },
        {
          text: "to",
        },
        {
          text: "Your",
        },
        {
          text: "Visa",
        },
      ];

      const words2 = [
        {
          text: "Success",
        },
        {
          text: "-",
        },
        {
          text: "About",
        },
        {
          text: "us",
        }
      ]

      const word3 = [
        {
          text: "Guiding",  
        },
        {
          text: "Your,",
        },
        {
          text: "Path",
        },
        {
          text: "Our",
        },
      ]; 

      const word4 = [
        {
          text: "Immigration",  
        },
        {
          text: "Mission,",
        },
       
      ];

    return <div className="flex justify-center pt-20" id="about">
        <div>
                <p className="flex justify-center text-5xl font-bold text-slate-900">About</p>
            <div className="flex justify-between space-x-10 pt-20">
                <div className="text-5xl font-bold max-w-[600px]">
                    <TypewriterEffectSmooth words={words} />
                    {/* <p className="flex justify-center text-slate-900">Committed to Your Visa</p> */}
                    <TypewriterEffectSmooth2  className="text-[#77797e]" words={words2} />
                    {/* <p className="text-[#77797e] flex justify-start">Success - About us</p> */}
                </div>
                <p className="max-w-xl text-[20px] text-[#77797e] font-medium">We deliver budget-friendly visa solutions, removing financial barriers from your journey. Our goal is to provide quality services at reasonable rates.</p>
            </div>
            <div className="flex justify-center pt-15">
            <img  src="/about_img.jpg" alt="image" width={1240} height={200} />
            </div>

            <div className="flex justify-between">
            <div className="">
                <div className="w-[300px] flex justify-center pt-15 bg-[#FFFFFF] items-center"> <HTMLContent/> <p className="text-7xl pb-2">%</p> </div>
                <div className="flex justify-center text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]" ><p>Successful Visa</p>
                <p>Process Rate</p></div>
                </div>
                </div> 
                <div className="">
                <div className="w-[300px] flex justify-center pt-15 bg-[#FFFFFF] items-center"> <HTMLContent2/><p className="text-7xl pb-2">K</p> </div>
                <div className="flex justify-center text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]"><p>We Have Worked</p>
                <p>With Clients</p></div>
                </div>
                </div> 
                
                <div className="">
                <div className="w-[300px] flex justify-center pt-15 bg-[#FFFFFF] items-center"> <HTMLContent3/> <p className="text-7xl pb-2">DAY</p> </div>
                <div className="flex justify-center text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]"><p>Application Approval</p>
                <p>Processing Time</p></div>
                </div>
                </div>
                
            </div>

            <div className="flex justify-between pt-30">
              <img src="/mission.jpg" width={500} height={200} alt="" />
              <div className="flex justify-center my-auto">
                <div className="max-w-2xl">
                  <TypewriterEffectSmooth words={word3} />
                  <TypewriterEffectSmooth2 words={word4} />
                  <p className="text-xl pt-7 text-slate-900 font-medium">With years of experience in sponsoring and managing visas, we’ve perfected our processes to deliver exceptional results. Our deep understanding of work visas and our commitment to client satisfaction make us your ideal partner. Whether you’re looking to immigrate to the United States or another country, we’re here to guide you every step of the way.</p>
                  <div className="pt-5"><a href="" className="flex justify-center text-white hover:bg-[#00CC99] transition duration-300 text-base font-medium w-[400px] py-5 rounded-lg bg-[#0191FF]">Apply Know</a></div>
                </div>
              </div>
            </div> 

        </div>
        
    </div>
}