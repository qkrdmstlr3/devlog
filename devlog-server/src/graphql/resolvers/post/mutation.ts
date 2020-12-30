import { GraphQLError } from 'graphql';
import { Post } from '../../../models/Post';
import { List } from '../../../models/List';

export const createPostMutation = async (
  title: string,
  content: string,
  listId: number
): Promise<boolean> => {
  const list = await List.findOne({ where: { id: listId } });
  if (!list) {
    throw new GraphQLError('없는 리스트 목록입니다');
  }

  const post = new Post();
  post.title = title;
  post.content = content;
  post.listId = listId;
  await post.save();

  list.postCount = list.postCount + 1;
  await list.save();

  return true;
};

export const deletePostMutation = async (id: number): Promise<boolean> => {
  const post = await Post.findOne({ where: { id } });
  if (!post) {
    throw new GraphQLError('존재하지 않는 게시글을 삭제하려 하셨습니다');
  }

  const list = await List.findOne({ where: { id: post.listId } });
  if (!list) {
    throw new GraphQLError('없는 리스트 목록입니다');
  }
  list.postCount = list?.postCount - 1;
  await list.save();

  await post.remove();
  return true;
};

export const updatePostMutation = async (
  id: number,
  title: string,
  content: string,
  listId: number
): Promise<boolean> => {
  const post = await Post.findOne({ where: { id } });
  if (!post) {
    throw new GraphQLError('없는 게시글입니다');
  }
  post.title = title;
  post.content = content;
  post.listId = listId;
  await post.save();

  return true;
};
