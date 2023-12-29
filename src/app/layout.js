import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "The Streamverse",
  description: "Welcome to the Streamverse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased max-w-screen-xl mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
