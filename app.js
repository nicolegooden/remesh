const express = require("express");
const cors = require("cors");
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = "Test Express";
app.use(cors());
app.use(express.json());

app.get("/api/v1/conversations", async (req, res) => {
  try {
    const conversations = await database("conversations").select();
    res.status(200).json(conversations);
  } catch (e) {
    res.status(500).json({e})
  }
})

module.exports = app;