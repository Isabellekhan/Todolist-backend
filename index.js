/** @format */
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const database = require("./database");

const {
	initRoutes,
} = require("./routes");

function main() {
	const app = express();

	app.use(morgan("common"));

	let db = database.initDB();

	//  setting up the middlewares
	app.use(morgan("common"));
	app.use(bodyParser.json());
	app.use(
		bodyParser.urlencoded({
			extended: true,
		})
	);

	app.use(cors());

	const PORT = 3000;

	initRoutes(app, db);

	app.listen(PORT, () => {
		console.log(
			`Server is running on port ${PORT}.`
		);
	});
}

main();
