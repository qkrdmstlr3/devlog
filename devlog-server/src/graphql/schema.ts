import {
  makeExecutableSchema,
  mergeTypeDefs,
  mergeResolvers,
  loadFilesSync,
} from 'graphql-tools';
import path from 'path';

const types = loadFilesSync(path.join(__dirname, './typeDefs/*.graphql'));
const resolvers = loadFilesSync(
  path.join(__dirname, './resolvers/**/index.ts')
);

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers),
});

export default schema;
