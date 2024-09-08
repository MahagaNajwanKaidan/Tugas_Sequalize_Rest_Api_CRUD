import express from "express";
import Booking from "./models/BookingModel.js";
import Room from "./models/RoomModel.js";
import User from "./models/UserModel.js";
import cors from "cors";
import db from "./utils/connection.js"; // Import konfigurasi database
import user from "./routes/UserRoutes.js"; // Import user routes
import room from "./routes/RoomRoutes.js"; // Import room routes
import booking from "./routes/BookingRoutes.js"; // Import booking routes
const port = process.env.PORT;
const app = express();

await db.sync();
// Routes
app.use(user); // Menghubungkan user routes ke endpoint "/api/users"
app.use(room); // Menghubungkan room routes ke endpoint "/api/rooms"
app.use(booking); // Menghubungkan booking routes ke endpoint "/api/bookings"

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
