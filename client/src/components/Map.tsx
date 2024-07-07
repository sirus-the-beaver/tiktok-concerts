'use client'
import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import { Event } from '@/types/event';

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

// Map component props
interface MapProps {
    events: Event[];
}

const nightModeStyles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
];

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
            .then(geocodedEvents => {
                setGeocodedEvents(geocodedEvents);
            })
            .catch(error => console.error(error));
    }, [events]);

    // Load the Google Maps API
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    })
    
    return (
        <div className='w-full h-64 sm:h-96 md:h-128 lg:h-256'>
            {isLoaded && <GoogleMap options={{ styles: nightModeStyles }} mapContainerStyle={mapContainerStyle} center={
                {
                    lat: parseFloat(geocodedEvents[0].latitude) || 0,
                    lng: parseFloat(geocodedEvents[0].longitude) || 0
                }
            } zoom={4} onLoad={geocode}>
                {geocodedEvents.map(event => (
                    <Marker key={event._id} position={{ lat: parseFloat(event.latitude), lng: parseFloat(event.longitude) }} />
                ))}
            </GoogleMap>}
        </div>
    );
}