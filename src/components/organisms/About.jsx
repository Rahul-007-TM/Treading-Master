import Image from "next/image";
import SectionHeading from "../atoms/SectionHeading";
import { BlurFade } from "../ui/blur-fade";

const About = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center md:h-full md:min-h-[720px] md:max-h-[800px] bg-neutral-900 text-white">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    <div className="flex w-full items-center justify-center">
                        <BlurFade delay={0.15} inView className="w-full">
                            <div className="flex w-full relative aspect-square max-w-lg">
                                <Image
                                    src="/assets/banner-img/about-img.webp"
                                    alt="About Image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </BlurFade>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <BlurFade delay={0.15} inView>
                            <div className="flex flex-col w-full gap-8 max-w-lg">
                                <SectionHeading
                                    title="About our company"
                                    className={"justify-start"}
                                    lineClassName={"mx-0"}
                                />
                                <p className="text-sm md:text-base lg:text-lg">
                                    Trading Masters is a leading Research Services
                                    provider specializing in stock market analysis
                                    and investment insights. We deliver expert
                                    market research, data-driven strategies, and
                                    valuable advisory services to help traders and
                                    investors make informed decisions.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
