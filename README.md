# Take Home Project - Back-end
---

Check out the corresponding [front-end repository](https://github.com/nicolegooden/take-home-frontend) for project specifications, overview, and more!

**Stack**

* API: Express.js
* Database: PostgreSQL
* Query Builder: Knex
* Environment: Node.js
* Testing: Jest, Supertest

**Install PostgreSQL and Create Database**

* In terminal command line run the following commands:
* PostgreSQL global install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* *Should now be at the PostgreSQL CLI...*
* postgres=# `CREATE DATABASE take_home;`
* To exit the psql CLI, type `\q` then hit `enter`.

**Set-Up**

* In your terminal, run `git clone git@github.com:nicolegooden/take-home-backend.git`
* Run `cd take-home-backend`.
* Run `npm install`.

**Migrations and Seeding**

* Knex handles all migrations and seeding through CLI inputs
* First, run `knex migrate:latest` to build the tables using the migrations data. 
* Next, run `knex seed:run` to trigger all seed files to populate tables with data.
* The database, including its tables and seed data, should be visible in [Postico](https://eggerapps.at/postico/) after connecting to the `take_home` database.

**Final Step:**
* Run `npm start` or `node server.js` to start the server! If it starts successfully, this message will be logged: `Server is running on localhost:3000.`
* Run `npm test` to run the test suite in `app.test.js`. Currently, there are 11 passing happy and sad path tests.

**Endpoints**

All endpoints have a prefix of `localhost:3000`.

* GET conversations: `/api/v1/conversations`
* GET messages per conversation: `/api/v1/messages/:conversation`
* GET thoughts per message: `/api/v1/thoughts/:message`

Users can also POST a new conversation, message, and thought via the endpoints documented above. 

To POST a new conversation, the `request.body` must include a `title` key and a value(string). 

To POST a new message or thought, the `request.body` must include a `text` key and a value(string).

**Wins**

+ Setting up relationships between tables - Prior to this assignment, I had not utilized the `relational` aspect of the PostgreSQL `relational` database. Each message references the `conversation_id` of the conversation it belongs to, and each thought references the `message_id` of the message it belongs to. With Knex, I was able to set the column name in each table, with a reference to a specific column in a different table to set up the correct relationship. When a POST request is made for new thoughts and messages, these relationships persist and can be viewed via Postico. It was quite a challenge to figure out the appropriate syntax, considering how the limited Knex documentation compares to something like SQL. It is a future goal of mine to learn SQL, which doesn't seem drastically different from Knex.

+ Creating POST route handlers - When I have built APIs with Express, I have only created GET endpoints; although I had a conceptual understanding of how to structure of POST route handler, I had never built one myself. I ran into a few issues with making the POST request via Postman, and realized that Postman overrides the headers with their custom headers, so I made the decision to work on building the front-end so I could set my own headers in my request. I now have a better understanding of `request.params`, `request.body`, and `request.headers` from a back-end perspective. 

**Challenges**

+ Determining how to get the current time - At this point, I haven't been able to store the time at which messages and thoughts are sent by users. The value auto-populates to `null` despite using `table.time` in my migrations files. I am planning to do more research on the proper way to accomplish this so the user can view the specific times for messages and thoughts. I am thinking `table.timestamp` could be manipulated with `split()` to isolate the time from the date, and then this information could be seeded in the tables.

+ Environment Setup - Generally, setting up the environment for testing and development posed a challenge, especially as tables depended on others to seed data. I did a ton of Googling based on the error messages I received, which ultimately led to a deeper understanding of how all of the pieces of back-end work together.

**Next Steps**

+ Test environment for database - As of now, when the test suite runs, the development database is used. So, insertions from POST requests in the test suite can be reflected in the UI on the development side. It is best practice to set up an environment specifically for testing so that real data isn't affected, so I plan to create a `seeds/test` directory with mock seed data.

+ DELETE route handler - For the purposes of this application, it might be beneficial for admin of the app to have the ability to delete messages. If users post inappropriate messages/thoughts, admin could make this DELETE request and remove any trace of it from the database. 


