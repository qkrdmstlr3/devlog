import { gql } from '@apollo/client';

export default gql`
  mutation updatePost(
    $postId: Int!
    $title: String!
    $content: String!
    $listId: Int!
  ) {
    updatePost(
      input: { id: $postId, title: $title, content: $content, listId: $listId }
    ) {
      id
      title
      content
      createdAt
    }
  }
`;
