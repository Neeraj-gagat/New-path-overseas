import ContinentSelector from "./Countries"
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
    // const words3 = [
    //     {text:"🌍"},
    //     {text:"Choose"},
    //     {text:"Your"},
    // ]

    const words3 = [
        {text:"Male"},
        {text:"Your"},
        {text:"Choice"},
        {text:"for"},
    ]
    const words4 = [
        {text:"Preferred"},
        {text:"Nation"},
    ]

    return <div className="pt-20 flex justify-center" id="services">
        <div>
            <p className="text-5xl flex justify-center text-slate-900 font-bold">Our Services</p>

            <div className="flex justify-between pt-20 space-x-20">
                <div className="max-w-xl my-auto">
                    {/* <p className="text-4xl font-bold">Visa Assistance and Consultation </p> */}
                    <TypewriterEffectSmooth words={words} />
                    <TypewriterEffectSmooth2 words={words2} />
                    <p className="text-xl pt-7 text-slate-900 font-medium">We offer expert guidance and support for obtaining the right visa for your destination. Whether you are traveling for tourism, business, work, or study, our experienced consultants ensure that the visa application process is smooth and hassle-free.</p>
                    <p></p>
                </div>
                <img src="/services-img1.png" className="rounded-2xl" alt="image" width={500} height={200} />
            </div>

            <div className="pt-20">
                <div className="flex justify-between space-x-20 ">
                    <div className="max-w-xl"> <TypewriterEffectSmooth words={words3} /> 
                    <TypewriterEffectSmooth2 words={words4} />
                    </div>
                    <div className="text-xl max-w-xl pt-7 text-[#77797e] font-medium"><p>Choosing the ideal destination for immigration is a pivotal decision that can shape the trajectory of your</p> </div>
                </div>
                <div className="pt-15">
                    <ContinentSelector/>
                </div>
            </div>

        </div>
        
    </div>
} 