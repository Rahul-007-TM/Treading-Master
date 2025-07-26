import SectionHeading from "@/components/atoms/SectionHeading";
import LeadForm from "@/components/molecules/LeadForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="Contact Us" />
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className="flex w-full">
                        <div className="flex w-full relative aspect-video">
                            <Image
                                src={"/assets/banner-img/Contact us.webp"}
                                alt="contact banner"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex w-full md:justify-end">
                        <Card className="w-full bg-white max-w-sm">
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
    );
};

export default page;
