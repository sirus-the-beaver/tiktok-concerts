"use client";
import { createEvent } from "@/lib/action";
import React, { useRef } from "react";

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
                    <label htmlFor="address" className='block text-sm font-medium text-gray-700'>Address</label>
                    <input type="text" name="address" id='address' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="city" className='block text-sm font-medium text-gray-700'>City</label>
                    <input type="text" name="city" id='city' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="state" className='block text-sm font-medium text-gray-700'>State</label>
                    <input type="text" name="state" id='state' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="zip" className='block text-sm font-medium text-gray-700'>Zip</label>
                    <input type="text" name="zip" id='zip' style={inputStyle} required />
                </div>
                <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Submit</button>
            </form>
        </div>
    );
};