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

    return <div id="home" style={{backgroundImage: "url('/hero_bg.png')"}} className="h-[610px] md:h-screen bg-cover">
        <div className="pl-4 md:pl-10 pt-30 md:pt-20">
        <TypewriterEffectSmooth words={words}/>
        {/* <p className="text-5xl font-bold text-slate-900 max-w-[700px]">&quot;Trusted Visa Experts: Begin Your Journey Today!</p> */}
        <TypewriterEffectSmooth2 words={words2} />
        <p className="pt-10 md:pt-10 font-medium text-base md:text-xl text-slate-900 max-w-[700px]">At VISA KEY Overseas, our experienced immigration consultants in Chandigarh help you achieve your immigration dreams. We offer personalized guidance and support throughout the entire process.</p>
        <div className="pt-10 space-y-2.5 text-base md:text-[19px] font-Poppins text-slate-900 font-normal">
            <div className="flex items-center gap-2"><FaCheck color="#3d3c3c" /> <p>Expert Legal Support</p></div>
            <div className="flex items-center gap-2"><FaCheck color="#3d3c3c" /> <p>Meeting Your Unique Needs</p></div>
            <div className="flex items-center gap-2"><FaCheck color="#3d3c3c" /> <p>Tailored Immigration Solutions</p></div>
                
            </div>
        <div className="pt-14 space-x-5 font-sans">
            <a className="py-3 md:py-5 px-4 md:px-14 text-base md:text-base rounded-lg text-white hover:text-white font-medium bg-black hover:bg-[#028DF3] transition duration-400 " href="tel:8264551555">Book Appointment</a>
            <a className="py-3 md:py-5 px-4 md:px-14 text-base md:text-base text-slate-900  rounded-lg hover:text-white font-medium hover:bg-[#028DF3] bg-white transition duration-400 " href="#about">Read Story</a>
        </div>
        </div>
        
    </div>
}