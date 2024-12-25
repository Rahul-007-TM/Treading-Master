import { Button } from "../button"
import { Card, CardContent, CardHeader, CardTitle } from "../card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../dialog"
import LeadForm from "../molecules/LeadForm"

const Hero = () => {
    return (
        <>
            <div className="flex relative w-full h-fit md:h-full md:min-h-[700px] md:max-h-[800px] items-end md:justify-end after:md:w-2/5 after:h-80 after:md:h-full after:contain-content after:bg-primary after:md:rounded-l-full after:md:top-0 after:md:right-0">
                <div className="flex w-full backdrop-blur-sm absolute top-0 inset-x-0 h-auto md:h-full z-20">
                    <div className="flex flex-col w-full gap-6 max-w-7xl mx-auto px-4 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 flex-1 w-full">
                            <div className="flex flex-col gap-6 w-full md:items-center md:justify-center">
                                <h1 className="flex flex-col h-fit w-full justify-center md:justify-start md:items-start font-extrabold text-center">
                                    <span className="text-4xl md:text-5xl">Master the Art of</span>
                                    <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary">Smart Trading</span>
                                </h1>
                                <p className="text-sm md:text-base text-center md:text-left">
                                    Transform your trading journey with insights, strategies, and tools designed to help you make confident decisions in the stock market. Learn how to trade smarter and maximize your potential.
                                </p>
                                <div className="hidden md:flex w-full">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button>
                                                Get Live Demo
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-sm">
                                            <DialogHeader>
                                                <DialogTitle>Get live Demo</DialogTitle>
                                                <DialogDescription>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </DialogDescription>
                                                <LeadForm />
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                            <div className="flex w-full justify-center md:justify-end md:items-center">
                                <div className="flex flex-col items-center max-w-sm md:max-w-xs justify-center w-full gap-6">
                                    <Card className="w-full bg-white">
                                        <CardHeader>
                                            <CardTitle className="text-center text-primary">Get Live Demo</CardTitle>
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
            </div>
        </>
    )
}

export default Hero
