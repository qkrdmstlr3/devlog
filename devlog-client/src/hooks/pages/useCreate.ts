// Dependencies
import React from 'react';

// Types
import { FormValueType } from '../../common/types';

// Graphql
import { useMutation } from '@apollo/client';
import CREATE_POST_MUTATION from '@Graphql/post/mutation/createPost.mutation';
import GET_POSTS_QUERY from '@Graphql/post/query/getPosts.mutation';

interface PostType {
  id: number;
  title: string;
}

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface UseCreateType {
  handleCreatePost: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType,
    lists: ListType[]
  ) => void;
}

function useCreate(): UseCreateType {
  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    update(cache, { data: { createPost } }) {
      const result = cache.readQuery<{ getPosts: PostType[] }>({
        query: GET_POSTS_QUERY,
        variables: { listId: createPost.listId },
      });

      if (result) {
        cache.writeQuery({
          query: GET_POSTS_QUERY,
          variables: { listId: createPost.listId },
          data: { getPosts: [...result.getPosts, createPost] },
        });
      }
    },
  });

  const handleCreatePost = (
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
    createPost({
      variables: {
        title: formValue.titleValue,
        content: formValue.contentValue,
        listId,
      },
    });
  };

  return {
    handleCreatePost,
  };
}

export default useCreate;
