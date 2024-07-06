'use client';
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
        <section>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4'>About TikTok Concerts</h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>TikTok Concerts was conceived during the TechJam hackathon, aiming to revolutionize the live streaming concert experience on TikTok Live. Our mission is to bridge the gap between artists and their audiences, making live performances more interactive and accessible.</p>
        </section>
    
        <section>
          <h2 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-4'>Key Features:</h2>
          <ul>
            <li className='m-4 text-sm sm:text-base md:text-lg lg:text-xl'><strong>Event Scheduling:</strong> Artists can plan and promote their live performances with ease.</li>
            <li className='m-4 text-sm sm:text-base md:text-lg lg:text-xl'><strong>Global Events Map:</strong> Fans can explore and locate live events happening globally.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}