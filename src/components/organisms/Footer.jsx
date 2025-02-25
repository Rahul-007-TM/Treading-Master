import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="flex w-full bg-neutral-900">
                <div className="flex text-white flex-col w-full max-w-7xl items-center justify-center mx-auto px-4 gap-6 lg:gap-8 xl:gap-10 py-8 md:py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-6 max-w-7xl mx-auto">
                        <div className="flex w-full md:col-span-2">
                            <Link
                                href={"/"}
                                className="flex w-full aspect-square h-20 md:h-40 relative"
                            >
                                <Image
                                    src={"/assets/logo/TM-logo.avif"}
                                    alt="The Trading Masters Logo"
                                    fill
                                    className="object-contain object-left invert"
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <span className="text-lg text-primary">
                                Our Packages
                            </span>
                            <ul className="flex flex-col w-fit gap-1">
                                {NavItems[0].data.map((item, i) => (
                                    <li key={i} className="w-fit">
                                        <Link
                                            href={item.link}
                                            variant="ghost"
                                            className="px-4 py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <span className="text-lg text-primary">
                                Quick Links
                            </span>
                            <ul className="flex flex-col w-fit gap-1">
                                {NavItems[1].data.map((item, i) => (
                                    <li key={i} className="w-fit">
                                        <Link
                                            href={item.link}
                                            variant="ghost"
                                            className="px-4 py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-base md:text-lg lg:text-xl">
                        &copy; {new Date().getFullYear()} The Trading Masters,
                        Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;

const NavItems = [
    {
        label: "Our Package",
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
        label: "Quick Links",
        data: [
            {
                label: "Home",
                link: "/",
            },
            {
                label: "Contact Us",
                link: "/contact-us",
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy",
            },
            {
                label: "Refund & Cancellation",
                link: "/refund-and-cancellation",
            },
        ],
    },
];
