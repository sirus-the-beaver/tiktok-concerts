import type { Metadata } from "next";
import "./globals.css";
import { connectToDatabase } from "@/lib/db";
import React from "react";

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
    <body>
        <nav className="bg-blue-800 p-4">
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
