'use client'
import React, { Suspense } from 'react';
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
      <Suspense>
        <div className='m-4'>
          <UpdateEventForm eventId={eventId}/>
        </div>
      </Suspense>
    );
  }