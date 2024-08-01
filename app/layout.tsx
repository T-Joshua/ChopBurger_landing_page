import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Navigation/Responsive";
import Footer from "./components/Footer/Footer";

const barlow_Condensed = Barlow_Condensed({ 
  weight:['300','400','500','600','700','800'],
  subsets: ["latin"], });

export const metadata: Metadata = {
  title: "ChopBurger | A Healthy Food",
  description: "This is a e-commerce web app that allow you get your favourite burger seamlessly",
  authors: [{name:'Taiwo Joshua Oluwasegun',url:'obosh-portfolio.surge.sh'}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <Responsive/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
