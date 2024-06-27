import mongoose, { Connection } from 'mongoose';

let cachedConnection: Connection | null = null;

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