import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { connectToDatabase } from "@/lib/db";
import React from "react";

// Load the Inter font with the Latin subset.
const inter = Inter({ subsets: ["latin"] });

// Metadata for the layout.
export const metadata: Metadata = {
  title: "TikTok Concerts",
  description: "Watch your favorite artists perform live on TikTok."
};

/**
 * Root layout component.
 * 
 * @param children - The content to be rendered within the layout.
 * 
 * @returns The layout component.
 */
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
            <li><a href="/events">Events</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
