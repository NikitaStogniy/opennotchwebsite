import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { I18nProvider } from "./i18n/I18nContext";

export const metadata: Metadata = {
  title: "OpenNotch — Transform Your MacBook's Notch",
  description:
    "Free, open-source macOS app that transforms your MacBook's notch into a productivity tool. File drop zone, calculator, quick access and more.",
  keywords: [
    "OpenNotch",
    "MacBook",
    "notch",
    "productivity",
    "macOS",
    "open source",
    "file drop",
    "calculator",
  ],
  authors: [{ name: "Nikita Stogniy" }],
  openGraph: {
    title: "OpenNotch — Transform Your MacBook's Notch",
    description:
      "Free, open-source macOS app that transforms your MacBook's notch into a productivity tool.",
    url: "https://opennotch.com",
    siteName: "OpenNotch",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenNotch — Transform Your MacBook's Notch",
    description:
      "Free, open-source macOS app that transforms your MacBook's notch into a productivity tool.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <I18nProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
