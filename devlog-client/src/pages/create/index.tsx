// Dependencies
import React from 'react';

// Components
import PostForm from '@Components/PostForm';

// Graphql
import useCreate from '@Hooks/pages/useCreate';

// RenderingData
import string from '@RenderingData/string';

function Create(): React.ReactElement {
  const { handleCreatePost } = useCreate();

  return <PostForm page={string.CREATE} submitHandler={handleCreatePost} />;
}

export default Create;
