'use server';
import Event from "@/models/Event";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./db";

export const createEvents = async (formData: FormData) => {
    await connectToDatabase();

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const date = formData.get('date') as string;
    const location = formData.get('location') as string;
    const latitude = formData.get('latitude');
    const longitude = formData.get('longitude');

    try {
        const newEvent = await Event.create({
            title,
            description,
            date,
            location,
            latitude,
            longitude
        });

        newEvent.save();
        revalidatePath('/events');
        return newEvent.toString();
    } catch (error) {
        console.log(error);
        return{message: 'Failed to create a new event'};
    }
};

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