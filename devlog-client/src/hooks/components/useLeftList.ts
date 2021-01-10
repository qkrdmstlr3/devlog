// Dependencies
import { useEffect, useState } from 'react';

// Graphql
import { useQuery } from '@apollo/client';
import GET_LISTS_QUERY from '@Graphql/list/query/getLists.query';

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface UseLeftListType {
  /** 서버에서 가져온 리스트 목록 */
  lists: ListType[];
}

function useLeftList(): UseLeftListType {
  const [lists, setLists] = useState<ListType[]>([]);
  const { data, loading } = useQuery(GET_LISTS_QUERY);

  useEffect(() => {
    if (!loading) {
      setLists(data.getLists);
    }
    // useMutation으로 인해서 data가 업데이트 되면 다시 가져옴.
  }, [loading, data]);

  return {
    lists,
  };
}

export default useLeftList;
