export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    latitude: number;
    longitude: number;
}

export interface EventInput {
    title: string;
    description: string;
    date: string;
    location: string;
    latitude: number;
    longitude: number;
}