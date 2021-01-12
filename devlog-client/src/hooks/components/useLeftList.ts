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
  /** 데이터 로딩 여부 */
  loading: boolean;
}

function useLeftList(): UseLeftListType {
  const { data, loading } = useQuery(GET_LISTS_QUERY);

  return {
    lists: data?.getLists,
    loading,
  };
}

export default useLeftList;
