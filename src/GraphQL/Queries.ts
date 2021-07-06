import { gql } from '@apollo/client';

export const GET_CONTINTENT_LIST = gql`
  {
    continents {
      name
      code
    }
  }
`;

export const GET_COUNTRYS_LIST = gql`
  query continent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        languages {
          name
        }
      }
    }
  }
`;
