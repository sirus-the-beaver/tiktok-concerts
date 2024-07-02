'use client';
import { updateEvent } from '@/lib/action';
import React, { useRef } from 'react';
import { redirect } from 'next/navigation';

/**
 * Update event form component.
 * 
 * @returns The update event form component.
 */
export default function UpdateEventForm({eventId}: {eventId: string}) {
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

    /** 
     * Handle the form submission.
     * 
     * @param FormData - The form data.
     * 
     * @returns The updated event.
    */
    const actionHandler = async (FormData: any) => {
        ref.current?.reset();
        await updateEvent(FormData);

        redirect('/events');
    }

    return (
        <div>
            <h2 className='text-2xl font-bold'>Update Event</h2>
            <form className='space-y-4' ref={ref} action={actionHandler}>
                <input hidden type="text" name="id" id='id' defaultValue={eventId}/>
                <div>
                    <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
                    <input type="text" name="title" id='title' style={inputStyle}/>
                </div>
                <div>
                    <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                    <textarea id='description' name="description" style={inputStyle} />
                </div>
                <div>
                    <label htmlFor="date" className='block text-sm font-medium text-gray-700'>Date</label>
                    <input type="date" name="date" id='date' style={inputStyle} />
                </div>
                <div>
                    <label htmlFor="address" className='block text-sm font-medium text-gray-700'>Address</label>
                    <input type="text" name="address" id='address' style={inputStyle} />
                </div>
                <div>
                    <label htmlFor="city" className='block text-sm font-medium text-gray-700'>City</label>
                    <input type="text" name="city" id='city' style={inputStyle} />
                </div>
                <div>
                    <label htmlFor="state" className='block text-sm font-medium text-gray-700'>State</label>
                    <input type="text" name="state" id='state' style={inputStyle} />
                </div>
                <div>
                    <label htmlFor="zip" className='block text-sm font-medium text-gray-700'>Zip</label>
                    <input type="text" name="zip" id='zip' style={inputStyle} />
                </div>
                <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Update</button>
            </form>
        </div>
    )
}