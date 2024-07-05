import React from 'react';
import type { Metadata } from 'next';

// Metadata for the layout.
export const metadata: Metadata = {
  title: 'Users',
  description: 'View upcoming events on TikTok Concerts.',
};

/**
 * UsersLayout component
 * 
 * @param children - The content to be rendered within the layout.
 *
 * @returns The layout component.
 */
export default function UsersLayout({
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