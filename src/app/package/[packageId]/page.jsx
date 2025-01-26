import SectionHeading from "@/components/atoms/SectionHeading";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartAreaIcon } from "lucide-react";
import { Calendar1 } from "lucide-react";
import { IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
    const slug = (await params).packageId;

    const tradePlan = Packages.filter((plan) => plan.link === slug)[0];

    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title={tradePlan.label} />
                <div
                    className={`grid gap-4 w-full mx-auto ${
                        tradePlan.data.length === 3
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl"
                    }`}
                >
                    {tradePlan.data.map((plan, i) => (
                        <Card key={i} className="justify-between flex flex-col">
                            <CardHeader className="flex flex-grow-0">
                                <CardTitle className="text-xl">
                                    {plan.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col w-full flex-grow">
                                <div className="flex text-lg items-center">
                                    Price:&nbsp;
                                    <IndianRupeeIcon className="size-6" />
                                    &nbsp;
                                    <span className="text-3xl font-bold">
                                        {plan.price}
                                    </span>
                                </div>
                                <div className="flex flex-grow  flex-col gap-2 md:gap-4 w-full text-sm md:text-base pt-4 md:pt-6">
                                    <div className="flex flex-wrap w-full">
                                        <span className="text-primary flex items-center font-semibold">
                                            <Calendar1 className="size-4" />
                                            &nbsp; Validity:
                                        </span>
                                        &nbsp;
                                        <span>{plan.validity}</span>
                                    </div>
                                    {plan.service ? (
                                        <div className="flex flex-wrap w-full">
                                            <span className="text-primary flex w-fit items-center font-semibold">
                                                <ChartAreaIcon className="size-4" />
                                                &nbsp; Service:
                                            </span>
                                            &nbsp;
                                            {plan.service}
                                        </div>
                                    ) : null}
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-grow-0">
                                <Button asChild className="w-full">
                                    <Link href={"/contact-us"}>
                                        Contact Now
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="flex w-full">
                    <p className="text-sm md:text-base md:text-center w-full">
                        Get premium research alert in the best stock Live Market
                        Customer Support is available global Market & economy
                        market update accuracy upto 85% - 95% Expairy Special
                        Stratefy BTST / STBT Trades
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;

const Packages = [
    {
        label: "Equity Market Package",
        link: "equity-market-package",
        data: [
            {
                label: "Quarterly Plan",
                price: "48,000",
                validity: "1 Quarter",
                service: "* 1 Research Alert Per Day",
            },
            {
                label: "Yearly Plan",
                price: "1,35,000",
                validity: "1 Year",
            },
        ],
    },
    {
        label: "Index Option Basic Packages",
        link: "index-option-basic",
        data: [
            {
                label: "Starter Plan",
                price: "25,000",
                validity: "1 Month Validity",
                service: "1-2 Per day Trade",
            },
            {
                label: "Pro Plan",
                price: "75,800",
                validity: "3 Month Validity",
                service: "2-3 Per day Trade",
            },
            {
                label: "Master Plan",
                price: "1,50,600",
                validity: "6 Month Validity",
                service: "4-5 Per day Trade",
            },
        ],
    },
    {
        label: "Index Option Premium Packages",
        link: "index-option-premium",
        data: [
            {
                label: "Starter Plan",
                price: "52,000",
                validity: "1 Month Validity",
            },
            {
                label: "Pro Plan",
                price: "2,50,800",
                validity: "3 Month Validity",
            },
            {
                label: "Master Plan",
                price: "5,10,600",
                validity: "6 Month Validity",
            },
        ],
    },
    {
        label: "HNI Index Option Packages",
        link: "hni-index-option",
        data: [
            {
                label: "Starter Plan",
                price: "1,55,000",
                validity: "1 Month Validity",
            },
            {
                label: "Pro Plan",
                price: "3,55,800",
                validity: "3 Month Validity",
            },
            {
                label: "Master Plan",
                price: "6,75,600",
                validity: "6 Month Validity",
            },
        ],
    },
];
