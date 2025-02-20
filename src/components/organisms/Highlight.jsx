import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionHeading from "../atoms/SectionHeading";

const Highlight = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="9 Golden rules for Trading in Stock Market" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {Highlights.map((highlight, i) => (
                        <Card
                            key={i}
                            className="hover:border-green-500 transition-all delay-200"
                        >
                            <CardContent>
                                <div className="flex relative aspect-video w-full">
                                    <Image
                                        src={`/assets/highlights/${highlight.image}`}
                                        alt="About Image"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </CardContent>
                            <CardHeader>
                                <CardTitle className="text-base text-center">
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
    {
        image: "highlight-9.webp",
        label: "Never take decision based on rumors",
    },
];
