import type { Metadata } from "next";
import { Poppins, Pacifico, Sriracha, Srisakdi } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pacifico = Pacifico({
  variable: "--font-pacifiko",
  subsets: ["latin"],
  weight: ["400"],
});

const sriracha = Sriracha({
  variable: "--font-second2",
  subsets: ["latin"],
  weight: ["400"],
});

const srisakdi = Srisakdi({
  variable: "--font-second3",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coffee Pub",
  description: "Coffee Pub - En sevdiğiniz kahve mekanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-poppins antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
