import { Hero, Navbar } from "@/components";

const Home = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <Navbar />
            <main className="flex-1">
                <Hero />
            </main>
        </div>
    );
};

export default Home;
