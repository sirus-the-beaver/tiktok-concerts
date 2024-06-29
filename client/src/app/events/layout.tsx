import React from 'react';

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
      <section>
        {children}
      </section>
    );
  }