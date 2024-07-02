import React from 'react';
import type { Metadata } from 'next';

// Metadata for the layout.
export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the TikTok Concerts platform.',
};

/**
 * `AboutLayout` is a layout component that wraps the content of the about page.
 * It is used to provide a consistent layout for the about page.
 * 
 * @param children - The content to be rendered within the layout.
 *
 * @returns The layout component.
 */
export default function AboutLayout({
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