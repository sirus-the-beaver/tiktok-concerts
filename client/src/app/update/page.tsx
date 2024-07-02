'use client'
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
        <main className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
          <UpdateEventForm eventId={eventId}/>
        </main>
      </div>
    );
  }