import express from "express";
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom } from "../controller/RoomController.js";

const router = express.Router();

router.get("/room", getAllRooms);
router.get("/room/find", getRoomById);
router.post("/room/create", createRoom);
router.put("/room/update", updateRoom);
router.delete("/room/delete", deleteRoom);

export default router;
