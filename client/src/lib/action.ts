'use server';
import Event from "@/models/Event";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./db";

/**
 * Create a new event.
 * 
 * @param formData - The form data.
 * 
 * @returns The new event.
 */
export const createEvents = async (formData: FormData) => {
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
export const deleteEvent = async (id: FormData) => {
    const eventId = id.get('id') as string;

    try {
        await Event.deleteOne({ _id: eventId });
        revalidatePath('/events');
        return (`Successfully deleted event with id ${eventId}`);
    } catch (error) {
        return {message: 'Failed to delete event'};
    }
};