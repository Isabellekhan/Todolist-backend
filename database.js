/** @format */

const {
	Sequelize,
	DataTypes,
} = require("sequelize");

function initDB() {
	const {
		PG_USER,
		PG_HOST,
		PG_DATABASE,
		PG_PASSWORD,
		PG_PORT,
	} = process.env;

	const sequelize = new Sequelize(
		PG_DATABASE,
		PG_USER,
		PG_PASSWORD,
		{
			host: PG_HOST,
			dialect: "postgres",
		}
	);

	return sequelize;
}

module.exports = { initDB };
