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
        <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
            <h2 className='text-center m-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Add Event</h2>
            <form className='space-y-4' ref={ref} action={async (FormData) => {
                ref.current?.reset();
                await createEvent(FormData);
            }}>
                <div>
                    <label htmlFor="title" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>Title</label>
                    <input type="text" name="title" id='title' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="description" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>Description</label>
                    <textarea id='description' name="description" style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="date" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>Date</label>
                    <input type="date" name="date" id='date' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="address" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>Address</label>
                    <input type="text" name="address" id='address' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="city" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>City</label>
                    <input type="text" name="city" id='city' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="state" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>State</label>
                    <input type="text" name="state" id='state' style={inputStyle} required />
                </div>
                <div>
                    <label htmlFor="zip" className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700'>Zip</label>
                    <input type="text" name="zip" id='zip' style={inputStyle} required />
                </div>
                <button type='submit' className='hover:bg-gradient-to-r from-splash to-razzmatazz hover:text-black inline-flex justify-center py-2 px-4 sm:px-6 md:px-8 lg:px-10 border border-transparent shadow-sm text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded-md text-white'>Submit</button>            
            </form>
        </div>
    );
};