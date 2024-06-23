import React, { useState } from 'react';
import axios from 'axios';

interface EventFormProps {
    onSubmit: (event: { title: string; description: string; date: string; location: string; latitude: number; longitude: number }) => void;
}

export default function EventForm( { onSubmit }: EventFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ title, description, date, location, latitude, longitude})
        onSubmit({ title, description, date, location, latitude, longitude });
    };

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
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
                <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} required />
            </div>
            <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} required />
            </div>
            <div>
                <label htmlFor="date" className='block text-sm font-medium text-gray-700'>Date</label>
                <input type="date" id='date' value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} required />
            </div>
            <div>
                <label htmlFor="location" className='block text-sm font-medium text-gray-700'>Location</label>
                <input type="text" id='location' value={location} onChange={(e) => setLocation(e.target.value)} style={inputStyle} required />
            </div>
            <div>
                <label htmlFor="latitude" className='block text-sm font-medium text-gray-700'>Latitude</label>
                <input type="number" id='latitude' value={latitude} onChange={(e) => setLatitude(Number(e.target.value))} style={inputStyle} required />
            </div>
            <div>
                <label htmlFor="longitude" className='block text-sm font-medium text-gray-700'>Longitude</label>
                <input type="number" id='longitude' value={longitude} onChange={(e) => setLongitude(Number(e.target.value))} style={inputStyle} required />
            </div>
            <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Submit</button>
        </form>
    );
};