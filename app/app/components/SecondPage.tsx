import Image from "next/image";


export default function SecondPage() {
  return (
    <section id="secondpage" className="m-auto w-full h-full p-0 bg-emerald-400 font-sans mt-[3rem]">
        <div className="flex-col justify-items-center items-center">
            <h1 className="text-5xl font-bold mb-10">WE are not the SAME</h1>
            <h2 className="text-3xl font-italic mt-0">WE are:</h2>
            
            <Image 
                src="/logo.png" 
                alt="Forsk3D Logo" 
                width={500} 
                height={500} 
            />
        </div>

    </section>
  );
}