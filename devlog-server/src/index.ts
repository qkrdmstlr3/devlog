// Dependencies
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

// Middleware
import morgan from 'morgan';
import compression from 'compression';
import hpp from 'hpp';

// etc
import schema from './graphql/schema';

const app = express();
const server = new ApolloServer({
  schema,
  playground: true,
});

server.applyMiddleware({ app, path: '/graphql' });

const prod: boolean = process.env.NODE_ENV === 'production';
const port = prod ? process.env.PORT : 4000;

app.use(morgan('dev'));
app.use(compression());
app.use(hpp());

createConnection().then(() => {
  app.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
});
