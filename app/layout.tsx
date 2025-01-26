import type { Metadata } from "next";
import { Geist, Geist_Mono,Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400" ,"300" , "500" , "600" , "700"],
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Price Tracker",
  description: "Track Product Prices effortlessly and save money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
        position="top-right"/>
        <main className="max-w-10xl m-auto">
            <Navbar/>
        </main>
        {children}
      </body>
    </html>
  );
}
