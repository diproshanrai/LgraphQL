GraphQL
This is a repo i created to learn and work on graphql.

it is new API standard that was invented & open-sourced by FB
enables decalrative data fetching
GraphQl server exposes single endpoint and responds to queries
Increased mobile usage, low-powered devices and sloppy networks were the initial reasons why Facebook developed GraphQL. GraphQL minimizes the amount of data that needs to be transferred over the network and thus majorly improves applications operating under these conditions.

It is expensive industry to fetch the data and give it to frontend to download but it helps in fetching data only that we need and relieve from underfetching and overfetching.

express → Web framework
apollo-server-express → GraphQL server
graphql → GraphQL language
sequelize → ORM for PostgreSQL
pg & pg-hstore → PostgreSQL support
dotenv → For environment variables

📌 Query vs Mutation in GraphQL
GraphQL has two main types of operations:

Query (Read data)
Mutation (Modify data - Create, Update, Delete)

1️⃣ Query (Fetching Data)
Queries retrieve data from the API.
Similar to GET requests in REST APIs.
Does NOT modify data in the database.

2️⃣ Mutation (Modifying Data)
Used to create, update, or delete data.
Similar to POST, PUT, DELETE requests in REST APIs.

GraphQL Purpose Similar to REST
Query Fetch data (Read-only) GET
Mutation Modify data (Create, Update, Delete) POST, PUT, DELETE
