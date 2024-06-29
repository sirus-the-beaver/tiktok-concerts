import mongoose, { Connection } from 'mongoose';

// Cache the connection to avoid connecting to the database multiple times
let cachedConnection: Connection | null = null;

/**
 * Connect to the database.
 * 
 * @returns The connection to the database.
 */
export async function connectToDatabase() {
    if (cachedConnection) {
        return cachedConnection;
    }
    try {
        const cnx = await mongoose.connect(process.env.MONGODB_URI!);

        cachedConnection = cnx.connection;

        return cachedConnection;
    } catch (error) {
        console.log(error);
        throw error;
    };
};