import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className="flex w-full bg-primary">
                <div className="flex text-white flex-col w-full max-w-7xl items-center justify-center mx-auto px-4 gap-6  py-8 md:py-12 lg:py-16">
                    <span className="text-4xl font-bold">LOGO</span>
                    <ul className="flex w-fit gap-4">
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
                    <p className="text-center text-sm/6">
                        &copy; 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer

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