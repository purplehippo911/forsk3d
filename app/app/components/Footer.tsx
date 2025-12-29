
export default function Footer() {
    return (
        <footer>
            <div className="text-center bg-emerald-600 text-white p-[3rem] grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-items-end">
                <div className="md:justify-self-start">
                    <p>Statsråd Mathiesens vei 25, 0594 Oslo, Norway</p>
                    <p>Arrangert ved Bjerke VGS Makerspace</p>
                </div>
                <a href="mailto:forsk3d@gmail.com" className="text-xl hover:text-emerald-900">forsk3d@gmail.com</a>
            </div>

        </footer>
    );
    }