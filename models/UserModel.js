import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize

const User = db.define('users', {
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    prodi: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
} );

export default User;

(async()=>{
    await db.sync();
})();