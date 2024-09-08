import Booking from "../models/BookingModel.js";
import User from "../models/UserModel.js";
import Room from "../models/RoomModel.js";


// Get All Bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                { model: User, attributes: ["name", "email"] },
                { model: Room, attributes: ["room_number", "type", "harga"] }
            ]
        });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Booking by ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["name", "email"] },
                { model: Room, attributes: ["room_number", "type", "harga"] }
            ]
        });
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a New Booking
export const createBooking = async (req, res) => {
    try {
        const { type, checkindate, checkoutdate, total, userId, roomId } = req.body;
        const newBooking = await Booking.create({
            type,
            checkindate,
            checkoutdate,
            total,
            userId,
            roomId,
        });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Booking
export const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        const { type, checkindate, checkoutdate, total, userId, roomId } = req.body;
        await booking.update({
            type,
            checkindate,
            checkoutdate,
            total,
            userId,
            roomId,
        });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        await booking.destroy();
        res.json({ message: "Booking deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
