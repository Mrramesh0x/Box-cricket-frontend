import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './styles/Navbar.css';
import './styles/Herosection.css'; 
import './styles/Booking.css'; 
import "./styles/BookingDetail.css"
import "./styles/Bookingsuccess.css"
import "./styles/Howitworks.css"
import "./styles/Price.css"
import "./styles/Faq.css"
import "./styles/Footer.css"
import "./styles/Contact.css"
import Navbar from "./navbar/page.js";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Box cricket"
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
