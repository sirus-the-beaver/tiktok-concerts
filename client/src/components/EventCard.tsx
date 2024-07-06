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
                <div className='grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-5'>
                    {events.map((event: any) => (
                        <div key={event._id} className='p-5 border rounded shadow-md'>
                            <h3 className='text-center text-lg md:text-xl lg:text-2xl font-bold'>{event.title as string}</h3>
                            <p className='text-sm md:text-base lg:text-lg'><b>Description: </b>{event.description as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'><b>Date: </b>{event.date as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'><b>Address: </b>{event.address as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.city as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.state as string}</p>
                            <p className='text-sm md:text-base lg:text-lg'>{event.zip as string}</p>
                            <form action={deleteEvent} className='m-4'>
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='hover:bg-gradient-to-r from-splash to-razzmatazz hover:text-black inline-flex justify-center py-2 px-4 sm:px-6 md:px-8 lg:px-10 border border-transparent shadow-sm text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded-md text-white'>Delete</button>
                            </form>
                            <form action="/update" className='m-4'>
                                <input hidden type="text" name="id" defaultValue={event._id.toString()}/>
                                <button className='hover:bg-gradient-to-r from-splash to-razzmatazz hover:text-black inline-flex justify-center py-2 px-4 sm:px-6 md:px-8 lg:px-10 border border-transparent shadow-sm text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded-md text-white'>Update</button>
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