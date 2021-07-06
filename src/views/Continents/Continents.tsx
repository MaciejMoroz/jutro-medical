import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTINTENT_LIST } from 'GraphQL/Queries';
import Loader from 'components/Loader/Loader';
import { StyledUl, StyledLi } from 'theme/comon.scss';
import { Paragraph } from 'theme/UI/Text/Text';
import { Link } from 'react-router-dom';

interface IContinent {
  name: string;
  code: string;
}
interface IData_CONTINTENT_LIST {
  continents: IContinent[];
}

const Continents: React.FC = () => {
  const { loading, error, data } = useQuery<IData_CONTINTENT_LIST | undefined>(
    GET_CONTINTENT_LIST
  );

  if (loading) return <Loader />;
  if (error) return <p>Error</p>;
  return (
    <>
      <Paragraph bold>Continent list:</Paragraph>
      {data?.continents.map(({ code, name }) => (
        <StyledUl key={code}>
          <StyledLi>
            <Link to={`continents/${code}`}>
              {name} - {code}
            </Link>
          </StyledLi>
        </StyledUl>
      ))}
    </>
  );
};
export default Continents;
