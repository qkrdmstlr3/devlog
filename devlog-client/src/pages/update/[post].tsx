// Dependencies
import React from 'react';

// Components
import PostForm from '@Components/PostForm';

// RenderingData
import string from '@RenderingData/string';

// Hooks
import useUpdate from '@Hooks/pages/useUpdate';

function Update(): React.ReactElement {
  const { post, loading, updatePostHandler } = useUpdate();

  if (loading) return <></>;
  return (
    <PostForm
      page={string.MODIFY}
      title={post.title}
      content={post.content}
      submitHandler={updatePostHandler}
    />
  );
}

export default Update;
