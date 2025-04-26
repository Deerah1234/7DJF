import { BookSummary } from "@/constants";
import BookMockup from "./BookMockup";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section className="relative w-full h-full pt-24 px-6 lg:px-20 overflow-hidden font-host text-[#38110c]/80">
            <div className="absolute inset-0 z-0 md:top-0 top-7">
                <BookMockup />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                    <div className="mb-3 lg:mb-5">
                        <h1 className="text-5xl lg:text-6xl leading-tighter lg:text-left font-bebas tracking-tighter font-bold text-[#38110c] mt-60  lg:m-0 md:mb-96 md:mt-0">
                            7-DAY JOURNEY TO FREEDOM
                        </h1>
                    </div>

                    {/* Summary Description */}
                    <div className="text-sm leading-relaxed md:mt-20 lg:m-0">
                        <p className="mb-3">{BookSummary.description}</p>
                    </div>

                    {/* Book Highlights */}
                    <div className="mb-4 text-sm">
                        <span className="block mb-2  font-bold text-[#38110c]/100">
                            What You'll Get Inside:
                        </span>
                        <ul className="space-y-1 lg:pl-4 ">
                            {BookSummary.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Intended Audience */}
                    <div className="mb-4 text-sm">
                        <span className="block mb-2 font-bold text-[#38110c]/100">
                            Who This is For:
                        </span>
                        <ul className="space-y-1 lg:pl-4">
                            {BookSummary.intendedAudience.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Button */}
                    <Button className="text-sm md:text-sm font-semibold bg-[#38110c] text-white hover:bg-[#4a1a13] transition w-48 h-10 cursor-pointer my-5 rounded-sm">
                        DOWNLOAD EBOOK
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
