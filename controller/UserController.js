import User from "../models/UserModel.js";

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a New User
export const createUser = async (req, res) => {
    try {
        const { name, email, phonenumber } = req.body;
        const newUser = await User.create({ name, email, phonenumber });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        const { name, email, phonenumber } = req.body;
        await user.update({ name, email, phonenumber });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        await user.destroy();
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
