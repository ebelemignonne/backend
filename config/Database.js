import { Sequelize } from "sequelize";
 
const db = new Sequelize('communauty_elat', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;