import Image from "next/image";


export default function NavBar() {
  return (
    <nav className="w-full py-4 px-8 bg-white shadow-md flex items-center gap-6 mb-[6rem]">
      <Image
          className="w-auto h-auto"
          src="/logo.png"
          alt="Next.js logo"
          width={90}
          height={15}
          priority
        />
      <div className="text-xl font-bold text-gray-800">Forsk3D</div>
    </nav>
  );
}