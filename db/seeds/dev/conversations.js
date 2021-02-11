const conversations = require('../../../data/conversations.js');

const createConversation = async (knex, conversation) => {
  await knex('conversations').insert({
    title: conversation.title,
    conversation_id: conversation.conversation_id
  })
}

exports.seed = async (knex) => {
  try {
    await knex('conversations').del();
    const allConversations = conversations.map(conversation => {
      return createConversation(knex, conversation);
    })
    return Promise.all(allConversations);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}
