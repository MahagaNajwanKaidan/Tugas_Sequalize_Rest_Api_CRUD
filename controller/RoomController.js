import Room from "../models/RoomModel.js";

// Get All Rooms
export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Room by ID
export const getRoomById = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });
        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a New Room
export const createRoom = async (req, res) => {
    try {
        const { room_number, type, harga } = req.body;
        const newRoom = await Room.create({ room_number, type, harga });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Room
export const updateRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });
        const { room_number, type, harga } = req.body;
        await room.update({ room_number, type, harga });
        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Room
export const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });
        await room.destroy();
        res.json({ message: "Room deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
