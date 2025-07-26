import { Poppins } from "next/font/google";
import "./globals.css";
import MaintenanceProvider from "@/components/organisms/MaintenanceProvider";

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

export default function MainLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased h-screen w-screen overflow-hidden font-poppins`}
            >
                <MaintenanceProvider>{children}</MaintenanceProvider>
            </body>
        </html>
    );
}
