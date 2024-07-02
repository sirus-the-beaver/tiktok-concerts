"use client";
import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Event } from '@/types/event';

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};

// Map component props
interface MapProps {
    events: Event[];
}

/**
 * Map component.
 * 
 * @param {MapProps} props Map component props.
 * @returns {JSX.Element} Map component.
 */
export default function Map({ events }: MapProps) {
    let geocoder: google.maps.Geocoder;
    const [geocodedEvents, setGeocodedEvents] = useState(events);

    /**
     * Geocode the events.
     * 
     * @returns {void}
     * @throws {Error} Geocoding failed for address.
     * @returns {Promise<Event[]>} The geocoded events.
     */
    const geocode = useCallback(() => {
        geocoder = new google.maps.Geocoder();

        // Geocode the events
        const geocodePromises: Promise<Event>[] = events.map(event => new Promise((resolve, reject) => {
            const address = `${event.address}, ${event.city}, ${event.state} ${event.zip}`;
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK' && results !== null) {
                    event.latitude = results[0].geometry.location.lat().toString();
                    event.longitude = results[0].geometry.location.lng().toString();
                    resolve(event);
                } else {
                    reject(new Error(`Geocoding failed for address: ${event.address}`));
                }
            });
        }));
        // Set the geocoded events
        Promise.all(geocodePromises)
            .then(geocodedEvents => setGeocodedEvents(geocodedEvents))
            .catch(error => console.error(error));
    }, [events]);

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} onLoad={geocode}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={
                {
                    lat: parseFloat(geocodedEvents[0].latitude) || 0,
                    lng: parseFloat(geocodedEvents[0].longitude) || 0
                }
            } zoom={12} onLoad={geocode}>
                {geocodedEvents.map(event => (
                    <Marker key={event._id} position={{ lat: parseFloat(event.latitude), lng: parseFloat(event.longitude) }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}