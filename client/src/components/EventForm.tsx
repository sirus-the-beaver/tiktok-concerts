import React, { useState } from 'react';
import axios from 'axios';

export default function EventForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('/api/events', {
            title,
            description,
            date,
            location,
            latitude,
            longitude
        });
        setTitle('');
        setDescription('');
        setDate('');
        setLocation('');
        setLatitude(0);
        setLongitude(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location' required />
            <input type="number" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} placeholder='Latitude' required />
            <input type="number" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} placeholder='Longitude' required />
            <button type='submit'>Submit Event</button>
        </form>
    );
};