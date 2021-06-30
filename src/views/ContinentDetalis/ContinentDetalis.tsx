import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Loader from 'components/Loader/Loader';
import { StyledUl, StyledLi } from 'theme/comon.scss';
import { Paragraph } from 'theme/UI/Text/Text';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const GridCol = styled.div`
  width: auto;
  height: auto;
`;
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

const splitToChunks = ([...array], parts: number) => {
  const result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

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
  // if (data) {
  //   // console.log(data.continent.countries);
  //   splitToChunks(data.continent.countries, 3).map((chunk) => {
  //     return (
  //       <>
  //         <GridCol>
  //           {chunk.map(({ name, languages }) => (
  //             <StyledLi key={name}>
  //               <p>
  //                 {name} - {languages[0]}
  //               </p>
  //             </StyledLi>
  //           ))}
  //         </GridCol>
  //       </>
  //     );
  //   });
  // }
  return (
    <>
      <Paragraph bold>Country list:</Paragraph>
      <GridWrapper>
        {data &&
          splitToChunks(data.continent.countries, 3).map((chunk) => {
            return (
              <GridCol>
                {chunk.map(({ name, languages }) => (
                  <StyledLi key={name}>
                    {name} - {languages[0].name}
                  </StyledLi>
                ))}
              </GridCol>
            );
          })}
      </GridWrapper>
    </>
  );
};
export default ContinentDetalis;
