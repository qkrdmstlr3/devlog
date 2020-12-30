import { List } from '../../../models/List';

export const getListsQuery = async (): Promise<List[]> => {
  const lists = await List.find();

  return lists;
};
