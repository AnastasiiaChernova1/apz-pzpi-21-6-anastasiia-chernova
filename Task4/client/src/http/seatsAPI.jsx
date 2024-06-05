import { $host } from './index';

export const fetchAllSeats = async () => {
    try {
        const { data } = await $host.get('/api/seats');
        return data;
    } catch (error) {
        console.error("Error fetching all seats:", error);
        throw error;
    }
};

export const fetchSeatById = async (id) => {
    try {
        const { data } = await $host.get(`/api/seats/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching seat with id ${id}:`, error);
        throw error;
    }
};

export const createSeat = async (seatData) => {
    try {
        const { data } = await $host.post('/api/seats', seatData);
        return data;
    } catch (error) {
        console.error("Error creating seat:", error);
        throw error;
    }
};

export const updateSeat = async (id, seatData) => {
    try {
        const { data } = await $host.put(`/api/seats/${id}`, seatData);
        return data;
    } catch (error) {
        console.error(`Error updating seat with id ${id}:`, error);
        throw error;
    }
};

export const deleteSeat = async (id) => {
    try {
        const { data } = await $host.delete(`/api/seats/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting seat with id ${id}:`, error);
        throw error;
    }
};
