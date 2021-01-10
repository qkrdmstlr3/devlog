// Dependencies
import React from 'react';

// Types
import { FormValueType } from '../../common/types';

// Graphql
import { useMutation } from '@apollo/client';
import CREATE_POST_MUTATION from '@Graphql/post/mutation/createPost.mutation';

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
  const [createPost] = useMutation(CREATE_POST_MUTATION);
  const handleCreatePost = (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType,
    lists: ListType[]
  ) => {
    event.preventDefault();
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
