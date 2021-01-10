import { GraphQLError } from 'graphql';
import { List } from '../../../models/List';

export const createListMutation = async (title: string): Promise<List> => {
  const list = new List();
  list.title = title;
  list.postCount = 0;
  await list.save();

  return list;
};

export const deleteListMutation = async (listId: number): Promise<boolean> => {
  const list = await List.findOne({ where: { id: listId } });
  if (!list) {
    throw new GraphQLError('존재하지 않는 리스트를 삭제하려 하셨습니다');
  }

  await list.remove();
  return true;
};
