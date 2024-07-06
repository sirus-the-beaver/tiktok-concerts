import type { Metadata } from "next";
import "./globals.css";
import { connectToDatabase } from "@/lib/db";
import React from "react";
import Link from "next/link";

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
export default async function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    connectToDatabase();
    return (
      <html lang="en">
      <body>
          <nav className="bg-gradient-to-r from-splash to-razzmatazz p-4">
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center gap-20">
              <li><Link href="/" className="font-bold text-black hover:underline">Home</Link></li>
              <li><Link href="/about" className="font-bold text-black hover:underline">About</Link></li>
              <li><Link href="/users" className="font-bold text-black hover:underline">Users</Link></li>
              <li><Link href="/artists" className="font-bold text-black hover:underline">Artists</Link></li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    );
}
