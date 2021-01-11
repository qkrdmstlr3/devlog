// Dependencies
import { useEffect, useState } from 'react';

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
}

interface UseBottomListProps {
  listId: number;
}

function useBottomList({ listId }: UseBottomListProps): UseBottomListType {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { data, loading } = useQuery(GET_POSTS_QUERY, {
    variables: { listId: Number.isNaN(listId) ? 0 : listId },
  });

  useEffect(() => {
    if (!loading && !Number.isNaN(listId)) {
      setPosts(data.getPosts);
    }
  }, [loading, data]);

  return {
    posts,
  };
}

export default useBottomList;
