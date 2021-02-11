# Take Home Project for Junior Software Engineer Position at Remesh

---
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
* Run `npm start` or `node server.js` to start the server!




