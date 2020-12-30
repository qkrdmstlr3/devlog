import { GraphQLError } from 'graphql';
import { Post } from '../../../models/Post';

export const getPostsQuery = async (listId: number): Promise<Post[]> => {
  const posts = await Post.find({ where: { listId } });

  return posts;
};

export const getPostQuery = async (id: number): Promise<Post> => {
  const post = await Post.findOne({ where: { id } });
  if (!post) {
    throw new GraphQLError('존재하지 않는 게시물입니다');
  }

  return post;
};
