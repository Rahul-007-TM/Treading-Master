import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Master Stock Trading – Strategies & Tools for Smart Trading",
    description:
        "Unlock expert trading insights, strategies, and tools to make confident stock market decisions. Learn how to trade smarter and maximize your potential with The Trading Masters. ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased h-screen w-screen overflow-hidden font-poppins`}
            >
                <Navbar />
                <main className="flex w-full h-[calc(100%-80px)] md:h-[calc(100%-96px)] overflow-y-auto">
                    <div className="flex w-full h-fit flex-col">
                        {children}
                        <Footer />
                    </div>
                </main>
                <Toaster richColors />
            </body>
        </html>
    );
}
