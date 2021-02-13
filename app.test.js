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
    .where('conversation_id', '1')
    .select();

    const res = await request(app).get('/api/v1/messages/1');
    const result = res.body;

    console.log('result', result)

    expect(res.status).toBe(200);
    expect(result).toEqual(expectedMessages);
  })
})

