import { gql } from '@apollo/client/core';

export default gql`
  query getLists {
    getLists {
      id
      title
      postCount
    }
  }
`;
