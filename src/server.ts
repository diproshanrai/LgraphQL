import express from "express";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./config/database";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, async () => {
    console.log(`🚀 Server running at http://localhost:4000/graphql`);
    
    // Sync database
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("✅ Database connected & synchronized!");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  });
}

startServer();
