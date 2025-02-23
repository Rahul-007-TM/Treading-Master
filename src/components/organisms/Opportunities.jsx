import React from "react";
import SectionHeading from "../atoms/SectionHeading";
import { BorderBeam } from "../atoms/BorderBeam";

const Opportunities = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16 relative shadow rounded-3xl border border-neutral-200">
                <SectionHeading title="Unlock Market Opportunities with Trading Masters" />
                <div className="flex w-full">
                    <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-center">
                        Get expert Stock Market research and insights to make
                        smarter investment decisions. Reliable, data-driven
                        strategies to help you succeed.
                    </p>
                </div>
                <BorderBeam duration={20} size={100} />
            </div>
        </div>
    );
};

export default Opportunities;
