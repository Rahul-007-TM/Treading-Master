import { Menu } from "lucide-react"
import Link from "next/link"
import Marquee from "../atoms/Marquee"
import { Button } from "../button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../sheet"

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex gap-4 w-full mx-auto max-w-7xl px-4 py-1">
                <div className="flex flex-grow-0">
                    <span className="text-4xl font-bold">LOGO</span>
                </div>
                <div className="flex flex-grow justify-end items-center">
                    <ul className="hidden md:flex w-fit gap-4">
                        {NavItems.map((item, i) => (
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
                    <div className="flex md:hidden w-fit">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Treader Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex w-full flex-1 py-6">
                                    <ul className="w-full flex flex-col gap-6">
                                        {NavItems.map((item, i) => (
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
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-primary">
                <Marquee className="text-secondary py-1 [--duration:120s]">
                    Trading stocks, options, and other financial instruments involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results. Please consider your investment objectives, financial situation, and risk tolerance before trading. Seek advice from a licensed financial advisor if needed. We do not guarantee any profits or provide investment advice. All information on this website is for educational purposes only.
                </Marquee>
            </div>
        </div>
    )
}

export default Navbar

const NavItems = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Package",
        link: "/package"
    },
    {
        label: "Contact Us",
        link: "/contact-us"
    },

]