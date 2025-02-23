import About from "@/components/organisms/About";
import CompanyThoughts from "@/components/organisms/CompanyThoughts";
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
            <CompanyThoughts />
        </>
    );
}
