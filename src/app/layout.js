import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "RookHouse Chess | Nairobi's Premier Chess Community",
  description: "Play, learn, compete, and connect at RookHouse — Nairobi's home for chess.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        <BackButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
