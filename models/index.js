import db from "../utils/connection.js"
import User from "./UserModel.js"
import Booking from "./BookingModel.js";
import Room from "./RoomModel.js";

// await User.sync();
// await .sync();

await db.sync({force:true});