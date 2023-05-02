/** @format */
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const database = require("./database");
const { initRoutes } = require("./routes");
const todoos = require("./models");

function main() {
  const app = express();
  //let db = database.initDB();

  //  setting up the middlewares
  app.use(cors());
  app.use(morgan("common"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  // the port
  const PORT = 3000;

  //initRoutes(app, db);

  app.get("/", (request, response) => {
    todoos();
    response.json({
      info: "Node.js, Expresss, and Postgres API",
    });
  });

  app.get("/todos", (request, response) => {});

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

main();
