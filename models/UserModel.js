import { DataTypes} from "sequelize";
import db from "../utils/connection.js";
import Booking from "./BookingModel.js";

const User = db.define("User",
    {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName:"user",
    freezeTableName: true,
    timestamps: true,
    
}
);

User.hasMany(Booking, {
    foreignKey: 'userId',   
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE'
  });
  
  Booking.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });






export default User;