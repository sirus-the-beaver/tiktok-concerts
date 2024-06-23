"use client";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import axios from 'axios';
import { Event } from '../../types/event';
import EventCard from '../../components/EventCard';
import EventForm from '../../components/EventForm';

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();
    }, []);

    const handleEventSubmit = async (event: { title: string; description: string; date: string; location: string; latitude: number; longitude: number }) => {
        try {
            const response = await axios.post('/api/events', event);
            setEvents([...events, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Head>
            <title>Events</title>
            <meta name="description" content="Check out our upcoming events." />
            </Head>
            <main className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold my-4'>Events</h1>
            <EventForm onSubmit={handleEventSubmit} />
            <p className='text-lg'>Check out our upcoming events.</p>
            <Map events={events} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            </main>
        </div>
    );
  }