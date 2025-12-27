import Image from "next/image";


export default function SecondPage() {
  return (
    <section id="secondpage" className="flex flex-col text-white bg-emerald-800 p-[4rem] text-center md:text-justify md:grid md:grid-cols-2 m-auto w-full h-full p-0 bg-emerald-400 font-sans mt-[3rem]">
      <section className="md:col-span-2 flex-col justify-items-center items-center">
          <h1 className="text-5xl font-bold mb-[.5rem]">WE are NOT the SAME</h1>
          <h2 className="text-4xl font-italic mt-0 mb-[2rem]">WE are:</h2>
      </section>

      <section className="flex flex-col items-center md:col-span-full md:flex-row">
        <section className="border-[.5rem] rounded-[2rem] w-[100%] p-[5rem] flex flex-col gap-[.35rem]">
          <div className="">
            <h3 className="text-6xl font-bold">Forsk3D</h3>
            <p className="text-2xl">
              A group of high school students in Oslo,
              making our own 3D Printer from scratch.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-0 font-bold text-xl">If you're interested:</p>
            <a
              href="https://discord.gg/4RZS2say2r"
              className="text-xl text-center border border-[.3rem] font-bold rounded-full p-[.5rem] mt-0 hover:font-bold hover:text-emerald-800 hover:bg-white hover:border-0 transition-all ease-in-out duration-700ms"
            >
              Join our Discord
            </a>
            <p className="text-xl w-[80%]">
            Contact us:
              <a href="mailto:[forsk3d@gmail.com]" className="font-bold hover:text-emerald-200">
                  forsk3d@gmail.com
              </a>
            </p>
          </div>
        </section>
        <section className="md:col-start-2 md:col-end-4 md:w-[100%] h-[100%]">
          <Image
              src="/logo.png"
              alt="Forsk3D Logo"
              width={400}
              height={400}
          />
        </section>
      </section>

      <section className="mt-[2rem] md:col-span-2 flex flex-col items-center md:w-[50%] h-[40%] justify-self-center">
        <a href="https://www.frifond.no" className="flex flex-col items-center bg-white md:w-[20%] rounded p-3 mb-[2rem] md:mb-0 hover:bg-emerald-200 hover:scale-105">
          <p className="text-emerald-800 font-bold">Sponsored By:</p>
          <Image
            src={"https://www.frifond.no/images/frifond-brand.svg"}
            alt="Frifond's logo"
            height={100}
            width={80}
          />
        </a>

      </section>

    </section>
  );
}