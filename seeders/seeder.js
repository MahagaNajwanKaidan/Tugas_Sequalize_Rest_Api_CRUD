import User from "../models/UserModel.js"
import Room from "../models/RoomModel.js"
import Booking from "../models/BookingModel.js"

const createSeeder = async () => {
    const user = await User.create({
        name: "joni",
        email: "joni.doe@example.com",
        phonenumber: "02191507015",
    });

    const user2 = await User.create({
        name: "kaii",
        email: "kaii.doe@example.com",
        phonenumber: "02191507011",
    });


    const room = await Room.create({
        room_number: "101",
        type: "single",
        harga: "100.000",
    });

    const room2 = await Room.create({
        room_number: "102",
        type: "double",
        harga: "150.000",
    });

    const booking = await Booking.create({
        type: "single",
        checkindate: "2021-3-20",
        checkoutdate: "2021-3-21",
        total: "100.000",
        userId: user.dataValues.id,
        roomId: room.dataValues.id,
    });

    const booking2 = await Booking.create({
        type: "double",
        checkindate: "2021-3-20",
        checkoutdate: "2021-3-21",
        total: "150.00",
        userId: user.dataValues.id,
        roomId: room.dataValues.id,
    });


    const findUserByBooking = await User.findAll({
        attributes: ["name", "email", "phonenumber"],
        include: {
            model: Booking, // Mencari relasi ke Booking
            required: true,
        },
    });

    const findRoomByBooking = await Room.findAll({
        attributes: ["room_number", "type", "harga"],
        include: {
            model: Booking, 
            required: true,
        },
    });

    const findBookingByUser = await Booking.findAll({
        where: {
            userId: user.dataValues.id,
            roomId: room.dataValues.id,
        },
        attributes: ["type", "checkindate", "checkoutdate", "userId", "roomId"],
        include: [
            {
                model: User,
                required: true,
            },
            {
                model: Room,
                required: true,
            },
        ],
    });

    return { findBookingByUser, findUserByBooking, findRoomByBooking };
};

const { findUserByBooking: user, findBookingByUser: booking, findRoomByBooking: room } = await createSeeder();

user.map((a, i) => {
    console.log(a);
});
