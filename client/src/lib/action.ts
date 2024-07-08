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
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const zip = formData.get('zip') as string;

    try {
        // Create a new event
        const newEvent = await Event.create({
            title,
            description,
            date,
            address,
            city,
            state,
            zip
        });

        newEvent.save();

        // Update the events page with the new event
        revalidatePath('/artists');
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
    await connectToDatabase();
    const eventId = id.get('id') as string;

    try {
        await Event.deleteOne({ _id: eventId });
        revalidatePath('/artists');
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
    await connectToDatabase();
    const eventId = formData.get('id');
    const event = await Event.findOne({ _id: eventId });
    const formerTitle = event?.title;
    const formerDescription = event?.description;
    const formerDate = event?.date;
    const formerAddress = event?.address;
    const formerCity = event?.city;
    const formerState = event?.state;
    const formerZip = event?.zip;

    try {
        await Event.updateOne({ _id: eventId },
            {
                title: formData.get('title') === '' ? formerTitle : formData.get('title'),
                description: formData.get('description') === '' ? formerDescription : formData.get('description'),
                date: formData.get('date') === '' ? formerDate : formData.get('date'),
                address: formData.get('address') === '' ? formerAddress : formData.get('address'),
                city: formData.get('city') === '' ? formerCity : formData.get('city'),
                state: formData.get('state') === '' ? formerState : formData.get('state'),
                zip: formData.get('zip') === '' ? formerZip : formData.get('zip')
            }
        );
        revalidatePath('/artists');
        return (`Successfully updated event with id ${eventId}`);
    } catch (error) {
        return {message: 'Failed to update event'};
    }
};