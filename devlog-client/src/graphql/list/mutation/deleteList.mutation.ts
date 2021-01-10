import { gql } from '@apollo/client';

export default gql`
  mutation deleteList($listId: Int!) {
    deleteList(input: { listId: $listId })
  }
`;
