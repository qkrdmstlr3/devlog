import { gql } from '@apollo/client';

export default gql`
  mutation deletePost($postId: Int!) {
    deletePost(input: { id: $postId })
  }
`;
