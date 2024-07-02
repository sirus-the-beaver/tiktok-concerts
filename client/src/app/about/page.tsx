import React from 'react';

/**
 * About page.
 * 
 * @returns {JSX.Element} About page.
 */
export default function About() {
    return (
      <div>
        <main className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4'>About TikTok Concerts</h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Watch your favorite artists perform live on TikTok.</p>
        </main>
      </div>
    );
  }