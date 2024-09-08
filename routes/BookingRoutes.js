import express from "express";
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from "../controller/BookingController.js";

const router = express.Router();

router.get("/booking", getAllBookings);
router.get("/booking/find", getBookingById);
router.post("/booking/create", createBooking);
router.put("/booking/update", updateBooking);
router.delete("/booking/delete", deleteBooking);

export default router;
