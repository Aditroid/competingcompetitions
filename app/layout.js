import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Competing Competitions",
  description: "Explore how business strategies, legal actions, and market developments affect consumer choice & freedom.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <Navbar />
        
          {children}
        
        <Footer />
      </body>
    </html>
  );
}
