import React from 'react';
import Map from '../../components/Map';
import EventCard from "@/components/EventCard";
import EventForm from "@/components/EventForm";
import { getEvents } from "@/lib/action";

/**
 * Events page.
 * 
 * @returns {JSX.Element} Events page.
 */
export default async function Events() {
    // Fetch events
    const events = await getEvents();

    return (
        <div>
            <main className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4'>Events</h1>
            <EventForm />
            <Map events={events}/>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Check out our upcoming events.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <EventCard />
            </div>
            </main>
        </div>
    );
  }