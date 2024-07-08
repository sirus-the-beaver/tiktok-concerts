import React from 'react';
import EventCard from "@/components/EventCard";
import EventForm from "@/components/EventForm";

/**
 * Artists page.
 * 
 * @returns {JSX.Element} Events page.
 */
export default async function Artists() {
    return (
        <div className='flex-row'>
            <div className='m-4'>
                <EventForm />
            </div>
            <EventCard />
        </div>
    );
  }