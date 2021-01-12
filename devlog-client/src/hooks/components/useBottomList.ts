// Graphql
import { useQuery } from '@apollo/client';
import GET_POSTS_QUERY from '@Graphql/post/query/getPosts.mutation';

interface PostType {
  id: number;
  title: string;
}

interface UseBottomListType {
  /** 선택한 리스트에 속한 포스트들 */
  posts: PostType[];
  /** 데이터 로딩 여부 */
  loading: boolean;
}

interface UseBottomListProps {
  listId: number;
}

function useBottomList({ listId }: UseBottomListProps): UseBottomListType {
  const { data, loading } = useQuery(GET_POSTS_QUERY, {
    variables: { listId: Number.isNaN(listId) ? 0 : listId },
  });

  return {
    posts: data?.getPosts,
    loading,
  };
}

export default useBottomList;
