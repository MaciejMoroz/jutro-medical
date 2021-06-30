import { gql } from '@apollo/client'

export const GET_CONTINTENT_LIST = gql`
{
  continents{
    name
    code
  }
}
`;
