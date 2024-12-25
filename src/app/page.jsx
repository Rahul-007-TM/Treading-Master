import About from "@/components/organisms/About";
import CompanyThoughts from "@/components/organisms/CompanyThoughts";
import Hero from "@/components/organisms/Hero";
import Highlight from "@/components/organisms/Highlight";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Highlight />
            <CompanyThoughts />
        </>
    );
}
