'use client'
import Head from 'next/head';
import React from 'react';
import UpdateEventForm from '@/components/UpdateEventForm';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * Update page.
 * 
 * @returns {JSX.Element} Update page.
 */
export default function Update() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const eventId = searchParams.get('id') as string;

    return (
      <div>
        <Head>
          <title>Update Event</title>
          <meta name="description" content="Update an event." />
        </Head>
        <main className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold my-4'>Update Event</h1>
          <UpdateEventForm eventId={eventId}/>
        </main>
      </div>
    );
  }