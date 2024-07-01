'use server';
import Event from "@/models/Event";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./db";

/**
 * Get all events.
 * 
 * @returns The events.
 */
export async function getEvents() {
    await connectToDatabase();

    try {
        const data = await Event.find();
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
        return [];
    }
}

/**
 * Create a new event.
 * 
 * @param formData - The form data.
 * 
 * @returns The new event.
 */
export async function createEvent(formData: FormData) {
    // Connect to the database
    await connectToDatabase();

    // Get the form data
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const date = formData.get('date') as string;
    const location = formData.get('location') as string;
    const latitude = formData.get('latitude');
    const longitude = formData.get('longitude');

    try {
        // Create a new event
        const newEvent = await Event.create({
            title,
            description,
            date,
            location,
            latitude,
            longitude
        });

        newEvent.save();

        // Update the events page with the new event
        revalidatePath('/events');
        return newEvent.toString();
    } catch (error) {
        console.log(error);
        return{message: 'Failed to create a new event'};
    }
};

/**
 * Delete an event.
 * 
 * @param id - The event id.
 * 
 * @returns The deleted event.
 */
export async function deleteEvent(id: FormData) {
    const eventId = id.get('id') as string;

    try {
        await Event.deleteOne({ _id: eventId });
        revalidatePath('/events');
        return (`Successfully deleted event with id ${eventId}`);
    } catch (error) {
        return {message: 'Failed to delete event'};
    }
};

/**
 * Update an event.
 * 
 * @param formData - The form data.
 * 
 * @returns The updated event.
 */
export async function updateEvent(formData: FormData) {
    const eventId = formData.get('id');
    const event = await Event.findOne({ _id: eventId });
    const formerTitle = event?.title;
    const formerDescription = event?.description;
    const formerDate = event?.date;
    const formerLocation = event?.location;
    const formerLatitude = event?.latitude;
    const formerLongitude = event?.longitude;

    try {
        await Event.updateOne({ _id: eventId },
            {
                title: formData.get('title') === '' ? formerTitle : formData.get('title'),
                description: formData.get('description') === '' ? formerDescription : formData.get('description'),
                date: formData.get('date') === '' ? formerDate : formData.get('date'),
                location: formData.get('location') === '' ? formerLocation : formData.get('location'),
                latitude: formData.get('latitude') === '' ? formerLatitude : formData.get('latitude'),
                longitude: formData.get('longitude') === '' ? formerLongitude : formData.get('longitude')
            }
        );
        revalidatePath('/events');
        return (`Successfully updated event with id ${eventId}`);
    } catch (error) {
        return {message: 'Failed to update event'};
    }
};