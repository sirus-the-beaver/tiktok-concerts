import { connectToDatabase } from "../lib/db";
import Event from "../models/Event";

/**
 * Get all events.
 * 
 * @returns All events.
 */
export const getEvents = async () => {
    // Connect to the database
    await connectToDatabase();

    try {
        const data = await Event.find();
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
        return [];
    }
};