import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="flex w-full h-[calc(100%-80px)] md:h-[calc(100%-96px)] overflow-y-auto">
                <div className="flex w-full h-fit flex-col">
                    {children}
                    <Footer />
                </div>
            </main>
            <Toaster richColors />
        </>
    );
};

export default RootLayout;
