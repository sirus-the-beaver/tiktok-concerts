import type { Metadata } from "next";
import "./globals.css";
import { connectToDatabase } from "@/lib/db";
import React from "react";
import ToggleMenu from "@/components/ToggleMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

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
        <div className="flex flex-col h-screen justify-between">
          <ToggleMenu />

          <main className="mb-auto p-4 h-fit">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>

          <footer className="h-10 text-center">
            <p>
            Disclaimer: This project, TikTok Concerts, is not officially affiliated with, endorsed by, or sponsored by TikTok. All trademarks and copyrights are the property of their respective owners.
            </p>
            <p>&copy; 2024 Sirus Salari. All rights reserved</p>
          </footer>
        </div>
      </body>
      </html>
    );
}
