import mongoose, { Document, Model } from 'mongoose';

export interface IEvent {
    title: string;
    description: string;
    date: string;
    location: string;
    latitude: number;
    longitude: number;
}

export interface IEventDocument extends IEvent, Document {
    _id: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
};

const eventSchema = new mongoose.Schema<IEventDocument>(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
        location: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    { timestamps: true }
);

const Event: Model<IEventDocument> = 
    mongoose.models?.Event || mongoose.model('Event', eventSchema);

export default Event;