import About from "@/components/organisms/About";
import Benefits from "@/components/organisms/Benefits";
import Hero from "@/components/organisms/Hero";
import Highlight from "@/components/organisms/Highlight";
import Opportunities from "@/components/organisms/Opportunities";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Highlight />
            <Opportunities />
            <Benefits />
            {/* <CompanyThoughts /> */}
        </>
    );
}
