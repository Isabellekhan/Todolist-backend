/** @format */
/**
 * import sequalize moudle
 */
const sequelize = require("sequelize");
const database = require("./database");
/**
 * Define model
 */

let db = database.initDB();

const Todoos = db.define("todoos", {
  todoos_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Todoos.sync()
  .then((data) => {
    console.log("Table and model synced succsessfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { Todoos };
