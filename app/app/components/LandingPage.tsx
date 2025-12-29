"use client";

import Image from "next/image"
import ArrowComp from "./ArrowComp";

export default function LandingPage() {
        const handleScrollToSecondPage = () => {
        document.querySelector("#secondpage")?.scrollIntoView({ 
          behavior: "smooth" 
        });
      };

    return (
    <main className="h-[70vh] flex flex-col items-center justify-center md:h-auto">
        <section className="flex-cols md:grid  md:gap-4 md:grid-cols-3 md:grid-rows-3 text-center text-5xl"> 
            <div className="flex-col">
                <p className="">We <span className="font-bold">BUILD</span></p>
                <ArrowComp 
                    rotatationDegree="rotate-340"
                    extraStyles="justify-self-end"
                />
            </div>

            <div className="md:row-start-3 col-start-2 self-end">
                <ArrowComp
                    rotatationDegree="rotate-180"
                    extraStyles="justify-self-center"
                />
                <p className="">We <span className="font-bold">CODE</span></p>
            </div>
            
            <div className="md:col-start-3">
                <p className="">We <span className="font-bold">PRINT</span></p>
                <ArrowComp
                />
            </div>

        <div className="text-center md:col-start-1 md:col-end-4 md:flex md:justify-center md:row-start-2">
            <div className="justify-self-start">
                <p className="mt-[2rem] md:hidden md:mt-0">Our own:</p>
                <p className="mt-[.2rem] font-bold text-6xl border-[.5rem] rounded-full border-double p-[1rem] md:p-[2rem] md:mt-0 md:mt-0">
                3D PRINTERS
                           </p>
            </div>
        </div>
        </section>
        <section className="ml-[rem] md:flex mt-[1rem] mb-[2rem]">
            <button 
              onClick={handleScrollToSecondPage}
              className="border border-2 rounded flex flex-col items-center p-2 hover:bg-white hover:text-emerald-500 hover:border-2"
            >
                <p className="text-xl font-bold"> Scroll Down</p>
                <ArrowComp
                    rotatationDegree="180"
                    maxHeight="max-h-[3rem]"
                />

            </button>
        </section>
    </main>
)  ;    
}