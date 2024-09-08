import express from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/find", getUserById);
router.post("/user/post", createUser);
router.put("/user/update", updateUser);
router.delete("/user/delete", deleteUser);

export default router;
