// Dependencies
import { useRouter } from 'next/router';

// Graphql
import { useMutation, useQuery } from '@apollo/client';
import GET_POST_QUERY from '@Graphql/post/query/getPost.mutation';
import UPDATE_POST_MUTATION from '@Graphql/post/mutation/updatePost.mutation';

// Types
import { FormValueType } from '../../common/types';

interface PostType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  listId: number;
}

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface UseUpdateType {
  post: PostType;
  loading: boolean;
  updatePostHandler: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType,
    lists: ListType[]
  ) => void;
}

function useUpdate(): UseUpdateType {
  const {
    query: { post },
  } = useRouter();
  const { data, loading } = useQuery(GET_POST_QUERY, {
    variables: { postId: Number(post) },
  });
  const [updatePost] = useMutation(UPDATE_POST_MUTATION, {
    update(cache, { data: { updatePost } }) {
      cache.writeQuery({
        query: GET_POST_QUERY,
        variables: { postId: Number(post) },
        data: updatePost,
      });
    },
  });

  const updatePostHandler = (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType,
    lists: ListType[]
  ) => {
    event.preventDefault();
    if (!formValue.listNameValue) {
      alert('list이름을 설정해주세요');
      return;
    }
    const listId = lists.filter(
      (list) => list.title === formValue.listNameValue
    )[0].id;
    updatePost({
      variables: {
        postId: Number(post),
        title: formValue.titleValue,
        content: formValue.contentValue,
        listId,
      },
    });
  };

  return {
    post: data?.getPost,
    loading,
    updatePostHandler,
  };
}

export default useUpdate;
