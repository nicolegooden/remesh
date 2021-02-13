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

app.get("/api/v1/messages/:conversation", async (req, res) => {
  try {
    const messages = await database("messages")
    .where("conversation_id", `${req.params.conversation}`)
    .select();
    if (messages.length) {
      res.status(200).json(messages);
    } else {
      express.status(404).json({
        error: `No messages found for the conversation id ${req.params.conversation}.`   
      })
    }
  } catch (e) {
    res.status(500).json({e})   
  }
})

app.get("/api/v1/thoughts/:message", async (req, res) => {
  try {
    const thoughts = await database("thoughts")
    .where("message_id", `${req.params.message}`)
    .select();
    if (thoughts.length) {
      res.status(200).json(thoughts);
    } else {
      express.status(404).json({
        error: `No thoughts found for the message id ${req.params.message}.`   
      })
    }
  } catch (e) {
    res.status(500).json({e})   
  }
})

app.post("/api/v1/conversations", async (req, res) => {
  const conversation_id = Date.now();
  const { title } = req.body;
  const conversation = {
    title: title, 
    conversation_id: conversation_id
  }

  if (!title || typeof title !== 'string') {
    return res.status(422)
    .json({error: `Expected format: { title: <String> }. You're missing a title!`})
  }

  try {
    await database('conversations').insert(conversation)
    return res.status(201).json(conversation)
  } catch (e) {
    console.log(e)
  }
})

app.post("/api/v1/messages/:conversation", async (req, res) => {
  const message_id = Date.now();
  const { text } = req.body;
  const { conversation } = req.params;
  const message = {
    text: text, 
    conversation_id: conversation,
    message_id: message_id
  }

  if (!text || typeof text !== 'string') {
    return res.status(422)
    .json({error: `Expected format: { text: <String> }. You're missing text!`})
  }

  try {
    await database('messages').insert(message);
    return res.status(201).json(message);
  } catch (e) {
    console.log(e)
  }
})

app.post("/api/v1/thoughts/:message", async (req, res) => {
  const thought_id = Date.now();
  const { text } = req.body;
  const { message } = req.params;
  const thought = {
    text: text, 
    message_id: message,
    thought_id: thought_id
  }

  if (!text || typeof text !== 'string') {
    return res.status(422)
    .json({error: `Expected format: { text: <String> }. You're missing text!`})
  }

  try {
    await database('thoughts').insert(thought);
    return res.status(201).json(thought);
  } catch (e) {
    console.log(e)
  }
})

module.exports = app;