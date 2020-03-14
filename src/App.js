import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
