import { NextApiRequest, NextApiResponse } from 'next';
import { getEvents, createEvent } from '../models/event';
import { EventInput } from '../../types/event';

export const handleGetEvents = async (req: NextApiRequest, res: NextApiResponse) => {
    const events = await getEvents();
    res.status(200).json(events);
};

export const handleCreateEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const data: EventInput = req.body;
    const newEvent = await createEvent(data);
    res.status(201).json(newEvent);
};