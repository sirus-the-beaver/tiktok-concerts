import mongoose, { Document, Model } from 'mongoose';

export interface IEvent {
    title: string;
    description: string;
    date: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface IEventDocument extends IEvent, Document {
    _id: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
};

// Create a new schema for events
const eventSchema = new mongoose.Schema<IEventDocument>(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    { timestamps: true }
);

// Create a new model for events
const Event: Model<IEventDocument> = 
    mongoose.models?.Event || mongoose.model('Event', eventSchema);

export default Event;