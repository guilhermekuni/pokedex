import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import LoadingContext from './contexts/loading';

import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoadingContext.Provider value={[loading, setLoading]}>
        <Home />
      </LoadingContext.Provider>
    </ThemeProvider>
  );
};

export default App;
