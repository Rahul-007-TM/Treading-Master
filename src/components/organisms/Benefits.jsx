import React from "react";
import SectionHeading from "../atoms/SectionHeading";
import { BorderBeam } from "../atoms/BorderBeam";
import { LineChart } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { TrendingUp } from "lucide-react";

const Benefits = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="Why Choose Trading Masters" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
                    {BenefitsList.map((benefit, i) => (
                        <div
                            key={i}
                            className="flex flex-col group shadow md:shadow-none md:hover:shadow transition-all md:hover:-translate-y-4 w-full relative h-fit aspect-square border border-neutral-200 items-center gap-4 justify-center p-6 rounded-xl bg-gradient-to-b from-green-100 to-transparent"
                        >
                            <Logo icon={benefit.icon} />
                            <span className="text-lg font-semibold">
                                {benefit.title}
                            </span>
                            <p className="md:invisible md:opacity-0 md:hidden md:group-hover:flex md:delay-400 md:group-hover:visible md:group-hover:opacity-100 md:transition-all text-center">
                                {benefit.description}
                            </p>
                            <BorderBeam duration={8} size={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;

const Logo = ({ icon: Logo }) => {
    return <Logo className="size-10 text-green-500" />;
};

const BenefitsList = [
    {
        title: "Experts Intraday tips",
        icon: LineChart,
        description:
            "Get real-time, high-accuracy market insights for smarter trading decisions",
    },
    {
        title: "High Accuracy, Low Risk",
        icon: ShieldCheck,
        description:
            "Proven strategies designed to maximize gains while minimizing risk",
    },
    {
        title: "Smart Risk management",
        icon: TrendingUp,
        description:
            "Personalized guidance to protect your capital and grow your portfolio",
    },
];
