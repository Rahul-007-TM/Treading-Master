"use client"

import { LineChart, ShieldCheck, TrendingUp } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../atoms/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { BlurFade } from "../ui/blur-fade";

const Benefits = () => {
    const [open, setOpen] = useState("item-0");

    return (
        <div className="flex w-full h-auto md:items-center md:justify-center">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <BlurFade delay={0.15} inView>
                    <SectionHeading title="Why Choose Trading Masters" />
                </BlurFade>
                <div className="flex w-full max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4 " value={open} onValueChange={setOpen}>
                        {BenefitsList.map((benefit, i) => (
                            <BlurFade delay={0.15} inView key={i}>
                                <AccordionItem key={i} value={`item-${i}`} className={`border-b-none border transition-all delay-200 ${open === `item-${i}` ? 'border-green-500' : 'border-neutral-200'} rounded-md`}>
                                    <AccordionTrigger className="hover:no-underline px-4 md:px-6">{benefit.title}</AccordionTrigger>
                                    <AccordionContent className="pt-4 px-4 md:px-6 text-sm md:text-base">
                                        {benefit.description}
                                    </AccordionContent>
                                </AccordionItem>
                            </BlurFade>

                        ))}
                    </Accordion>

                </div>
            </div>
        </div>
    );
};

export default Benefits;

// const Logo = ({ icon: Logo }) => {
//     return <Logo className="size-10 text-green-500" />;
// };

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
