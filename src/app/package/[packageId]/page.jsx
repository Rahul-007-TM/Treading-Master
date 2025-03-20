import NotFound from "@/app/not-found";
import SectionHeading from "@/components/atoms/SectionHeading";
import LeadForm from "@/components/molecules/LeadForm";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { Calendar1 } from "lucide-react";
import { IndianRupeeIcon } from "lucide-react";
import React from "react";

const page = async ({ params }) => {
    const slug = (await params).packageId;

    const tradePlan = Packages.filter((plan) => plan.link === slug)[0];

    return (
        <>
            {tradePlan ? (
                <div className="flex w-full h-auto md:items-center md:justify-center ">
                    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                        <SectionHeading title={tradePlan?.label} />
                        <div
                            className={`grid gap-4 w-full mx-auto ${
                                tradePlan?.data.length === 3
                                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl"
                            }`}
                        >
                            {tradePlan.data.map((plan, i) => (
                                <Card
                                    key={i}
                                    className="justify-between flex flex-col"
                                >
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
                                                        <Check className="size-4" />
                                                        {/* &nbsp; Service: */}
                                                    </span>
                                                    &nbsp;
                                                    {plan.service}
                                                </div>
                                            ) : null}
                                            {plan.details ? (
                                                <ul className="flex flex-col gap-3 flex-wrap w-full">
                                                    {plan.details.map(
                                                        (detail, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex w-full gap-1 text-sm md:text-base"
                                                            >
                                                                <span className="w-4 pt-1 text-primary">
                                                                    <Check className="size-4" />{" "}
                                                                </span>
                                                                <span>
                                                                    {detail}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : null}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-grow-0">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="w-full">
                                                    Contact Now
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-sm">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Submit Your Details
                                                    </DialogTitle>
                                                </DialogHeader>
                                                <LeadForm />
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                        {/* <div className="flex w-full">
                            <p className="text-sm md:text-base md:text-center w-full">
                                Get premium research alert in the best stock
                                Live Market Customer Support is available global
                                Market & economy market update accuracy upto 85%
                                - 95% Expairy Special Stratefy BTST / STBT
                                Trades
                            </p>
                        </div> */}
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
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
                service: "Get 1 Research Alert Per Day",
                details: [
                    "Each alert is detailed with entry levels, target prices, ongoing monitoring, and stop-loss instructions.",
                    "Real-time market customer support and continuous follow-up on trade alerts",
                    "Receive exclusive research alerts on top-performing stocks.",
                    "Global market & Economy Trend data update",
                    "Accuracy upto 85%",
                ],
            },
            {
                label: "Yearly Plan",
                price: "1,35,000",
                validity: "1 Year",
                service: "Get 1 Research Alert Per Day",
                details: [
                    "Each alert is detailed with entry levels, target prices, ongoing monitoring, and stop-loss instructions.",
                    "Real-time market customer support and continuous follow-up on trade alerts",
                    "Receive exclusive research alerts on top-performing stocks.",
                    "Global market & Economy Trend data update",
                    "Accuracy upto 85%",
                ],
            },
        ],
    },
    {
        label: "Basic Index Option Packages",
        link: "basic-index-option",
        data: [
            {
                label: "Starter Plan",
                price: "25,000",
                validity: "1 Month Validity",
                details: [
                    "1-2 Intraday tips with proper target & stop loss",
                    "Real-time market customer support and continuous follow-up on trade alerts",
                    "Receive one daily research alert for Banknifty/Niftybank",
                    "Global market & economy trend data update",
                    "Get real-time trading calls and market updates through our WhatsApp broadcast service",
                    "Trending stocks, RBI Announcement, IIP & CPI updates",
                ],
            },
            {
                label: "Pro Plan",
                price: "71,250",
                validity: "3 Month Validity",
                details: [
                    "2-3 Intraday tips with proper target & stop loss",
                    "Real-time market customer support and continuous follow-up on trade alerts",
                    "Receive one to two daily research alert for Banknifty/Niftybank",
                    "Global market & economy trend data update",
                    "Get real-time trading calls and market updates through our WhatsApp broadcast service",
                    "Trending stocks, RBI Announcement, IIP & CPI updates",
                ],
            },
            {
                label: "Master Plan",
                price: "1,42,500",
                validity: "6 Month Validity",
                details: [
                    "4-5 Intraday tips with proper target & stop loss",
                    "Real-time market customer support and continuous follow-up on trade alerts",
                    "Receive two to three daily research alert for Banknifty/Niftybank",
                    "Global market & economy trend data update",
                    "Get real-time trading calls and market updates through our WhatsApp broadcast service",
                    "Trending stocks, RBI Announcement, IIP & CPI updates",
                ],
            },
        ],
    },
    {
        label: "Premium Index Option Packages",
        link: "premium-index-option",
        data: [
            {
                label: "Starter Plan",
                price: "52,000",
                validity: "1 Month Validity",
                details: [
                    "Receive one daily research alert for Banknifty/Nifty bank options",
                    "Receive weekly 2-3 research alerts on Fin-Nifty & Sensex",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Proper live market executive support with online support via WhatsApp and calls",
                    "Accuracy up to 85%",
                ],
            },
            {
                label: "Pro Plan",
                price: "1,48,200",
                validity: "3 Month Validity",
                details: [
                    "Receive one to two daily research alert for Banknifty/Nifty bank options",
                    "Receive weekly 2-3 research alerts on Fin-Nifty & Sensex",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Proper live market executive support with online support via WhatsApp and calls",
                    "Accuracy up to 85%",
                ],
            },
            {
                label: "Master Plan",
                price: "2,96,400",
                validity: "6 Month Validity",
                details: [
                    "Receive two to three daily research alert for Banknifty/Nifty bank options",
                    "Receive weekly 2-3 research alerts on Fin-Nifty & Sensex",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Proper live market executive support with online support via WhatsApp and calls",
                    "Accuracy up to 85%",
                ],
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
                details: [
                    "Receive two to three research alerts each day via WhatsApp and broadcast",
                    "Receive one to two daily research alerts for Banknifty/Nifty bank options",
                    "Receive weekly one to two research alerts on Finnifty, Mid-cap Nifty & Sensex",
                    "Receive BTST/STBT trade research alerts",
                    "Receive one or two exclusive commodity research alerts every week",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Get expertly researched targets and stop-loss levels with every research alert",
                    "Get proper live market executive support",
                    "Global market & economy trend data update",
                    "Trending stocks, RBI announcement, IIP & CPI updates",
                    "Accuracy up to 85%",
                ],
            },
            {
                label: "Pro Plan",
                price: "3,41,750",
                validity: "3 Month Validity",
                details: [
                    "Receive three to four research alerts each day via WhatsApp and broadcast",
                    "Receive three to four daily research alerts for Banknifty/Nifty bank options",
                    "Receive weekly three to four research alerts on Finnifty, Mid-cap Nifty & Sensex",
                    "Receive BTST/STBT trade research alerts",
                    "Receive three or four exclusive commodity research alerts every week",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Get expertly researched targets and stop-loss levels with every research alert",
                    "Get proper live market executive support",
                    "Global market & economy trend data update",
                    "Trending stocks, RBI announcement, IIP & CPI updates",
                    "Accuracy up to 85%",
                ],
            },
            {
                label: "Master Plan",
                price: "6,83,500",
                validity: "6 Month Validity",
                details: [
                    "Receive four to five research alerts each day via WhatsApp and broadcast",
                    "Receive four to five daily research alerts for Banknifty/Nifty bank options",
                    "Receive weekly four to five research alerts on Finnifty, Mid-cap Nifty & Sensex",
                    "Receive BTST/STBT trade research alerts",
                    "Receive four or five exclusive commodity research alerts every week",
                    "Receive expiry special research alerts on all weekly expiries",
                    "Get expertly researched targets and stop-loss levels with every research alert",
                    "Get proper live market executive support",
                    "Global market & economy trend data update",
                    "Trending stocks, RBI announcement, IIP & CPI updates",
                    "Accuracy up to 85%",
                ],
            },
        ],
    },
];
