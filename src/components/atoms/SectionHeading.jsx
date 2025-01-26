import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({ title, className }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h2
                className={cn(
                    "flex text-2xl md:text-3xl lg:text-4xl text-center items-center justify-center font-bold w-full",
                    className
                )}
            >
                {title}
            </h2>
            <span className="w-20 md:w-40 lg:w-60 bg-primary h-2 rounded-full mx-auto"></span>
        </div>
    );
};

export default SectionHeading;
