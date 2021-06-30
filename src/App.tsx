import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Theme from 'theme/Theme';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from 'theme/GlobalStyle';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import Continents from 'views/Continents/Continents';

const Nav = styled.nav`
  padding: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavElement = styled.li`
  margin: 16px;
`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
});

const App: React.FunctionComponent = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <Router>
            <>
              <Nav>
                <NavList>
                  <NavElement>
                    <Link to="/">Home</Link>
                  </NavElement>
                  <NavElement>
                    <Link to="/continents">continents</Link>
                  </NavElement>
                </NavList>
              </Nav>
              <Switch>
                <Route exact path="/">
                </Route>
                <Route exact path="/continents">
                <Continents />
                </Route>
                <Route exact path="/continents/:code">
                  /continents/:code
                </Route>
              </Switch>
            </>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
