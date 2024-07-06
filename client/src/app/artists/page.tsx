import React from 'react';
import EventCard from "@/components/EventCard";
import EventForm from "@/components/EventForm";
import { getEvents } from "@/lib/action";

/**
 * Artists page.
 * 
 * @returns {JSX.Element} Events page.
 */
export default async function Artists() {
    // Fetch events
    const events = await getEvents();

    return (
        <div className='flex-row'>
            <div className='m-4'>
                <EventForm />
            </div>
            <EventCard />
        </div>
    );
  }