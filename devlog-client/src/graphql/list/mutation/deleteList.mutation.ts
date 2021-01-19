import { gql } from '@apollo/client/core';

export default gql`
  mutation deleteList($listId: Int!) {
    deleteList(input: { listId: $listId })
  }
`;
