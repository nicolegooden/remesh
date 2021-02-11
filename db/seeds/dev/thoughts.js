const thoughts = require('../../../data/thoughts.js');

const createThought = async (knex, thought) => {
  await knex('thoughts').insert({
    text: thought.text,
    thought_id: thought.thought_id,
    message_id: thought.message_id
  })
}

exports.seed = async (knex) => {
  try {
    await knex('thoughts').del();
    const allThoughts = thoughts.map(thought => {
      return createThought(knex, thought);
    })
    return Promise.all(allThoughts);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}
