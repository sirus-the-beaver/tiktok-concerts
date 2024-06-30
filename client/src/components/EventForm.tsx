"use client";
import { createEvent } from "@/lib/action";
import { useRef } from "react";
import React from 'react';

/**
 * Event form component.
 * 
 * @returns The event form component.
 */
export default function EventForm() {
    // Create a reference to the form element
    const ref = useRef<HTMLFormElement>(null);

    const inputStyle = {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '8px',
        display: 'block',
        width: '100%',
        borderRadius: '5px',
    };

    return (
        <div>
            <h2 className='text-2xl font-bold'>Add Event</h2>
            <form className='space-y-4' ref={ref} action={async (FormData) => {
                ref.current?.reset();
                await createEvent(FormData);
            }}>
                <div>
                    <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
                    <input type="text" name="title" id='title' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                    <textarea id='description' name="description" style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="date" className='block text-sm font-medium text-gray-700'>Date</label>
                    <input type="date" name="date" id='date' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="location" className='block text-sm font-medium text-gray-700'>Location</label>
                    <input type="text" name="location" id='location' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="latitude" className='block text-sm font-medium text-gray-700'>Latitude</label>
                    <input type="number" name="latitude" id='latitude' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="longitude" className='block text-sm font-medium text-gray-700'>Longitude</label>
                    <input type="number" name="longitude" id='longitude' style={inputStyle} required />
                </div>
                <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Submit</button>
            </form>
        </div>
    );
};