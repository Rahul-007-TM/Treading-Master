import Image from "next/image"

const About = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center md:h-full md:min-h-[720px] md:max-h-[800px]">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 py-8 md:py-12 lg:py-16">
                <div className="flex w-full">
                    <h2 className="flex text-3xl lg:text-4xl items-center justify-center font-bold w-full">
                        About our company
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    <div className="flex w-full items-center justify-center">
                        <div className="flex w-full relative aspect-square max-w-lg">
                            <Image
                                src="/assets/banner-img/about-img.webp"
                                alt="About Image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <div className="flex flex-col w-full gap-8 max-w-lg">
                            <p className="text-sm md:text-base">
                                TradingMaster is a premier stock research and trading education firm in India, operating under the trusted domain name “tradingmaster.com”. We specialize in delivering cutting-edge research and expert guidance to empower our clients with the knowledge to make confident trading decisions.
                            </p>
                            <p className="text-sm md:text-base">
                                As one of the select firms in India focusing on Intraday and Options Trading strategies, we pride ourselves on offering high-quality analysis and insights. Our mission is to enhance our clients’ trading experiences by providing them with the tools and strategies needed to succeed in the stock market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
