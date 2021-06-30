import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Theme from 'theme/Theme';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from 'theme/GlobalStyle';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Continents from 'views/Continents/Continents';
import ContinentDetalis from 'views/ContinentDetalis/ContinentDetalis';

const Wrapper = styled.div`
  position: relative;
  min-width: 100vh;
  padding: ${({ theme }) => theme.space.base};
`;

const Nav = styled.nav`
  padding: 20px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fw.bold};
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
  cache: new InMemoryCache(),
});

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Router>
            <>
              <Nav>
                <NavList>
                  <NavElement>
                    <Link to="/">Home</Link>
                  </NavElement>
                  <NavElement>
                    <Link to="/continents">Continents</Link>
                  </NavElement>
                </NavList>
              </Nav>

              <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/continents">
                  <Continents />
                </Route>
                <Route
                  exact
                  path="/continents/:code"
                  component={ContinentDetalis}
                />
              </Switch>
            </>
          </Router>
        </ApolloProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
