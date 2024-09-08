import { DataTypes } from 'sequelize';
import db from "../utils/connection.js";
import Room from "./RoomModel.js"


const Booking = db.define("Booking", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkindate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkoutdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},
{
    tableName:"booking",
    freezeTableName: true,
    timestamps: true,
}
);

Booking.belongsTo(Room, {
    foreignKey: 'roomId', 
    onUpdate: 'CASCADE',
    onDelete:'CASCADE',
});

Room.hasMany(Booking, {
   foreignKey: 'roomId',
   onUpdate: 'CASCADE',
   onDelete: 'CASCADE'
})



export default Booking;