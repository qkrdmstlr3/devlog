// Dependencies
import React from 'react';

// Components
import PostForm from '@Components/PostForm';

// Types
import { FormValueType } from '../../common/types';

// RenderingData
import string from '@RenderingData/string';

function Create(): React.ReactElement {
  const createPost = (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType
  ) => {
    event.preventDefault();
    console.log(formValue);
  };

  return <PostForm page={string.CREATE} submitHandler={createPost} />;
}

export default Create;
