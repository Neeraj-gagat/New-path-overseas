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

    return <div className="flex justify-center pt-15 md:pt-20" id="about">
        <div>
                <p className="flex justify-center text-3xl md:text-5xl font-bold text-slate-900">About</p>
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-10 px-7 md:px-0 pt-7 md:pt-20">
                <div className="md:text-5xl font-bold max-w-full md:max-w-[600px]">
                    <TypewriterEffectSmooth words={words} />
                    {/* <p className="flex justify-center text-slate-900">Committed to Your Visa</p> */}
                    <TypewriterEffectSmooth2 words={words2} />
                    {/* <p className="text-[#77797e] flex justify-start">Success - About us</p> */}
                </div>
                <p className="max-w-xl text-[15px] md:text-[20px] text-[#77797e] pt-7 md:pt-0 font-medium">We deliver budget-friendly visa solutions, removing financial barriers from your journey. Our goal is to provide quality services at reasonable rates.</p>
            </div>
            <div className="flex justify-center pt-7 md:pt-15">
            <img  src="/about_img.jpg" alt="image" className="w-[400px] md:w-full px-4 md:px-0 rounded-2xl" width={1240} height={200} />
            </div>

            <div className="flex flex-col md:flex-row justify-between">
            <div className="">
                <div className="w-[100px] md:w-[300px] flex justify-center pt-9 md:pt-15 bg-[#FFFFFF] mx-auto md:mx-0 items-center"> <HTMLContent/> <p className="text-[42px] md:text-[67px] md:pb-2">%</p> </div>
                <div className="flex justify-center text-lg md:text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]" ><p>Successful Visa</p>
                <p>Process Rate</p></div>
                </div>
                </div> 
                <div className="">
                <div className="w-[100px] md:w-[300px] flex justify-center pt-9 md:pt-15 bg-[#FFFFFF] mx-auto md:mx-0 items-center"> <HTMLContent2/><p className="text-[42px] md:text-[67px] md:pb-2">K</p> </div>
                <div className="flex justify-center text-lg md:text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]"><p>We Have Worked</p>
                <p>With Clients</p></div>
                </div>
                </div> 
                
                <div className="">
                <div className="w-[100px] md:w-[300px] flex justify-center pt-9 md:pt-15 bg-[#FFFFFF] mx-auto md:mx-0 items-center"> <HTMLContent3/> <p className="text-[42px] md:text-[67px] md:pb-2">Hrs</p> </div>
                <div className="flex justify-center text-lg md:text-2xl text-start px-auto font-semibold">
                <div className="hover:underline decoration-[#0191FF]"><p>Application Approval</p>
                <p>Processing Time</p></div>
                </div>
                </div>
                
            </div>

            <div className="flex flex-col md:flex-row justify-between px-7 md:px-0 pt-10 md:pt-30">
              <img src="/mission.jpg" className="w-[400px] md:w-fit" width={500} height={200} alt="" />
              <div className="flex justify-center my-auto">
                <div className="pt-7 md:pt-0 max-w-2xl">
                  <TypewriterEffectSmooth words={word3} />
                  <TypewriterEffectSmooth2 words={word4} />
                  <p className="text-sm md:text-xl pt-7 text-[#77797e]  font-medium">With years of experience in sponsoring and managing visas, we’ve perfected our processes to deliver exceptional results. Our deep understanding of work visas and our commitment to client satisfaction make us your ideal partner. Whether you’re looking to immigrate to the United States or another country, we’re here to guide you every step of the way.</p>
                  <div className="pt-5"><a href="tel:9888386639" className="mx-auto md:mx-0 flex mt-3 justify-center text-white hover:bg-[#FAB855] transition duration-300 text-base md:text-base font-medium w-[200px] md:w-[400px] py-3 md:py-5 rounded-lg bg-black">Apply Know</a></div>
                </div>
              </div>
            </div> 

        </div>
        
    </div>
}