import { gql } from '@apollo/client';

export default gql`
  mutation createList($title: String!) {
    createList(input: { title: $title })
  }
`;
