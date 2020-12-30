import { GraphQLError } from 'graphql';
import { List } from '../../../models/List';

export const createListMutation = async (title: string): Promise<boolean> => {
  const list = new List();
  list.title = title;
  list.postCount = 0;
  await list.save();

  return true;
};

export const deleteListMutation = async (listId: number): Promise<boolean> => {
  const [isPost] = await List.find({ where: { id: listId } });
  if (!isPost) {
    throw new GraphQLError('존재하지 않는 리스트를 삭제하려 하셨습니다');
  }

  await isPost.remove();
  return true;
};
