import { gql } from '@apollo/client/core';

export default gql`
  mutation createList($title: String!) {
    createList(input: { title: $title }) {
      id
      title
      postCount
    }
  }
`;
