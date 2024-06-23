import { NextResponse } from 'next/server';
import { Event } from '../../../types/event';

const events: Event[] = [
    {
        id: '1',
        title: 'Event 1',
        description: 'Description 1',
        date: '2021-01-01',
        location: 'New York, NY',
        latitude: 40.712776,
        longitude: -74.005974,
    },
    {
        id: '2',
        title: 'Event 2',
        description: 'Description 2',
        date: '2021-01-02',
        location: 'Los Angeles, CA',
        latitude: 34.052235,
        longitude: -118.243683,
    }
];

export async function GET() {
    return NextResponse.json(events);
}