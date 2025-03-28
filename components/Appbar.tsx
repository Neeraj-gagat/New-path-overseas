import Image from "next/image"


export const AppBar = () => {
    return <nav className="py-7 w-full shadow-xl px-20 items-center flex justify-between space-x-16 fixed">
        <div className="flex justify-start">
            <Image alt="logo" width={50} height={1} src={"/logo.png."}/>
        </div>
        <div className="flex justify-center text-[#656669] space-x-12 font-bold">
            <a className="hover:text-black transition duration-300 md:hover:scale-105" href="#about">Home</a>
            <a className="hover:text-black transition duration-300 md:hover:scale-105" href="#about">About</a>
            <a className="hover:text-black transition duration-300 md:hover:scale-105" href="#about">Our Services</a>
            <a className="hover:text-black transition duration-300 md:hover:scale-105" href="#about">Blog</a>
            <a className="hover:text-black transition duration-300 md:hover:scale-105" href="#about">Contact Us</a>
        </div>
        <div>
            <button className="bg-[#FAB855] py-2 px-7 font-medium rounded hover:text-white hover:bg-slate-900 transition duration-300">
                Apply Now
            </button>
        </div>

    </nav>
}