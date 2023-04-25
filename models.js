/** @format */

const {
	Sequelize,
	DataTypes,
	Model,
} = require("sequelize");
const database = require("./database");
const Todo = Sequelize.define("Todo", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
});
module.exports = { Todo };
