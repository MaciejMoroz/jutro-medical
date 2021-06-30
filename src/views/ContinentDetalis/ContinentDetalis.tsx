import React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Loader from 'components/Loader/Loader';
import { StyledUl, StyledLi } from 'theme/comon.scss';
import { Paragraph } from 'theme/UI/Text/Text';

interface RouteParams {
  code?: string;
}

interface languages {
  name: string;
}
interface countries {
  name: string;
  languages?: languages[];
}
interface continent {
  name: string;
  countries: countries[];
}
interface IData_COUNTRYS_LIST {
  continent: continent;
}

type ContinentDetalisProps = RouteComponentProps<RouteParams>;

const ContinentDetalis: React.FC<ContinentDetalisProps> = () => {
  const params = useParams<RouteParams>();

  const GET_COUNTRYS_LIST = (code: string | undefined) => {
    return gql`
    {
      continent(code: "${code}") {
        name
          countries{
            name
            languages {
              name
            }     
          }
        }
      }
    `;
  };
  //
  const { loading, error, data } = useQuery<IData_COUNTRYS_LIST | undefined>(
    GET_COUNTRYS_LIST(params.code)
  );
  if (loading) return <Loader />;
  if (error) return <p>Error</p>;
  return (
    <>
      <Paragraph bold>Country list:</Paragraph>
      <StyledUl>
        {data?.continent.countries.map(({ name, languages }) => (
          <StyledLi key={name}>
            <p>
              {name} -{' '}
              {languages?.map((language, index) => {
                if (index === 0) {
                  return language['name'];
                }
              })}
            </p>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
};
export default ContinentDetalis;
