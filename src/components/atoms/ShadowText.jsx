import { cn } from "@/lib/utils";

const ShadowText = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default ShadowText;
