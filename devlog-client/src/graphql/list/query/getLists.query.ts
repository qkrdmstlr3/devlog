import { gql } from '@apollo/client';

export default gql`
  query getLists {
    getLists {
      id
      title
      postCount
    }
  }
`;
