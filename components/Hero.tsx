import { FaCheck } from "react-icons/fa6";
import { TypewriterEffectSmooth, TypewriterEffectSmooth2 } from "./ui/typewriter-effect";

export const Hero = () => {
    const words = [
        {
            text:`Trusted`
        },
        {
            text:"Visa"
        },
        {
            text:"Experts:"
        },
        {
            text:"Begin"
        },
    ]

    const words2 = [
        {
            text:"Your"
        },
        {
            text:"Journey"
        },
        {
            text:"Today!"
        },
    ]

    return <div id="home" style={{backgroundImage: "url('/hero_bg.jpg')"}} className="h-screen bg-cover bg-center">
        <div className="pl-4 md:pl-10 pt-40 md:pt-30">
        <TypewriterEffectSmooth words={words}/>
        {/* <p className="text-5xl font-bold text-slate-900 max-w-[700px]">&quot;Trusted Visa Experts: Begin Your Journey Today!</p> */}
        <TypewriterEffectSmooth2 words={words2} />
        <p className="pt-10 md:pt-10 font-medium text-base md:text-xl text-[#77797e] max-w-[700px]">At New Path Overseas, our experienced immigration consultants in Chandigarh help you achieve your immigration dreams. We offer personalized guidance and support throughout the entire process.</p>
        <div className="pt-10 space-y-2.5 text-base md:text-xl font-Poppins text-slate-900 font-normal">
            <div className="flex items-center gap-2"><FaCheck color="#656669" /> <p>Expert Legal Support</p></div>
            <div className="flex items-center gap-2"><FaCheck color="#656669" /> <p>Meeting Your Unique Needs</p></div>
            <div className="flex items-center gap-2"><FaCheck color="#656669" /> <p>Tailored Immigration Solutions</p></div>
                
            </div>
        <div className="pt-14 space-x-5 font-sans">
            <a className="py-3 md:py-5 px-4 md:px-14 text-base md:text-base rounded-lg text-white font-medium bg-[#00CC99] hover:bg-[#0191FF] transition duration-400 " href="#contact us">Book Appointment</a>
            <a className="py-3 md:py-5 px-4 md:px-14 text-base md:text-base text-slate-900  rounded-lg hover:text-white font-medium hover:bg-[#00CC99] bg-white transition duration-400 " href="#about">Read Story</a>
        </div>
        </div>
        
    </div>
}