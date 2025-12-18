
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="m-auto w-full h-full p-0 bg-emerald-400 font-sans flex-col gap-[2rem]">
        <NavBar />
        <LandingPage />
        <SecondPage/>
        <Footer/>
    </div>
  );
}
