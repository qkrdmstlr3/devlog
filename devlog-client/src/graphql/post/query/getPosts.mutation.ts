import { gql } from '@apollo/client';

export default gql`
  query getPosts($listId: Int!) {
    getPosts(input: { listId: $listId }) {
      id
      title
      listId
    }
  }
`;
