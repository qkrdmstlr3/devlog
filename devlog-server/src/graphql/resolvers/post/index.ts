import { IResolvers } from 'graphql-tools';
import { getPostQuery, getPostsQuery } from './query';
import {
  createPostMutation,
  deletePostMutation,
  updatePostMutation,
} from './mutation';

const resolverMap: IResolvers = {
  Query: {
    getPosts: (_, { input: { listId } }) => getPostsQuery(listId),
    getPost: (_, { input: { id } }) => getPostQuery(id),
  },
  Mutation: {
    createPost: (_, { input: { title, content, listId } }) =>
      createPostMutation(title, content, listId),
    deletePost: (_, { input: { id } }) => deletePostMutation(id),
    updatePost: (_, { input: { id, title, content, listId } }) =>
      updatePostMutation(id, title, content, listId),
  },
};

export default resolverMap;
