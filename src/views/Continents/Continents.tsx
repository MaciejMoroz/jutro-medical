import React from 'react'
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { GET_CONTINTENT_LIST } from 'GraphQL/Queries'

const Continents: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CONTINTENT_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return data.continents.map(({ code, name } : {code: string, name: string}) => (
    <div key={code}>
      <a href={`continents/${code}`}>
        {name} - {code}
      </a>
    </div>
  ));
}
export default Continents;