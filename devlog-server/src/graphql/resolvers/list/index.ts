import { IResolvers } from 'graphql-tools';
import { getListsQuery } from './query';
import { createListMutation, deleteListMutation } from './mutation';

const resolverMap: IResolvers = {
  Query: {
    getLists: () => getListsQuery(),
  },
  Mutation: {
    createList: (_, { input: { title } }) => createListMutation(title),
    deleteList: (_, { input: { listId } }) => deleteListMutation(listId),
  },
};
export default resolverMap;
