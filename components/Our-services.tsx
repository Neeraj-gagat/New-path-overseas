import {ContinentSelector, Services} from "./Countries"
import { TypewriterEffectSmooth, TypewriterEffectSmooth2 } from "./ui/typewriter-effect"


export const Ourservices = () => {

    const words = [
        {text:"Visa"},
        {text:"Assistance"},
        
    ]
    const words2 = [
        {text:"and"},
        {text:"Consultation"},
    ]

    const words3 = [
        {text:"Make"},
        {text:"Your"},
        {text:"Choice"},
        {text:"for"},
    ]
    const words4 = [
        {text:"Preferred"},
        {text:"Nation"},
    ]

    return <div className="pt-15 md:pt-30 flex justify-center" id="services">
        <div>
            <p className=" text-3xl md:text-5xl flex justify-center text-slate-900 font-bold">Our Services</p>

            <div className="flex flex-col md:flex-row md:justify-between pt-7 md:pt-20 px-7 md:px-0  md:space-x-20">
                <div className="md:max-w-xl md:my-auto">
                    {/* <p className="text-4xl font-bold">Visa Assistance and Consultation </p> */}
                    <TypewriterEffectSmooth words={words} />
                    <TypewriterEffectSmooth2 words={words2} />
                    <p className="text-sm md:text-xl pt-7 max-w-xl text-[#77797e] font-medium">We offer expert guidance and support for obtaining the right visa for your destination. Whether you are traveling for tourism, business, work, or study, our experienced consultants ensure that the visa application process is smooth and hassle-free.</p>
                </div>
                <img src="/services-img1.png" className="rounded-2xl w-[400px] md:w-fit mt-8" alt="image" width={500} height={200} />
            </div>

            <div className="bg-white pt-20 px-7 md:px-0">
                <div className="text-slate-900">
                    <p className="text-lg md:text-xl font-bold  ">How WE ASSIST CLIENTS</p>
                    <p className=" text-2xl md:text-3xl font-bold pt-5">Level With Great Visa Serving Policies</p>
                </div>
                <div className="pt-20">
                    <Services/>
                </div>
            </div>

            <div className="pt-20 md:pt-30">
                <div className="flex flex-col md:flex-row md:justify-between px-7 md:px-0 md:space-x-20 ">
                    <div className="max-w-xl"> <TypewriterEffectSmooth words={words3} /> 
                    <TypewriterEffectSmooth2 words={words4} />
                    </div>
                    <div className="text-sm md:text-xl max-w-xl pt-7 text-[#77797e] font-medium"><p>Choosing the ideal destination for immigration is a pivotal decision that can shape the trajectory of your</p> </div>
                </div>
                <div className="pt-7 md:pt-15">
                    <ContinentSelector/>
                </div>
            </div>

        </div>
        
    </div>
} 