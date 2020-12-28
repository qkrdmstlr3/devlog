// Dependencies
import React from 'react';

// Components
import PostForm from '@Components/PostForm';

// Types
import { FormValueType } from '../../common/types';

// apollo cache로 가져오면 되지 않을까..?
const dummyPost = {
  id: 1,
  title: 'Webpack에 관하여1',
  createdAt: '2020-12-31',
  content: '# Webpack에 관하여1',
  listName: 'Database',
};

function Update(): React.ReactElement {
  const updatePost = (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType
  ) => {
    event.preventDefault();
    console.log(formValue);
  };

  return (
    <PostForm
      page="글 쓰기"
      listName={dummyPost.listName}
      title={dummyPost.title}
      content={dummyPost.content}
      submitHandler={updatePost}
    />
  );
}

export default Update;
