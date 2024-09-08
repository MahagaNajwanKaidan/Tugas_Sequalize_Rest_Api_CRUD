import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Room = db.define("Room", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    room_number:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        freezeTableName: true,
        timestamps: true,
        tableName:"room",
    }
);


  


export default Room;




