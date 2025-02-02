import { Menu } from "lucide-react";
import Link from "next/link";
import Marquee from "../atoms/Marquee";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { ChevronDown } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex gap-4 w-full mx-auto max-w-7xl px-4 py-1">
                <div className="flex flex-grow-0">
                    <Link href={"/"}>
                        <span className="text-4xl font-bold">LOGO</span>
                    </Link>
                </div>
                <div className="flex flex-grow justify-end items-center">
                    <ul className="hidden md:flex w-fit items-center gap-4 relative">
                        {NavItems.map((item, i) =>
                            item.data ? (
                                <li
                                    key={i}
                                    className="px-4 py-1.5 bg-white group hover:bg-neutral-900 rounded-md hover:text-white transition-all"
                                >
                                    <span className="flex gap-2 items-center">
                                        {item.label}
                                        <ChevronDown className="size-5 group-hover:rotate-180 transition-all" />
                                    </span>
                                    <ul className="group-hover:visible invisible left-0 group-hover:opacity-100 opacity-0 transition-all absolute z-50 flex flex-col w-56 divide-y bg-white rounded-md top-full shadow-md">
                                        {item.data.map((item, i) => (
                                            <li key={i} className="flex w-full">
                                                <Link
                                                    href={item.link}
                                                    className="px-4 py-2.5 w-full hover:bg-neutral-900 rounded-md text-sm text-neutral-900 hover:text-white transition-all"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={i} className="w-fit">
                                    <Link
                                        href={item.link}
                                        className="px-4 py-1.5 bg-white hover:bg-neutral-900 rounded-md hover:text-white transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                    <div className="flex md:hidden w-fit">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Trader Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex w-full flex-1 py-6">
                                    <ul className="w-full flex flex-col gap-4">
                                        {NavItems.map((item, i) =>
                                            item.data ? (
                                                <Accordion
                                                    key={i}
                                                    type="single"
                                                    collapsible
                                                >
                                                    <AccordionItem
                                                        value="item-1"
                                                        className="border-b-0"
                                                    >
                                                        <AccordionTrigger className="hover:no-underline font-normal">
                                                            {item.label}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <ul className="w-full gap-2 flex flex-col">
                                                                {item.data.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="w-fit flex"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    item.link
                                                                                }
                                                                                className="px-4 py-1.5 text-sm"
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <li key={i} className="w-fit">
                                                    <Link
                                                        href={item.link}
                                                        variant="ghost"
                                                        className="py-2"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-primary">
                <Marquee className="text-secondary py-1 [--duration:120s] text-black">
                    Trading stocks, options, and other financial instruments
                    involves substantial risk and may not be suitable for all
                    investors. Past performance is not indicative of future
                    results. Please consider your investment objectives,
                    financial situation, and risk tolerance before trading. Seek
                    advice from a licensed financial advisor if needed. We do
                    not guarantee any profits or provide investment advice. All
                    information on this website is for educational purposes
                    only.
                </Marquee>
            </div>
        </div>
    );
};

export default Navbar;

const NavItems = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Package",
        link: "/package",
        data: [
            {
                label: "Equity Market Package",
                link: "/package/equity-market-package",
            },
            {
                label: "Basic Index Option",
                link: "/package/basic-index-option",
            },
            {
                label: "Premium Index Option",
                link: "/package/premium-index-option",
            },
            {
                label: "HNI Index Option",
                link: "/package/hni-index-option",
            },
        ],
    },
    {
        label: "Contact Us",
        link: "/contact-us",
    },
];
