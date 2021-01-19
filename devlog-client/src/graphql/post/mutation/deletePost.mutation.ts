import { gql } from '@apollo/client/core';

export default gql`
  mutation deletePost($postId: Int!) {
    deletePost(input: { id: $postId })
  }
`;
