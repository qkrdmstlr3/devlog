import { gql } from '@apollo/client';

export default gql`
  query getPost($postId: Int!) {
    getPost(input: { id: $postId }) {
      id
      title
      content
      createdAt
    }
  }
`;
