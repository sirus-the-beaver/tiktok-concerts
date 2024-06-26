"use client";
import React from 'react';

/**
 * Home page component
 * 
 * @returns The home page component.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold my-4">Welcome to TikTok Concerts!</h1>
      <p className="text-lg">Watch live streamed concerts and performances near you.</p>
    </main>
  );
}
