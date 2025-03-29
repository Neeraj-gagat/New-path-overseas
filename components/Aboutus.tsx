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


    return <div className="flex justify-center pt-20" id="about">
        <div>
                {/* <p className="flex justify-center text-5xl font-bold text-slate-900">About</p> */}
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
                <div className="w-[300px] flex justify-center py-15 bg-[#FFFFFF]"> <HTMLContent/> </div>
                <div className="w-[300px] flex justify-center py-15 bg-[#FFFFFF]"> <HTMLContent2/> </div>
                <div className="w-[300px] flex justify-center py-15 bg-[#FFFFFF]"> <HTMLContent3/>  </div>
            </div>
             <div className="py-200"></div>
        </div>
        
    </div>
}