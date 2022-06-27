import { Sequelize } from "sequelize";

const db = new Sequelize ('uas_pweb' ,'root' , '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;