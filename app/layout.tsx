import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Customize your Github profile for FREE",
  description: "Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
          <Navbar />
        </header>
        <main className="w-full min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
