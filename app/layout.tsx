import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const jost = Inter({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Ken Mwangi",
  description:
    "Showcasing expertise in software development, this portfolio highlights a senior developer's skills in building scalable, efficient, and innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(jost.className, `min-h-screen bg-white antialiased`)}
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1218.0"
        data-gr-ext-installed=""
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
