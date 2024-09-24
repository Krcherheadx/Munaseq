import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="rtl">
            <body className={rubik.className}>{children}</body>
        </html>
    );
}
