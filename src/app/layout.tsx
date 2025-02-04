import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Search from "./components/search/search";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gaming Haven Z",
  description: "Aerolab Frontend Developer Coding Challenge - Gaming Haven Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center  bg-orange-200  `}
      >
        <Theme>
          <div className="bg-white mt-32">
            <Navigation />
            <Search />
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
