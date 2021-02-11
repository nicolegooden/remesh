const messages = require('../../../data/messages.js');

const createMessage = async (knex, message) => {
  await knex('messages').insert({
    text: message.text,
    conversation_id: message.conversation_id,
    message_id: message.message_id
  })
}

exports.seed = async (knex) => {
  try {
    await knex('messages').del();
    const allMessages = messages.map(message => {
      return createMessage(knex, message);
    })
    return Promise.all(allMessages);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}
