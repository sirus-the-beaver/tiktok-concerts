'use client'
import React, { Suspense } from 'react';
import UpdateEventForm from '@/components/UpdateEventForm';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * Search component.
 * 
 * @returns {JSX.Element} Search component.
 */
function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const eventId = searchParams.get('id') as string;

  return (
    <div className='m-4'>
      <UpdateEventForm eventId={eventId}/>
    </div>
  )
}

/**
 * Update page.
 * 
 * @returns {JSX.Element} Update page.
 */
export default function Update() {
    return (
      <Suspense>
        <Search />
      </Suspense>
    );
  }