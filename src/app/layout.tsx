import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

const morabbaBold = localFont({
  src: "./fonts/Morabba-ExtraBold.ttf",
  variable: "--font-morabba-bold",
  weight: "700",
});
const iranSansRegular = localFont({
  src: "./fonts/IRANSans-Reg.woff",
  variable: "--font-iran-sans-regular",
  weight: "300",
});
const iranSansBold = localFont({
  src: "./fonts/IRANSans-Bold.ttf",
  variable: "--font-iran-sans-bold",
  weight: "700",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${morabbaBold.variable} ${iranSansRegular.variable} ${iranSansBold.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
