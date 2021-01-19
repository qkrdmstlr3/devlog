import { gql } from '@apollo/client/core';

export default gql`
  mutation createPost($title: String!, $content: String!, $listId: Int!) {
    createPost(input: { title: $title, content: $content, listId: $listId }) {
      id
      title
      content
      createdAt
      listId
    }
  }
`;
