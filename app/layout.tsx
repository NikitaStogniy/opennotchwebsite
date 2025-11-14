import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MacBookMockup from "./components/MacBookMockup";
import Screen from "./components/Screen";
import { I18nProvider } from "./i18n/I18nContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenNotch - Transform Your MacBook's Notch",
  description: "Open source productivity tool that transforms your MacBook's notch into a powerful workspace. Drag & drop files, use calculator, and more.",
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
        <I18nProvider>
          <MacBookMockup>
            <Screen>{children}</Screen>
          </MacBookMockup>
        </I18nProvider>
      </body>
    </html>
  );
}
