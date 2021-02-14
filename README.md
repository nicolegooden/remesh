# Take Home Project - Back-end
---

Check out the corresponding [front-end repository](https://github.com/nicolegooden/take-home-frontend) for project specifications, overview, and more!

**Stack**

* API: Express.js
* Database: PostgreSQL
* Query Builder: Knex
* Environment: Node.js
* Testing: Jest, Supertest

**Install PostgreSQL globally and set up local database:**

* In terminal command line run the following commands:
* PostgreSQL global install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* *Should now be at the PostgreSQL CLI...*
* postgres=# `CREATE DATABASE take_home;`

**Set-Up**

* In your terminal, run `git clone git@github.com:nicolegooden/take-home-backend.git`
* Run `cd take-home-backend`.
* Run `npm install`.

**Initial Migrations and Seeding:**

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



