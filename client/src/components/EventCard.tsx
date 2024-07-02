import React from 'react';
import { deleteEvent } from "@/lib/action";
import Event from "@/models/Event";

/**
 * Get all events.
 * 
 * @returns All events.
 */
export default async function GetEvents() {
    try {
        // Get all events
        const events = await Event.find();
        if (events.length === 0) {
            return <h1>No Events</h1>;
        } else {
            return (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {events.map((event: any) => (
                        <div key={event._id} className='p-4 border rounded shadow-md'>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>{event.title as string}</h3>
                            <p className='text-sm md:text-base lg:text-lg'>{event.description as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.date as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.address as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.city as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.state as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.zip as string}</p>
                            <form action={deleteEvent}>
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='w-full border rounded p-2 bg-red-400'>Delete</button>
                            </form>
                            <form action="/update">
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='w-full border rounded p-2 bg-blue-400 mt-2'>Update</button>
                            </form>
                        </div>
                    ))}
                </div>
            );
        }
    } catch (error) {
        console.log(error);
    }
};