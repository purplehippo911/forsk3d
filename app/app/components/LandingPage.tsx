import Image from "next/image"
import ArrowComp from "./ArrowComp";

export default function LandingPage() {
    return (
    <main className="">
        <section className="flex-col md:grid  md:gap-4 md:grid-cols-3 md:grid-rows-3 text-center text-5xl"> 
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

        <div className="text-center md:col-start-2 md:row-start-2">
            <p className="mt-[2rem] md:hidden md:mt-0">Our own:</p>
            <p className="mt-[.2rem] font-bold text-6xl border-[.5rem] rounded-full border-double p-[1rem] md:mt-0 md:mt-0">
            3D PRINTERS
           </p>
        </div>

        </section>
    </main>
)  ;    
}