import prisma from '../utils/db';
import { EventInput } from '../../types/event';

export const getEvents = async () => {
    return prisma.event.findMany();
};

export const createEvent = async (data: EventInput) => {
    return prisma.event.create({
        data,
    });
};