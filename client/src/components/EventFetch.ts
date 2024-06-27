import { connectToDatabase } from "../lib/db";
import Event from "../models/Event";

export const getEvents = async () => {
    await connectToDatabase();

    try {
        const data = await Event.find();
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
        return [];
    }
};