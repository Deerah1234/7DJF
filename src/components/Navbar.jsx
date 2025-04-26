import { Logo } from "@/assets";

import { Button } from "./ui/button";
import ShareTestimony from "./ShareTestimony";

const Navbar = () => {
    return (
        <nav className="backdrop-blur-lg bg-white/30 shadow-md fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-3 font-host">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src={Logo}
                        alt="7-DAYS JOURNEY TO FREEDOM logo"
                        className="w-8 h-8"
                    />
                </div>
                <div className="flex gap-5 items-center">
                    <ShareTestimony />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
