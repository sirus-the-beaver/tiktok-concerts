import Head from 'next/head';
import React from 'react';
import Map from '../../components/Map';

export default function Events() {
    return (
        <div>
            <Head>
            <title>Events</title>
            <meta name="description" content="Check out our upcoming events." />
            </Head>
            <main className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold my-4'>Events</h1>
            <p className='text-lg'>Check out our upcoming events.</p>
            <Map />
            <ul className='mt-8 space-y-6'>
                <li>
                <h2 className='text-2xl font-bold'>Event 1</h2>
                <p className='text-lg'>Event 1 description</p>
                </li>
                <li>
                <h2 className='text-2xl font-bold'>Event 2</h2>
                <p className='text-lg'>Event 2 description</p>
                </li>
                <li>
                <h2 className='text-2xl font-bold'>Event 3</h2>
                <p className='text-lg'>Event 3 description</p>
                </li>
            </ul>
            </main>
        </div>
    );
  }