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
                <div>
                    {events.map((event: any) => (
                        <div key={event._id}>
                            <h3>{event.title as string}</h3>
                            <p>{event.description as string}</p>
                            <p>{event.date as string}</p>
                            <p>{event.address as string}</p>
                            <form action={deleteEvent}>
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='border rounded p-2 bg-red-400'>Delete</button>
                            </form>
                            <form action="/update">
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='border rounded p-2 bg-blue-400'>Update</button>
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