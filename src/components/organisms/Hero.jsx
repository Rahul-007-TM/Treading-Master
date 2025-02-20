import ShadowText from "../atoms/ShadowText";
import LeadForm from "../molecules/LeadForm";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

const Hero = () => {
    return (
        <>
            <div className="flex relative w-full h-fit md:h-full md:min-h-[620px] md:max-h-[700px]  lg:min-h-[720px] lg:max-h-[800px] before:flex before:absolute before:md:w-2/5 before:h-80 before:md:h-full before:contain-content before:bg-primary before:md:rounded-l-full before:md:top-0 before:md:right-0 after:flex after:absolute after:h-full after:w-full after:z-10 after:backdrop-blur-sm">
                <div className="flex flex-col w-full gap-6 max-w-7xl mx-auto px-4 py-6 z-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 flex-1 w-full">
                        <div className="flex flex-col gap-6 w-full md:items-center md:justify-center">
                            <h1 className="flex flex-col h-fit w-full justify-center md:justify-start md:items-start font-extrabold text-center">
                                <span className="text-4xl lg:text-5xl">
                                    Master the Art of
                                </span>
                                <span className="text-4xl lg:text-5xl xl:text-7xl">
                                    <ShadowText
                                        className={
                                            "from-[#16a34a] to-neutral-700 font-extrabold"
                                        }
                                    >
                                        {" "}
                                        SMART TRADING
                                    </ShadowText>
                                </span>
                            </h1>
                            <p className="text-sm md:text-base text-center md:text-left">
                                Transform your trading journey with insights,
                                strategies, and tools designed to help you make
                                confident decisions in the stock market. Learn
                                how to trade smarter and maximize your
                                potential.
                            </p>
                            <div className="hidden md:flex w-full">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>Get Live Demo</Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-sm">
                                        <DialogHeader>
                                            <DialogTitle>
                                                Get live Demo
                                            </DialogTitle>
                                            <DialogDescription>
                                                Fill details to get live demo
                                            </DialogDescription>
                                            <LeadForm />
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="flex w-full justify-center md:justify-end md:items-center">
                            <div className="flex flex-col items-center max-w-sm md:max-w-sm justify-center w-full gap-6">
                                <Card className="w-full bg-white">
                                    <CardHeader>
                                        <CardTitle className="text-center text-primary">
                                            Get Live Demo
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <LeadForm />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
