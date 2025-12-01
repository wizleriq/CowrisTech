import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["400", "700"], // you can include 300, 400, 700 depending on what you need
});

export const metadata: Metadata = {
  title: "Cowris App",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     {/* <body className={`${inriaSerif.variable} antialiased`} > */}
     <body className={`${inriaSerif.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
