import React from 'react';
import Theme from 'theme/Theme';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from 'theme/GlobalStyle';


const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>

      </ThemeProvider>
    </>
  );
};

export default App;
