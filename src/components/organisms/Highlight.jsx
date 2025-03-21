import Image from "next/image";
import SectionHeading from "../atoms/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Highlight = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="9 Golden rules for Trading in Stock Market" />
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                    {Highlights.map((highlight, i) => (
                        <Card
                            key={i}
                            className="border-4 hover:border-green-500 p-4 transition-all delay-200 shadow-2xl"
                        >
                            <CardContent className="p-0">
                                <div className="flex relative aspect-video w-full">
                                    <Image
                                        src={`/assets/highlights/${highlight.image}`}
                                        alt="About Image"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </CardContent>
                            <CardHeader className="p-0">
                                <CardTitle className="text-sm md:text-base text-center">
                                    {highlight.label}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlight;

const Highlights = [
    {
        image: "highlight-1.webp",
        label: "Chooset the right stock",
    },
    {
        image: "highlight-2.webp",
        label: "Take Calclated risk",
    },
    {
        image: "highlight-3.webp",
        label: "Do through research",
    },
    {
        image: "highlight-4.webp",
        label: "Take experts help",
    },
    {
        image: "highlight-5.webp",
        label: "Never be emotional",
    },
    {
        image: "highlight-6.webp",
        label: "Redressal of grievence",
    },
    {
        image: "highlight-7.webp",
        label: "Use stop loss",
    },
    {
        image: "highlight-8.webp",
        label: "Don't be greedy",
    },
];
