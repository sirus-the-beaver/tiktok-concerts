import React from 'react';
import type { Metadata } from 'next';

// Metadata for the layout.
export const metadata: Metadata = {
  title: 'Events',
  description: 'View upcoming events on TikTok Concerts.',
};

/**
 * EventLayout component
 * 
 * @param children - The content to be rendered within the layout.
 * 
 * @returns The layout component.
 */
export default function EventLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
        {children}
      </section>
    );
  }