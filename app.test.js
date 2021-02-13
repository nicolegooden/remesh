import "@babel/polyfill";
import request from "supertest";
import app from "./app";

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('GET /api/v1/conversations', () => {
  it('should return a 200 and all of the conversations', async () => {
    const expectedConversations = await database('conversations').select();
    const res = await request(app).get('/api/v1/conversations');
    const conversations = res.body;

    expect(res.status).toBe(200);
    expect(conversations).toEqual(expectedConversations);
  })
})

describe('GET /api/v1/messages/:conversation', () => {
  it('should return a 200 and messages for single conversation', async () => {
    const expectedMessages = await database('messages')
    .where('conversation_id', '1').select();
    const res = await request(app).get('/api/v1/messages/1');
    const result = res.body;

    expect(res.status).toBe(200);
    expect(result).toEqual(expectedMessages);
  })

  it('should return a 404 and the message "No messages found with the conversation id 5"', async () => {
    const response = await request(app).get('/api/v1/messages/5');
    const { error } = response.body;

    expect(response.status).toBe(404);
    expect(error).toEqual('No messages found with the conversation id 5');
  })
})

describe('GET /api/v1/thoughts/:message', () => {
  it('should return a 200 and thoughts for single message', async () => {
    const expectedThoughts = await database('thoughts')
    .where('message_id', '2').select();
    const res = await request(app).get('/api/v1/thoughts/2');
    const result = res.body;

    expect(res.status).toBe(200);
    expect(result).toEqual(expectedThoughts);
  })

  it('should return a 404 and the message "No thoughts found with the message id 4"', async () => {
    const response = await request(app).get('/api/v1/thoughts/4');
    const { error } = response.body;

    expect(response.status).toBe(404);
    expect(error).toEqual('No thoughts found with the message id 4');
  })
})

