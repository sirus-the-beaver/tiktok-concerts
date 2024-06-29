import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { connectToDatabase } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTok Concerts",
  description: "Watch your favorite artists perform live on TikTok."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToDatabase();
  return (
    <html lang="en">
    <body className={inter.className}>
        <nav className="bg-blue-800 p-4">
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
