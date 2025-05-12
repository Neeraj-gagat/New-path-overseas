import { MdLocationPin } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Contact = () => {
    return <div className="flex justify-center" id="contact">
        <div >
            <p className="text-3xl md:text-5xl text-center font-bold text-slate-900 pt-10 md:pt-20">Contact Us</p>
        <div className="pt-20">
            <div className="flex justify-center items-center"><p className="pr-3 font-medium text-[#77797e] text-base md:text-xl ">Get in Touch</p><div><p className="w-[200px] md:w-[400px] border-b-2 bg-[#77797e]"></p></div></div>
            <div className="flex justify-center"> 
                <div className="pt-7 text-sm pl-5 md:pl-0 md:text-lg space-y-2 md:space-y-3">
                    <div className="text-[#77797e] flex justify-start items-center space-x-3 "><MdAddIcCall size={23} className="text-slate-900 -ml-1"/> <p>8264551555</p></div>
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><MdAddIcCall size={23} className="text-slate-900 -ml-1"/> <p>8264552555</p></div>
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><MdLocationPin size={25} className="text-slate-900 -ml-1"/> <p>SCO 84-85, Third Floor, Sector 17 C, Chandigarh, 160017</p></div>
                    <div className="text-[#77797e] flex justify-start items-center space-x-3"><SiGmail size={20} className="text-slate-900"/> <p>visakeyoverseas@gmail.com</p></div>
                </div>
                
            </div>
        </div>
        <div className="pt-10">
            <div className="flex justify-center items-center"><p className="pr-3 font-medium text-[#77797e] text-base md:text-xl ">Connect On</p><div><p className="w-[200px] md:w-[400px] border-b-2 bg-[#77797e]"></p></div></div>
            <div className="flex justify-center space-x-10 pt-7" ><a target="_blank" href="https://www.facebook.com/profile.php?id=61574864574901#"><FaFacebookSquare className="text-blue-700 hover:scale-110 transition duration-300 hover:cursor-pointer" size={50}/></a> <a target="_blank" href="https://www.instagram.com/visakeyoverseas/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExMUNpR3ozS2NWMzFOY1FZVAEecWYx0EC_-1K8e1p0S7m85VkFWaynUqaUkgY2rTH5ixaQVkjO1kOkTwHFTMg_aem_RX-URAHnjj8nkqYabrMr5w"><FaInstagramSquare className="text-pink-700 hover:scale-110 transition duration-300 hover:cursor-pointer" size={50}/></a></div>    
        </div>
        </div>
    </div>
}