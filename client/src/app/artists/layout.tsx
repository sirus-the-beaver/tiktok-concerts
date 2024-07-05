import React from 'react';
import type { Metadata } from 'next';

// Metadata for the layout.
export const metadata: Metadata = {
  title: 'Artists',
  description: 'Add new events, update existing events, and delete events.',
};

/**
 * ArtistsLayout component
 * 
 * @param children - The content to be rendered within the layout.
 * 
 * @returns The layout component.
 */
export default function ArtistsLayout({
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