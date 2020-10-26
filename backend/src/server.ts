import express = require("express");

import cors = require("cors");

import mongoose = require("mongoose");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);
