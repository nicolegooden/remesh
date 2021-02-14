# Take Home Project for Junior Software Engineer Position at Remesh
---

**Technologies**

* Database: PostgreSQL
* Query Builder: Knex
* Environment: Node.js
* API: Express.js

**Install PostgreSQL globally and set up local database:**

* In terminal command line run the following commands:
* PostgreSQL global install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* *Should now be at the PostgreSQL CLI...*
* postgres=# `CREATE DATABASE remesh;`

**Set-Up**

* In your terminal, run `git clone git@github.com:nicolegooden/remesh.git`
* `cd` into `remesh`
* Run `npm i` or `npm install`

**Initial Migrations and Seeding:**

* Knex handles all migrations and seeding through CLI inputs
* The following commands will populate the database with my pre-configured tables and data.
* `knex migrate:latest` will build the tables using the migrations data
* `knex seed:run` will run all seed files to populate tables with data

**Final Step:**
* Run `npm start` or `node server.js` to start the server! If it starts successfully, this message will be logged: `Server is running on localhost:3000.`
* Run `npm test` to run the test suite in `app.test.js`.

**Endpoints**

All endpoints have a prefix of `localhost:3000`.

* GET conversations: `/api/v1/conversations`
* GET messages per conversation: `/api/v1/messages/:conversation`
* GET thoughts per message: `/api/v1/thoughts/:message`

User can also POST a new conversation, message, and thought via the endpoints documented above.



