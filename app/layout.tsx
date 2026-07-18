import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Renewal Pressure Washing | Baltimore's #1 Exterior Cleaning",
  description: "Professional pressure washing and exterior cleaning services in Baltimore and surrounding areas. House washing, concrete cleaning, deck cleaning and more.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Renewal",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-17VVN6T5SG" />
      </body>
    </html>
  );
}