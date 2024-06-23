import React from 'react';
import { Event } from '../types/event';

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className='border p-4 rounded'>
            <h2 className='text-xl font-bold'>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
        </div>
    );
}