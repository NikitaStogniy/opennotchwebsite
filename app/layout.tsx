import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MacBookMockup from "./components/MacBookMockup";
import Screen from "./components/Screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive MacBook | Custom Notch",
  description: "An interactive MacBook website with custom notch interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MacBookMockup>
          <Screen>{children}</Screen>
        </MacBookMockup>
      </body>
    </html>
  );
}
