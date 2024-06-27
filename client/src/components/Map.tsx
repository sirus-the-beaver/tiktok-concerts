"use client";
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Event } from '@/types/event';

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 0,
    lng: 0
};

interface MapProps {
    events: Event[];
}

export default function Map({ events }: MapProps) {
    const mapCenter = events.length ? { lat: events[0].latitude, lng: events[0].longitude } : center;
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={12}>
                {events.map(event => (
                    <Marker key={event._id} position={{ lat: event.latitude, lng: event.longitude }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}