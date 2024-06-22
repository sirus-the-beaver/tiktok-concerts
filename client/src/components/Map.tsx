import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 37.7749,
    lng: -122.4194
};

const sampleEvents = [
    {id: 1, name: 'Concert 1', position: {lat: 37.7749, lng: -122.4194}},
    {id: 2, name: 'Concert 2', position: {lat: 37.7849, lng: -122.4094}},
    {id: 3, name: 'Concert 3', position: {lat: 37.7649, lng: -122.4294}}
];

export default function Map() {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                {sampleEvents.map(event => (
                    <Marker key={event.id} position={event.position} label={event.name} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}
