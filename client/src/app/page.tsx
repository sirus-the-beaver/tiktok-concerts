"use client";
import React from 'react';

/**
 * Home page component
 * 
 * @returns The home page component.
 */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4">Welcome to TikTok Concerts!</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">Watch live streamed concerts and performances near you.</p>
    </main>
  );
}
