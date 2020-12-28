// Dependencies
import React from 'react';

// Components
import PostForm from '@Components/PostForm';

// Types
import { FormValueType } from '../../common/types';

function Create(): React.ReactElement {
  const createPost = (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType
  ) => {
    event.preventDefault();
    console.log(formValue);
  };

  return <PostForm page="글 쓰기" submitHandler={createPost} />;
}

export default Create;
