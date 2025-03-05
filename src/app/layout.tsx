import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard | Your App Name",
  description: "Your dashboard description",
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${morabbaBold.variable} ${iranSansRegular.variable} antialiased`}
      >
        <div className="flex flex-row-reverse min-h-screen dark">
          <Sidebar />
          <main className="flex-[8]  min-h-[300px] bg-darkPrimary">
            <div className="bg-darkSecondary min-h-[73px] border-r border-b flex items-center px-7 dark:text-white">
              <div className="flex gap-3 items-center">
                <div className="flex-col">
                  <span className="font-iran-sans-regular text-sm">پلوتو</span>
                </div>
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 px-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
