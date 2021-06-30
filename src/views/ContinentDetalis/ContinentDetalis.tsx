import React from 'react'
import { RouteComponentProps, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client'

interface RouteParams {
  code?: string
}

interface ContinentDetalisProps extends RouteComponentProps<RouteParams> {
}

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
}
  const { loading, error, data } = useQuery(GET_COUNTRYS_LIST(params.code));
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      country list: 
      <ul>
        {data.continent.countries.map(({ name, languages } : { name: string, languages: []}) => (
          <li key={name}>
            <p>
              {name} -{" "}
              {languages.map((language, index) => {
                if(index === 0 ) {
                  return language['name']
              }
            })}
            </p>
        </li>
      ))}
    </ul>

    </>
  );
}
export default ContinentDetalis;