import React from 'react';
import Map from '../../components/Map';
import EventList from "@/components/EventList";
import { getEvents } from "@/lib/action";

/**
 * Users page.
 * 
 * @returns {JSX.Element} Users page.
 */
export default async function Users() {
    // Fetch events
    const events = await getEvents();

    return (
        <div className='flex-row'>
            <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4'>Upcoming Events</h1>
            <Map events={events}/>
            <EventList />
        </div>
    );
  }