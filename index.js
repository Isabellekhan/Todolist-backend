const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.use(express.static("/Users/isabellekhan/Datainteraction/TodolistUI"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
