# SQL - 01

**TODAY**
- Database concepts
- SQL Server setup
- SQL basic statements create/insert/select
<br>

![TypeScript](https://img.shields.io/badge/TypeScript-007acd?logo=typescript&logoColor=blue)


## Database concepts

- Databases are used to store data
- File systems are used to store files

- You **can** store anything in files, but it's not always efficient
    - Files are very slow
    - Files are not well structured for lots of variously formatted data
    - Files are not easy to search
    - Files are not optimized for constant read/write operations
    - Files don't handle concurrent access well
        - Concurrent: many users or processes accessing at once


### Database types: SQL vs NoSQL

- There are two main types of databases
    - SQL (Structured Query Language)
    - NoSQL (Not Only SQL)

- NoSQL databases are non-relational databases
    - NoSQL databases are very varied
    - Data can be stored in **many** different ways
        - Key-value pairs, like a huge JS object or a dictionary (Redis)
        - Documents in a collection, like an `array` of `objects` (MongoDB)

- SQL databases are relational databases
    - Data is stored in structured **tables**, a bit like Excel or Google Sheets
    - The SQL language is used to query the data and define the structure

- A database is a group of tables
    - A table could be for example
        - Products
        - Orders
        - Users
    - Each table has columns and rows
        - Columns are like the keys of an object, or `<th>` table headers
        - A **Users** table might have columns like:
            - ID, Name, Email, Password
        - Rows are like the individual users, or `<tr>` table rows
        - A **Users** table might have rows like:
            - 42, "fahim", "kissafani85@example.org", "iloveyou"
            - 43, "Joel", "joel@example.org", "Pa$$w0rd_12356789"

- SQL is clearly the most common type of database
- SQL itself is a language standard
    - There are many different SQL databases
    - All of them use the SQL language, but they have different features
    - Also they might use small variations of the same language
    - When you know the basics of SQL, you can use any SQL database

### Database diagrams: ERD

- In software architecture
    - Diagrams to visualize the structure of the system are very common
    - There are many types of diagrams

- Flowcharts
    - Flowcharts are used to visualize the flow of a process
    - They can also be used to visualize the flow of data

- System architecture diagrams
    - Here, the database is often a cylinder
    - Diagrams like this are super common https://static.structurizr.com/workspace/76748/diagrams/LiveDeployment.png

- Entity-Relationship Diagram (ERD)
    - This is the one that's used for describing databases
    - It shows the entities (tables) that are stored in the database
    - Relationships are connections between tables


## SQL Server setup

- We will use a RDBMS (Relational Database Management System) called PostgreSQL

- PostgreSQL is
    - Free and open-source
    - Very powerful and feature-rich
    - Extremely popular
    - Often called "Postgres" or "PG" or "psql"

- Let's first install Postgres
    - https://www.postgresql.org/download/linux/ubuntu
    - `sudo apt install postgresql`
    - This installs Postgres and starts it as a background service (daemon)

- The command above might ask you to set a password for the PostgreSQL root user
    - If it does, **don't forget this password**

- You can check the status of the new PostgreSQL background service:
    - `sudo systemctl status postgresql`

- Let's try using it
    - `psql`                    # Connect to Postgres using the current user
    - `sudo psql`               # Connect to Postgres using the root
    - `sudo -u postgres psql`   # Connect to Postgres using the postgres user

> Of the above commands, you can expect the first two to **fail**
> This is for security reasons! 

- **FOR SIMPLICITY**
    - I recommend **not** setting up a password for the postgres user
    - This is **not** secure, but it's easier for learning
    - Instead, let's create a new user with a password
<br/>
    ```sql
    CREATE USER fahim WITH
        SUPERUSER
        CREATEDB
        CREATEROLE
        CONNECTION LIMIT -1;

    ALTER USER fahim WITH PASSWORD 'fahim123!';

    CREATE DATABASE test;
    exit;
    ```

- We have now run our first SQL commands!
- We executed three queries:
    - `CREATE USER`             # Creates a new user
    - `ALTER USER`              # Changes the user's password
    - `CREATE DATABASE`         # Creates a new database

- `exit` is not SQL, it's a psql command
- Terminology
    - psql is the command-line tool
    - Postgres (PostgreSQL) is the database server
    - `test` is the database we created
    - One Postgres server can have many databases

## SQL basic statements create/insert/select

- Let's live code some SQL
    - `psql -U fahim -h localhost -d test`
    - Connects to our postgres server running on localhost
    - Specifically the user `fahim` and the database `test`
    - You need to specify all of these
    - Also, note the lowercase characters in the username!


- Having SQL commands in ALL CAPITALS is a common convention
    - It's not required, but it's common
    - It makes it easier to read
    - It make the SQL stand out from the data
        - `SELECT * FROM pets;`
        - `select * from pets;`

- Queries used:
    - `CREATE TABLE`    # Creates a new table
    - `INSERT INTO`     # Inserts a new row into a table
    - `SELECT`          # Selects all rows from a table

- The term "querying" is often used specifically for `SELECT` statements
    - Even though all SQL statements are queries :)

- The queries in SQL can be complex!
    - https://www.postgresql.org/docs/16/sql-select.html
    - https://www.postgresql.org/docs/16/sql-insert.html
    - https://www.postgresql.org/docs/16/sql-createtable.html



## Wrap-up

- A database is a more efficient and optimized way of storing data than files
- SQL databases (RDBMS) use structured tables and the SQL language
- NoSQL uses various other data storage methods
- ERDs (Entity-Relationship Diagrams) are common to visualize DB structures
- PostgreSQL is a popular and powerful open-source RDBMS
- We practiced SQL for create tables, insert data, and select data


## Self-study prompts

- https://www.youtube.com/watch?v=lAtCySGDD48 