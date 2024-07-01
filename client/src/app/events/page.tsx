import Head from 'next/head';
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
            <Head>
            <title>Events</title>
            <meta name="description" content="Check out our upcoming events." />
            </Head>
            <main className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold my-4'>Events</h1>
            <EventForm />
            <Map events={events}/>
            <p className='text-lg'>Check out our upcoming events.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <EventCard />
            </div>
            </main>
        </div>
    );
  }