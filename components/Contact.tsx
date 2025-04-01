import { MdLocationPin } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
    return <div className="flex justify-center" id="contact">
        <div >
            <p className="text-3xl md:text-5xl text-center font-bold text-slate-900 pt-10 md:pt-20">Contact Us</p>
        <div className="pt-20">
            <div className="flex justify-center items-center"><p className="pr-3 font-medium text-[#77797e] text-base md:text-xl ">Get in Touch</p><div><p className="w-[200px] md:w-[400px] border-b-2 bg-[#77797e]"></p></div></div>
            <div className="flex justify-center"> 
                <div className="pt-7 md:-ml-26 text-sm md:text-lg space-y-2 md:space-y-3">
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><MdLocationPin size={25} className="text-slate-900"/> <p>SCO 64-65, 4th Floor, Sector 17A, Chandigarh</p></div>
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><MdAddIcCall size={23} className="text-slate-900"/> <p>9888386639</p></div>
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><SiGmail size={20} className="text-slate-900"/> <p>newpathoverseas17@gmail.com</p></div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
}