// Dependencies
import { useRef, RefObject } from 'react';
import { useRouter } from 'next/router';

// Graphql
import { useQuery } from '@apollo/client';
import GET_POST_QUERY from '@Graphql/post/query/getPost.mutation';

interface PostType {
  id: number;
  content: string;
  title: string;
  createdAt: string;
}

interface UsePostType {
  contentRef: RefObject<HTMLDivElement>;
  loading: boolean;
  data: {
    getPost: PostType;
  };
}

function usePost(): UsePostType {
  const {
    query: { post },
  } = useRouter();
  const contentRef = useRef<any>();
  const { loading, data } = useQuery(GET_POST_QUERY, {
    variables: { postId: Number(post) },
  });

  return {
    contentRef,
    loading,
    data,
  };
}

export default usePost;
